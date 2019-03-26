// Modelo de Mongoose para representar las películas en la base de datos
// Importamos Schema y model desde mongoose
const { Schema, model } = require('mongoose');

// Definimos la estructura de cada documento de película
// Cada campo se documenta con el tipo que almacenará
const movieSchema = new Schema(
  {
    title: String, // Título de la película
    director: String, // Director de la película
    stars: [String], // Array con los actores principales
    image: String, // URL del póster de la película
    description: String, // Breve descripción/plot de la película
    showtimes: [String] // Horarios de proyección disponibles
  },
  {
    timestamps: true // Añade automáticamente createdAt y updatedAt
  }
);

// Exportamos el modelo para poder usarlo en otras partes de la app
module.exports = model('Movie', movieSchema);