const handlerAdivinaPelicula = async (m, { conn }) => {
  const usuarioActual = global.db.data.users[m.sender];
  const recompensa = Math.floor(Math.random() * 800) + 200;

  usuarioActual.exp += recompensa;

  const peliculas = [
    'En esta película, un grupo de amigos se embarca en un viaje por carretera hacia Las Vegas para una despedida de soltero inolvidable. ¿Cuál es el nombre de la película?',
    'Esta película trata sobre un joven mago con una cicatriz en la frente que asiste a una escuela de magia. ¿Cómo se llama esta famosa saga?',
    'En esta película, un ratón cocinero se convierte en el chef estrella de un prestigioso restaurante parisino. ¿Cuál es el título de la película?',
    'Una película de ciencia ficción en la que los dinosaurios vuelven a la vida gracias a la clonación. ¿Cuál es el nombre de esta película?',
  ];

  const peliculaAleatoria = peliculas[Math.floor(Math.random() * peliculas.length)];

  m.reply(`🎬 Adivina la película:\n\n${peliculaAleatoria}\n\n¡Ganaste ${recompensa} XP por adivinar correctamente!`);
};

handlerAdivinaPelicula.help = ['adivinapelicula'];
handlerAdivinaPelicula.tags = ['xp'];
handlerAdivinaPelicula.command = ['adivinapelicula', 'adivinafilm'];

export default handlerAdivinaPelicula;
