import { API } from "@/helpers/axios"
import { IRegisterUser } from '../../pages/auth/register';

const roleIntermediario = "210e9f4d-64a9-476c-b6f3-a0cd0d8a18d0";

export const createUser = (data: IRegisterUser) => {
    const { type_user, ...restData } = data
    const dataToSave = {
        ...restData,
        role_id: roleIntermediario
    }
    return API.post('/users', dataToSave)
}

interface IResetUserPasswordDto {
    email:    string;
    password: string;
    otp:      string;
}




export const resetUserPassword = (data: IResetUserPasswordDto) => {
    return API.post('/users/reset-password', data)
}

export const loginUser = (data: { email: string, password: string}) => {
    return API.post<ILoginUserResponse>(`/auth/signin`, data)
}

export interface ILoginUserResponse {
    statusCode: number;
    data:       DataLoginUser;
}

interface DataLoginUser {
    user: UserLoginResponse;
}

export interface UserLoginResponse {
    id:           string;
    name:         string;
    last_name:    string;
    birth_date:   string;
    country_city: string;
    address:      string;
    company_name: null;
    url:          null;
    email:        string;
    is_active:    number;
    deletedAt:    null;
    createdAt:    string;
    updatedAt:    string;
    otp_id:       string;
    role_id:      string;
    roles:        Roles;
}

interface Roles {
    name: string;
}
