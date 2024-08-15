import Icon from './goblin.png';

export default class Game {
    constructor(element) {
        this._element = element;
        this._child = this.characterCreation();
        this._position = this.generatingPosition();
        this.generatingPosition = this.generatingPosition.bind(this);
        this.characterCreation = this.characterCreation.bind(this);
        this.movingCharacter = this.movingCharacter.bind(this);
    }

    *generatingPosition() {
        let random = null;
        const max = Math.floor(this._element.length);
        for(let i = 0; i < Infinity; i++) {
            const randomIndex = Math.floor(Math.random() * (max - 0) + 0);
            while (random !== randomIndex){
                random = randomIndex;
                yield randomIndex;
            }
        }
    }

    characterCreation() {
        const character = new Image();
        character.src = Icon;
        character.classList = 'field-item-img';
        return character;
    }

    movingCharacter() {
        const position = this._position.next();
        this.characterCreation();
        this._element[position.value].appendChild(this._child);
    }
}