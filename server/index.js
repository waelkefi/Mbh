import express from 'express';
import dotnet from 'dotenv';
import contactRoutes from './routes/conatct.js';
import cors from 'cors';

dotnet.config()
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
