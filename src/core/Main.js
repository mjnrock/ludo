import Core from "./package";

export default class Main {
    constructor() {
        this.Game = {
            Loop: new Core.Game.Loop(12),
            Managers: {},
            Enum: Core.Enum
        };

        this.Game.Managers = {
            Entity: new Core.Game.EntityManager(this)
        };

        this.Game.Loop.setHandler("tick", this.Tick.bind(this));
        this.Game.Loop.Start();
    }

    Tick(delta) {
        Object.values(this.Game.Managers).forEach(m => m.Tick(delta));
    }
};