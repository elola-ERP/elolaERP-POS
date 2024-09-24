import { OperationalLogin } from "../operational-login";
import { OrderWrapper } from "../orders";
import PaymentWrapper from "../payment/components/paymentWrapper";
import React from "react";

export function PosWrapper() {
    return (
        <div>
            <div>
                <OperationalLogin />
            </div>
            <div className="hidden">
                <OrderWrapper />
            </div>
            <div className="hidden">
                <PaymentWrapper />
            </div>
        </div>

    )
}