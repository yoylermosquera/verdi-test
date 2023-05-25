import { getSession, signOut,  } from "next-auth/react"

export const getMyToken = async () => {
    try {
        const session  = await getSession()
        return session?.user?.token
        
    } catch (error) {
        return ''
    }
}

export const logOutUser = async () => {
    await signOut({
        redirect: true,
        callbackUrl: "/auth/signin",
    })            
}
