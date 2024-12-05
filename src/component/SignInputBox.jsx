import "../css/SignInputBox.css"
import { MdOutlineEmail } from "react-icons/md";

const SignInputBox = ({ onchange }) => {

    return (

        <div className="SignInputBox">
            <div className="InputBoxIcon">

                <MdOutlineEmail />

            </div>

            <input type="text" className="SignInput"
                placeholder="테스트" onChange={onchange}>

            </input>

            <div className="InputEndIcon">

            </div>

        </div>

    );

}

export default SignInputBox;