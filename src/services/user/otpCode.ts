import { API } from "@/helpers/axios"

export const sendOtpCode = (email: string) => {
    return API.post(`/users/send-otp`, {
        email
    })
}