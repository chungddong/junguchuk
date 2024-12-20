import '../css/Header.css';
import { BsPersonCircle } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";

function Header() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleLogoClick = () => {
        window.location.href = "/"; // '/' 경로로 이동
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMenuClick = (action) => {
        if (action === "mypage") {
            window.location.href = "/mypage"; // 마이페이지로 이동
        } else if (action === "logout") {
            console.log("로그아웃"); // 로그아웃 로직 추가
        }
        setIsDropdownOpen(false); // 드롭다운 닫기
    };

    return (
        <div className="Header">
            <div className="LogoBox" onClick={handleLogoClick}>
                <img src="logo.png" height={"30px"} />
            </div>

            <div className="UserBox" onClick={toggleDropdown}>
                <div className="UserIcon">
                    <BsPersonCircle size={25} />
                </div>
                <div className="UserName">홍길동</div>
                <div className="EtcIcon">
                    <MdKeyboardArrowDown size={20} />
                </div>
            </div>

            {isDropdownOpen && (
                <div className="DropdownMenu">
                    <div className="DropdownItem" onClick={() => handleMenuClick("mypage")}>
                        마이페이지
                    </div>
                    <div className="DropdownItem" onClick={() => handleMenuClick("logout")}>
                        로그아웃
                    </div>
                </div>
            )}
        </div>
    );
}

export default Header;
    