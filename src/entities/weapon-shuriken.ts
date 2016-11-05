import Weapon from "./weapon";
import { injectable } from "inversify";

@injectable()
class Shuriken implements Weapon {
    public name: string;
    public constructor() {
        this.name = "Shuriken";
    }
}

export default Shuriken;
