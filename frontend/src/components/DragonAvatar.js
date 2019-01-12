import React, { Component } from 'react';
import X from '../assets';

const { patchy, plain, skinny, slender, spotted, sporty, stocky, striped } = X;

const propertyMap = {
    backgroundColor: {
        black: '#263238',
        white: '#cfd8dc',
        green: '#a5d6a7',
        blue: '#0277bd',
        yellow: '#999922',
        red: '#f92313',
        brown: '#dd02cc',
    },
    build: {
        slender: slender,
        stocky,
        sporty,
        skinny
    },
    pattern: {
        plain,
        striped,
        spotted,
        patchy
    },
    size: {
        small: 100,
        medium: 140,
        large: 180,
        enormous: 220,
        big: 200,
    },
};

class DragonAvatar extends Component {

    get dragonImage() {

        let dragonPropertyMap = {};


        this.props.dragon.traits.forEach(trait => {
            const { traitType, traitValue } = trait;

            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
        })

        const { backgroundColor, build, pattern, size } = dragonPropertyMap;

        const sizing = { width: size, height: size };

        return (
            <div className="dragon-avatar-image-wrapper">
                <div className="dragon-avatar-image-background" style={{ backgroundColor: backgroundColor, width: sizing.width, height: sizing.height }} />
                <img src={ pattern} className="dragon-avatar-image-pattern" style= {sizing} />
                <img src={ build } className="dragon-avatar-image" style={sizing} />
            </div>
        )
    }

    render() {
        const { dragon } = this.props;

        return (
            <div>
                <span>{ dragon.generationId }</span>
                <span>{ dragon.dragonId }</span>
                <ul>
                    { dragon.traits.map(({ traitType, traitValue}) => (
                        <li> { traitType }: { traitValue }</li>
                    )) }
                </ul>
                { this.dragonImage }
            </div>
        );
    }
}

export default DragonAvatar;