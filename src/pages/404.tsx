import { BaseLayout } from '@/components/layouts'

const NotFound = () => {
  return (
    <BaseLayout title='404: Page not found'>
      <div className='flex flex-col h-screen justify-center items-center md:flex-row'>
        <h1 className='text-5xl font-medium'>404 |</h1>
        <h2 className='ml-2'>This page could not be found.</h2>
      </div>
    </BaseLayout>
  )
}

export default NotFound;