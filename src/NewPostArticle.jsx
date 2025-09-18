import React from "react";
import { Header, Radio, Grid, GridColumn, GridRow, Form, FormField, TextArea} from 'semantic-ui-react'
import ConfirmButton from "./confirmbutton";

function ArticleForm() {
    return (
        <>
            <Header as='h3' block style={{ margin: '1rem' }}>
                What article would you like to write?
            </Header>
            <Form style={{ margin: '1rem' }}>
                <span>Title
                    <FormField>
                        <TextArea rows={1} placeholder='Enter a descriptive title...' />
                    </FormField>
                </span>
                Abstract
                <FormField>
                    <TextArea rows={1} placeholder='Enter a 1 paragraph abstract...' />
                </FormField>
                Article Text
                <FormField>
                    <TextArea rows={4} placeholder='Enter your article here...' />
                </FormField>
                <span>Tags
                    <FormField>
                        <TextArea rows={1} placeholder='Please add up to 3 tags to describe your article' />
                    </FormField>
                </span>
            </Form>
            <ConfirmButton />
        </>
    );
}

export default ArticleForm;