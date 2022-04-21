const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const servicesRoutes = require('./api/servicesRoutes');
const userRoutes = require('./api/usersRoutes');
const { PORT } = require('./config');

const app = express();

// Global MiddleWare
app.use(morgan('dev'));
// igalinam express app atkoduoti json gautus duomenis
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.json('OK'));

// Routes
app.use('/api', userRoutes);
app.use('/api', servicesRoutes);

// 404 route
// app.use((req, res) => {
//   res.status(404).json({ err: 'route not found' });
// });
app.all('*', (req, res) => {
  res.status(404).json({ err: 'route not found' });
});

app.listen(PORT, () => console.log('server online, PORT', PORT));
