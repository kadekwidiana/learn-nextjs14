import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center min-h-screen items-center'>
            <h1 className='mb-5 text-9xl'>Not Found</h1>
            <p className='text-xl mb-5'>Could not find requested resource</p>
            <Link href="/" className='bg-blue-700 text-white p-3 rounded-sm'>Return Home</Link>
        </div>
    )
}