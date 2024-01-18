import { retriveData, retriveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

const data = [
    {
        id: 1,
        title: 'Sepatu Baru',
        price: 100000,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        id: 2,
        title: 'Sepatu Baru Dong',
        price: 1000000,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        id: 3,
        title: 'Sepatu Baru New',
        price: 1000000,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        id: 4,
        title: 'Sepatu Baru New',
        price: 1000000,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
]

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");
    if (id) {
        // const detailProduct = data.find((item) => item.id === Number(id));
        const detailProduct = await retriveDataById("products", id);
        if (detailProduct) {
            return NextResponse.json({
                status: 200,
                message: "Success",
                data: detailProduct
            });
        }

        return NextResponse.json({
            status: 404,
            message: "Not Found",
            data: {}
        })
    }
    const products = await retriveData("products");
    return NextResponse.json({ status: 200, message: "Success", data: products });
}