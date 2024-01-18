import React from 'react'

export default function Layout({ children, products, analitics, payments }: { children: React.ReactNode, products: React.ReactNode, analitics: React.ReactNode, payments: React.ReactNode }) {
    return (
        <div className='p-5'>
            <div>
                {children}
            </div>
            <div className='mt-5 flex justify-between'>
                {products}
                {analitics}
            </div>
            <div className='mt-5'>
                {payments}
            </div>
        </div>
    )
}
