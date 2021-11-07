import {Form, Formik} from "formik";
import * as Yup from "yup";
import React from "react";
import {logInUser} from "../../../util/Login";
import {MyTextInput} from "../../../contexts/FormInputs";
import {NavLink} from "react-router-dom";


export const LoginForm = ({setUser}) => {

    return (
        <div>
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
                        placeholder="email@email.com"
                    />

                    <MyTextInput
                        label="Password"
                        name="password"
                        type="password"
                        placeholder="Enter password"
                    />

                    <button
                        className={"mt-2 p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"}
                        type="submit">Log In
                    </button>

                    <NavLink to={"/register"} activeClassName="active"
                             className={"ml-2 p-1 pl-2 pr-2 bg-transparent border-2 border-blue-900 text-blue-900 text-sm rounded-lg hover:bg-blue-900 hover:text-gray-100 focus:border-4 focus:border-blue-900"}>
                        Not registered yet? Click me!
                    </NavLink>
                </Form>
            </Formik>
        </div>
    );
};