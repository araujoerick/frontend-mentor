document.querySelector(".button").addEventListener("click", (e) => {
  e.preventDefault();

  const dia = document.getElementById("day").value;
  const mes = document.getElementById("month").value;
  const ano = document.getElementById("year").value;

  const resultado = calcularIdade(ano, mes, dia);

  function animaNumeros(span, valorFinal) {
    let currentValue = 0;
    let increment = 1;
    let interval = setInterval(() => {
      currentValue += increment;

      if (currentValue >= valorFinal) {
        currentValue = valorFinal;
        clearInterval(interval);
      }

      span.innerText = currentValue;
    }, 40);
  }

  function atualizaValor(seletor, valor) {
    let span = document.querySelector(seletor);
    animaNumeros(span, valor);
  }

  atualizaValor(".years span", resultado.anos);
  atualizaValor(".months span", resultado.meses);
  atualizaValor(".days span", resultado.dias);
});

function calcularIdade(ano, mes, dia) {
  const dataNascimento = new Date(ano, mes - 1, dia);
  const hoje = new Date();
  let idadeAnos = hoje.getFullYear() - dataNascimento.getFullYear();
  let idadeMeses = hoje.getMonth() - dataNascimento.getMonth();
  let idadeDias = hoje.getDate() - dataNascimento.getDate();

  if (idadeMeses < 0 || (idadeMeses === 0 && idadeDias < 0)) {
    idadeAnos--;
    idadeMeses = (12 + idadeMeses) % 12;
  }

  if (idadeDias < 0) {
    const ultimoDiaDoMesAnterior = new Date(
      hoje.getFullYear(),
      hoje.getMonth(),
      0
    ).getDate();
    idadeDias = ultimoDiaDoMesAnterior + idadeDias;
  }

  return { anos: idadeAnos, meses: idadeMeses, dias: idadeDias };
}
