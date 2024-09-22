import { OperationalLogin } from "../operational-login";
import { OrderWrapper } from "../orders";
import PaymentWrapper from "../payment/components/paymentWrapper";
import React from "react";

export function PosWrapper() {
    return (
        <div>
            <OperationalLogin />
        </div>

    )
}