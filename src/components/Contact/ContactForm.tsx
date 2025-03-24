import FormButtons from './FormButtons';

import { useState } from 'react';
import { JSX, FormEvent } from 'react';

import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";


const ContactForm = (): JSX.Element => {

  const [result, setResult] = useState<string>("")

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setResult("Sending...")

    const formElement = event.currentTarget
    const formData = new FormData(formElement)

    const apiKey = import.meta.env.VITE_FORM_ACCESS_KEY
    formData.append("access_key", apiKey)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })

      const data: { success: boolean; message?: string; } = await response.json()

      if (data.success) {
        setResult("Form submitted successfully!")
        formElement.reset()
      } else {
        console.error("Error", data)
        setResult(data.message || "An unexpected error ocurred")
      }
    } catch(error: unknown) {
      if(error instanceof Error) {
        console.error(`Error while attempting to submit form: ${error.message || error}`)
      } else {
        console.error(`Error while attempting to submit form: ${error}`)
      }
      setResult("Failed to submit form. Please try again later")
    }
  }

  return (
    <section className="form-wrapper" data-aos="zoom-in" data-aos-easing="ease-out-cubic" data-aos-duration="1500" data-aos-once="true">
      <form id="contact-form" onSubmit={onSubmit}>
        <fieldset className='contact-fieldset'>
          <legend className='form-legend'>Your query is welcome</legend>     
          <section className="contact-field first-form-field">
            {/* Full Name */}
            <div className="form-div">
              <label htmlFor="fullname-input" className="form-label">
                <FaRegUser className='form-icon' /> Full name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname-input"
                placeholder='Your full name'
                autoComplete='on'
                required
                aria-label='Full Name'
              />
            </div>
            {/* Email */}
            <div className="form-div">
              <label htmlFor="email-input" className="form-label">
                <FiMail className='form-icon' /> Email
              </label>
              <input
                type="email"
                name="email"
                id="email-input"
                placeholder='Your email'
                autoComplete='on'
                required
                aria-label='Email'
              />
            </div>
            {/* Phone */}
            <div className="form-div">
              <label htmlFor="phone-input" className="form-label">
                <MdOutlinePhoneAndroid className='form-icon' /> Phone <span className='not-necessary-span'>{"(Optional))"}</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone-input"
                placeholder='Optionally your phone'
                autoComplete='on'
                aria-label='Phone'
              />
            </div>
            {/* Subject */}
            <div className="form-div">
              <label htmlFor="subject-input" className="form-label">
                <FaRegPenToSquare className='form-icon' /> Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject-input"
                placeholder='Your subject'
                aria-label='Subject'
              />
            </div>
            {/* Message */}
            <div className="form-div textarea-div">
              <label htmlFor="textarea-input" className="form-label">
                <BiMessageDetail className='form-icon' /> Message
              </label>
              <textarea
                name="textarea"
                id="textarea-input"
                rows={5}
                placeholder='Your message'
                required
                aria-label='Message'
              ></textarea>
              {/* Additional configurations */}
              <input type="hidden" name="from_name" value="MartinXCVI Portfolio" />
              <input type="checkbox" name="botcheck" id="" style={{display: 'none'}} />
            </div>
          </section>
        </fieldset>
        {/* Form submit result and send/reset buttons */}
        <div className='result-div'>
          <p className='result-msg'>{result}</p>
        </div>
        <FormButtons />
      </form>
    </section>
  )
}

export default ContactForm