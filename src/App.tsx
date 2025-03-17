import React, {useState} from 'react';
import './App.css';
import BoardItem from 'components/BoardItem'
import {latestBoardListMock, top3BoardListMock, commentListMock, favoriteListMock} from 'mocks';
import Top3Item from "./components/Top3Item";
import CommentItem from "./components/CommentItem";
import FavoriteItem from "./components/FavoriteItem";
import InputBox from "./components/InputBox";
import Footer from "./layouts/Footer";
// commit 고침
function App() {

    const [value, setValue] = useState<string>('');

    return (
        <>
            <Footer />
            {/*<InputBox label='이메일' type='text' placeholder='이메일 주소를 입력해주세요' value={value} error={false} setValue={setValue} />*/}

            {/*<div style={{ display: 'flex', columnGap: '30px', rowGap: '20px' }}>*/}

            {/*    {favoriteListMock.map(favoriteListItem => <FavoriteItem favoriteListItem={favoriteListItem} />)}*/}
            {/*</div>*/}
            {/*<div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: '30px' }}>*/}

            {/*    {commentListMock.map(commentItem => <CommentItem commentListItem={commentItem} />)}*/}
            {/*</div>*/}
          {/*<div style={{ display: 'flex', justifyContent: 'center', gap: '24px' }}>*/}
          {/*    {top3BoardListMock.map(top3ListItem => <Top3Item top3ListItem={top3ListItem}/>)}*/}
          {/*</div>*/}
          {/*{latestBoardListMock.map(boardListItem => <BoardItem boardListItem={boardListItem}/> )}*/}
        </>
  );
}

export default App;
