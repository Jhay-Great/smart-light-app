'use strict'

// basics settings element
const allRooms = document.querySelectorAll('.rooms');
const mainRoomsContainer = document.querySelector('.application_container');
const basicSettings = document.querySelector('.basic_settings');
const basicSettingsButtons = document.querySelectorAll('.basic_settings_buttons');

class Light {
    constructor() {
        this.lightState = 'off';

    }

    renderHTML (element, position, container) {
        container.insertAdjacentHTML(position, element);
    }

    notification (message) {
        console.log('called');
        return `
            <div class="notification">
                <p>${message}</p>
            </div>
        `;

    }

    displayNotification (message, position, container) {
        // const notify = setTimeout(this.notification(message), 5000);
        // clearTimeout(notify);
        const html = this.notification(message);

        this.renderHTML(html, position, container);
    }

    removeNotification (element) {
        setTimeout(() => {
            element.remove();
        }, 6000);
    }

}



export default Light;

// TODO: when the button is clicked the light for a particular room should be turned on.
/**requirements
 * the parent element should also glow up
 * the slider should be at 50% which indicates a regular or normal light intensity
 * have a variable that tracks the on/off state
 * select individual targets and listen to the event
 */

// Events handlers


// Helper function / event listeners / utility functions
