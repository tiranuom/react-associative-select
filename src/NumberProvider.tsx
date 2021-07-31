import { OptionType, TypeProvider } from './types'
import { JSONSchema7 } from 'json-schema'
import { OptionsType } from 'react-select/src/types'

function matches(property: JSONSchema7): boolean {
  return property.type === 'number'
}

function toOptions(): OptionsType<OptionType<unknown>> {
  return []
}

function isValidNewOption(property: JSONSchema7, inputValue: string): boolean {
  const number = +inputValue
  console.log(number)
  if (isNaN(number)) return false
  if (property.maximum && number > property.maximum) return false
  if (property.multipleOf && number % property.multipleOf !== 0) return false
  return !(property.minimum && number < property.minimum)
}

function fromValue(value: any): OptionType<unknown> | undefined {
  return { label: value.toString(), value: value }
}

export const numberTypeProvider: TypeProvider = {
  matches,
  toOptions,
  isValidNewOption,
  fromValue
}
