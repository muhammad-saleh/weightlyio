"use strict";
import React from 'react';

class LoginPage extends React.Component {
    componentDidMount(){
        var lock = new Auth0Lock('1ehkNqrkZocJ4shutmXZruY3xFdhdRlB', 'msaleh.auth0.com');
        lock.show({
          container: 'LoginBox'
        , callbackURL: ''
        , responseType: 'code'
        , authParams: {
          scope: 'openid profile'
        }
        });
    }
    showLock() {
        // We receive lock from the parent component in this case
        // If you instantiate it in this component, just do this.lock.show()
        this.props.lock.show();
      }

    render() {
        return (<div id="LoginBox"></div>)
    }
}
LoginPage.path = '/login';

export default LoginPage
