import { GrSend } from "react-icons/gr";
import { GiBroom } from "react-icons/gi";
import { JSX } from 'react'

const FormButtons = (): JSX.Element => {

  return (
    <div className="form-buttons-div">
      <button
        className='form-btn send-btn'
        type="submit"
        title="Send button"
        aria-label="Send Form"
      >
        <GrSend /> Send
      </button>
      <button
        className='form-btn reset-btn'
        type="reset"
        title="Reset button"
        aria-label="Reset Form"
      >
        <GiBroom /> Reset
      </button>
    </div>
  )
}

export default FormButtons