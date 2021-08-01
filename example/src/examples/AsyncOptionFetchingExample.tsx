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
    "currencyCode": {type: "string", title: "Currency"}
  }
}

export function AsyncOptionFetchingExample() {

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

export const asyncOptionFetchingExampleCode = `
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
    "currencyCode": {type: "string", title: "Currency"}
  }
}

export function AsyncOptionFetchingExample() {

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
`

export const asyncOptionFetchingUsageDescription = <>
  <p><code>react-associative-select</code> supports asynchronous data fetching through optionMapping prop.</p>

  <p>
    The option mapping is a key-value pair object where the key is a key of schema properties and the value is a function
    which provides a promise of results. The result is in <code>{`{label: string, value: T}`}</code> shape.
  </p>
</>

