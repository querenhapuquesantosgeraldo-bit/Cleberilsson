
const fotos = [
    "20260221_193721.jpg",
    "20260221_193732.jpg",
    "20260228_155757_HDR.jpg",
    "20260321_174159.jpg",
    "20260321_174219.jpg",
    "20260321_182434.jpg",
    "20260322_160730.jpg",
    "20260322_160736.jpg",
    "20260403_202950.jpg",
    "20260421_190657.jpg",
    "20260517_115543.jpg",
    "20260627_205207.jpg",
    "20260627_205236.jpg",
    "20260627_205331.jpg",
    "20260725_153102.jpg",
    "20260726_144658_HDR.jpg",
    "20260729_210904.jpg",
    "20260729_210941.jpg",
    "20260729_210944.jpg",
    "20260729_212441.jpg",
    "20260729_212450.jpg",
    "20260813_220106_HDR.jpg",
    "20260813_220208.jpg",
    "20260813_220338.jpg",
    "20260816_173319.jpg",
    "20261007_215849.jpg",
    "20261007_215903.jpg"
];

const grade = document.getElementById("gradeFotos");
const visualizador = document.getElementById("visualizador");
const fotoAmpliada = document.getElementById("fotoAmpliada");
const contador = document.getElementById("contadorFotos");

let fotoAtual = 0;

// Criando a grade de fotos
fotos.forEach((nome, indice) => {

    const imagem = document.createElement("img");

    imagem.src = `imagens/${nome}`;
    imagem.alt = `Nossa lembrança ${indice + 1}`;
    imagem.loading = "lazy";

    const item = document.createElement("div");
    item.classList.add("item-foto");

    item.appendChild(imagem);
    grade.appendChild(item);

    item.addEventListener("click", () => {
        abrirFoto(indice);
    });

});

// Abrir foto ampliada
function abrirFoto(indice) {

    fotoAtual = indice;

    fotoAmpliada.src = `imagens/${fotos[fotoAtual]}`;

    contador.textContent =
        `${fotoAtual + 1} / ${fotos.length}`;

    visualizador.classList.add("ativo");

}

// Fechar foto
function fecharVisualizador() {
    visualizador.classList.remove("ativo");
}

// Próxima foto
function proximaFoto() {

    fotoAtual = (fotoAtual + 1) % fotos.length;

    abrirFoto(fotoAtual);

}

// Foto anterior
function fotoAnterior() {

    fotoAtual =
        (fotoAtual - 1 + fotos.length) % fotos.length;

    abrirFoto(fotoAtual);

}

document.getElementById("fecharFoto")
    .addEventListener("click", fecharVisualizador);

document.getElementById("proxima")
    .addEventListener("click", proximaFoto);

document.getElementById("anterior")
    .addEventListener("click", fotoAnterior);

// Fechar clicando no fundo
visualizador.addEventListener("click", (event) => {

    if (event.target === visualizador) {
        fecharVisualizador();
    }

});

// Navegação pelo teclado
document.addEventListener("keydown", (event) => {

    if (!visualizador.classList.contains("ativo")) return;

    if (event.key === "Escape") fecharVisualizador();

    if (event.key === "ArrowRight") proximaFoto();

    if (event.key === "ArrowLeft") fotoAnterior();

});
