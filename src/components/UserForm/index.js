import { useForm } from '../../hooks/useForm'
import { Button, Error, Form, Input, Section, Title } from './styles'

export const UserForm = ({ onSubmit, title, error, disabled }) => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
  })

  const { email, password } = values

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <Section>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          disabled={disabled}
          value={email}
          onChange={handleChange}
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          disabled={disabled}
          value={password}
          onChange={handleChange}
        />
        <Button disabled={disabled} type="submit">
          {title}
        </Button>
      </Form>
      {error && <Error>{error}</Error>}
    </Section>
  )
}
