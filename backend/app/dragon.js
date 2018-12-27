const TRAITS = require('../data/traits.json');

const DEFAULT_PROPERTIES = {
    nickName: 'unnamed',
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
    }
};

class Dragon {
    constructor({ birthDate, nickName, traits } = {}) {
        this.birthDate = birthDate || DEFAULT_PROPERTIES.birthDate;
        this.nickName = nickName || DEFAULT_PROPERTIES.nickName;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
}

module.exports = Dragon;