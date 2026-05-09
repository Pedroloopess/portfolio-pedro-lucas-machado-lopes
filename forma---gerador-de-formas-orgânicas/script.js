/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Elementos do DOM
const svgContainer = document.getElementById('svg-container');
const svgCode = document.getElementById('svg-code');
const btnGenerate = document.getElementById('btn-generate');
const btnCopy = document.getElementById('btn-copy');
const btnDownload = document.getElementById('btn-download');
const toast = document.getElementById('toast');

// Controles
const inputComplexity = document.getElementById('complexity');
const inputIrregularity = document.getElementById('irregularity');
const inputSize = document.getElementById('size');
const inputColor = document.getElementById('color');

// Badges de valor
const valComplexity = document.getElementById('val-complexity');
const valIrregularity = document.getElementById('val-irregularity');
const valSize = document.getElementById('val-size');

let currentSeed = Math.random();

/**
 * Gera um número aleatório pseudo-determinístico baseado em uma semente
 */
function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

/**
 * Cria a forma orgânica SVG
 */
function createBlob() {
  const complexity = parseInt(inputComplexity.value);
  const irregularity = parseFloat(inputIrregularity.value);
  const size = parseInt(inputSize.value);
  const color = inputColor.value;

  const center = size / 2;
  const radius = size * 0.35;
  const points = [];
  const angleStep = (Math.PI * 2) / complexity;

  // Gerar pontos
  for (let i = 0; i < complexity; i++) {
    const angle = i * angleStep;
    // Variação de raio baseada na irregularidade
    const rVariation = seededRandom(currentSeed + i) * radius * irregularity;
    const r = radius - (radius * irregularity / 2) + rVariation;
    
    const x = center + Math.cos(angle) * r;
    const y = center + Math.sin(angle) * r;
    points.push({ x, y });
  }

  // Criar o path com curvas suaves (Catmull-Rom para Bezier)
  const pathData = getPath(points);
  
  const svg = `
<svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <path d="${pathData}" fill="${color}" />
</svg>`.trim();

  svgContainer.innerHTML = svg;
  svgCode.textContent = svg;
}

/**
 * Converte uma lista de pontos em um path SVG suave e fechado
 */
function getPath(points) {
  const n = points.length;
  if (n === 0) return "";

  let d = `M ${points[0].x},${points[0].y}`;

  for (let i = 0; i < n; i++) {
    const p0 = points[(i - 1 + n) % n];
    const p1 = points[i];
    const p2 = points[(i + 1) % n];
    const p3 = points[(i + 2) % n];

    // Constante de tensão para suavidade
    const tension = 0.2;

    const cp1x = p1.x + (p2.x - p0.x) * tension;
    const cp1y = p1.y + (p2.y - p0.y) * tension;

    const cp2x = p2.x - (p3.x - p1.x) * tension;
    const cp2y = p2.y - (p3.y - p1.y) * tension;

    d += ` C ${cp1x},${cp1y} ${cp2x},${cp2y} ${p2.x},${p2.y}`;
  }

  d += " Z";
  return d;
}

/**
 * Atualiza os labels de valor
 */
function updateBadges() {
  valComplexity.textContent = inputComplexity.value;
  valIrregularity.textContent = Math.round(inputIrregularity.value * 100) + '%';
  valSize.textContent = inputSize.value + 'px';
}

/**
 * Event Listeners
 */
[inputComplexity, inputIrregularity, inputSize, inputColor].forEach(input => {
  input.addEventListener('input', () => {
    updateBadges();
    createBlob();
  });
});

btnGenerate.addEventListener('click', () => {
  currentSeed = Math.random();
  createBlob();
});

btnCopy.addEventListener('click', () => {
  const code = svgCode.textContent;
  navigator.clipboard.writeText(code).then(() => {
    showToast('Código SVG copiado!');
  });
});

btnDownload.addEventListener('click', () => {
  const svg = svgContainer.innerHTML;
  const blob = new Blob([svg], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'forma-organica.svg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast('Download iniciado!');
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2000);
}

// Inicialização
updateBadges();
createBlob();
