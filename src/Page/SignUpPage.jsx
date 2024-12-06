import React, { useState } from 'react';
import axios from "axios";

import "../css/LoginPage.css";

import SignInputBox from "../component/SignInputBox";
import { Link } from "react-router-dom";

import { MdOutlineEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineInsertChart } from "react-icons/md";


function SignUpPage() {

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userToeic, setToeic] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();

        //서버로 회원가입 POST 요청
        axios.post('/api/signup', {
            username : userName,
            email: userEmail,
            passwd : userPassword,
            toeic : userToeic,
        },{withCredentials : true})
            .then((response) => {
                if (response.data === "Confirm") {
                    console.log('회원가입 성공 :', response.data);

                    window.location.href = '/main';
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

                        <img src="logo.png" width={"100%"} />

                    </div>
                </div>

                <div className='FormBox'>

                    <div className='FormMessage'>

                        <div className="FormTitle">
                            회원가입
                        </div>

                        <div className="FormSubTitle">

                        </div>

                    </div>

                    <form className="SignForm" onSubmit={handleSignUp}>

                        <SignInputBox
                            icon={MdOutlinePersonOutline}
                            iconSize={20}
                            type={"text"}
                            placeholder={'유저명 입력'}
                            onchange={(e) => setUserName(e.target.value)} />

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

                        <SignInputBox
                            icon={MdPassword}
                            iconSize={20}
                            type={"password"}
                            placeholder={'비밀번호 확인 입력'}
                            onchange={(e) => setPassword(e.target.value)} />

                        <SignInputBox
                            icon={MdOutlineInsertChart}
                            iconSize={20}
                            type={"number"}
                            placeholder={'토익 점수 입력'}
                            onchange={(e) => setToeic(e.target.value)} />

                        <button type="submit" >회원가입</button>

                    </form>

                    <div className='FormEtcBox'>

                        계정이 있으신가요? &nbsp; <a href={"/"}>로그인</a>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default SignUpPage;