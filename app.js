document.addEventListener("DOMContentLoaded", function () {
  const produtos = [
    { nome: "Camiseta", preco: 80, categoria: "Roupa", disponibilidade: true },
    { nome: "Tênis de corrida", preco: 200, categoria: "Sapato", disponibilidade: false },
    { nome: "Boné", preco: 50, categoria: "Chapéu", disponibilidade: false },
    { nome: "Tênis casual", preco: 150, categoria: "Sapato", disponibilidade: true },
    { nome: "Moletom", preco: 250, categoria: "Roupa", disponibilidade: true },
    { nome: "Bermuda", preco: 100, categoria: "Roupa", disponibilidade: false },
    { nome: "Gorro", preco: 45, categoria: "Chapéu", disponibilidade: true },
    { nome: "Meia", preco: 20, categoria: "Roupa", disponibilidade: true },
    { nome: "Chinelo", preco: 50, categoria: "Sapato", disponibilidade: true },
    { nome: "Chapéu de praia", preco: 70, categoria: "Chapéu", disponibilidade: true }
  ];

  const container = document.getElementById("produtosContainer");
  const btnListar = document.getElementById("btnListar");
  const filtroForm = document.getElementById("filtroForm");

  function exibirProdutos(lista) {
    container.innerHTML = "";

    if (lista.length === 0) {
      container.innerHTML = "<p>Nenhum produto encontrado.</p>";
      return;
    }

    lista.forEach(produto => {
      const div = document.createElement("div");
      div.className = "produto";
      div.innerHTML = `
        <h3>${produto.nome}</h3>
        <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
        <p>Categoria: ${produto.categoria}</p>
        <p>${produto.disponibilidade ? "Disponível" : "Indisponível"}</p>
      `;
      container.appendChild(div);
    });
  }

  btnListar.addEventListener("click", () => {
    exibirProdutos(produtos);
  });

  filtroForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const categoria = document.getElementById("categoria").value;
    const somenteDisponiveis = document.getElementById("disponiveis").checked;

    let filtrados = produtos;

    if (categoria !== "") {
      filtrados = filtrados.filter(p => p.categoria === categoria);
    }

    if (somenteDisponiveis) {
      filtrados = filtrados.filter(p => p.disponibilidade);
    }

    exibirProdutos(filtrados);
  });
});
