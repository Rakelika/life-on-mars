import { useFormik } from "formik"
import "./contactPageStyles.scss"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2';

export default function ContactPage() {

    const validate = values => {
        const errors = {};

        if (!values.firstname) {
            errors.firstname = 'Required';
          } else if (values.firstname.length < 2) {
            errors.firstname = 'Must be 2 characters or more';
          }
        
        if (!values.lastname) {
            errors.lastname = 'Required';
          } else if (values.lastname.length < 2) {
            errors.lastname = 'Must be 2 characters or more';
          }      

        if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }

        if (!values.message) {
            errors.message = 'Required';
        }
        
          return errors;
    }

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        },
        validate,
        onSubmit: (values, { resetForm }) => {
            Swal.fire({
                title: 'Formulario enviado!',
                text: 'Tu formulario ha sido enviado exitosamente.',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              });
            console.log(values)
            resetForm();
        }
    })

    return (
        <div className="contactPageContainer">
            <div className="Container">
            <div className="FormContainer">
            <h1 className='h1SectionTitle'>Contact us</h1>
                <p>Thank you for your interest in our company. We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>
                <form className="ContactForm" onSubmit={formik.handleSubmit}>
                    <fieldset>
                    <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        placeholder='First name *'
                        className='simpleInput inputContactWidth'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.firstname}
                    />
                    {formik.touched.firstname && formik.errors.firstname ? (<div className='errorMessage'>{formik.errors.firstname}</div>) : null}
                    </fieldset>
                    <fieldset>
                    <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        placeholder='Last name *'
                        className='simpleInput inputContactWidth'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastname}
                    />
                     {formik.touched.lastname && formik.errors.lastname ? (<div className='errorMessage'>{formik.errors.lastname}</div>) : null}
                    </fieldset>
                    <fieldset>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email *'
                        className='simpleInput inputContactWidth'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (<div className='errorMessage'>{formik.errors.email}</div>) : null}
                    </fieldset>
                    <fieldset>
                    <textarea
                        id="message"
                        name="message"
                        type="textarea"
                        placeholder='Your message *'
                        className='simpleInput inputContactWidth'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.message}
                    />
                    {formik.touched.message && formik.errors.message ? (<div className='errorMessage'>{formik.errors.message}</div>) : null}
                    </fieldset>
                    <fieldset>
                    <label htmlFor="acceptPrivacyPolicy">
                    <input
                        id="acceptPrivacyPolicy"
                        name="acceptPrivacyPolicy"
                        type="checkbox"
                        className='acceptCheckbox'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.acceptPrivacyPolicy}
                        required
                    />
                    I have read and accept the <Link to="/privacy-policy">privacy policy</Link>.
                    </label>
                    </fieldset>
                    <button type="submit" className={`${!(formik.isValid && formik.dirty && formik.values.acceptPrivacyPolicy) ? 'primary-btn disabled-btn' : 'primary-btn'}`} disabled={!(formik.isValid && formik.dirty)}>Send</button>
                </form>
                </div>
            </div>
        </div>
    )
}