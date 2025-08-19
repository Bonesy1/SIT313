import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  Grid,
  GridRow,
  GridColumn,
  Image,
  Container,
  Segment,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import ImageFluid from './ImageFluid'
import MenuHeader from "./MenuHeader"
import MenuSignup from "./MenuSignup"
import ContentCard from './ContentCard'
import ContentCard_articleInfo from './ContentCard_articleInfo'
import ContentCard_tutorialInfo from './ContentCard_tutorialInfo'
import ContentButton from './ContentButton'
import ContentButton_info from './ContentButton_info'
import Footer from './Footer'

//going to be the main page essentially, other elements will populate the page as child elements
function App() {
  return (
    <>
      <div>
        <MenuHeader />
        <ImageFluid />       
      </div>
      
      <div className="card">
        <div className="articles">
          <Segment>
            <Grid centered textAlign='center' columns={3} divided>
              <h1>Featured Articles</h1>
              <GridRow>
                <GridColumn>
                  <ContentCard img = {ContentCard_articleInfo[0].img}
                               title = {ContentCard_articleInfo[0].title}
                               description = {ContentCard_articleInfo[0].description}
                               rating = {ContentCard_articleInfo[0].rating}
                               author = {ContentCard_articleInfo[0].author}/>
                </GridColumn>
                <GridColumn>
                  <ContentCard img = {ContentCard_articleInfo[1].img}
                               title = {ContentCard_articleInfo[1].title}
                               description = {ContentCard_articleInfo[1].description}
                               rating = {ContentCard_articleInfo[1].rating}
                               author = {ContentCard_articleInfo[1].author}/>
                </GridColumn>
                <GridColumn>
                  <ContentCard img = {ContentCard_articleInfo[2].img}
                               title = {ContentCard_articleInfo[2].title}
                               description = {ContentCard_articleInfo[2].description}
                               rating = {ContentCard_articleInfo[2].rating}
                               author = {ContentCard_articleInfo[2].author}/>
                </GridColumn>
              </GridRow>
            </Grid>
            <br />
            <ContentButton string = {ContentButton_info[0].string} />
          </Segment>
          </div>

          <br />
          <br />
        <div className="Tutorials">
          <Segment>
            <Grid centered textAlign='center' columns={3} divided>
              <h1>Featured Tutorials</h1>
              <GridRow>
                <GridColumn>
                  <ContentCard img = {ContentCard_tutorialInfo[0].img}
                               title = {ContentCard_tutorialInfo[0].title}
                               description = {ContentCard_tutorialInfo[0].description}
                               rating = {ContentCard_tutorialInfo[0].rating}
                               author = {ContentCard_tutorialInfo[0].author}/>
                </GridColumn>
                <GridColumn>
                  <ContentCard img = {ContentCard_tutorialInfo[1].img}
                               title = {ContentCard_tutorialInfo[1].title}
                               description = {ContentCard_tutorialInfo[1].description}
                               rating = {ContentCard_tutorialInfo[1].rating}
                               author = {ContentCard_tutorialInfo[1].author}/>
                </GridColumn>
                <GridColumn>
                  <ContentCard img = {ContentCard_tutorialInfo[2].img}
                               title = {ContentCard_tutorialInfo[2].title}
                               description = {ContentCard_tutorialInfo[2].description}
                               rating = {ContentCard_tutorialInfo[2].rating}
                               author = {ContentCard_tutorialInfo[2].author}/>
                </GridColumn>
              </GridRow>
            </Grid>
            <br />
            <ContentButton string = {ContentButton_info[1].string} />
          </Segment>
        </div>
      </div>
      <div className="MenuSignup" >
        <MenuSignup />
      </div>
      <div className="Footer" >
        <br />
        <Footer />
      </div>
    </>
  )
}

export default App
