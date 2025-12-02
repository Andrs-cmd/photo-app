const express = require("express");
const cors = require("cors");
const path = require("path");
const config = require("./config");

const app = express();

// Configuración CORS dinámica
const corsOptions = {
  origin: config.corsOrigin,
  optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para log de requests
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Ruta de salud para monitoreo
app.get("/health", (req, res) => {
  res.json({
    status: "healthy",
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
    version: "1.0.0"
  });
});

// API routes
app.get("/api/status", (req, res) => {
  res.json({ 
    status: "ok", 
    environment: process.env.NODE_ENV || 'development',
    server: "AWS EC2",
    timestamp: new Date().toISOString()
  });
});

// ... tus otras rutas aquí ...

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en modo ${process.env.NODE_ENV || 'development'}`);
  console.log(`📍 Puerto: ${PORT}`);
  console.log(`🌐 URL: ${config.apiUrl}`);
});