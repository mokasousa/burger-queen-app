import React from 'react';
import { Button, Header, Form } from 'semantic-ui-react';

function onSubmit (){
    console.log('cadastro')
}

const Login = () => (
  <Form onSubmit={onSubmit}>
    <Header>Entrar</Header>
    <Form.Field>
      <label>E-mail:</label>
      <input placeholder='E-mail' />
    </Form.Field>
    <Form.Field>
      <label>Senha:</label>
      <input placeholder='********' />
    </Form.Field>
    <Button type='submit'>Entrar</Button>
  </Form>

    <Message attached='bottom'>Para cadastrar-se <a href='#'>clique aqui</a>.
    </Message>
)

export default Login;