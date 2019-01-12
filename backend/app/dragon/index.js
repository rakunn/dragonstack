const TRAITS = require('../../data/traits.json');

const DEFAULT_PROPERTIES = {
    dragonId: undefined,
    nickName: 'unnamed',
    generationId: undefined,
    get birthDate() { return new Date() },
    get randomTraits() {
        let traits = [];

        TRAITS.forEach(TRAIT => {
            const traitType = TRAIT.type;
            const traitValues = TRAIT.values;

            const traitValue = traitValues[
                Math.floor(Math.random() * traitValues.length)
            ];

            traits.push({ traitType, traitValue });
        });

        return traits;
    },
};

class Dragon {
    constructor({ dragonId, birthDate, nickName, traits, generationId } = {}) {
        this.dragonId = dragonId || DEFAULT_PROPERTIES.dragonId;
        this.birthDate = birthDate || DEFAULT_PROPERTIES.birthDate;
        this.nickName = nickName || DEFAULT_PROPERTIES.nickName;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
        this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
    }
}

module.exports = Dragon;