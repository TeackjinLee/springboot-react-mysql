import ResponseDto from "../response.dto";
import {CommentListItem} from "types/interface";


export default interface GetCommentListResponseDto extends ResponseDto {
    commentPageList: {
        content:CommentListItem[]
        ,totalElements:number
        ,totalPages:number
    };
}