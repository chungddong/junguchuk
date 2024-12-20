import "../css/WordGroup.css";
import { IoMdAdd } from "react-icons/io";
import { MdMoreHoriz, MdCircle } from "react-icons/md";
import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function WordGroup() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newGroupName, setNewGroupName] = useState("");
    const [wordGroups, setWordGroups] = useState([
        { id: '1', name: 'TOEIC', words: ['abandon', 'ability', 'achieve', 'anticipate'] },
        { id: '2', name: '일상생활', words: ['hello', 'goodbye', 'thank you', 'sorry'] },
        { id: '3', name: '컴퓨터', words: ['software', 'hardware', 'algorithm', 'database'] },
    ]);

    const handleAddGroup = (e) => {
        e.preventDefault();
        // 그룹 추가 로직
        console.log("New group name:", newGroupName);
        setNewGroupName("");
        setIsModalOpen(false); // 모달 닫기
    };

    const onDragEnd = (result) => {
        const { source, destination } = result;

        // 드래그 취소 시 아무것도 하지 않음
        if (!destination) return;

        // 같은 그룹 내에서 순서 변경
        if (source.droppableId === destination.droppableId) {
            const groupIndex = wordGroups.findIndex(group => group.id === source.droppableId);
            const items = Array.from(wordGroups[groupIndex].words);
            const [movedItem] = items.splice(source.index, 1);
            items.splice(destination.index, 1, movedItem);

            const newGroups = [...wordGroups];
            newGroups[groupIndex].words = items;
            setWordGroups(newGroups);
        }
        // 다른 그룹으로 이동
        else {
            const sourceGroupIndex = wordGroups.findIndex(group => group.id === source.droppableId);
            const destinationGroupIndex = wordGroups.findIndex(group => group.id === destination.droppableId);

            const sourceItems = Array.from(wordGroups[sourceGroupIndex].words);
            const destinationItems = Array.from(wordGroups[destinationGroupIndex].words);

            const [movedItem] = sourceItems.splice(source.index, 1);
            destinationItems.splice(destination.index, 0, movedItem);

            const newGroups = [...wordGroups];
            newGroups[sourceGroupIndex].words = sourceItems;
            newGroups[destinationGroupIndex].words = destinationItems;

            setWordGroups(newGroups);
        }
    };

    return (
        <>

            <div className="PageTitleBox">
                <h2>단어장 그룹</h2>

                <div className="AddGroupBtn" onClick={() => setIsModalOpen(true)}>
                    그룹 생성
                </div>
            </div>

            <DragDropContext onDragEnd={onDragEnd}>
                <div className="GroupBox">
                    {wordGroups.map((group, groupIndex) => (
                        <Droppable droppableId={group.id} key={group.id}>
                            {(provided) => (
                                <div
                                    className="WordGroup"
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                >
                                    <div className="WordGroupTitle">
                                        <h3>{group.name}</h3>
                                        <div className="GroupBtn">
                                            <MdMoreHoriz />
                                        </div>
                                    </div>

                                    <div className="WordGroupItems">
                                        {group.words.map((word, wordIndex) => (
                                            <Draggable
                                                key={`${group.id}-${word}`}
                                                draggableId={`${group.id}-${word}`}
                                                index={wordIndex}
                                            >
                                                {(provided) => (
                                                    <div
                                                        className="WordGroupItem"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >
                                                        <div className="GroupWordText">
                                                            {word}
                                                        </div>
                                                        <div className="WordMean">
                                                            <MdCircle size={10} />
                                                            버리다
                                                        </div>

                                                        <div className="GroupWordEx"></div>
                                                    </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </div>
                                </div>
                            )}
                        </Droppable>
                    ))}
                </div>
            </DragDropContext>

            {isModalOpen && (
                <div className="ModalOverlay" onClick={() => setIsModalOpen(false)}>
                    <div className="ModalContent" onClick={(e) => e.stopPropagation()}>
                        <h3>그룹 생성</h3>
                        <input
                            type="text"
                            placeholder="그룹 이름 입력"
                            value={newGroupName}
                            onChange={(e) => setNewGroupName(e.target.value)}
                        />
                        <div className="ModalActions">
                            <button onClick={handleAddGroup}>확인</button>
                            <button onClick={() => setIsModalOpen(false)}>취소</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default WordGroup;
