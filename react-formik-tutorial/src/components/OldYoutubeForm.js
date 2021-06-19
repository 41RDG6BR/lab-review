
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNumber: ['', ''],
    phNumbers: ['']
}

const onSubmit = (values) => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    channel: Yup.string().required('Required')
})

function OldYoutubeForm() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <Field 
                    type='text' 
                    id='name' 
                    name='name' 
                />
                <ErrorMessage name='name' component={TextError} />
            </div>
            
            <div className='form-control'>
                <label htmlFor='email'>E-mail</label>
                <Field 
                    type='email' 
                    id='email' 
                    name='email' 
                />
                <ErrorMessage name='email'>
                    {/*render props pattern*/}
                    {errorMsg => <div className='error'>{errorMsg}</div>}
                </ErrorMessage>    
            </div>

            <div className='form-control'>
                <label htmlFor='name'>Channel</label>
                <Field 
                    type='text' 
                    id='channel' 
                    name='channel' 
                    placeholder='Youtube channel name'
                />
                <ErrorMessage name='channel' />
            </div>
            <div className='form-control'>
                <label htmlFor='comments'>Comments</label>
                <Field component='textarea' id='comments' name='comments' />
            </div>

            <div className='form-control'>
                <label htmlFor='address'>Address</label>
                <FastField name='address'>
                    {console.log('Field render')}
                    {
                        (props) => {
                            const { field, form, meta } = props
                            // console.log('Render props', props)
                            return (
                                <div>
                                 {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                 <input type='text' id='address' {...field} />
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
                                               
                        return <div>
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
                        </div>
                     }
                 }
             </FieldArray>
            </div>

            <button type='submit'>Submit</button>
        </Form>
      </Formik>
    );
  }
  
  export default OldYoutubeForm;
