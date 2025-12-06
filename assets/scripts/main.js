window.addEventListener('click', function() {
    const audio = document.getElementById('music');
    audio.play();
    audio.volume = 0.2;
    });

    function switchTheme() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');

    document.body.setAttribute('aria-label', 'Trocando o tema');

    const theme = document.body.classList.contains('dark-theme')
        ? 'dark'
        : 'light';

    const music = theme === 'light'
        ? 'normal-world.mpeg'
        : 'inverted-world.mpeg';

    const audio = document.getElementById('music');
    audio.src = `assets/audios/${music}`;
    audio.play();
    audio.volume = 0.2;


    // -----------------------------------
// EFEITO DE CINZAS QUANDO INVERTE MUNDO
// -----------------------------------
const ashesContainer = document.querySelector('.ashes');

if (theme === 'dark') {
    ashesContainer.style.display = "block";
    spawnAshes();
} else {
    ashesContainer.style.display = "none";
    ashesContainer.innerHTML = "";
}


// -----------------------------------
// FUNÇÃO NOVA DE CINZAS FLUTUANDO
// -----------------------------------
function spawnAshes() {
    const ashesContainer = document.querySelector('.ashes');
    ashesContainer.innerHTML = ""; 

    for (let i = 0; i < 400; i++) {
        const ash = document.createElement('div');
        ash.classList.add('ash');

        ash.style.left = Math.random() * 100 + "vw";
        ash.style.top  = Math.random() * 100 + "vh";

        ash.style.setProperty("--sizeW", (2 + Math.random() * 6) + "px");
        ash.style.setProperty("--sizeH", (2 + Math.random() * 10) + "px");

        ash.style.setProperty("--floatYdur", (3 + Math.random() * 4) + "s");
        ash.style.setProperty("--floatXdur", (3 + Math.random() * 5) + "s");
        ash.style.setProperty("--rotDur",    (4 + Math.random() * 8) + "s");

        ashesContainer.appendChild(ash);
    }
}

    }
