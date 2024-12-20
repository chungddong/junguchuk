import "../css/WordGroup.css"

import { IoMdAdd } from "react-icons/io";
import { MdOutlineChevronRight } from "react-icons/md";
import { MdMoreHoriz } from "react-icons/md";
import { MdCircle } from "react-icons/md";

import { useState } from "react";

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import CheckGroup from "../component/CheckGroup"


function DragTest() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newGroupName, setNewGroupName] = useState("");

    const wordGroups = [
        { id: 1, name: 'TOEIC', words: ['abandon', 'ability', 'achieve', 'anticipate'] },
        { id: 2, name: '일상생활', words: ['hello', 'goodbye', 'thank you', 'sorry'] },
        { id: 3, name: '컴퓨터', words: ['software', 'hardware', 'algorithm', 'database'] }
    ];

    const handleAddGroup = (e) => {
        e.preventDefault();
        // 그룹 추가 로직
        console.log("New group name:", newGroupName);
    };

    const onDragEnd = () => {
        console.log("onDragEnd!");
    }

    return (
        <>

            <div className="PageTitleBox">
                <h2>단어장 그룹 드래그 테스트</h2>

                <div className="AddGroupBtn" onClick={() => setIsModalOpen(true)}>
                    그룹 생성
                </div>
            </div>

            <div className="GroupBox">

                {/*드래그 가능 영역 */}
                <DragDropContext onDragEnd={onDragEnd}>

                    <Droppable droppableId="one">
                        {(provided) => (
                            <ul ref={provided.innerRef} {...provided.droppableProps}>
                                <Draggable draggableId="first" index={0}>
                                    {(provided) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            one
                                        </li>
                                    )}
                                </Draggable>
                                <Draggable draggableId="second" index={1}>
                                    {(provided) => (
                                        <li
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            two
                                        </li>
                                    )}
                                </Draggable>
                            </ul>
                        )}
                    </Droppable>

                </DragDropContext >

                <CheckGroup/>

            </div>



        </>
    );
}

export default DragTest;
