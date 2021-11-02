import {Form, Formik} from "formik";
import "./LoginForm.css"
import * as Yup from "yup";
import React from "react";
import {logInUser} from "../../../util/Login";
import {MyTextInput} from "../../../contexts/FormInputs";


export const LoginForm = ({setUser}) => {

    return (
        <div className={"login-form"}>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Please provide email'),
                    password: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Please enter password'),
                })}
                onSubmit={(values, {setSubmitting}) => {

                        logInUser(values.email, values.password)
                            .then(user => {
                                setUser(user)
                                localStorage.setItem('user', JSON.stringify(user));
                            })
                        setSubmitting(false);

                }}
            >
                <Form>

                    <MyTextInput
                        label="Email Address"
                        name="email"
                        type="email"
                        placeholder="jurak@formik.com"
                    />

                    <MyTextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                    />

                    <button type="submit">Log In</button>
                </Form>
            </Formik>
        </div>
    );
};