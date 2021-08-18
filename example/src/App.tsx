import React from 'react'
// import Scrollspy from 'react-scrollspy'
import {ExampleWrapper} from "./ExampleWrapper";
import BasicExample, {basicExampleCode, basicUsageDescription} from "./examples/BasicExample";
import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  AsyncOptionFetchingExample,
  asyncOptionFetchingExampleCode,
  asyncOptionFetchingUsageDescription
} from "./examples/AsyncOptionFetchingExample";
import {
  MultiValueSupportExample,
  multiValueSupportExampleCode,
  multiValueSupportUsageDescription
} from "./examples/MultiValueSupportExample";
import {
  ArbitraryValueExample,
  arbitraryValueExampleCode,
  arbitraryValueUsageDescription
} from "./examples/ArbitrayValueExample";
import 'react-pro-sidebar/dist/css/styles.css'
import {Menu, MenuItem, ProSidebar, SidebarContent, SidebarFooter, SidebarHeader} from "react-pro-sidebar";
import GitHubButton from 'react-github-btn'

function App() {
  return <>
    <ProSidebar className={"sidebar"}>
      <SidebarHeader>
        <div className={"header"}>
          React Associative Select
          <div className={"d-flex align-items-end pt-3"}>
            <GitHubButton href="https://github.com/tiranuom/react-associative-select" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" aria-label="Watch tiranuom/react-associative-select on GitHub">Github Repository</GitHubButton>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu>
          <MenuItem><a href={"#intro"}>Introduction</a></MenuItem>
          <MenuItem><a href={"#basic-usage"}>Basic Usage</a></MenuItem>
          <MenuItem><a href={"#async-usage"}>Async Usage</a></MenuItem>
          <MenuItem><a href={"#multi-value-support-usage"}>Multi Value Support</a></MenuItem>
          <MenuItem><a href={"#arbitrary-value-support-usage"}>Arbitrary Value Support</a></MenuItem>
          <MenuItem><a href={"#validations"}>Validations</a></MenuItem>
          <MenuItem><a href={"#json-schema-features"}>Jsonschema Features</a></MenuItem>
          <MenuItem><a href={"#styling"}>Styling</a></MenuItem>
          <MenuItem><a href={"#limitations"}>Limitations</a></MenuItem>
        </Menu>
      </SidebarContent>
      <SidebarFooter className={"footer"}></SidebarFooter>
    </ProSidebar>
    <div className={'container row mp-5'}>
      <div className={"col-md-8 offset-4"}>
        <section id={"intro"} className={"mt-5"}>
          <h3>React Associative Select</h3>
          <p><code>React-associative-select</code> uses <a href={'https://react-select.com'}>React Select</a> under the
            hood to provide the select functionality.
            Kudos for the authors of the great tool.</p>

          <p>Furthermore, the library uses <code>JSONSchema7</code> schema format to define the shape of search options. Full
            JSONSchema7 spec
            is not supported and the project is in active development to support additional features.</p>
        </section>
        <section id={"installation"}>
          <h5>Installation</h5>
          <p>The easiest way to install the react-associative-select is through npm or yarn.</p>

          <SyntaxHighlighter language={'shell'}>
            $ npm -i react-associative-select
          </SyntaxHighlighter>

          <p>or</p>

          <SyntaxHighlighter language={'shell'}>
            $ yarn add react-associative-select
          </SyntaxHighlighter>
        </section>
        <section id={"basic-usage"}>
          <ExampleWrapper title={"Basic Usage"} description={basicUsageDescription} code={basicExampleCode}>
            <BasicExample/>
          </ExampleWrapper>
        </section>
        <section id={"async-usage"}>
          <ExampleWrapper title={"Asynchronous options fetching"} description={asyncOptionFetchingUsageDescription} code={asyncOptionFetchingExampleCode}>
            <AsyncOptionFetchingExample/>
          </ExampleWrapper>
        </section>
        <section id={"multi-value-support-usage"}>
          <ExampleWrapper title={"Multi Value Support"} description={multiValueSupportUsageDescription} code={multiValueSupportExampleCode}>
            <MultiValueSupportExample/>
          </ExampleWrapper>
        </section>
        <section id={"arbitrary-value-support-usage"}>
          <ExampleWrapper title={"Arbitrary Support"} description={arbitraryValueUsageDescription} code={arbitraryValueExampleCode}>
            <ArbitraryValueExample/>
          </ExampleWrapper>
        </section>
        <section id={"validations"}>
          <div className={"mt-5"}>
            <h5>Validations</h5>
            <p>Additional validations for the arbitrary values can be implemented based on the data type.</p>
            <table className={'table table-bordered'}>
              <thead>
              <tr>
                <th>Data Type</th>
                <th>Property</th>
                <th>Behavior</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>string</td>
                <td>pattern</td>
                <td>A regular expression to validate the input value. <code>eg: {`{..., pattern: '^[a-zA-Z ]+$'}`}</code></td>
              </tr>
              <tr>
                <td>string</td>
                <td>minLength</td>
                <td>The input should be longer than the given value. <code>eg: {`{..., minLength: 4}`}</code></td>
              </tr>
              <tr>
                <td>string</td>
                <td>maxLength</td>
                <td>The input should be shorter than the given value. <code>eg: {`{..., maxLength: 10}`}</code></td>
              </tr>
              <tr>
                <td>string</td>
                <td>format</td>
                <td>TODO</td>
              </tr>
              <tr>
                <td>number or integer</td>
                <td>minimum</td>
                <td>The minimum inclusive value that the input should confirm to <code>eg: {`{..., minimum: 18}`}</code></td>
              </tr>
              <tr>
                <td>number or integer</td>
                <td>maximum</td>
                <td>The maximum inclusive value that the input should confirm to <code>eg: {`{..., maximum: 60}`}</code></td>
              </tr>
              <tr>
                <td>number or integer</td>
                <td>multipleOf</td>
                <td>The value is valid if its a multiply of the given value. <code>eg: {`{..., multipleOf: 1}`}</code></td>
              </tr>
              <tr>
                <td>array</td>
                <td>...</td>
                <td>TODO</td>
              </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section id={"json-schema-features"}>
          <div className={"mt-5"}>
            <h5>Json schema features</h5>
            <h6 className={"mt-3"}>Schema Composition</h6>
            <p>Schema compositon is not yet supported and we are working on it.</p>
            <h6>References</h6>
            <p>References are not yet supported.</p>
          </div>
        </section>
        <section id={"styling"}>
          <div className={"mt-5"}>
            <h5>Styling and other select properties.</h5>
            <p><code>react-associative-select</code> is based on the <code>react-select</code> and all the additional properties in <code>react-select</code> is supported
              in <code>react-associative-select</code>. Please refer <code>react-select</code> documentation for the basic information.</p>
          </div>
        </section>
        <section id={"limitations"}>
          <div className={"mt-5"}>
            <h5>Limitations.</h5>
            <p>JSONSchema7 is a comprehensive specification. But the whole specification features are not necessary in selection domain.
              For time being, only the simple objects are supported. The object may contain simple data types or array of simple data types.</p>
            <ul>
              <li>
                <p style={{textDecoration: "line-through"}}>primitive type : (Unsupported)</p>
                <SyntaxHighlighter language={"typescript"}>{`const schema = {
  "type": "string"
}`}</SyntaxHighlighter>
              </li>
              <li>
                <p>object : (Supported)</p>
                <SyntaxHighlighter language={"typescript"}>
                  {`const schema = {
  "type": "object",
  "properties": {
    ...
  }
}`}
                </SyntaxHighlighter>
              </li>
              <li>
                <p style={{textDecoration: "line-through"}}>arrays : (Unsupported)</p>
                <SyntaxHighlighter language={"typescript"}>{`const schema = {
  "type": "array",
  "items": {
    "type": "object"
  }
}`}</SyntaxHighlighter>
              </li>
              <li>
                <p>arrays as object properties : (Supported)</p>
                <SyntaxHighlighter language={"typescript"}>{`const schema = {
  "type": "object",
  "properties": {
    "arrProp": {
      "type": "array",
      "items": {
        "type": "string"
      }
    }
  }
}`}</SyntaxHighlighter>
              </li>
              <li>
                <p style={{textDecoration: "line-through"}}>nested objects : (Unsupported)</p>
                <SyntaxHighlighter language={"typescript"}>{`const schema = {
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
}`}</SyntaxHighlighter>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    <footer className={"d-flex justify-content-center align-items-center m-2"}>
      <small>MIT Licensed. Copyright (c) <a href={"https://github.com/tiranuom"}>tiranuom</a> 2021</small>
    </footer>
  </>
}

export default App
