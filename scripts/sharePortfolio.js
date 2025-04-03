function sharePortfolio() {
  const url = window.location.origin;

  if (navigator.share) {
    navigator
      .share({
        title: "Ivanilda Manicure",
        text: "Confira meu trabalho como manicure!",
        url,
      })
      .then(() => {
        console.log("Compartilhado com sucesso!");
      })
      .catch((err) => {
        console.log("Erro ao compartilhar: ", err);
      });
  } else {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("Link copiado! Compartilhe com seus amigos.");
      })
      .catch((err) => {
        console.error("Erro ao copiar link: ", err);
      });
  }
}
