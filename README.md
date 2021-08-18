# react-associative-select

A json-schema based extension for react-select to support associative selections.

Please visit [Demo site](https://tiranuom.github.io/react-associative-select/) to see the component usage.

## Background

`React-associative-search` uses [React Select](https://react-select.com) under the hood to provide the select functionality.
Kudos for the authors of the great tool.
Furthermore, the library uses `JSONSchema7` schema format to define the shape of search options. Full JSONSchema7 spec
is not supported and the project is in active development to support additional features.

## Installation.

The easiest way to install the react-associative-select is through npm or yarn.

```shell
npm -i react-associative-select
```

or

```shell
yarn add react-associative-select
```

## Usage.

### Basic usage

Basic usage is simple as defining the schema and adding the `AssociativeSelect` component with callback.

```typescript jsx
import {AssociativeSelect} from "react-associative-select";
import {JSONSchema7} from "json-schema";

interface Person {
  name: string,
  age: number,
  gender: "Male" | "Female" | "Apache Helicoptor"
  phone: number
}

const schema: JSONSchema7 = {
  type: "object",
  title: "",
  properties: {
    "name": {type: "string", title: "Name"},
    "age": {type: "number", title: "Age", minimum: 18},
    "gender": {type: "string", title: "Gender", enum: ["Male", "Female", "Apache Helicoptor"]},
    "phone": {type: "string", title: "Contact Number", pattern:'^[0-9]+$'}
  }
}

export function App() {

  function onQueryChange(e: Partial<Person>) {
    // TODO execute updates on query change.
  }

  return <div>
    <AssociativeSelect
      schema={schema}
      onChange={onQueryChange}
    />
  </div>
}
```

### With dynamic asynchronous option fetching.

`react-associative-select` supports asynchronous data fetching through optionMapping prop.

```typescript jsx
import {AssociativeSelect} from "react-associative-select";
import {JSONSchema7} from "json-schema";

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

export function App() {

  function onQueryChange(e: Partial<CurrencySelection>) {
    // TODO execute updates on query change.
  }

  return <div>
    <AssociativeSelect
      schema={schema}
      onChange={onQueryChange}
      optionMapping={{
        currencyCode: (text) => new Promise((resolve) => {
          setTimeout(() => resolve([{label: "LKR", value: "Rs. "}, {label: "USD", value: "$"}, {label: "EURO", value: "€"}]), 1000)
        })
      }}
    />
  </div>
}
```
The option mapping is a key-value pair object where the key is a key of schema properties and the value is a function
which provides a promise of results. The result is in `{label: string, value: T}` shape.

### Multi value support

The properties of type `array` are automatically converted to multi-value field.

```typescript jsx
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

export function App() {

  function onQueryChange(e: Partial<CurrencySelection>) {
    // TODO execute updates on query change.
  }

  return <div>
    <AssociativeSelect
      schema={schema}
      onChange={onQueryChange}
    />
  </div>
}
```

### Arbitrary value support

By default, arbitrary values are supported in the defined fields except for the fields with enum property. This behavior
can be changed by using `additionalItems` json-schema property.

#### Validations

Additional validations for the arbitrary values can be implemented based on the data type.

| Data Type | Property | Behavior |
|---|---|---|
| string | pattern | A regular expression to validate the input value. `eg: {..., pattern: '^[a-zA-Z ]+$'}` |
| string | minLength | The input should be longer than the given value. `eg: {..., minLength: 4}` |
| string | maxLength | The input should be shorter than the given value. `eg: {..., maxLength: 10}` |
| string | format | TODO |
| number or integer | minimum | The minimum inclusive value that the input should confirm to `eg: {..., minimum: 18}`|
| number or integer | maximum | The maximum inclusive value that the input should confirm to `eg: {..., maximum: 60}`|
| number or integer | multipleOf | The value is valid if its a multiply of the given value. `eg: {..., multipleOf: 1}`|
| array | ... | TODO |

### Schema composition

Schema compositon is not yet supported and we are working on it.

### References.

References are not yet supported.

### Styling and other select properties.

`react-associative-select` is based on the `react-select` and all the additional properties in `react-select` is supported
in `react-associative-select`. Please refer `react-select` documentation for the basic information.

## Limitations

JSONSchema7 is a comprehensive specification. But the whole specification features are not necessary in selection domain.
For time being, only the simple objects are supported. The object may contain simple data types or array of simple data types.

* primitive type : (:x: Unsupported)

```json
{
  "type": "string"
}
```

* object : (:heavy_check_mark: Supported)

```json
{
  "type": "object",
  "properties": {

  }
}
```

* arrays : (:x: Unsupported)

```json
{
  "type": "array",
  "items": {
    "type": "object"
  }
}
```

* arrays as object properties : (:heavy_check_mark: Supported)

```json
{
  "type": "object",
  "properties": {
    "arrProp": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}
```

* nested objects : (:x: Unsupported)

```json
{
  "type": "object",
  "properties": {
    "arrProp": {
      "type": "object",
      "properties": {
        "a": {
          "type": "string"
        }
      }
    }
  }
}
```

### License

MIT Licensed. Copyright (c) Tiran Wijesekara 2021


