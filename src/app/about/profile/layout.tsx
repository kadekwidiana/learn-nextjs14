import React from 'react'

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <h1>Layout Profile</h1>
            <div>{children}</div>
        </>
    )
}
