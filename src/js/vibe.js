const vibes = ['...frase 1', '...frase 2', '...frase 3'];

const vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector('.vibe').append(vibe);
