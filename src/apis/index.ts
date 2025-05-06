import {SignInRequestDto} from "./request/auth";
import axios from "axios";
import {SignInResponseDto, SignUpResponseDto} from "./response/auth";
import {ResponseDto} from "./response";
import {GetSignInUserResponseDto} from "./response/user";
import {PostBoardRequestDto, PostCommentRequestDto} from "./request/board";
import {
    PostBoardResponseDto,
    GetBoardResponseDto,
    GetFavoriteListResponseDto,
    GetCommentListResponseDto, PutFavoriteResponseDto, PostCommentResponseDto, DeleteBoardResponseDto
} from "./response/board";

const DOMAIN = 'http://localhost:4001';

const API_DOMAIN = `${DOMAIN}/api/v1`;

const authorization = (accessToken: string) => {
    return { headers: {Authorization: `Bearer ${accessToken}`} }
};

const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;

export const signInRequest = async (requestBody: SignInRequestDto) => {
    const result =
        await axios.post(SIGN_IN_URL(), requestBody)
            .then(response => {
                const responseBody: SignInResponseDto = response.data;
                return responseBody;
            })
            .catch(error => {
                if (!error.response.data) return null;
                const responseBody: ResponseDto = error.response.data;
                return responseBody;
            });

    return result;
}

export const signUpRequest = async (requestBody: SignInRequestDto) => {
    const result =
        await axios.post(SIGN_UP_URL(), requestBody)
        .then(response => {
            const responseBody: SignUpResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response.data) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

const GET_BOARD_URL = (boardSeq: number | string) => `${API_DOMAIN}/board/${boardSeq}`;
const INCREASE_VIEW_COUNT = (boardSeq: number | string) => `${API_DOMAIN}/board/${boardSeq}/increase-view-count`;
const GET_FAVORITE_LIST_URL = (boardSeq: number | string) => `${API_DOMAIN}/board/${boardSeq}/favorite-list`;
const GET_COMMENT_LIST_URL = (boardSeq: number | string, page: number | string) => `${API_DOMAIN}/board/${boardSeq}/comment-page?page=${page}`;
const POST_BOARD_URL = () => `${API_DOMAIN}/board`;
const PUT_FAVORITE_URL = (boardSeq: number | string) => `${API_DOMAIN}/board/${boardSeq}/favorite`;
const POST_COMMENT_URL = (boardSeq: number | string) => `${API_DOMAIN}/board/${boardSeq}/comment`;
const DELETE_BOARD_URL = (boardSeq: number | string) => `${API_DOMAIN}/board/${boardSeq}`;

export const getBoardRequest = async (boardSeq: number | string) => {
    const result = await axios.get(GET_BOARD_URL(boardSeq))
        .then(response => {
            const responseBody: GetBoardResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

export const increaseViewCountRequest = async (boardSeq: number | string) => {
    const result = await axios.get(INCREASE_VIEW_COUNT(boardSeq))
        .then(response => {
            const responseBody: GetBoardResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

export const getFavoriteListRequest = async (boardSeq: number | string) => {
    const result = await axios.get(GET_FAVORITE_LIST_URL(boardSeq))
        .then(response => {
            const responseBody: GetFavoriteListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
};

export const getCommentListRequest = async (boardSeq: number | string, page: number | string) => {
    page = Number(page) -1;
    if (page < 0) page = 0;
    const result = await axios.get(GET_COMMENT_LIST_URL(boardSeq, page))
        .then(response => {
            console.log("==============");
            console.log(GET_COMMENT_LIST_URL);
            console.log("boardSeq:::",boardSeq,"page:::",page);
            console.log(response.data);
            const responseBody: GetCommentListResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

export const postCommentRequest = async (boardSeq: number | string, requestBody: PostCommentRequestDto, accessToken: string) => {
    const result = await axios.post(POST_COMMENT_URL(boardSeq), requestBody, authorization(accessToken))
        .then(response => {
            const responseBody: PostCommentResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

export const postBoardRequest = async (requestBody: PostBoardRequestDto, accessToken: string) => {
    const result =  await axios.post(POST_BOARD_URL(), requestBody, authorization(accessToken))
        .then(response => {
            const responseBody: PostBoardResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

export const deleteBoardRequest = async (boardSeq: number | string, accessToken: string) => {
    const result = await axios.delete(DELETE_BOARD_URL(boardSeq), authorization(accessToken))
        .then(respone => {
            const responseBody: DeleteBoardResponseDto = respone.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

export const putFavoriteRequest = async (boardSeq: number | string, accessToken: string) => {
    const result = await axios.put(PUT_FAVORITE_URL(boardSeq), {}, authorization(accessToken))
        .then(response => {
            const responseBody: PutFavoriteResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        })
    return result;
}

const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;
export const getSignInUserRequest = async (accessToken: string) => {
    const result = await axios.get(GET_SIGN_IN_USER_URL(), authorization(accessToken))
        .then(response => {
            const responseBody: GetSignInUserResponseDto = response.data;
            return responseBody;
        })
        .catch(error => {
            if (!error.response) return null;
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });
    return result;
}

const FILE_DOMAIN = `${DOMAIN}/file`;

const FILE_UPLOAD_URL = () => `${FILE_DOMAIN}/upload`;

const multipartFormData = { headers: { 'Content-Type' : 'multipart/form-data' } }

export const fileUploadRequest = async (data: FormData) => {
    const result = await axios.post(FILE_UPLOAD_URL(), data, multipartFormData)
        .then(response => {
            const responseBody: string = response.data;
            return responseBody
        })
        .catch(error => {
            return null;
        });
    return result;
}