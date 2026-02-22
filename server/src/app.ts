import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.ts';
import bodyParser from 'body-parser';


const app = express();
dotenv.config();


app.use(bodyParser.text({type: "text/xml"}))
app.use('/api/soap', userRoutes)



export default app