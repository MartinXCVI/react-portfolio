import './ContactForm.css'
import FormButtons from './FormButtons';

import { FaRegUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { BiMessageDetail } from "react-icons/bi";


const ContactForm = () => {
  return (
    <>
      <section className="form-wrapper">
        <form action="" id="contact-form">
          <fieldset className="contact-field">
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
            </div>
          </fieldset>
          <FormButtons />
        </form>
      </section>
    </>
  )
}

export default ContactForm