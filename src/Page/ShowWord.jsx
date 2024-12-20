import "../css/ShowWord.css"
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineChevronRight } from "react-icons/md";

function ShowWord() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newGroupName, setNewGroupName] = useState("");
    const [isRotated, setIsRotated] = useState(false);

    // 테스트용 단어그룹 목록
    const [wordGroups, setWordGroups] = useState([
        { id: '1', name: 'TOEIC' },
        { id: '2', name: '일상생활'},
    ])

    const handleAddGroup = (e) => {
        e.preventDefault();
        // 그룹 추가 로직
        console.log("New group name:", newGroupName);
        setNewGroupName("");
        setIsModalOpen(false); // 모달 닫기
    };


    return (
        <>

            <div className="PageTitleBox">
                <h2>AI 단어보기</h2>
            </div>

            <div className="PageContentBox">

                <div className="WordBox">

                    <div className="Word" onClick={() => setIsRotated(!isRotated)} style={{ transform: isRotated ? 'rotateY(180deg)' : 'none', transition: 'transform 0.5s ease-in-out' }}>

                        <div className="cardFront">

                            <div className="WordText">
                                abandon
                            </div>

                            <div className="WordBlurContainer">
                            </div>

                        </div>

                        <div className="cardBack">

                            <div className="WordText">
                                abandon
                            </div>

                            <div className="WordBlurContainer">
                                <div className="WordBlur">
                                    버리다
                                </div>
                            </div>

                            <div className="WordEx">
                                the abandon facility is too big
                            </div>

                        </div>


                    </div>

                    <div className="HintText">
                        단어 카드를 클릭해서 정답을 확인해보세요
                    </div>

                </div>

                <div className="ToolBox">
                    <div className="ToolBtn" onClick={() => setIsModalOpen(true)}>
                        <IoMdAdd size={30} />
                    </div>
                    <div className="ToolBtn">
                        <MdOutlineChevronRight size={30} />
                    </div>
                </div>

            </div>

            {isModalOpen && (
                <div className="ModalOverlay" onClick={() => setIsModalOpen(false)}>
                    <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
                        <h3>그룹에 추가</h3>
                        <div className="GroupListBox">

                            
                            
                        </div>
                        <div className="ModalActions">
                            <button onClick={handleAddGroup}>추가</button>
                            <button onClick={() => setIsModalOpen(false)}>취소</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default ShowWord;
