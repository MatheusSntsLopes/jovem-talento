import app from './app';

const port = 3040;
app.listen(port, () => {
  console.log();
  console.log(`listening on http://localhost:${port}`);
  console.log();
});
