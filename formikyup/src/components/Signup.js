import React from 'react'
import { Formik, Form } from 'formik'

const Signup = () => {
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
            }}
        >
            {formik => {
                <div>
                    <h1>Sign Up</h1>
                    {console.log(formik)}
                    <Form>
                        
                    </Form>
                </div>
            }}
        </Formik>
    )
}

export default Signup