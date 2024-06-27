'use strict'

import General from "./general.js";

class AdvanceSettings extends General {
    constructor ({name, numOfLights=1, isLightOff=true, autoOn, autoOff}) {
        super();
        this.name = name;
        this.numOfLights = numOfLights;
        this.isLightOff = isLightOff;
        this.autoOn = autoOn;
        this.autoOff = autoOff;

    }


}

export default AdvanceSettings;