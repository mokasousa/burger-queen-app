import React from 'react';
import { Button, Header, Checkbox, Form } from 'semantic-ui-react';

function onSubmit() {
    console.log('cadastro')
}

const SignUp = () => (
  <Form onSubmit={onSubmit}>
    <Header>Cadastro</Header>
    <Form.Field inline>
      <Checkbox label='Cozinha' />
      <Checkbox label='Salão' />
    </Form.Field>
    <Form.Field>
      <label>Nome:</label>
      <input placeholder='Nome' />
    </Form.Field>
    <Form.Field>
      <label>E-mail:</label>
      <input placeholder='E-mail' />
    </Form.Field>
    <Form.Field>
      <label>Senha:</label>
      <input placeholder='********' />
    </Form.Field>
    <Button type='submit'>Cadastrar</Button>
  </Form>
)

export default SignUp;