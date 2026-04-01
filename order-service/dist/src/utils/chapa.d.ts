interface ChapaTransactionRequest {
    amount: string;
    currency: string;
    email: string;
    first_name: string;
    last_name: string;
    tx_ref: string;
    callback_url: string;
    return_url: string;
}
export declare const createChapaTransaction: (data: ChapaTransactionRequest) => Promise<{
    checkout_url: string;
    tx_ref: string;
}>;
export {};
//# sourceMappingURL=chapa.d.ts.map