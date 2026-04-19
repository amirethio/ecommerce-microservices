import app from "./app.js";

const PORT = Number(process.env.PORT) || 3005;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Wishlist service running on port ${PORT}`);
});
