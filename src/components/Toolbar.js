import React from 'react'


export default class ToolBar extends React.Component {

  state = {compose: false}

  composeToggle = () => {
    this.setState({compose: this.state.compose ? false : true})
  }
render(){

  const toolbarDisabled = () => {
    let filtered = this.props.messages.filter(message =>
       message.selected)
       return filtered.length > 0 ? '' : 'disabled'
  }

  const selectStyling = () => {
    let filtered = this.props.messages.filter(message=>
      message.selected)
      if (filtered.length === this.props.messages.length){
        return 'fa fa-check-square-o'
      } else if (filtered.length > 0) {
        return 'fa fa-minus-square-o'
      } else {
        return 'fa fa-square-o'
       }
   }

  const unreadMessage = () => {
    let filtered = this.props.messages.filter(message=>
      !message.read)
      return filtered.length
  }


    return(
      <div className="row toolbar">
        <div className="col-md-12">
          <p className="pull-right">
            <span className="badge badge">{`${unreadMessage()}`}
            </span>unread messages
          </p>
          <a className="btn btn-danger"
          onClick={this.composeToggle}>
           <i className="fa fa-plus"></i>
          </a>

          <button className="btn btn-default"
          onClick={()=>{this.props.selectAll()}}>
            <i className={`${selectStyling()}`}></i>
          </button>

          <button className="btn btn-default"
          onClick={()=>{this.props.toggleRead()}}
          disabled={`${toolbarDisabled()}`}
          >Mark As Read</button>

          <button className="btn btn-default"
          onClick={()=>{this.props.toggleUnread()}}
          disabled={`${toolbarDisabled()}`}
          >Mark As Unread</button>

          <select className="form-control label-select"   disabled={`${toolbarDisabled()}`}
          onChange={e => this.props.addLabel(e.target.value)}>
            <option>Apply label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <select className="form-control label-select" disabled={`${toolbarDisabled()}`}
          onChange={e => this.props.removeLabel(e.target.value)}>
          >
            <option>Remove label</option>
            <option value="dev">dev</option>
            <option value="personal">personal</option>
            <option value="gschool">gschool</option>
          </select>

          <button className="btn btn-default"
          disabled={`${toolbarDisabled()}`}
          onClick={()=>{this.props.delete()}}>
            <i className="fa fa-trash-o"></i>
          </button>
        </div>
          <div>
          {this.state.compose ?
          <Compose
          onSend={this.props.onSend}
          composeToggle = {this.composeToggle}
          />
          : '' }
          </div>
      </div>
    )
  }
}
