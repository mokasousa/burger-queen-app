import React, {useContext} from 'react';
import firebase from '../../config/firebase.js';
import { Segment, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { UserContext } from '../UserContext'

const styleSegment = {
    marginTop:'1em',
    bottom: 0,
    width: '100%',
    textAlign: 'right',
    fontWeight: 'bold',
    borderTop: '2px solid'
}

const Footer = (props) => {

    const currUser = useContext(UserContext)

    function logOut() {
        firebase
          .auth()
          .signOut()
          .then(() => props.history.replace('/Entrar'))
      }

    return (
        <> 
        <Segment inline='true' style={styleSegment}>
            <label>Colaborador: {currUser.name}</label>
            <Icon 
            style={{margin:'0.2em'}}
            name='log out' 
            size='big'
            onClick={() => logOut()}
            />
        </Segment>
        </>
    )
}

export default withRouter(Footer);
