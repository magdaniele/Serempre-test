import express, {Request, Response} from 'express';
const router = express.Router();
import { createMessage } from '../controller/channel';

router.post('/:channel', (req: Request, res: Response) => {
  createMessage(req, res);
});


export default router;
