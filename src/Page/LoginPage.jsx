import "../css/LoginPage.css";

import SignInputBox from "../component/SignInputBox";
import { Link } from "react-router-dom";



function LoginPage() {

    return (

        <div className='Page'>

            <div className='SignBox'>

                <div className='LogoBox'>
                    <div className="Logo">

                    </div>
                    AI LOVE VOCA
                </div>

                <div className='FormBox'>

                    <div className='FormMessage'>

                        <div className="FormTitle">
                            로그인
                        </div>

                        <div className="FormSubTitle">
                            돌아오신 것을 환영합니다! 로그인을 위해서 입력해주세요
                        </div>

                    </div>

                    <form className="SignForm" >

                        <SignInputBox onchange={console.log("안녕")}/>

                        <SignInputBox onchange={console.log("안녕")}/>

                        <button type="submit" >로그인</button>

                    </form>

                    <div className='FormEtcBox'>

                        계정이 없으신가요? &nbsp; <Link to={"/signup"}>회원가입</Link>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default LoginPage;