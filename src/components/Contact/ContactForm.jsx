import './ContactForm.css'
import FormButtons from './FormButtons';

import { useState } from 'react';

import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";


const ContactForm = () => {

  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending...")
    const formData = new FormData(event.target)

    formData.append("access_key", "205881c5-0bfa-4e93-9523-81f375f5c37d")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json()

    if (data.success) {
      setResult("Form submitted successfully!")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult(data.message)
    }
  }

  return (
    <>
      <section className="form-wrapper">
        <form action="" id="contact-form" onSubmit={onSubmit}>
          <fieldset className="contact-field">
            <legend className='form-legend'>Your query is welcome</legend>
            
            <div className="form-div">
              <label htmlFor="fullname-input" className="form-label"><FaRegUser className='form-icon' /> Full name</label>
              <input type="text" name="fullname" id="fullname-input" />
            </div>
            <div className="form-div">
              <label htmlFor="email-input" className="form-label"><FiMail className='form-icon' /> Email</label>
              <input type="email" name="email" id="email-input" />
            </div>
            <div className="form-div">
              <label htmlFor="phone-input" className="form-label"><MdOutlinePhoneAndroid className='form-icon' /> Phone <span className='not-necessary-span'>{"(Not necessary)"}</span></label>
              <input type="tel" name="phone" id="phone-input" />
            </div>
            <div className="form-div">
              <label htmlFor="subject-input" className="form-label"><FaRegPenToSquare className='form-icon' /> Subject</label>
              <input type="text" name="subject" id="subject-input" />
            </div>
            <div className="form-div">
              <label htmlFor="textarea-input" className="form-label"><BiMessageDetail className='form-icon' /> Message</label>
              <textarea name="textarea" id="textarea-input" rows={"5"}></textarea>
              <input type="hidden" name="from_name" value="RD Portfolio" />
            <input type="checkbox" name="botcheck" id="" style={{display: 'none'}} />
            </div>
          </fieldset>
          <div className='result-div'>
          <p className='result-msg'>{result}</p>
          </div>
          <FormButtons />
        </form>
      </section>
    </>
  )
}

export default ContactForm