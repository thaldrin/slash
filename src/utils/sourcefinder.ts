import Sourcefinder from "@thaldrin/sourcefinder";
import config from "./config"

const sourcefinder = new Sourcefinder(
    `${config.name}/${config.version} (${config.creator})`,
);

export default sourcefinder;