import Game from './game/game';

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game(document.querySelectorAll('.field-item'));
    setInterval(() => {
        game.movingCharacter();
    }, 1000);
});