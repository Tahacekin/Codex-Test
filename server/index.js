import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { works, findWorkById } from './data/works.js';
import { aboutContent } from './data/about.js';
import { homeContent } from './data/home.js';

const app = express();
const DEFAULT_PORT = Number(process.env.PORT) || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

app.get('/api/works', (req, res) => {
  res.json(works);
});

app.get('/api/works/:id', (req, res) => {
  const { id } = req.params;
  const work = findWorkById(id);

  if (!work) {
    return res.status(404).json({ message: 'Work not found' });
  }

  res.json(work);
});

app.get('/api/about', (req, res) => {
  res.json(aboutContent);
});

app.get('/api/home', (req, res) => {
  res.json(homeContent);
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  console.log('New contact message received:', { name, email, message });
  res.status(201).json({ message: 'Thank you for reaching out. We will respond shortly.' });
});

const clientBuildPath = path.resolve(__dirname, '../client/dist');

if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientBuildPath, 'index.html'));
  });
}

const startServer = (port, attempt = 0) => {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use.`);

      if (!process.env.PORT && attempt < 5) {
        const nextPort = port + 1;
        console.log(`Attempting to use port ${nextPort} instead.`);
        server.close(() => startServer(nextPort, attempt + 1));
      } else {
        console.error(
          'Please free the port or set the PORT environment variable to a different value.'
        );
        process.exit(1);
      }
    } else {
      console.error('Unexpected server error:', error);
      process.exit(1);
    }
  });
};

startServer(DEFAULT_PORT);
