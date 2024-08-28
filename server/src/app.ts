import express from 'express';
import helmet from 'helmet';
import userRoutes from './routes/user.routes';
import fileRoutes from './routes/file.routes';
import homeRoutes from './routes/home.routes';

const app = express();

// Use Helmet middleware
app.use(helmet());
app.use(express.json());
app.use('/users', userRoutes);
app.use('/files', fileRoutes);
app.use('/', homeRoutes);

export default app;
