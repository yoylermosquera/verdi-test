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