import React, { useState, useContext } from 'react';
import firebase from '../../config/firebase.js';
import { Image, Button, Header, Form, Input, Message } from 'semantic-ui-react';
import {Link, withRouter, Redirect} from 'react-router-dom';
// import AuthFirebase from '../Components/Auth';

const buttonStyle = {
  backgroundColor: '#4EC475',
  border: '2px solid #545353',
  fontSize: 'medium',
  marginTop: '1em'
}

const inputStyle = {
  border: '2px solid #545353',
  borderRadius: '2px',
  maxWidth: '350px'
}

const Login = (/*{ history }*/) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit (e){
    e.preventDefault()

    return (
      
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => window.location.pathname = '/Pedidos')
      /*.then((cred) => {
        if (cred.user) {
          history.push('/Menu');
        }
      })*/.catch((error) => {
        console.log(error.code);
      })
    )
  }

  // const { currUser } = useContext(AuthFirebase);
  // currUser ? (<Redirect to='/Menu' />) : false

  return (
    <>
    <Image 
      src={require('../../Images/Burger-Queen-Logo.png')} 
      alt='Burger Queen Logo' 
      size='large'
      />
    <Form onSubmit={onSubmit}>
      <Header>Entrar</Header>
      <Form.Field>
        <label>E-mail:</label>
        <Input 
        style={inputStyle}
        value={email}
        placeholder='exemplo@email.com'
        onChange={ e => setEmail(e.currentTarget.value)}
        ></Input>
      </Form.Field>
      <Form.Field>
        <label>Senha:</label>
        <Input 
        style={inputStyle}
        value={password}
        placeholder='********'
        onChange={ e => setPassword(e.currentTarget.value)}
        ></Input>
      </Form.Field>
      {/* <Link to='/Pedidos'> */}
      <Button 
      style={buttonStyle}
      type='submit'
      content='Entrar'
      />
      {/* </Link> */}
    </Form>
    <Message attached='bottom'>Para cadastrar-se <Link to='/Cadastrar'>clique aqui</Link>.
    </Message>
    </>
  )
}

export default withRouter(Login);