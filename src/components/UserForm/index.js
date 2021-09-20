import { useForm } from '../../hooks/useForm'
import { Button, Form, Input, Section, Title } from './styles'

export const UserForm = ({ onSubmit, title }) => {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
  })

  const { email, password } = values

  return (
    <Section>
      <Title>{title}</Title>
      <Form onSubmit={onSubmit}>
        <Input
          name="email"
          placeholder="Email"
          type="email"
          required
          value={email}
          onChange={handleChange}
        />
        <Input
          name="password"
          placeholder="Password"
          type="password"
          required
          value={password}
          onChange={handleChange}
        />
        <Button type="submit">{title}</Button>
      </Form>
    </Section>
  )
}
