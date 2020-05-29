/* eslint-env jest */
import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button.jsx'

describe('Given a button is rendered', () => {

    test('it should render the text Click Me', () => {
        const { getByText } = render(<Button>Click Me</Button>)
        expect(getByText('Click Me')).toBeInTheDocument()
    })

    test('it should render a button', () => {
        const { container } = render(<Button>Click Me</Button>)
        expect(container.querySelector('button')).toBeInTheDocument()
    })

    test('it should have a class of govuk-button', () => {
        const { getByText } = render(<Button>Click Me</Button>)
        expect(getByText('Click Me')).toHaveAttribute(
            'class',
            'govuk-button'
        )
    })
})

describe('Given a button has a click event', () => {
  test('it should fire when the button is clicked', () => {
    const testCallback = jest.fn();

    const { getByText } = render(<Button onClick={testCallback}>Click Me</Button>)

    fireEvent(
      getByText('Click Me'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    expect(testCallback).toHaveBeenCalledTimes(1);
  })
})

describe('Given a button is rendered but disabled', () => {

    test('it should have the attribute disabled', () => {
        const { getByText } = render(<Button disabled>Click Me</Button>)
        expect(getByText('Click Me')).toHaveAttribute(
            'disabled'
        )

    })
})
