const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Health check route (optional)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'API is running!' });
});

const errorHandler = require('./middlewares/errorHandler');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');

app.use(errorHandler);
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;
