import React, { useCallback, useEffect, useState } from 'react'
import CreatableSelect, { Props } from 'react-select/async-creatable'
import { ActionMeta, components } from 'react-select'
import { OptionsType } from 'react-select/src/types'
import { JSONSchema7 } from 'json-schema'
import { OptionType, TypeProvider } from './types'
import { enumTypeProvider } from './EnumProvider'
import { numberTypeProvider } from './NumberProvider'
import { stringTypeProvider } from './StringProvider'

function bassOptions(schema: JSONSchema7): OptionType<string>[] {
  if (schema.properties) {
    return Object.entries(schema.properties).map(
      ([key, value]: [string, JSONSchema7]) => ({
        value: key,
        label: value.title ?? ''
      })
    )
  } else return []
}

const globalTypeProviders: TypeProvider[] = [
  enumTypeProvider,
  numberTypeProvider,
  stringTypeProvider
]

function findTypeProvider(
  property: JSONSchema7,
  typeProviders?: TypeProvider[]
): TypeProvider | undefined {
  return [...(typeProviders ?? []), ...globalTypeProviders].find((provider) =>
    provider.matches(property)
  )
}

export type OptionsProvider<T> = {
  [K in keyof Partial<T>]: (inputString: string) => Promise<OptionsType<T[K]>>
}

interface AssociativeSelectProps<T>
  extends Omit<
    Props<OptionType<T>, any>,
    | 'isMulti'
    | 'isClearable'
    | 'value'
    | 'options'
    | 'onChange'
    | 'isValidNewOption'
    | 'onCreateOption'
  > {
  schema: JSONSchema7
  value?: Partial<T>
  onChange?: (value: Partial<T>) => void
  typeProviders?: TypeProvider[]
  optionMapping?: OptionsProvider<T>
}

export function AssociativeSelect<T>({
  schema,
  onChange,
  value,
  typeProviders,
  optionMapping,
  ...props
}: AssociativeSelectProps<T>) {
  const [currentValue, setValue] = useState<OptionsType<OptionType<unknown>>>(
    []
  )
  const [options, setOptions] = useState<OptionsType<OptionType<unknown>>>([])

  useEffect(() => {
    let result: OptionsType<OptionType<unknown>> = []
    Object.entries(value ?? {}).forEach(([k, v]: [string, any]) => {
      if (!schema.properties) return

      const property = schema.properties[k] as JSONSchema7 | undefined
      if (property) {
        const typeProvider = findTypeProvider(property, typeProviders)
        if (typeProvider) {
          const valueOption = typeProvider.fromValue(v, property)
          result = [
            ...result,
            { label: property.title ?? '', value: k },
            ...(valueOption ? [valueOption] : [])
          ]
        }
      }
    })
  }, [value])

  useEffect(() => {
    if (onChange) {
      const result: Partial<T> = {}
      for (let i = 0; i < currentValue.length; i += 2) {
        if (currentValue[i + 1]) {
          result[currentValue[i].value as string] = currentValue[i + 1].value
        }
      }
      onChange(result)
    }
  }, [currentValue])

  useEffect(() => {
    if (!schema.properties) return

    if (currentValue.length % 2 === 1) {
      const last = currentValue[currentValue.length - 1] as OptionType<string>

      const property: JSONSchema7 = schema.properties[last.value] as JSONSchema7

      const typeProvider = findTypeProvider(property, typeProviders)

      if (typeProvider) {
        setOptions(typeProvider.toOptions(property))
      }
    } else {
      setOptions(bassOptions(schema))
    }
  }, [currentValue])

  const isValidNewOption = useCallback<(inputValue: string) => boolean>(
    (inputValue) => {
      if (!schema.properties) return false
      if (currentValue.length % 2 === 0) {
        return false
      }

      const last = currentValue[currentValue.length - 1] as OptionType<string>

      const property: JSONSchema7 = schema.properties[last.value] as JSONSchema7

      const typeProvider = findTypeProvider(property, typeProviders)

      if (typeProvider) {
        return typeProvider.isValidNewOption(property, inputValue)
      }
      return true
    },
    [currentValue]
  )

  return (
    <CreatableSelect
      {...props}
      isMulti
      isClearable
      value={currentValue.map((a, index) => ({ ...a, index }))}
      // options={options}
      loadOptions={(inputValue, callback) => {
        if (
          optionMapping &&
          currentValue.length % 2 === 1 &&
          optionMapping[
            (currentValue[currentValue.length - 1] as OptionType<string>).value
          ]
        ) {
          const promise: Promise<OptionsType<any>> = optionMapping[
            (currentValue[currentValue.length - 1] as OptionType<string>).value
          ](inputValue)

          promise
            .then((v) => {
              setOptions(v)
              return v
            })
            .then((value) => callback(value))
        } else if (!inputValue.length) {
          callback(options)
        } else {
          callback(
            options.filter((v) =>
              v.label.toLowerCase().startsWith(inputValue.toLowerCase())
            )
          )
        }
      }}
      cacheOptions
      defaultOptions={options}
      onChange={(
        value: OptionsType<OptionType<unknown>>,
        action: ActionMeta<any>
      ) => {
        if (
          (action.action === 'remove-value' || action.action === 'pop-value') &&
          action.removedValue.index % 2 !== 0
        ) {
          const index = action.removedValue.index
          setValue([...value.filter((a) => a.index !== index - 1)])
        } else {
          setValue(value)
        }
      }}
      components={{
        MultiValueRemove: (props) => {
          return props.data.index % 2 === 0 ? null : (
            <components.MultiValueRemove {...props} />
          )
        },
        ...props.components
      }}
      styles={{
        ...props.styles,
        multiValue(base, state) {
          const multiValue = props.styles?.multiValue
          let multiValueApplied
          if (multiValue) {
            multiValueApplied = multiValue(base, state)
          } else {
            multiValueApplied = undefined
          }

          const value = state.getValue()
          const last = value[value.length - 1]
          if (state.data.index % 2 !== 0) {
            return {
              ...base,
              ...multiValueApplied,
              borderRadius: multiValueApplied?.borderRadius ?? 0,
              margin: multiValueApplied?.margin ?? 0,
              marginRight: multiValueApplied?.marginRight ?? 5,
              backgroundColor: multiValueApplied?.backgroundColor ?? '#f5f5f5',
              borderStyle: multiValueApplied?.borderStyle ?? 'solid',
              borderWidth: multiValueApplied?.borderWidth ?? 1,
              borderColor: multiValueApplied?.borderColor ?? '#b3b3b3',
              borderLeftWidth: multiValueApplied?.borderLeftWidth ?? 0,
              borderBottomLeftRadius: 0,
              borderTopLeftRadius: 0
            }
          } else {
            return {
              ...base,
              ...multiValueApplied,
              borderRadius: multiValueApplied?.borderRadius ?? 0,
              margin: multiValueApplied?.margin ?? 0,
              marginLeft: multiValueApplied?.marginLeft ?? 5,
              backgroundColor: multiValueApplied?.backgroundColor ?? '#dbdbdb',
              borderStyle: multiValueApplied?.borderStyle ?? 'solid',
              borderWidth: multiValueApplied?.borderWidth ?? 1,
              borderColor: multiValueApplied?.borderColor ?? '#b3b3b3',
              paddingRight: multiValueApplied?.paddingRight ?? 5,
              borderBottomRightRadius: 0,
              borderTopRightRadius: 0,
              ...(last.label === state.data.label
                ? {}
                : {
                    borderRightWidth: multiValueApplied?.borderRightWidth ?? 0
                  })
            }
          }
        }
      }}
      isValidNewOption={isValidNewOption}
      onCreateOption={(inputValue) =>
        setValue([...currentValue, { label: inputValue, value: inputValue }])
      }
      formatCreateLabel={(v) => <div>{v}</div>}
    />
  )
}
