import React from 'react'
import { Header, Radio, Grid, GridColumn, GridRow, Form, FormField } from 'semantic-ui-react'

const NewPostSelect = ({ value, setValue }) => {
  const handleChange = (e, { value }) => setValue(value);

  return (
    <>
      <Header as='h3' block style={{ margin: '1rem' }}>
        New Post
      </Header>
      <Form>
        <Grid columns={3}>
          <GridRow>
            <GridColumn>
              Select post type:
            </GridColumn>
            <GridColumn>
              <FormField>
                <Radio
                  label='Question'
                  value='question'
                  checked={value === 'question'}
                  onChange={handleChange}
                />
              </FormField>
            </GridColumn>
            <GridColumn>
              <FormField>
                <Radio
                  label='Article'
                  value='article'
                  checked={value === 'article'}
                  onChange={handleChange}
                />
              </FormField>
            </GridColumn>
          </GridRow>
        </Grid>
      </Form>
    </>
  );
}

export default NewPostSelect