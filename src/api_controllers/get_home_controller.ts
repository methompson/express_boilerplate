import { type Request, type Response } from 'express';

export function getHomeController(req: Request, res: Response) {
  res.send('Hello, World!');
}
