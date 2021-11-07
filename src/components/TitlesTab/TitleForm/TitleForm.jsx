import React from 'react';
import {MyTextInput} from "../../../contexts/FormInputs";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {Titles} from "../../../util/Titles";

export const TitleForm = (props) => {
    return (
        <>
            <h1 className={"text-2xl font-semibold text-white"}>Add Title</h1>
            <div className={"w-2/6"}>
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

                    <button className={"mt-2 p-1 pl-2 pr-2 bg-blue-900 border-2 border-blue-900 text-white text-sm rounded-lg hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 focus:border-4 focus:border-blue-900"} type="submit">Add title</button>
                </Form>
            </Formik>
            </div>
        </>
    );


};
