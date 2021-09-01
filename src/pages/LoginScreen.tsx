import * as React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const LoginScreen = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .email('Invalid Email Address')
          .required('Required'),
        password: Yup.string()
          .min(8, 'The filed password is invalid. Min 8characters')
          .required('Required')
      })}
      onSubmit={(values, actions) => {
        console.log(values)
        actions.setSubmitting(false)
      }}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field
            type="email"
            placeholder="Enter your email"
            autocomplete="off"
            name="username"
          />
          <ErrorMessage component="div" name="username" />
        </div>
        <div>
          <Field
            type="password"
            placeholder="Enter your password"
            name="password"
          />{' '}
          <ErrorMessage component="div" name="password" />
        </div>
        <div>
          <button type="submit">Sign me in</button>
        </div>
        <div>
          <span>
            Dont have an account? <Link to="/register">Sign up</Link>
          </span>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginScreen
