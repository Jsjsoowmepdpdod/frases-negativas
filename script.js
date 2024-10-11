const phrases = [
    "Nada dá certo.",
    "Isso nunca vai funcionar.",
    "Você não consegue.",
    "Não há saída.",
    "Tudo está perdido."
];

document.getElementById("generateButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    document.getElementById("negativePhrase").textContent = phrases[randomIndex];
});
