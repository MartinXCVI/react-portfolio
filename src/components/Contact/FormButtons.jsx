import { GrSend } from "react-icons/gr";
import { GiBroom } from "react-icons/gi";

const FormButtons = () => {
  return (
    <>
      <div className="form-buttons-div">
        <button className='form-btn send-btn' type="submit"><GrSend /> Send</button>
        <button className='form-btn reset-btn' type="reset"><GiBroom /> Reset</button>
      </div>
    </>
  )
}

export default FormButtons