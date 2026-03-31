import app from "./app";

const PORT = process.env.PORT || 4004;

app.listen(PORT, () => {
  console.log(`Cart service listening on port ${PORT}`);
});
