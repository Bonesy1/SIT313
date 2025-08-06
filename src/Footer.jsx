import React from 'react'
import { Grid, GridColumn, GridRow, Segment, Table, TableRow, TableCell, TableBody, Image, Container } from 'semantic-ui-react'
import facebook from './assets/Facebook_icon.png'
import x from './assets/x_icon.png'
import instagram from './assets/Instagram_icon.png'

function Footer()
{
    return(    
    <Segment>
        <Grid centered textAlign='center' columns={3} divided>
            <GridRow>
                <GridColumn>
                    <h3>Explore</h3>
                    <Table basic='very'>
                        <TableBody>
                            <TableRow>
                                <TableCell>Home</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Questions</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Articles</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Tutorials</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </GridColumn>
                <GridColumn>
                    <h3>Support</h3>
                    <Table basic='very'>
                        <TableBody>
                            <TableRow>
                                <TableCell>FAQs</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Help</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Contact Us</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </GridColumn>
                <GridColumn>
                    <h3>Stay Connected</h3>
                    <Table basic='very'>
                        <TableBody>
                            <TableRow>
                                <TableCell >
                                    <Image src={facebook} size='mini' centered/>
                                    <br />
                                    <Image src={x} size='mini' centered/>
                                    <br />
                                    <Image src={instagram} size='mini' centered/>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </GridColumn>
            </GridRow>
        </Grid>
        <br />
        <Container>
            <h2>DEV@Deakin 2025</h2>
        </Container>
        <br />
        <Grid centered textAlign='center' columns={3} divided>
            <GridRow>
                <GridColumn>
                    Privacy Policy
                </GridColumn>
                <GridColumn>
                    Terms
                </GridColumn>
                <GridColumn>
                    Code of Conduct
                </GridColumn>
            </GridRow>
        </Grid>    
    </Segment>
    )
}

export default Footer