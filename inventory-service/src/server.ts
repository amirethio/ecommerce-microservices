import app from "./app.js";
import { logger } from "./utils/logger.js";

const PORT = Number(process.env.PORT || 3009);

app.listen(PORT, () => {
	logger.info(`inventory service is running on ${PORT}`);
});