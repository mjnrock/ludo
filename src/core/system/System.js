import Lux from "@lespantsfancy/lux";

import Entity from "./../entity/Entity";
import Component from "./../component/Component";

export default class System extends Lux.Node.Struct {
    constructor(game, type, { state = {} } = {}) {
        super({
            ...state,

            GameRef: game,
            Type: type
        });
    }

    GetComponent(entity) {
        if(entity instanceof Entity) {
            return entity.$(this.Type);
        }

        return false;
    }

    static IsComponent(comp) {
        return comp instanceof Component;
    }
    static IsEntity(entity) {
        return entity instanceof Entity;
    }
    static IsSystem(system) {
        return system instanceof System;
    }
};