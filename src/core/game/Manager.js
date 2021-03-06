export default class Manager {
    constructor(game) {
        this.GameRef = game;
        this.Registry = {};
    }

    Register(key, entry) {
        this.Registry[ key ] = entry;

        return this;
    }
    Unregister(key) {
        delete this.Registry[ key ];

        return this;
    }

    Tick(delta) {}
};