import express, { Application } from 'express';
import bodyParser from 'body-parser';
import channelRoutes from './src/routes/channel'; 

const app = express(); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/channel', channelRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
