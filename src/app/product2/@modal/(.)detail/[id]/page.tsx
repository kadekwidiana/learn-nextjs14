import { getData } from '@/services/products';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// dynamic component
const Modal = dynamic(() => import('@/components/core/Modal'))

export default async function DeatilProductPage(props: any) {
    const { params } = props;
    const product = await getData('http://localhost:3000/api/product?id=' + params.id)
    return (
        <Modal>
            <Image src={product.data.image} alt={product.data.name} className='w-full object-cover aspect-square col-span-2' width={500} height={500} />
            <div className="bg-white p-4 px-6">
                <h3>{product.data.title}</h3>
                <p>Price : $ {product.data.price}</p>
            </div>
        </Modal>
    )
}
