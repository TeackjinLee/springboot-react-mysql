export default interface SignUpRequestDto {
    email: string;
    password: string;
    nickname: string;
    address: string;
    addressDetail: string | null;
    agreedPersonal: boolean;
}