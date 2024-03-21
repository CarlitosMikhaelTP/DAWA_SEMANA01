const express = require('express');
const path = require('path');

const app = express();

// Configurar directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio
// app.get('/', (req, res) => {
//   console.log("HOLA KBTITO")
//     res.sendFile(path.join(__dirname, 'public/Yanbal/www.yanbal.com/pe/index.html'));
//   });
  
// Otras rutas
// Por ejemplo:
// app.get('/quienes-somos', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'quienes-somos.html'));
// });

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});

// Manejar cualquier otra ruta no especificada
app.use((req, res, next) => {
    res.status(404).send('Error 404: Página no encontrada');
});

