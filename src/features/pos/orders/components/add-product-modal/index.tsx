import { Button, Card } from "@/src/features/base";
import { AddProductModalProps } from "./type";
import { useState } from "react";
import Image from "next/image";

export function AddProductModal({ onClose }: AddProductModalProps) {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <Card className="p-6 bg-white rounded-lg shadow-lg w-[800px] h-[400px]">
                <p className="text-xl font-semibold mb-4 text-center">Product Details</p>
                <form>
                    <div className="flex">
                        <Image
                            src="/img/default-product-image.webp" 
                            alt="Product Image"
                            width={100}
                            height={20}
                            className="rounded-md object-cover h-[200px] w-[200px]"
                            />
                        <div className="flex flex-col items-center w-full h-full text-center">
                            <p className="font-semibold text-2xl">product_name</p>
                            <p className="font-semibold text-2xl">Rp. price</p>
                            <div className="flex border border-black w-[500px] rounded-xl">
                                <button
                                    className="border-r border-black p-4 w-[55px] rounded-xl bg-green-400 font-bold"
                                    type="button"
                                    >
                                    -
                                    </button>
                                <input
                                    type="text"
                                    className="grow text-center"
                                    />
                                <button
                                    className="border-l border-black p-4 w-[55px] bg-green-400 rounded-xl font-bold"
                                    type="button"
                                    >
                                    +
                                    </button>
                            </div>
                        </div>
                            
                    </div>

                    <div className="flex justify-around mt-4">
                        <Button
                            className="bg-red-500 text-white mr-4 hover:bg-red-600 active:bg-red-700 h-[80px]"
                            onClick={onClose}
                            type="button"
                        >
                            Cancel
                        </Button>
                        <Button
                            className="bg-green-500 text-white hover:bg-green-600 active:bg-green-700"
                            type="submit"
                        >
                            Save
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}