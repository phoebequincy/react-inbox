import React from 'react'
import Message from './Message'

export default class Messages extends React.Component {
  render(){
    return (
    <div>
      {this.props.messages.map(message=>
        <Message
        key = {message.id}

        message = {message}
      />
      )}
    </div>
    )
  }
}
