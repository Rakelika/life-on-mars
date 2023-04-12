import { useFormik } from "formik"
import "./contactPageStyles.scss"
import { Link } from "react-router-dom"

export default function ContactPage() {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        },
        onSubmit: (values, { resetForm }) => {
            alert("thankyou");
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
                    />
                    I have read and accept the <Link to="/privacy-policy">privacy policy</Link>.
                    </label>
                    </fieldset>
                    <button type="submit" className='primary-btn' disabled={!(formik.isValid && formik.dirty)}>Send</button>
                </form>
                </div>
            </div>
        </div>
    )
}