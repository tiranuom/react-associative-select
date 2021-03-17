import React from 'react'

import { AssociativeSelect } from 'react-associative-select'
import {JSONSchema7} from "json-schema";

const schema: JSONSchema7 = {
  type: "object",
  title: "",
  properties: {
    "name": { type: "string", title: "Name", pattern: '^[a-zA-Z ]+$' },
    "age": { type: "number", title: "Age", minimum: 18, maximum: 60 },
    "gender": { type: "string", title: "Gender", enum: ["Male", "Female"] },
    "married": { type: "boolean", title: "Married"}
  }
}

const App = () => {
  return <AssociativeSelect
    schema={schema}
    value={{}}
    onChange={v => console.log(v)}
    styles={{
      multiValue() {
        console.log(arguments)
        return {
          borderRadius: 10
        }
      }
    }}
    optionMapping={{
      name: () => Promise.resolve([{label: "A", value: "a"}])
    }}
  />

}

export default App
