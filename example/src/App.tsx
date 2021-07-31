import React from 'react'

import { AssociativeSelect } from 'react-associative-select'
import {JSONSchema7} from "json-schema";

const schema: JSONSchema7 = {
  type: "object",
  title: "",
  properties: {
    "name": { type: "string", title: "Name", pattern: '^[a-zA-Z ]+$' },
    "age": { type: "number", title: "Age", minimum: 18, maximum: 60, multipleOf: 1 },
    "gender": { type: "string", title: "Gender", enum: ["Male", "Female"] },
    "married": { type: "boolean", title: "Married"},
    "country": {type: "string", title: "Country", additionalItems: false},
    "currencies": {type: "array", title: "Currency", items: {type: "string"}, enum: ["LKR", "USD", "EURO"]}
  }
}

const App = () => {
  return <AssociativeSelect
    schema={schema}
    value={{}}
    onChange={v => console.log(v)}
    styles={{
      multiValue() {
        return {
          borderRadius: 10
        }
      }
    }}
    optionMapping={{
      country: (text) => new Promise((resolve) => {
        console.log(text)
        setTimeout(() => resolve(["USA", "China"].map(a => ({value: a, label: a}))), 1000)
      })
    }}
  />

}

export default App
