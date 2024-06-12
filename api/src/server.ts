import 'dotenv/config';
import app from './app';

const port = process.env.SERVER_PORT || 3000;
console.log(process.env.SERVER_PORT);

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
