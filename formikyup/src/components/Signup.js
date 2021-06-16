import React from 'react'
import { Formik, Form } from 'formik'

const Signup = () => {
    return (
        <Formik>
            {formik => {
                console.log(formik)
            }}
        </Formik>
    )
}

export default Signup