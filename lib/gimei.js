'use strict';

const yaml = require('js-yaml');
const Path = require('path');
const fs = require('fs');

const MALE = 'male';
const FEMALE = 'female';

const floor = Math.floor;
const random = Math.random;
const max = Math.max;

function sample (array) {
    return array[floor(random() * array.length)];
}

function zip (arrays) {
    let result = [];
    for (let i = 0, n = max(...arrays.map(e => e.length)); i < n; ++i) {
        result.push(arrays.map(e => e[i]));
    }
    return result;
}

class YamlCache {
    static get addresses() {
        if (this._addresses == null) {
            let file = Path.join(__dirname, 'data', 'addresses.yml');
            this._addresses = yaml.safeLoad(fs.readFileSync(file, 'utf8'))['addresses'];
        }
        return this._addresses;
    }

    static get names() {
        if (this._names == null) {
            let file = Path.join(__dirname, 'data', 'names.yml');
            this._names = yaml.safeLoad(fs.readFileSync(file, 'utf8'));
        }
        return this._names;
    }
}

class Japanese {
    constructor(kanji, hiragana, katakana) {
        Object.assign(this, {kanji, hiragana, katakana});
    }

    toString() {
        return this.kanji;
    }
}

class Name extends Japanese {
    constructor(gender) {
        const names = YamlCache.names;
        let first = sample(names['first_name'][gender]);
        let last = sample(names['last_name']);
        let name = zip([last, first]).map(e => e.join(' '));

        super(...name);
        Object.assign(this, {
            first: new Japanese(...first),
            last: new Japanese(...last)
        });
        this.gender = gender;
    }

    get male() {
        return this.gender === MALE;
    }

    get female() {
        return this.gender === FEMALE;
    }
}

class Address extends Japanese {
    constructor() {
        const addresses = YamlCache.addresses;
        let prefecture = sample(addresses['prefecture']);
        let city = sample(addresses['city']);
        let town = sample(addresses['town']);
        let address = zip([prefecture, city, town]).map(e => e.join(''));

        super(...address);
        Object.assign(this, {
            prefecture: new Japanese(...prefecture),
            city: new Japanese(...city),
            town: new Japanese(...town)
        });
    }
}

class Gimei {
    static name() {
        return new Name(sample([MALE, FEMALE]));
    }

    static male() {
        return new Name(MALE);
    }

    static female() {
        return new Name(FEMALE);
    }

    static address() {
        return new Address();
    }
}

module.exports = Gimei;