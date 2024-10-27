import express from 'express';

import { connect } from './config/db.js';

import ProductRoutes from './routes/product.route.js';

const app = express();

app.use(express.json());

let PORT = process.env.PORT || 3000;

// routes
app.use("/api/v1", ProductRoutes);


connect().then(() => {
  // initialize server 
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT} 🚀`);
  });
});