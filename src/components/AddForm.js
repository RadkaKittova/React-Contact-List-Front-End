import React, { Component } from 'react';
import {Formik, Field, ErrorMessage} from 'formik';

const initialState = {
    name: '',
    phone: '',
    email: '',
}

class AddForm extends Component {

    validateForm(values) {
        const errors = {};

        if (values.name ==='') {
            errors.name ='Please fill in the name.'
        }

        if (values.email !== '' &&
        !/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-z]+/.test(values.email)
        ) {
            errors.email = 'Please use a real email.';
        }
        return errors;

    }
    handleSubmit = (values, {setSubmitting}) => {

        const contact = {
            name: values.name,
            phone: values.phone,
            email: values.email,
        };

        this.props.onAddContact(contact, {
            setSubmitting,
        });

    };

    render() {
        return (
            <Formik initialValues={initialState} onSubmit={this.handleSubmit} validate={this.validateForm}>
            {({values, handleSubmit, handleChange, errors, handleBlur, isSubmitting, touched}) => {
                return(
                <form onSubmit={handleSubmit}>
                <div>
                    Name {values.name}:<br />
                    <input
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    {errors.email && touched.name && <p>{errors.name}</p> }
                </div>
                <div>
                    Phone: <br />
                <input
                        name="phone"
                        type="text"
                        value={values.phone}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    Email: <br />
                <Field
                        name="email"
                        type="text"
                    />
                <ErrorMessage 
                    name="email"
                    />

{errors.email && touched.email && <p>{errors.email}</p> }

                </div>

                <p>
                    {isSubmitting? (
                        'Submiting...'
                    ) : (
                        <button type="submit">AddForm</button>
                    
                    )}
                </p>

            </form>
                )
            }
        }
            </Formik>
        );
            
    }
}

export default AddForm;