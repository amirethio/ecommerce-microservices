import axios from "axios";
import { logger } from "./logger.js";

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

interface ChapaTransactionResponse {
	status: string;
	message: string;
	data: {
		checkout_url: string;
		tx_ref: string;
	};
}

export const createChapaTransaction = async (
	data: ChapaTransactionRequest,
): Promise<{ checkout_url: string; tx_ref: string }> => {
	try {
		const response = await axios.post<ChapaTransactionResponse>(
			"https://api.chapa.co/v1/transaction/initialize",
			data,
			{
				headers: {
					Authorization: `Bearer ${process.env.CHAPA_SECRET_KEY}`,
					"Content-Type": "application/json",
				},
			},
		);

		if (response.data.status !== "success") {
			throw new Error(
				`Chapa transaction initialization failed: ${response.data.message}`,
			);
		}

		return {
			checkout_url: response.data.data.checkout_url,
			tx_ref: response.data.data.tx_ref,
		};
	} catch (error) {
		logger.error("Error creating Chapa transaction:", error);
		throw error;
	}
};
