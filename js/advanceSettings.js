'use strict'

class AdvanceSettings {
    constructor ({name, numOfLights=1, isLightOff=true, autoOn, autoOff}) {
        this.name = name;
        this.numOfLights = numOfLights;
        this.isLightOff = isLightOff;
        this.autoOn = autoOn;
        this.autoOff = autoOff;
    }
}

export default AdvanceSettings;