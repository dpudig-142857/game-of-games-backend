import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import sessionsRoutes from './routes/sessions.js';
import statsRoutes from './routes/stats.js';
import playersRoutes from './routes/players.js';
import gamesRoutes from './routes/games.js';
import pointsRoutes from './routes/points.js';
import tournamentRoutes from './routes/tournament.js';

dotenv.config();

const photosPath = path.join(process.cwd(), 'photos');

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.use('/photos', express.static(photosPath));
app.use('/api/sessions', sessionsRoutes);
app.use('/api/stats', statsRoutes);
app.use('/api/players', playersRoutes);
app.use('/api/games', gamesRoutes);
app.use('/api/points', pointsRoutes);
app.use('/api/tournament', tournamentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
