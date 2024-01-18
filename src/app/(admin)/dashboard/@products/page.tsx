'use client'
import React, { useState } from 'react'

export default function AdminProductPage() {
    const [status, setStatus] = useState("");
    const revalidate = async () => {
        const res = await fetch("http://localhost:3000/api/revalidate?tag=product&secret=Widi10", {
            method: "POST",
        });

        if (!res.ok) {
            setStatus("Revalidate Failed")
        } else {
            const response = await res.json()
            if (response.revalidate) {
                setStatus("Revalidate Success")
            }
        }

    }


    return (
        <div className='w-full h-96 bg-gray rounded-[12px] flex justify-center items-center bg-gray-300 mr-5'>
            <h3>{status}</h3>
            <button className='bg-black text-white p-3 m-5' onClick={() => revalidate()}>Revalidate</button>
        </div>
    )
}
