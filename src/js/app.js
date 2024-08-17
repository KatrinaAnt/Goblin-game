import Game from './game/game';

document.addEventListener('DOMContentLoaded', () => {
    const main = document.createElement('main');
    main.classList = 'field';
    document.body.appendChild(main);
    for(let i = 0; i < 16; i++) {
        let div = document.createElement('div');
        div.classList = 'field-item';
        main.appendChild(div);
    }

    const game = new Game(document.querySelectorAll('.field-item'));
    setInterval(() => {
        game.movingCharacter();
    }, 1000);
});