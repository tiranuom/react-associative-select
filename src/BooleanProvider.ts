import { OptionType, TypeProvider } from './types'
import { JSONSchema7 } from 'json-schema'
import { OptionsType } from 'react-select/src/types'

function matches(property: JSONSchema7): boolean {
  return property.type === "boolean"
}

function toOptions(): OptionsType<OptionType<unknown>> {
  return [
    {label: "True", value: true},
    {label: "False", value: false}
  ]
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

export const booleanTypeProvider: TypeProvider = {
  matches,
  toOptions,
  isValidNewOption,
  fromValue
}
