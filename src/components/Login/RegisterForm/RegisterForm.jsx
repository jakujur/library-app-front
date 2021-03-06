import {Form, Formik} from "formik";
import * as Yup from "yup";
import {NavLink, useHistory} from 'react-router-dom';
import {MyTextInput} from "../../../contexts/FormInputs";
import {Readers} from "../../../util/Readers";
import React from "react";

export const RegisterForm = () => {

    const history = useHistory();

    return (
        <div className={"m-auto max-w-lg"}>
            <h2>Register new account</h2>
            <Formik
                initialValues={{
                    name:'',
                    surname:'',
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .required('Please provide your name'),
                    surname: Yup.string()
                        .required('Please provide your surname'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Please provide email'),
                    password: Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Please enter password'),
                })}
                onSubmit={(values, {setSubmitting}) => {

                    Readers.registerReader(values)
                        .then(() => {
                            history.push('/login')
                            alert("You can now log in to your account")
                        })

                    setSubmitting(false);

                }}
            >
                <Form>

                    <MyTextInput
                        label="Name"
                        name="name"
                        type="string"
                        placeholder="Name"
                    />

                    <MyTextInput
                        label="Surname"
                        name="surname"
                        type="string"
                        placeholder="Surname"
                    />

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

                    <button type="submit" className={"mt-2 p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"}>Register</button>
                    <NavLink to={"/login"} activeClassName="active" className={"ml-2 mt-2 p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"}>
                        Back to login page
                    </NavLink>
                </Form>
            </Formik>

        </div>
    );
}