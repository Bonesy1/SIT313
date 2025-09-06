import React from 'react'
import {
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Image,
  Rating,
  CardMeta,
} from 'semantic-ui-react'

function ContentCard(props) 
{
    return (
        <Card centered>
        <Image src={props.img} />
        <CardContent>
          <CardHeader>{props.title}</CardHeader>
          <CardDescription>
            {props.description}
          </CardDescription>
          <Rating disabled icon='star' defaultRating={3} maxRating={5} rating={props.rating}></Rating>
          <CardMeta>By {props.author}</CardMeta>
        </CardContent>
        </Card>
      )
}

export default ContentCard