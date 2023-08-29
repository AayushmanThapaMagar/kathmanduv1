"use client"

import { useParams } from "next/navigation";
import PRODUCTS from "../../../data/data.js";


export default function Test() {
    const { collectionName } = useParams();
    const products = PRODUCTS.filter(product => product.collection === collectionName)
    return (
        <div>
            <h1>{collectionName}</h1>
            { products.map (product => (
                <div>
                    <p>{product.name}</p>
                    <p>{product.handle}</p>
                    <p>{product.image}</p>
                    <p>{product.price}</p>
                </div>
            ))}
        </div>
    )
}