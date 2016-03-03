import React from 'react';
import '../../css/style.scss';
import Header from './common/header'

class App extends React.Component {
    render() {
        return (<div>
                <Header />
                <h1>Testing react app</h1>
                {this.props.children}
                </div>)
    }
}

App.path = '/';

export default App
