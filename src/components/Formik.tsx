import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Yup from 'yup';
import { Formik, Field, Form, FormikHelpers } from 'formik';

import '../FormClick.css'
import { Link } from 'react-router-dom';
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    
  });
  

interface Values {
  firstName: string;
  lastName: string;
  email: string;
}

export const Formikfrom = () => {
   
  return (
    <div>
      
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(
          
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        
        }}
      >
        <Form>
          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName"  className="field" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName"  className="field" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder="john@acme.com"
            type="email"
            className="field"
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};


