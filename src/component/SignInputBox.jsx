import "../css/SignInputBox.css"
import { CgSmileNone } from "react-icons/cg";

const SignInputBox = ({ icon: Icon, iconSize, type, placeholder, onchange }) => {

    return (

        <div className="SignInputBox">
            <div className="InputBoxIcon">

                {Icon ? <Icon size={iconSize} /> : <CgSmileNone />}

            </div>

            <input type={type} className="SignInput"
                placeholder={placeholder} onChange={onchange}>

            </input>

            <div className="InputEndIcon">

            </div>

        </div>

    );

}

export default SignInputBox;