import React, {useEffect, useRef, useState} from 'react';
import './style.css';
import {useBoardStore} from "../../../stores";

//      component: 게시물 작성 화면 컴포넌트       //
export default function BoardWrite() {

    //      state: 본문 영역 요소 참조 상태     //
    const contentRef = useRef<HTMLTextAreaElement | null>(null);
    //      state: 이미지 입력 요소 참조 상태     //
    const imageInputRef = useRef<HTMLInputElement | null>(null);

    //      state: 게시물 상태       //
    const {title, setTitle} = useBoardStore();
    const {content, setContent} = useBoardStore();
    const {boardImageFileList, setBoardImageFileList} = useBoardStore();
    const {resetBoard} = useBoardStore();

    //      state: 게시물 이미지 미리보기 URL 상태      //
    const [imageUrls, setImageUrls] = useState<string[]>([]);

    //      effect: 마운트시 실행할 함수     //
    useEffect(() => {
        resetBoard();
    }, []);

    //      render: 게시물 작성 화면 렌더링       //
    return (
        <div id='board-write-wrapper'>
            <div className="board-write-container">
                <div className="board-write-box">
                    <div className="board-write-title-box">
                        <input className="board-write-title-input" type="text" placeholder="제목을 작성해주세요." value={title}/>
                    </div>
                    <div className="divider"></div>
                    <div className="board-write-content-box">
                        <textarea ref={contentRef} className="board-write-content-textarea" placeholder="본문을 작성해 주세요" value={content}/>
                        <div className="icon-button">
                            <div className="icon image-box-light-icon"></div>
                        </div>
                        <input ref={imageInputRef} type="file" accept="image/*" style={{display: 'none'}}/>
                    </div>
                    <div className="board-write-images-box">
                        <div className="board-write-image-box">
                            <img className='board-write-image' src="https://media.istockphoto.com/id/520700958/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%BD%83-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=" />
                            <div className="icon-button image-close">
                                <div className="icon close-icon"></div>
                            </div>
                        </div>
                        <div className="board-write-image-box">
                            <img className='board-write-image' src="https://media.istockphoto.com/id/520700958/ko/%EC%82%AC%EC%A7%84/%EC%95%84%EB%A6%84%EB%8B%A4%EC%9A%B4-%EA%BD%83-%EB%B0%B0%EA%B2%BD%EA%B8%B0%EC%88%A0.jpg?s=612x612&w=0&k=20&c=gJx5-O9U1qXKZqKwv4KunrBae7RDNRcdse1nOdSk_0w=" />
                            <div className="icon-button image-close">
                                <div className="icon close-icon"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}