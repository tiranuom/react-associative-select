import React from 'react'
import Scrollspy from 'react-scrollspy'
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

function App() {
  return <>
    <nav className={'navbar navbar-expand-lg navbar-light bg-light sticky-top'}>
      <a className="navbar-brand mx-3" href="#">React associative select</a>
    </nav>
    <div className={'container row mt-5 mp-5'}>
      <div className={'col-md-2 position-fixed'}>
        <Scrollspy items={["basic-usage"]} currentClassName={"active"} className={"list-group"}>
          <a className={'list-group-item list-group-item-action'} href={"#intro"}>Introduction</a>
          <a className={'list-group-item list-group-item-action'} href={"#basic-usage"}>Basic Usage</a>
          <a className={'list-group-item list-group-item-action'} href={"#async-usage"}>Async Usage</a>
          <a className={'list-group-item list-group-item-action'} href={"#multi-value-support-usage"}>Multi Value Support</a>
          <a className={'list-group-item list-group-item-action'} href={"#arbitrary-value-support-usage"}>Arbitrary Value Support</a>
        </Scrollspy>
      </div>
      <div className={"col-md-8 offset-4"}>
        <section id={"intro"}>
          <h3>React Associative Select</h3>
          <p><code>React-associative-search</code> uses <a href={'https://react-select.com'}>React Select</a> under the
            hood to provide the select functionality.
            Kudos for the authors of the great tool.</p>

          <p>Furthermore, the library uses `JSONSchema7` schema format to define the shape of search options. Full
            JSONSchema7 spec
            is not supported and the project is in active development to support additional features.</p>
        </section>
        <section id={"installation"}>
          <h3>Installation</h3>
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
      </div>
    </div>
  </>
}

export default App
