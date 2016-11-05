import kernel from "./ioc_config";
import SERVICE_IDENTIFIER from "./entities/constants/identifiers";
import Battle from "./entities/battle";

// Composition root
let epicBattle = kernel.get<Battle>(SERVICE_IDENTIFIER.BATTLE);

console.log(epicBattle.fight());
