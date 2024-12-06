import React, { useState } from "react";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import DashBoard from "../Page/Dashboard";
import ShowWord from "../Page/ShowWord";
import WordGroup from "../Page/WordGroup";
import "../css/MainPage.css";

function MainPage() {
    const [selectedNav, setSelectedNav] = useState("대시보드"); // 선택된 NavItem 상태

    // 페이지 컴포넌트를 매핑하는 객체
    const pages = {
        "대시보드": <DashBoard />,
        "단어 보기": <ShowWord />,
        "단어 그룹": <WordGroup />
    };

    return (
        <div className="MainPage">
            <Header />
            <div className="PageBox">
                <SideBar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
                <div className="ViewBox">
                    {pages[selectedNav]} {/* selectedNav에 맞는 페이지 컴포넌트 렌더링 */}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
