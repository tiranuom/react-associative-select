import React, { useCallback, useEffect, useState } from 'react'
import CreatableSelect, { Props } from 'react-select/creatable'
import { ActionMeta, components } from 'react-select'
import { OptionsType } from 'react-select/src/types'
import { JSONSchema7 } from 'json-schema'
import { OptionType as _OptionType, TypeProvider } from './types'
import { enumTypeProvider } from './EnumProvider'
import { numberTypeProvider } from './NumberProvider'
import { stringTypeProvider } from './StringProvider'
import { booleanTypeProvider } from './BooleanProvider'
import { integerTypeProvider } from './IntegerProvider'

export type OptionType<T> = _OptionType<T>

function baseOptions(schema: JSONSchema7): OptionType<string>[] {
  if (schema.properties) {
    return Object.entries(schema.properties).map(
      ([key, value]: [string, JSONSchema7 | boolean]) => ({
        value: key,
        label: (value as JSONSchema7).title ?? '',
        base: true
      })
    )
  } else return []
}

const globalTypeProviders: TypeProvider[] = [
  enumTypeProvider,
  numberTypeProvider,
  integerTypeProvider,
  stringTypeProvider,
  booleanTypeProvider
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
  [K in keyof Partial<T>]: (
    inputString?: string
  ) => T[K] extends Array<infer E>
    ? Promise<OptionsType<OptionType<E>>>
    : Promise<OptionsType<OptionType<T[K]>>>
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
    setOptions(baseOptions(schema))
  }, [])

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
      const result: any = {}
      for (let i = 0; i < currentValue.length; i += 2) {
        if (currentValue[i + 1]) {
          const key = (currentValue[i].value as string).split(':')[0] as keyof T
          if (
            schema.properties &&
            (schema.properties[key as string] as any)?.type === 'array'
          ) {
            result[key] = result[key] ?? []
            result[key].push(currentValue[i + 1].value as any)
          } else {
            result[key] = currentValue[i + 1].value as any
          }
        }
      }
      onChange(result)
    }
  }, [currentValue])

  useEffect(() => {
    loadOptions(undefined)
  }, [currentValue])

  const isValidNewOption = useCallback<(inputValue: string) => boolean>(
    (inputValue) => {
      if (!schema.properties) return false
      if (currentValue.length % 2 === 0) {
        return false
      }

      const last = currentValue[currentValue.length - 1] as OptionType<string>

      const property: JSONSchema7 = schema.properties[
        last.value.split(':')[0]
      ] as JSONSchema7

      if (property.additionalItems === false) return false

      const typeProvider = findTypeProvider(property, typeProviders)

      if (typeProvider) {
        return typeProvider.isValidNewOption(property, inputValue)
      }
      return true
    },
    [currentValue]
  )

  const loadOptions = useCallback<(inputValue?: string) => void>(
    (inputValue) => {
      setOptions([])
      setValue((currentValue) => {
        setOptions((options) => {
          if (currentValue.length % 2 === 0) {
            return baseOptions(schema)
          } else {
            const key = ((currentValue[currentValue.length - 1] as OptionType<
              keyof T
            >).value as string).split(':')[0] as keyof T

            if (!!optionMapping && optionMapping[key]) {
              ;(optionMapping[key](inputValue) as any).then((a: any) => {
                setValue((currentValue) => {
                  const newKey = ((currentValue[
                    currentValue.length - 1
                  ] as OptionType<keyof T>).value as string).split(
                    ':'
                  )[0] as keyof T
                  if (newKey === key) {
                    setOptions(a)
                  }
                  return currentValue
                })
              })
            } else if (
              schema.properties &&
              !!schema.properties[key as string] &&
              !!(schema.properties[key as string] as JSONSchema7).enum
            ) {
              const _enum =
                (schema.properties[key as string] as JSONSchema7).enum ?? []
              return _enum.map((e) => ({ label: e + '', value: e + '' }))
            }
          }
          return options.filter((a) =>
            a.label.toLowerCase().startsWith(inputValue ?? '')
          )
        })
        return currentValue
      })
    },
    []
  )

  return (
    <CreatableSelect
      {...props}
      isMulti
      isClearable
      value={currentValue.map((a, index) => ({ ...a, index }))}
      options={options as any}
      defaultOptions={options as any}
      onInputChange={loadOptions}
      allowCreateWhileLoading={false}
      onChange={(
        value: OptionsType<OptionType<unknown>>,
        action: ActionMeta<any>
      ) => {
        if (
          (action.action === 'remove-value' || action.action === 'pop-value') &&
          action.removedValue?.index % 2 !== 0
        ) {
          const index = action.removedValue?.index
          setValue([...value.filter((a) => a?.index !== index - 1)])
        } else if (action.action === 'clear') {
          setValue(value)
        } else {
          setValue(
            value.map((a, i) => {
              if (
                i % 2 === 0 &&
                schema.properties &&
                (schema.properties[a.value as string] as JSONSchema7)?.type ===
                  'array'
              ) {
                return { ...a, value: `${a.value}:${Date.now()}` }
              } else return a
            })
          )
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
        setValue((currentValue) => [
          ...currentValue,
          { label: inputValue, value: inputValue }
        ])
      }
      formatCreateLabel={(v) => <div>{v}</div>}
    />
  )
}
