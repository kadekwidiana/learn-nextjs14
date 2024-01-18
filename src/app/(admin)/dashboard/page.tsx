'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

export default function DashboardPage() {
    const { data: session, status }: { data: any; status: string } = useSession();
    const router = useRouter();
    // useEffect(() => {
    //     if (status === 'unauthenticated') {
    //         router.push('/login');
    //     } else {
    //         if (session !== undefined && session?.user.role !== 'admin') {
    //             router.push('/login');
    //         }
    //     }
    // }, [router, session?.user.role, status]);
    return (
        <div className='w-full h-96 bg-gray rounded-[12px] flex justify-center items-center bg-gray-300'>
            <h1>Dashboard</h1>
        </div>
    )
}
