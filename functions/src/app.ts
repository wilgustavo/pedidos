import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import routes from './routes';

admin.initializeApp();

const app = express();
app.use(cors());

routes(app);

export default app;