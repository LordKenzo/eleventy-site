const vibes = [
  '...oggi voglio studiare React',
  '...oggi voglio riprendere Angular',
  "...oggi voglio vedere l'autenticazione in Gatsby",
];

const vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

document.querySelector('.vibe').append(vibe);
