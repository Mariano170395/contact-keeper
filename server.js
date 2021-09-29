//Defino express
//Se podria hacer con importaciones usando Babel
const express = require('express')

//inicializo express
const app = express()

//Le pongo un port para que tenga un puerto para escuchar
//Va a buscar un puerto en una variable de entorno, si no va a usar el 5000
const PORT = process.env.PORT || 5000;

//Le pongo un listener
app.listen(PORT, () => console.log(`El servidor se inicializo en el puerto ${PORT}`))

//Agrego un endpoint porque no tengo uno hasta ahora
app.get('/', (req, res) => res.json({msg:'Bienvenido al Servidor'}))

//Defino rutas
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
