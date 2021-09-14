
import React from 'react'
import ReactModal from 'react-modal'
import { render } from '@testing-library/react'

const modalNode = document.createElement('div')
modalNode.id = 'modalNode'
document.body.appendChild(modalNode)

ReactModal.setAppElement(`#${modalNode.id}`)

describe('Reproduction', () => {
  it('Test', () => {
    const message = 'TEST';
    const { getByText } = render(
      <ReactModal isOpen={true}>{message}</ReactModal>
    )
    getByText(message)
  })
})
