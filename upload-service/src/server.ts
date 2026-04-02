import app from "./app";

const PORT = Number(process.env.PORT) || 3006;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Upload service running on port ${PORT}`);
});
