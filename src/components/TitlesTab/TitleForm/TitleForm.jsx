import './TitleForm.css'
import React from 'react';
import {MyTextInput} from "../../../contexts/FormInputs";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {Titles} from "../../../util/Titles";

export const TitleForm = (props) => {
    return (
        <>
            <h1>Add Title</h1>
            <div className={"table-form"}>
            <Formik
                initialValues={{
                    author: '',
                    title: '',
                    publicationYear:'',
                }}
                validationSchema={Yup.object({
                    author: Yup.string()
                        .required('Please enter author name and surname'),
                    title: Yup.string()
                        .required('Please provide books title'),
                    publicationYear: Yup.number()
                        .required('Please provide publication year'),
                })}
                onSubmit={(values, {setSubmitting, resetForm}) => {

                    Titles.addTitle(values)
                        .then(() => {
                            resetForm()
                            props.update()
                        })
                    setSubmitting(false);

                }}
            >
                <Form>

                    <MyTextInput
                        label="Author"
                        name="author"
                        type="string"
                        placeholder="Author's name and surname"
                    />

                    <MyTextInput
                        label="Title"
                        name="title"
                        type="string"
                        placeholder="Books's title"
                    />

                    <MyTextInput
                        label="Publication Year"
                        name="publicationYear"
                        type="number"
                        placeholder="Books's publication year"
                    />

                    <button type="submit">Add title</button>
                </Form>
            </Formik>
            </div>
        </>
    );


};
