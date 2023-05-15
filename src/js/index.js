const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const isDarkTheme = body.classList.contains("dark-theme");
  body.classList.tggle("dark-theme");

  if(isDarkTheme) {
    imagemBotaoTrocaTema.setAttribute("src", "./src/images/sun.png");
  }
  else {
    imagemBotaoTrocaTema.setAttribute("src", "./src/images/moon.png");
  }
})