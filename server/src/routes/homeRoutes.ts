import { Router } from 'express';
const router = Router();
router.get('/', (req, res) => {
  res.send('Home route');
});
export default router;
