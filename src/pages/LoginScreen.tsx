import * as React from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useUser } from '../hooks/useUser'
import { useHistory } from 'react-router'

const LoginScreen = () => {
  const { login, isLoggen } = useUser()
  const history = useHistory()
  React.useEffect(() => {
    if (isLoggen) {
      setTimeout(() => {
        history.push({
          pathname: '/'
        })
      }, 200)
    }
  }, [isLoggen])
  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      validationSchema={Yup.object({
        username: Yup.string()
          .email('Invalid Email Address')
          .required('Required'),
        password: Yup.string()
          .min(8, 'The filed password is invalid. Min 8characters')
          .required('Required')
      })}
      onSubmit={({ username, password }, actions) => {
        login({ username, password })
        actions.setSubmitting(false)
      }}
    >
      <Form>
        <div>
          <label htmlFor="username">Username</label>
          <Field
            type="email"
            placeholder="Enter your email"
            autoComplete="off"
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
