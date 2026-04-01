import axios from "axios";
import { logger } from "./logger.js";
export const createChapaTransaction = async (data) => {
    try {
        const response = await axios.post("https://api.chapa.co/v1/transaction/initialize", data, {
            headers: {
                Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
                "Content-Type": "application/json",
            },
        });
        if (response.data.status !== "success") {
            throw new Error(`Chapa transaction initialization failed: ${response.data.message}`);
        }
        return {
            checkout_url: response.data.data.checkout_url,
            tx_ref: response.data.data.tx_ref,
        };
    }
    catch (error) {
        logger.error("Error creating Chapa transaction:", error);
        throw error;
    }
};
//# sourceMappingURL=chapa.js.map