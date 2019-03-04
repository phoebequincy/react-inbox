import React, { Component } from 'react';

//Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-svg-core'
import '@fortawesome/react-fontawesome'
import '@fortawesome/free-solid-svg-icons'

//Components
import ProgressBar from './components/ProgressBar'
import Messages from './components/Messages'
import Toolbar from './components/Toolbar'
import Compose from './components/Compose'

class App extends Component {

  state = {messages:[]}

  async componentDidMount() {
  const response = await fetch('http://localhost:8082/api/messages')
  const json = await response.json()
  this.setState({messages:json})
  }








  render() {
    return (
      <div className="App">
      <div className="App container">
      <ToolBar
        messages= {this.state.messages}
      />

      <Messages
        messages= {this.state.messages}
      />
      </div>
    )
  }
}

export default App;
