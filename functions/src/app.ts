import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import routes from './routes';

admin.initializeApp();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


routes(app);

export default app;