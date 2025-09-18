import React from 'react'
import { Image, Segment } from 'semantic-ui-react'
import headerImage from './assets/headerimage.jpg'

//const ImageFluid = () => (
//  <Image src='/assets/headerimage.jpg' fluid />
//)

function ImageFluid()
{
  return (
    <Segment>
      <Image src={headerImage} fluid />
    </Segment>
  )
}

export default ImageFluid