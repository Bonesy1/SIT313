import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { MenuItem, Menu, Input } from 'semantic-ui-react'

export default class MenuHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu stackable>
        <MenuItem 
          name='homepage'
          active={activeItem === 'homepage'}
          onClick={this.handleItemClick}
        >
          DEV@Deakin
        </MenuItem>

        <MenuItem>
          <Input icon='search' placeholder='Search...' />
        </MenuItem>

        <MenuItem
          name='Post'
          active={activeItem === 'Post'}
          onClick={this.handleItemClick}
        >
          Post
        </MenuItem>

        <MenuItem
          name='Login'
          active={activeItem === 'Login'}
          onClick={this.handleItemClick}
        >
          Login
        </MenuItem>
      </Menu>
    )
  }
}

