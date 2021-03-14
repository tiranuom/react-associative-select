import { OptionType, TypeProvider } from './types'
import { JSONSchema7 } from 'json-schema'
import { OptionsType } from 'react-select/src/types'

function matches(property: JSONSchema7): boolean {
  return !!property.enum
}

function toOptions(property: JSONSchema7): OptionsType<OptionType<unknown>> {
  return (
    property.enum?.map((a) => ({
      label: a?.toString() ?? '',
      value: a
    })) ?? []
  )
}

function isValidNewOption(): boolean {
  return false
}

function fromValue(
  value: any,
  property: JSONSchema7
): OptionType<unknown> | undefined {
  if (property.enum?.includes(value)) {
    return { label: value.toString(), value: value }
  } else return undefined
}

export const enumTypeProvider: TypeProvider = {
  matches,
  toOptions,
  isValidNewOption,
  fromValue
}
