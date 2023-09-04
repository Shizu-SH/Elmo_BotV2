const ruletaCooldown = 3600000; // 1 hora de tiempo de reutilización

const handlerRuletaRusa = async (m, { conn }) => {
  const usuarioActual = global.db.data.users[m.sender];
  const tiempoRestante = usuarioActual.lastruleta + ruletaCooldown - Date.now();

  if (tiempoRestante > 0) {
    const tiempoRestanteFormateado = msToTime(tiempoRestante);
    throw `⏱️¡Espera ${tiempoRestanteFormateado} para jugar a la Ruleta Rusa de nuevo!`;
  }

  const resultado = Math.random() < 0.5 ? '¡Sobreviviste a la Ruleta Rusa! 😅' : '¡BOOM! La Ruleta Rusa te ha derribado. 💥';
  const recompensa = resultado.includes('Sobreviviste') ? Math.floor(Math.random() * 1000) + 500 : -500;

  usuarioActual.exp += recompensa;
  usuarioActual.lastruleta = Date.now();

  m.reply(`🔫 ¡Click! ${resultado}\n${recompensa > 0 ? `Ganaste ${recompensa} XP.` : `Perdiste ${-recompensa} XP.`}`);
};

handlerRuletaRusa.help = ['ruletarusa'];
handlerRuletaRusa.tags = ['xp'];
handlerRuletaRusa.command = ['ruletarusa', 'ruleta'];

export default handlerRuletaRusa;
