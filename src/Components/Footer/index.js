import React from 'react';
import firebase from '../../config/firebase.js';
import { Segment, Icon } from 'semantic-ui-react';
//import {withRouter} from 'react-router-dom';

const Footer = () => {

    function logOut() {
        firebase
          .auth()
          .signOut()
          .then()
          // .then(() => {
          //   //props.history.push('/login');
          //   //window.location.path = '/Login'
          // });
      }

    return (
        <> 
        <Segment>
            {/* <label>Olá, {firebase.auth().currentUser}!</label> */}
            <Icon 
            style={{margin:'0.2em'}}
            name='log out' 
            size='huge'
            onClick={() => logOut()}
            />
        </Segment>
        </>
    )
}

//export default withRouter(Footer)
export default Footer
