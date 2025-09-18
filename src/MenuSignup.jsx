import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Segment } from 'semantic-ui-react'

export default class MenuSignup extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment style={{ margin: '1rem' }}>
        <div class="container">
          <iframe height="400" class="responsive-iframe" src="https://cdn.forms-content-1.sg-form.com/b21d4c82-6c3c-11f0-a20b-aa59304d639d"></iframe>
        </div>
      </Segment>
    )
  }
}

