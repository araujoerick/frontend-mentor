document.querySelector(".button").addEventListener("click", (e) => {
  e.preventDefault();

  const dia = document.getElementById("day").value;
  const mes = document.getElementById("month").value;
  const ano = document.getElementById("year").value;

  const resultado = calcularIdade(ano, mes, dia);

  const anos = document.querySelector(".years span");
  const meses = document.querySelector(".months span");
  const dias = document.querySelector(".days span");

  anos.innerText = resultado.anos;
  meses.innerText = resultado.meses;
  dias.innerText = resultado.dias;
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
