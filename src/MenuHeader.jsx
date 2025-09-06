import React, { Component } from 'react'
import { Link } from 'react-router'
import 'semantic-ui-css/semantic.min.css'
import { MenuItem, Menu, Input, Icon } from 'semantic-ui-react'

export default class MenuHeader extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { onLoginClick } = this.props;

    return (
      <Menu stackable style={{ margin: '1rem' }}>
        <MenuItem
        
          name='homepage'
          active={activeItem === 'homepage'}
          onClick={this.handleItemClick}
        >
          <Link to='/home'>
            <Icon name='home' />
            DEV@Deakin
          </Link>
        </MenuItem>

        <MenuItem>
          <Input icon='search' placeholder='Search...' />
        </MenuItem>

        <MenuItem
          name='Post'
          active={activeItem === 'Post'}
          onClick={this.handleItemClick}
        >
          <Link to='/newpost'>
            <Icon name='edit' />
            Post
          </Link>
        </MenuItem>

        <MenuItem
          name='Login'
          active={activeItem === 'Login'}
          onClick={onLoginClick}
        >
          <Icon name='sign-in' />
          Login
        </MenuItem>
      </Menu>
    )
  }
}





