import React, { Component } from 'react'
import { Button, Confirm } from 'semantic-ui-react'

class ConfirmButton extends Component {
  state = { open: false }

  open = () => this.setState({ open: true })
  close = () => this.setState({ open: false })

  render() {
    return (
      <div>
        <Button onClick={this.open}>Confirm</Button>
        <Confirm
          open={this.state.open}
          onCancel={this.close}
          onConfirm={this.close}
        />
      </div>
    )
  }
}

export default ConfirmButton