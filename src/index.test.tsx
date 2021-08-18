import {AssociativeSelect} from '.'
import renderer from 'react-test-renderer'
import {JSONSchema7} from 'json-schema'
import React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

const PREFIX = 'react-associative-select'
describe('Associative Select', () => {
  it('is truthy', () => {
    expect(AssociativeSelect).toBeTruthy()
  })

  it('renders correctly', () => {
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Name' }
      }
    }
    const tree = renderer
      .create(
        <AssociativeSelect schema={schema} onChange={(e) => console.log(e)} />
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

  it('Contains fields defined in the schema', async () => {
    const schema: JSONSchema7 = {
      type: 'object',
      properties: {
        name: { type: 'string', title: 'Name' }
      }
    }

    const { container,  } = render(
      <AssociativeSelect
        schema={schema}
        onChange={(e) => console.log(e)}
        className={PREFIX}
        classNamePrefix={PREFIX}
      />
    )

    fireEvent.click(container.querySelector(`.${PREFIX}__control`) as Element, { button: 0 })
    let expectation = expect(container.querySelector(`.${PREFIX}__menu`));
    expectation.toBeInTheDocument()
  })
})
