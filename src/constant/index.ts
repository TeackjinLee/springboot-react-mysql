export const MAIN_PATH = () => '/';
export const AUTH_PATH = () =>  '/auth';
export const SEARCH_PATH = (searchWord: string) => `/search/${searchWord}`;
export const USER_PATH = (userEmail: string) => `/user/${userEmail}`;
export const BOARD_PATH = () => '/board';
export const BOARD_DETAIL_PATH = (boardSeq: string | number) => `detail/${boardSeq}`;
export const BOARD_WRITE_PATH = () => 'write';
export const BOARD_UPDATE_PATH = (boardSeq: string | number) => `update/${boardSeq}`;