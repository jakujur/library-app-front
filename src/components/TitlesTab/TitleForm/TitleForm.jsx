import React from 'react';
import { useFormik } from 'formik';
import {Titles} from "../../../util/Titles";

export const TitleForm = () => {
    // Note that we have to initialize ALL of fields with values. These
    // could come from props, but since we don’t want to prefill this form,
    // we just use an empty string. If we don’t do this, React will yell
    // at us.
    const formik = useFormik({
        initialValues: {
            author: '',
            title: '',
            publicationYear: '',
        },
        onSubmit: values => {
            Titles.addToWatchlist(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="author">Author</label>
            <input
                id="author"
                name="author"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.author}
            />

            <label htmlFor="title">Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.title}
            />

            <label htmlFor="publicationYear">Publication year</label>
            <input
                id="publicationYear"
                name="publicationYear"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.publicationYear}
            />

            <button type="submit">Submit</button>
        </form>
    );
};
