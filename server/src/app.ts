import express from 'express';
import helmet from 'helmet';
import userRoutes from './routes/userRoutes';
import fileRoutes from './routes/fileRoutes';

const app = express();

// Use Helmet middleware
app.use(helmet());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/files', fileRoutes);

export default app;
