import { useSession } from 'next-auth/react';
import React from 'react'

const HomePage = () => {
    const { data: session, status } = useSession()
  return (
    <div>
        <pre>
            {JSON.stringify(session?.user?.last_name, null, 2)}
        </pre>
    </div>
  )
}

export default HomePage;