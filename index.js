import Core from "./src/core/package";
import BoardGame from "./src/modules/boardgame/package";

//? Inject BoardGame<Module> into Core
Object.entries(BoardGame).forEach(([ K, V ]) => {
    Object.entries(V).forEach(([ key, value ]) => {
        if(!Core[ K ]) {
            Core[ K ] = {};
        }

        Core[ K ][ key ] = value;
    });
});

let main = new Core.Main();

console.log(main.Game.Enum.Entity);