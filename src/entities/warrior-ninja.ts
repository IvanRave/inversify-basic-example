import { inject, injectable } from "inversify";
import Warrior from "./warrior";
import Weapon from "./weapon";
import SERVICE_IDENTIFIER from "./constants/identifiers";

@injectable()
class Ninja implements Warrior {
    public name: string;
    public weapon: Weapon;
    public constructor(
        @inject(SERVICE_IDENTIFIER.WEAPON) weapon: Weapon
    ) {
        this.name = "Ninja";
        this.weapon = weapon;
    }
}

export default Ninja;
