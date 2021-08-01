import React from 'react'

import { AssociativeSelect } from 'react-associative-select'
import {JSONSchema7} from "json-schema";

interface Person {
  name: string
  age: number
  gender: "Male" | "Female"
}

const schema: JSONSchema7 = {
  type: "object",
  title: "",
  properties: {
    "name": { type: "string", title: "Name", pattern: '^[a-zA-Z ]+$' },
    "age": { type: "number", title: "Age", minimum: 18, maximum: 60, multipleOf: 1 },
    "gender": { type: "string", title: "Gender", enum: ["Male", "Female"] }
  }
}

export default function BasicExample() {

  function onChange(values: Partial<Person>) {
    console.log(values)
  }

  return <AssociativeSelect
    schema={schema}
    value={{}}
    onChange={onChange}
    styles={{
      multiValue() {
        return {
          borderRadius: 10
        }
      }
    }}
  />
}

export const basicUsageDescription = <>
  <p>Basic usage is simple as defining the schema and adding the <code>AssociativeSelect</code> component with callback.</p>
</>

export const basicExampleCode = `
import React from 'react'

import { AssociativeSelect } from 'react-associative-select'
import {JSONSchema7} from "json-schema";

interface Person {
  name: string
  age: number
  gender: "Male" | "Female"
}

const schema: JSONSchema7 = {
  type: "object",
  title: "",
  properties: {
    "name": { type: "string", title: "Name", pattern: '^[a-zA-Z ]+$' },
    "age": { type: "number", title: "Age", minimum: 18, maximum: 60, multipleOf: 1 },
    "gender": { type: "string", title: "Gender", enum: ["Male", "Female"] }
  }
}

export default function BasicExample() {

  function onChange(values: Partial<Person>) {
    console.log(values)
  }

  return <AssociativeSelect
    schema={schema}
    value={{}}
    onChange={onChange}
    styles={{
      multiValue() {
        return {
          borderRadius: 10
        }
      }
    }}
  />
}
`
