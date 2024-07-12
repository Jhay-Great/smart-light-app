'use strict'

import General from "./general.js";

// basics settings element
// const allRooms = document.querySelectorAll('.rooms');
// const mainRoomsContainer = document.querySelector('.application_container');
// const basicSettings = document.querySelector('.basic_settings');
// const basicSettingsButtons = document.querySelectorAll('.basic_settings_buttons');

class Light extends General {
    constructor() {
        super();
        // this.isLightOff = true;
        // this.lightIntensity = 5;
    }

    renderHTML (element, position, container) {
        container.insertAdjacentHTML(position, element);
    }

    notification (message) {
        return `
            <div class="notification">
                <div>
                    <img src="./assets/svgs/checked.svg" alt="checked svg icon on notifications" >
                </div>
                <p>${message}</p>
            </div>
        `;

    }

    displayNotification (message, position, container) {
        const html = this.notification(message);
        this.renderHTML(html, position, container);
    }

    removeNotification (element) {
        setTimeout(() => {
            element.remove();
        }, 5000);
    }

    lightSwitch (lightButtonElement, dataAttributeValue, temp) {
        console.log('called...', lightButtonElement)
        temp = lightButtonElement.attributes[0].textContent;
        lightButtonElement.setAttribute('src', dataAttributeValue);
        lightButtonElement.setAttribute('data-lightOn', temp);
    };

    lightSwitchOff (lightButtonElement, dataAttributeValue, temp) {
        console.log('called...', lightButtonElement)
        // temp = lightButtonElement.attributes[0].textContent;
        // lightButtonElement.setAttribute('src', dataAttributeValue); // ./assets/svgs/light_bulb_off.svg
        // lightButtonElement.setAttribute('data-lightOn', temp); // /assets/svgs/light_bulb.svg

        lightButtonElement.setAttribute('src', './assets/svgs/light_bulb_off.svg');
        lightButtonElement.setAttribute('data-lightOn', './assets/svgs/light_bulb.svg');



    };


}



export default Light;
