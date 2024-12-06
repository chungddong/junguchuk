import React, { useState } from 'react';
import "../css/LoginPage.css";

import SignInputBox from "../component/SignInputBox";
import { Link } from "react-router-dom";

import { MdOutlineEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";




function LoginPage() {

    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        //서버로 로그인 POST 요청
        axios.post('/api/login', {
            email: userEmail,
            passwd: userPassword
        },{withCredentials : true})
            .then((response) => {
                if (response.data === "Confirm") {
                    console.log('로그인 성공 :', response.data);

                    window.location.href = '/Main';
                }
            })
            .catch((error) => {
                console.error('로그인 에러 :', error);
                // 로그인 실패 처리
            });
    };

    
    return (

        <div className='Page'>

            <div className='SignBox'>

                <div className='LogoBox'>
                    <div className="Logo">

                        <img src="logo.png" width={"100%"}/>

                    </div>
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

                        <SignInputBox
                            icon={MdOutlineEmail}
                            iconSize={20}
                            type={"email"}
                            placeholder={'이메일 입력'}
                            onchange={(e) => setUserEmail(e.target.value)} />

                        <SignInputBox
                            icon={MdPassword}
                            iconSize={20}
                            type={"password"}
                            placeholder={'비밀번호 입력'}
                            onchange={(e) => setPassword(e.target.value)} />

                        <button type="submit" >로그인</button>

                    </form>

                    <div className='FormEtcBox'>

                        계정이 없으신가요? &nbsp; <a href={"/signup"}>회원가입</a>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default LoginPage;