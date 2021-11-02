import React from 'react';
import {MyTextInput, MySelect} from "../../../contexts/FormInputs";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import {Books} from "../../../util/Books";

export const BooksForm = (props) => {
    return (
        <>
            <h1>Add Book</h1>
            <div className={"table-form"}>
                <Formik

                    initialValues={{
                        title: '',
                        status: '',
                        image: '',
                        releaseDate:'',
                    }}

                    validationSchema={Yup.object({
                        title: Yup.string()
                            .required('Please enter title'),
                        status: Yup.string()
                            .required('Please select status'),
                        image: Yup.string()
                            .required('Please provide image link'),
                        releaseDate: Yup.string()
                            .required('Please enter date'),
                    })}

                    onSubmit={(values, {setSubmitting, resetForm }) => {

                        Books.addBook(values)
                            .then(() => {
                                resetForm()
                                props.update()
                            })

                        setSubmitting(false);

                    }}
                >
                    <Form>

                        <MyTextInput
                            label="Title"
                            name="title"
                            type="string"
                            placeholder="Books's title"
                        />

                        <MySelect
                            label="Status"
                            name="status">
                                <option value="">Select book status</option>
                                <option value="available">available</option>
                                <option value="unavailable">unavailable</option>
                                <option value="lost">lost</option>
                                <option value="rented">rented</option>
                                <option value="damaged">damaged</option>
                        </MySelect>

                        <MyTextInput
                            label="Image link"
                            name="image"
                            type="string"
                            placeholder="Image Link"
                        />

                        <MyTextInput
                            label="Release date"
                            name="releaseDate"
                            type="date"
                            placeholder="Books's release date"
                        />

                        <button type="submit">Add book</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}