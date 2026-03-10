import 'dotenv/config';
import express, { Router } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { isString } from '@metools/tcheck';

import { getHomeController } from '@/api_controllers/get_home_controller';

main();
async function main() {
  const app = express();
  app.use(cors());
  app.use(cookieParser());
  app.use(express.json());

  const router = Router();

  router.get('/', getHomeController);

  app.use('/api', router);

  const port = getPort();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

function getPort(): number {
  if (isString(process.env.PORT)) {
    const envPort = Number.parseInt(process.env.PORT, 10);
    if (!Number.isNaN(envPort) && Number.isInteger(envPort)) {
      return envPort;
    }
  }

  return 8080;
}
