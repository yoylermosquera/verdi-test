import { getSession, signOut,  } from "next-auth/react"

export const getMyToken = async () => {
    const session  = await getSession()
    return session?.user?.token
}

export const logOutUser = async () => {
    await signOut({
        redirect: true,
        callbackUrl: "/auth/signin",
    })            
}
