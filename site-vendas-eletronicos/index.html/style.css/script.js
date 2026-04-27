<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tech Store | Eletrônicos</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<header class="header">
  <div class="logo">Tech Store</div>

  <button class="menu-toggle" id="menuToggle">☰</button>

  <nav class="navbar" id="navbar">
    <a href="#inicio">Início</a>
    <a href="#produtos">Produtos</a>
    <a href="#sobre">Sobre</a>
    <a href="#contato">Contato</a>
  </nav>
</header>

<section class="hero" id="inicio">
  <div class="hero-text">
    <h1>Os melhores eletrônicos em um só lugar</h1>
    <p>Produtos modernos, preços competitivos e tecnologia para o seu dia a dia.</p>
    <a href="#produtos" class="btn">Ver Produtos</a>
  </div>
</section>

<section class="produtos" id="produtos">
  <h2>Nossos Produtos</h2>

  <div class="cards">
    <div class="card">
      <h3>Smartphone Pro</h3>
      <p>Celular com alta performance, câmera avançada e design moderno.</p>
      <span>R$ 1.999,00</span>
      <button onclick="adicionarCarrinho('Smartphone Pro')">Adicionar ao carrinho</button>
    </div>

    <div class="card">
      <h3>Notebook Ultra</h3>
      <p>Ideal para estudos, trabalho, programação e produtividade.</p>
      <span>R$ 3.499,00</span>
      <button onclick="adicionarCarrinho('Notebook Ultra')">Adicionar ao carrinho</button>
    </div>

    <div class="card">
      <h3>Fone Bluetooth</h3>
      <p>Áudio de qualidade, bateria duradoura e conexão rápida.</p>
      <span>R$ 199,00</span>
      <button onclick="adicionarCarrinho('Fone Bluetooth')">Adicionar ao carrinho</button>
    </div>
  </div>
</section>

<section class="sobre" id="sobre">
  <h2>Sobre o Projeto</h2>
  <p>
    Este site foi desenvolvido como projeto acadêmico com foco em front-end,
    utilizando HTML, CSS e JavaScript para simular uma loja virtual de eletrônicos.
  </p>
</section>

<section class="carrinho">
  <h2>Carrinho</h2>
  <p id="mensagemCarrinho">Nenhum produto adicionado.</p>
</section>

<footer id="contato">
  <p>© 2026 Tech Store - Desenvolvido por Pedro Lucas Machado Lopes</p>
</footer>

<script src="script.js"></script>
</body>
</html>
