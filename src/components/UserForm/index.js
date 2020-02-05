import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Input, Form, H2, Error } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, onSubmit, title, disabled }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <H2>{title}</H2>
        <Input disabled={disabled} placeholder='@Email' {...email} />
        <Input disabled={disabled} placeholder='Password' type='password' {...password} />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {
        error && <Error>{error}</Error>
      }
    </>
  )
}
