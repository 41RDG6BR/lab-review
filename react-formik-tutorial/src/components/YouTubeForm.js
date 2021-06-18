
import { useFormik } from 'formik'

function YouTubeForm() {

   const formik = useFormik({
       initialValues : {
           //correspond to the name attribute in the individual fields
           name: '',
           email: '',
           channels: ''
       }
   })

   console.log('Form values', formik.values)

    return (
      <div>
        <form>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

            <label htmlFor='email'>E-mail</label>
            <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

            <label htmlFor='name'>Channel</label>
            <input type='text' id='channel' name='channel' onChange={formik.handleChange} value={formik.values.channel}/>

            <button>Submit</button>
        </form>
      </div>
    );
  }
  
  export default YouTubeForm;
  