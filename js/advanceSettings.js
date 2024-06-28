'use strict'

import General from "./general.js";

class AdvanceSettings extends General {
    constructor ({name, numOfLights=1, isLightOff=true, autoOn='06:30', autoOff='22:00'}) {
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

                    <p class="auto_on">
                        <span>Automatic turn on:</span>
                        <span>${this.autoOn}</span>
                    </p>
                    <p class="auto_off">
                        <span>Automatic turn off:</span>
                        <span>${this.autoOff}</span>
                    </p>
                </div>
            </section>
            <section class="customization">
                <div class="edit">
                    <p>Customize</p>
                    <button class="customization-btn">
                        <img src="./assets/svgs/edit.svg" alt="customize settings svg icon">
                    </button>
                </div>
                <section class="customization-details hidden">
                    <div>
                        <h4>Automatic on/off settings</h4>
                        <div class="defaultOn">
                            <label for="">Turn on</label>
                            <input type="time" name="autoOnTime" id="autoOnTime">
                            <div>
                                <button class="defaultOn-okay">Okay</button>
                                <button class="defaultOn-cancel">Cancel</button>
                            </div>
                        </div>
                        <div class="defaultOff">
                            <label for="">Go off</label>
                            <input type="time" name="autoOffTime" id="autoOffTime">
                            <div>
                                <button class="defaultOff-okay">Okay</button>
                                <button class="defaultOff-cancel">Cancel</button>
                            </div>
                        </div>

                    </div>
                </section>
            </section>
        `
    }

    capFirstLetter (word) {
        return word.replace(word.at(0), word.at(0).toUpperCase())
    }

    getObjectDetails() {
        return this;
    }


}

export default AdvanceSettings;