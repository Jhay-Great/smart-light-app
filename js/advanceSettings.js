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

    markup () {
        return `
            <section class="component_summary">
                <div>
                    <p class"component_name">${this.capFirstLetter(this.name)} lights</p>
                    <p class="number_of_lights">${this.numOfLights}</p>
                </div>
                <div>
                    <p class="auto_off">
                        <span>Automatic turn off:</span>
                        <span>22:00</span>
                    </p>
                    <p class="auto_on">
                        <span>Automatic turn on:</span>
                        <span>06:30</span>
                    </p>
                </div>
            </section>
            <section class="customization">
                <div class="edit">
                    <p>Customize</p>
                    <img src="./assets/svgs/edit.svg" alt="customize settings svg icon">
                </div>
            </section>
        `
    }

    capFirstLetter (word) {
        return word.replace(word.at(0), word.at(0).toUpperCase())
    }


}

export default AdvanceSettings;