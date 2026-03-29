import app from "./app.js";

const PORT = process.env.PORT || 3008;

app.listen(PORT, () => {
  console.log(`review service is  running on ${PORT}`);
});
