import React from 'react';
import './style.css';

//      component: 게시물 상세 화면 컴포넌트       //
export default function BoardDetail() {
    //      component: 게시물 상세 상단 화면 컴포넌트       //
    const BoardDetailTop = () => {
        //      render: 게시물 상세 상단 화면 렌더링      //
        return (
            <div id="board-detail-top">
                <div className='board-detail-top-hearder'>
                    <div className="board-detail-title">{'오늘 점심 뭐먹지? 추천 부탁드립니다.'}</div>
                    <div className="board-detail-top-sub-box">
                        <div className="board-detail-write-info-box">
                            <div className="board-detail-writer-profile-image"></div>
                            <div className="board-detail-writer-nickname">{'안녕코린이'}</div>
                            <div className="board-detail-info-divider">{'\|'}</div>
                            <div className="boarcd-detail-writer-date">{'2025. 05. 12'}</div>
                        </div>
                        <div className="icon-button">
                            <div className="icon more-icon"></div>
                        </div>
                        <div className="board-detail-more-box">
                            <div className="board-detail-update-button">{'수정'}</div>
                            <div className="divider"></div>
                            <div className="board-detail-delete-button">{'삭제'}</div>
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="board-detail-top-main">
                    <div className="baord-detail-top-main">{'오늘 점심을 뭐먹을 지 너무 고민이 되는 데 뭐 먹을까? 나점심 안먹음...'}</div>
                    <div className="board-detail-main-image"></div>
                </div>
            </div>
        );
    }
    //      component: 게시물 상세 하단 화면 컴포넌트       //
    const BoardDetailBottom = () => {
        //      render: 게시물 상세 하단 화면 렌더링      //
        return (<></>);
    }

    //      render: 게시물 상세 화면 렌더링      //
    return (
        <div id='board-detail-wrapper'>
            <div className="board-detail-container">
                <BoardDetailTop/>
                <BoardDetailBottom/>
            </div>
        </div>
    )
}