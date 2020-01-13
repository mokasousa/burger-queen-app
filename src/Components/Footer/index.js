import React from 'react';
import {withRouter} from 'react-router-dom';

const Footer = () => {

    function logOut() {
        firebase
          .auth()
          .signOut()
          .then(() => {
            props.history.push('/login');
          });
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

export default withRouter(Footer)