'use script'
// basics settings element
const allRooms = document.querySelectorAll('.rooms');
const mainRoomsContainer = document.querySelector('.application_container');
const basicSettings = document.querySelector('.basic_settings');
const basicSettingsButtons = document.querySelectorAll('.basic_settings_buttons');

// imports
import Light from './js/basicSettings.js';

const lightController = new Light();

// Event handlers
mainRoomsContainer.addEventListener('click', function (e) {
    if (e.target.closest('.basic_settings_buttons > button:first-child')) {
        const lightButton = e.target;
        let dataElement = lightButton.dataset.lighton;
        let temp;
        const roomName = lightButton.closest('.rooms').querySelector('p').textContent;


        if (lightButton.getAttribute('src') === './assets/svgs/light_bulb.svg') {
            lightController.lightSwitch(lightButton, dataElement, temp);

            const message = `${roomName} lights are off`;
            
            lightController.displayNotification(message, 'afterend', mainRoomsContainer);

            lightController.removeNotification(document.querySelector('.notification'));
            
            return;
        }
        
        lightController.lightSwitch(lightButton, dataElement, temp);

        const message = `${roomName} lights are on`;
        
        lightController.displayNotification(message, 'afterend', mainRoomsContainer);

        lightController.removeNotification(document.querySelector('.notification'));
        

        

        
        // const parentElement = e.target.closest('.rooms');
        // // parentElement.style.filter = `brightness${(0.9)}`;

        // // parentElement.style.opacity = 0.1;
        // // document.styleSheets[0].cssRules[28].style.setProperty('filter', `brightness${0.9}`)
        // console.log(document.styleSheets[0].cssRules[28].style.setProperty('filter', 'brightness(0.9)'))
        // // console.log('r')
        // console.log(document.styleSheets[0].cssRules[28].style)
        // const currentLightOutput = document.styleSheets[0].cssRules[28].style.filter;
    }
})

// console.log(document.styleSheets[0])
// console.log(document.styleSheets[0].cssRules[28].style)

