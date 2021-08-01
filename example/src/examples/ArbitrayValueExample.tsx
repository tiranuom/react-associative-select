import React from "react";
import {AssociativeSelect, OptionType} from "react-associative-select";
import {JSONSchema7} from "json-schema";
import {OptionsType} from "react-select";

interface CurrencySelection {
  currencyCode: string
}

const schema: JSONSchema7 = {
  type: "object",
  title: "",
  properties: {
    "currencyCode": {type: "string", title: "Currency", additionalItems: false}
  }
}

export function ArbitraryValueExample() {

  function onQueryChange(e: Partial<CurrencySelection>) {
    console.log(e)
  }

  return <div>
    <AssociativeSelect
      schema={schema}
      onChange={onQueryChange}
      optionMapping={{
        currencyCode: (text: string | undefined) => new Promise<OptionsType<OptionType<string>>>((resolve) => {
          setTimeout(() => {
            let currencies: OptionsType<OptionType<string>> = [{label: "LKR", value: "Rs. "}, {label: "USD", value: "$"}, {label: "EURO", value: "€"}];
            resolve(currencies.filter(({label}) => !text || label.toLowerCase().startsWith(text.toLowerCase())));
          }, 1000)
        })
      }}
    />
  </div>
}

export const arbitraryValueExampleCode = `
import React from "react";
import {AssociativeSelect, OptionType} from "react-associative-select";
import {JSONSchema7} from "json-schema";
import {OptionsType} from "react-select";

interface CurrencySelection {
  currencyCode: string
}

const schema: JSONSchema7 = {
  type: "object",
  title: "",
  properties: {
    "currencyCode": {type: "string", title: "Currency", additionalItems: false}
  }
}

export function ArbitraryValueExample() {

  function onQueryChange(e: Partial<CurrencySelection>) {
    console.log(e)
  }

  return <div>
    <AssociativeSelect
      schema={schema}
      onChange={onQueryChange}
      optionMapping={{
        currencyCode: (text: string | undefined) => new Promise<OptionsType<OptionType<string>>>((resolve) => {
          setTimeout(() => {
            let currencies: OptionsType<OptionType<string>> = [{label: "LKR", value: "Rs. "}, {label: "USD", value: "$"}, {label: "EURO", value: "€"}];
            resolve(currencies.filter(({label}) => !text || label.toLowerCase().startsWith(text.toLowerCase())));
          }, 1000)
        })
      }}
    />
  </div>
}`

export const arbitraryValueUsageDescription = <>
  <p>By default, arbitrary values are supported in the defined fields except for the fields with enum property. This behavior
    can be changed by using <code>additionalItems</code> json-schema property.</p>

  <p>
    Arbitrary value support control works well with asynchronous data fetching.
  </p>
</>

