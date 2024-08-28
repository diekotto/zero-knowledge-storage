import { config } from './config/config';
import app from './app';

const port = config.port;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
