import { Kernel } from "inversify";
import "reflect-metadata";
import SERVICE_IDENTIFIER from "./entities/constants/identifiers";
import TAG from "./entities/constants/tags";
import Weapon from "./entities/weapon";
import Warrior from "./entities/warrior";
import Ninja from "./entities/warrior-ninja";
import Battle from "./entities/battle";
import Samurai from "./entities/warrior-samurai";
import Shuriken from "./entities/weapon-shuriken";
import Katana from "./entities/weapon-katana";
import EpicBattle from "./entities/battle-epic";

let kernel = new Kernel();

kernel.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Ninja).whenTargetNamed(TAG.CHINESE);
kernel.bind<Warrior>(SERVICE_IDENTIFIER.WARRIOR).to(Samurai).whenTargetNamed(TAG.JAPANESE);
kernel.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Shuriken).whenParentNamed(TAG.CHINESE);
kernel.bind<Weapon>(SERVICE_IDENTIFIER.WEAPON).to(Katana).whenParentNamed(TAG.JAPANESE);
kernel.bind<Battle>(SERVICE_IDENTIFIER.BATTLE).to(EpicBattle);

export default kernel;
