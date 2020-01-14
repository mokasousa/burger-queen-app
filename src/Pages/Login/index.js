import React, { useState } from 'react';
import firebase from '../../config/firebase.js';
import { Image, Button, Header, Form, Input, Message } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';

const stylePage = {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'wrap',
  alignItems: 'center',
  height: '100vh'
}

const styleForm = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}

const styleMessage = {
  margin:'2em 0', 
  fontWeight: 'bold',
  borderTop: '2px solid #545353', 
  borderBottom: '2px solid #545353', 
  borderRight:'none',
  borderLeft:'none',
  boxShadow:'none',
  borderRadius:0,
  width: '100%',
  textAlign: 'center'
}

const buttonStyle = {
  backgroundColor: '#4EC475',
  border: '2px solid #545353',
  fontSize: 'medium',
  marginTop: '1em'
}

const inputStyle = {
  border: '2px solid #545353',
  borderRadius: '2px',
  maxWidth: '600px',
  width:'35vh'
}

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit (e){
    e.preventDefault()

    if(email.length > 0 && password.length > 0) {
      
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((cred) => {
        firebase
          .firestore()
          .collection('Users')
          .doc(cred.user.uid)
          .get()
          .then((resp) => {
              return resp.data().workIn === 'Cozinha'
            ? props.history.replace('/Preparos')
            : resp.data().workIn === 'Salão'
            ? props.history.replace('/Menu')
            : null
          })
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }

  return (
    <>
    <div className='auth-pages' style={stylePage}>
    <Image 
      style={{margin:'2em'}}
      src={require('../../Images/Burger-Queen-Logo.png')} 
      alt='Burger Queen Logo' 
      size='medium'
      />
    <div> 
    <Form onSubmit={onSubmit} style={styleForm}>
      <Header style={{margin:'1em', fontSize: 'x-large', color:'#4EC475'}}>Entrar</Header>
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
      <Button 
      style={buttonStyle}
      type='submit'
      content='Entrar'
      />
    </Form>
    <Message attached='bottom' style={styleMessage}>Para cadastrar-se <Link to='/Cadastrar' style={{color:'rgba(192, 171, 149)'}}>clique aqui</Link>.
    </Message>
    </div>
    </div>
    </>
  )
}

export default withRouter(Login);
