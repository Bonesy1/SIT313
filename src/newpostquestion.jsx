import React from "react";
import { Header, Radio, Grid, GridColumn, GridRow, Form, FormField, TextArea} from 'semantic-ui-react'
import ConfirmButton from "./confirmbutton";
function NewPostQuestion() {
    return (
        <>
            <Header as='h3' block>
                What question would you like to ask?
            </Header>
            <Form>
                <span>Title
                    <FormField>
                        <TextArea rows={1} placeholder='Start your question with how, what, or why...' />
                    </FormField>
                </span>
                Describe your problem
                <FormField>
                    <TextArea rows={4} placeholder='Enter your question here...' />
                </FormField>
                <span>Tags
                    <FormField>
                        <TextArea rows={1} placeholder='Please add up to 3 tags to describe your question' />
                    </FormField>
                </span>
            </Form>
            <ConfirmButton />
        </>
    );
}

export default NewPostQuestion;