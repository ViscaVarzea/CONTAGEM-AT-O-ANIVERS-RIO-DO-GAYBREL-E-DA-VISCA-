function atualizarContador() {
  const agora = new Date();
  const alvo = new Date(agora.getFullYear(), 7, 13); // 7 = agosto

  if (agora > alvo) {
    alvo.setFullYear(alvo.getFullYear() + 1);
  }

  const diff = alvo - agora;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById('dias').textContent = dias;
  document.getElementById('horas').textContent = horas;
  document.getElementById('minutos').textContent = minutos;
  document.getElementById('segundos').textContent = segundos;
}

setInterval(atualizarContador, 1000);
atualizarContador();
