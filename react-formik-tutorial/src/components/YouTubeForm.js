
import { useFormik } from 'formik'

const initialValues = {
    //correspond to the name attribute in the individual fields
    name: '',
    email: '',
    channel: ''
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

function YouTubeForm() {

   const formik = useFormik({
       initialValues,
       onSubmit,
       validate
   })

    //console.log('Form values', formik.values)
    console.log('Form errors', formik.errors)

    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
            <div className='form-control'>
                <label htmlFor='name'>Name</label>
                <input 
                    type='text' 
                    id='name' 
                    name='name' 
                    onChange={formik.handleChange} 
                    value={formik.values.name} 
                    />
                {formik.errors.name ? ( 
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
                    value={formik.values.email}
                    />
                {formik.errors.email ? (
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
                    value={formik.values.channel}
                    />
                {formik.errors.channel ?(
                    <div className='error'>{formik.errors.channel}</div>
                ) : null}
            </div>

            <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
  
  export default YouTubeForm;
  