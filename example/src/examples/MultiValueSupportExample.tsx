import React from "react";
import {AssociativeSelect} from "react-associative-select";
import {JSONSchema7} from "json-schema";

interface CurrencySelection {
  supportedCurrencies: string[]
}

const schema: JSONSchema7 = {
  type: "object",
  title: "",
  properties: {
    "supportedCurrencies": {type: "array", title: "Currency", items: {type: "string"}, enum: ["USD", "LKR", "EURO"]}
  }
}

export function MultiValueSupportExample() {

  function onQueryChange(e: Partial<CurrencySelection>) {
    console.log(e)
  }

  return <div>
    <AssociativeSelect
      schema={schema}
      onChange={onQueryChange}
    />
  </div>
}

export const multiValueSupportExampleCode = `
import React from "react";
import {AssociativeSelect} from "react-associative-select";
import {JSONSchema7} from "json-schema";

interface CurrencySelection {
  supportedCurrencies: string[]
}

const schema: JSONSchema7 = {
  type: "object",
  title: "",
  properties: {
    "supportedCurrencies": {type: "array", title: "Currency", items: {type: "string"}, enum: ["USD", "LKR", "EURO"]}
  }
}

export function MultiValueSupport() {

  function onQueryChange(e: Partial<CurrencySelection>) {
    console.log(e)
  }

  return <div>
    <AssociativeSelect
      schema={schema}
      onChange={onQueryChange}
    />
  </div>
}
`

export const multiValueSupportUsageDescription = <>
  <p>The properties of type <code>array</code> are automatically converted to multi-value field.</p>
</>

