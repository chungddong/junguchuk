import React, { useState } from "react";
import "../css/SideBar.css";
import { MdSpaceDashboard } from "react-icons/md";
import { MdMessage } from "react-icons/md";
import { MdChevronLeft } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { MdOutlineEventNote } from "react-icons/md";
import { MdOutlineChevronRight } from "react-icons/md";

function SideBar({ selectedNav, setSelectedNav }) {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    const handleNavItemClick = (itemName) => {
        setSelectedNav(itemName); // NavItem 클릭 시 MainPage의 상태 업데이트
    };

    return (
        <div className={`SideBar ${isExpanded ? "expanded" : "collapsed"}`}>
            <div className="SideTitleBox" onClick={toggleSidebar}>
                {isExpanded ? (
                    <>
                        <div className="SideTitle">메뉴</div>
                        <MdChevronLeft className="ToggleIcon" size={20} />
                    </>
                ) : (
                    <MdOutlineChevronRight className="ToggleIcon" size={20} />
                )}
            </div>

            <div className="NavBox">
                <div
                    className={`NavItem ${selectedNav === "대시보드" ? "active" : ""}`}
                    onClick={() => handleNavItemClick("대시보드")}
                >
                    <MdSpaceDashboard />
                    {isExpanded && <span className="NavText">대시보드</span>}
                </div>
                <div
                    className={`NavItem ${selectedNav === "단어 보기" ? "active" : ""}`}
                    onClick={() => handleNavItemClick("단어 보기")}
                >
                    <MdMessage />
                    {isExpanded && <span className="NavText">단어 보기</span>}
                </div>
                <div
                    className={`NavItem ${selectedNav === "단어 그룹" ? "active" : ""}`}
                    onClick={() => handleNavItemClick("단어 그룹")}
                >
                    <MdOutlineEventNote />
                    {isExpanded && <span className="NavText">자료 관리</span>}
                </div>
            </div>

            <div className="LogOutBox">
                <div className="LogoutButton">
                    <MdLogout className="NavIcon" />
                    {isExpanded && <span className="NavText">로그아웃 하기</span>}
                </div>
            </div>
        </div>
    );
}

export default SideBar;

