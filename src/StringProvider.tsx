import { OptionType, TypeProvider } from './types'
import { JSONSchema7 } from 'json-schema'
import { OptionsType } from 'react-select/src/types'

function matches(property: JSONSchema7): boolean {
  return property.type === 'string'
}

function toOptions(): OptionsType<OptionType<unknown>> {
  return []
}

function isValidNewOption(property: JSONSchema7, inputValue: string): boolean {
  if (property.pattern && !new RegExp(property.pattern).test(inputValue)) {
    return false
  }

  return true
}

function fromValue(value: any): OptionType<unknown> | undefined {
  return { label: value.toString(), value: value }
}

export const stringTypeProvider: TypeProvider = {
  matches,
  toOptions,
  isValidNewOption,
  fromValue
}
