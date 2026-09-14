// ========================================================
// 1. DADOS DO MENU (Adicione ou remova itens apenas aqui)
// ========================================================
const menuData = [
  {
    titulo: "PRINCIPAL",
    paginas: [
      { nome: "Página Inicial", path: "index.html" },
      { nome: "Sobre o Laboratório", path: "sobre.html" }
    ]
  },
  {
    titulo: "BPEA - ANIMAIS",
    paginas: [
      { nome: "Manipulação e Contenção", path: "BPEA/BPEA_manipulacao_animal.html" },
      { nome: "Volumes e Injeção", path: "BPEA/BPEA_volumes_injecao.html" }
    ]
  },
];

// ========================================================
// 2. LÓGICA DO MENU (Não é necessário alterar nada abaixo)
// ========================================================

// Descobre a raiz do site dinamicamente para os links funcionarem em qualquer pasta
const RAIZ_SITE = (function () {
  const scripts = document.getElementsByTagName('script');
  const meuScript = scripts[scripts.length - 1];
  return meuScript.src.replace(/shared\/menu\.js.*$/i, '');
})();

function construirMenu() {
  const sidebar = document.getElementById('sidebar-menu');
  if (!sidebar) return;

  const urlAtual = window.location.href;
  let htmlConteudo = '';

  menuData.forEach(secao => {
    htmlConteudo += `<div class="menu-secao">`;
    htmlConteudo += `<h3 class="menu-titulo">${secao.titulo}</h3>`;
    htmlConteudo += `<ul class="menu-lista">`;
    
    secao.paginas.forEach(pagina => {
      // Monta o link absoluto para a página
      const urlCompleta = RAIZ_SITE + pagina.path;
      
      // Verifica se é a página atual para aplicar a classe de destaque (active)
      const isActive = urlAtual.includes(pagina.path) ? 'class="active"' : '';
      
      htmlConteudo += `<li><a href="${urlCompleta}" ${isActive}>${pagina.nome}</a></li>`;
    });
    
    htmlConteudo += `</ul></div>`;
  });

  // Injeta todo o HTML gerado dentro da tag <aside>
  sidebar.innerHTML = htmlConteudo;
}

// Manda construir o menu assim que a página carregar
document.addEventListener('DOMContentLoaded', construirMenu);
