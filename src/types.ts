import {JSONSchema7} from "json-schema";
import {OptionsType, OptionTypeBase} from "react-select/src/types";

export interface OptionType<T> extends OptionTypeBase {
  label: string
  value: T
  index?: number
}

export interface TypeProvider {
  matches(property: JSONSchema7): boolean
  toOptions(property: JSONSchema7): OptionsType<OptionType<unknown>>
  isValidNewOption(property: JSONSchema7, inputValue: string): boolean
  fromValue(value: any, property: JSONSchema7): OptionType<unknown> | undefined
}
