
import { useFormik, Formik, Form, FieldArray, Field, FastField, ErrorMessage } from 'formik'
import TextError from './TextError'

import * as Yup from 'yup'

// const initialValues = {
//     //correspond to the name attribute in the individual fields
//     name: '',
//     email: '',
//     channel: ''
// }

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    phoneNumber: ['', ''],
    phNumbers: ['']
}

const onSubmit = (values) => {
    console.log('Form data', values)
}
const validate = (values) => {
        // values.name values.email values.channel
        // errors.name errors.email errors.channel
        // errors.name = 'This field is required'
        let errors = {}

        if(!values.name) {
            errors.name ='Required'
        }

        if(!values.email) {
            errors.email ='Required'
        } else if (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(values.email)) {
            errors.email = 'Invalid email format'
        }

        if(!values.channel) {
            errors.channel ='Required'
        }

    return errors
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel: Yup.string().required('Required'),
    comments: Yup.string().required('Required')
})

function YoutubeForm() {

   const formik = useFormik({
       initialValues,
       onSubmit,
       validationSchema
       //validate
   })

    // console.log('Form values', formik.values)
    // console.log('Form errors', formik.errors)
    // console.log('Visited fields', formik.touched)
    console.log('Formik props', formik)

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div>
                        <div className='form-control'>
                            <label htmlFor='name'>Name</label>
                            <input 
                                type='text' 
                                id='name' 
                                name='name' 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.name} 
                            />
                            {formik.touched.name && formik.errors.name ? ( 
                                <div className='error'>{formik.errors.name}</div>
                            ) : null}
                        </div>
                        
                        <div className='form-control'>
                            <label htmlFor='email'>E-mail</label>
                            <input 
                                type='email' 
                                id='email' 
                                name='email' 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className='error'>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className='form-control'>
                            <label htmlFor='name'>Channel</label>
                            <input 
                                type='text' 
                                id='channel' 
                                name='channel' 
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.channel}
                            />
                            {formik.touched.channel && formik.errors.channel ?(
                                <div className='error'>{formik.errors.channel}</div>
                            ) : null}
                        </div>

                        <button 
                            type='button' 
                            onClick={()=> formik.validateField('comments')}>
                            Validate comments
                        </button>
                        <button 
                            type='button' 
                            onClick={()=> formik.setFieldTouched()}>
                            Visit comments
                        </button>
                        <button 
                            type='button' 
                            onClick={() => formik.setTouched({
                            name: true,
                            email: true,
                            channel:true,
                            comments: true
                        })}>
                            Visit fields
                        </button>

                        <button type='submit'>Submit</button>
                </div>
                <div className='form-control'>
                <label htmlFor='comments'>Comments</label>
                <Field 
                    component='textarea' 
                    id='comments' 
                    name='comments' 
                    // validate={validateComments} 
                />
                <ErrorMessage name='comments' components={TextError} />
            </div>

            <div className='form-control'>
             <label>Address</label>
             <FastField name='address'>
                 {
                     (props) => {
                         console.log('Field render')
                         const { field, meta } = props
                         console.log('Render props', props)
                        return (
                            <div>
                                <input type='text' id='address' {...field} />
                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                            </div>
                        )
                     }
                 }
             </FastField>
            </div>

            <div className='form-control'>
             <label htmlFor='twitter'>twitter profile</label>
             <Field text='text' id='twitter' name='social.twitter' />
            </div>

            <div className='form-control'>
             <label htmlFor='facebook'>facebook profile</label>
             <Field text='text' id='facebook' name='social.facebook' />
            </div>

            <div className='form-control'>
             <label htmlFor='facebook'>Primary phone number</label>
             <Field text='text' id='primaryPh' name='phoneNumber[0]' />
            </div>

            <div className='form-control'>
             <label htmlFor='facebook'>Secondary phone number</label>
             <Field text='text' id='secondaryPh' name='phoneNumber[1]' />
            </div>

            <div className='form-control'>
             <label>List of phone number</label>
             <FieldArray name='phNumbers'>
                 {
                     (fieldArrayProps) => {
                        console.log('fieldArrayProps', fieldArrayProps)
                        const {push, remove, form} = fieldArrayProps
                        const { values } = form
                        const { phNumbers } = values
                        console.log('Form errors', form.errors)
                        return (<div>
                            {phNumbers.map((phNumber, index) => (
                                <div key={index}>
                                    <Field name={`phNumbers[${index}]`} />
                                    {index > 0 && (
                                        <button type='button' onClick={()=> remove(index)}>
                                            {' '}
                                            - {' '}
                                        </button>
                                        )}
                                        <button type='button' onClick={()=> push('')}>
                                        {' '}
                                            + {' '}
                                        </button>
                                </div>
                            ))}
                        </div>)
                     }
                 }
             </FieldArray>
             </div>
            </Form>
        </Formik>
    );
  }
  
  export default YoutubeForm;
  