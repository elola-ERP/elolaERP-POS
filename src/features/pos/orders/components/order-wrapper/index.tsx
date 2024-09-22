import React, { useContext, useState, useEffect } from 'react';
import { Cart, OrderHome, OrderMenu, PosHeader } from '@/src/features/pos';
import { InputCustomerModal } from '../input-customer-modal';

export function OrderWrapper() {
    const [isCustomerSaved, setIsCustomerSaved] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className="bg-gray-100 h-screen overflow-hidden">
            <div className="flex h-full">
                <div className="w-2/3 flex flex-col space-y-4" id="order-home">
                    <PosHeader cashierName="Nata de Coco" date="17:00 29/07/24" cashierStatus="Open" />
                    <div className={isCustomerSaved ? 'hidden' : 'block'}>
                        <OrderHome />
                    </div>
                    <div className={isCustomerSaved ? 'block' : 'hidden'}>
                        <OrderMenu />
                    </div>
                </div>

                <div className="w-1/3">
                    <Cart />
                </div>
            </div>
        </div>
    );
}
