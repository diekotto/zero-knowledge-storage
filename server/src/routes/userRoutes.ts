import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('User route');
});

router.post('/register', (req, res) => {
  // Handle user registration
  res.send('Register route');
});

router.post('/login', (req, res) => {
  // Handle user login
  res.send('Login route');
});

export default router;
