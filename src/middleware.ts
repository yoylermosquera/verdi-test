import { withAuth } from 'next-auth/middleware'


export default withAuth(
    function middleware(req, events){
        console.log('soy el middleware')
    }, {
        callbacks: {
            authorized: ({ token }) => {
                return !!token
            }
        }
    }
)


export const config = {
    matcher: ['/', '/profile']
}