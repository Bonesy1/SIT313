import React from 'react'
import { Button } from 'semantic-ui-react'

function ContentButton(props) 
{
    return (
        <Button>{props.string}</Button>
      )
}

export default ContentButton
