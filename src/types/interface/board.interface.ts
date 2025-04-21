export default interface Board {
    boardSeq: number;
    title: string;
    content: string;
    boardImageList: string[];
    writeDatetime: string;
    writerEmail: string;
    writeNickname: string;
    writeProfileImage: string | null;
}