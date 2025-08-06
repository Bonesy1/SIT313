import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { MenuItem, Menu, Input } from 'semantic-ui-react'

export default class MenuSignup extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <MenuItem header
          name='header'
        >
          SIGN UP FOR OUR DAILY INSIDER
        </MenuItem>

        <MenuItem>
          <Input placeholder='Enter your E-mail' />
        </MenuItem>

        <MenuItem
          name='Subscribe'
          active={activeItem === 'Post'}
          onClick={this.handleItemClick}
        >
          Subscribe
        </MenuItem>
      </Menu>
    )
  }
}

