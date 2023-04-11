import { PropsWithChildren, ReactElement } from "react"

type AuthLayoutProps = PropsWithChildren & {}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div>
            <h1>
                hola soy el layout
            </h1>
            {children}
        </div>
    )
}

export function getAuthLayout(page: ReactElement) {
    return (
        <AuthLayout>
            {page}
        </AuthLayout>
    )
};