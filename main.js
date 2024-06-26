'use script'
// basics settings element
const allRooms = document.querySelectorAll('.rooms');
const mainRoomsContainer = document.querySelector('.application_container');
const basicSettings = document.querySelector('.basic_settings');
const basicSettingsButtons = document.querySelectorAll('.basic_settings_buttons');

// imports
import Light from './js/basicSettings.js';

// object creation
const lightController = new Light();

// helper functions
// const gridLightButtonFunctionality = function(lightButton, notificationMessage) {
    
//     let dataElement = lightButton.dataset.lighton;
//     let temp;
//     const roomName = lightButton.closest('.rooms').querySelector('p').textContent;
    
//     lightController.lightSwitch(lightButton, dataElement, temp);

//             const message = `${roomName} ${notificationMessage}`;
            
//             lightController.displayNotification(message, 'afterend', mainRoomsContainer);

//             lightController.removeNotification(document.querySelector('.notification'));
            
//             return;
// }


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
            gridLightButtonFunctionality(lightButton, 'lights are off')
        }
        
        lightController.lightSwitch(lightButton, dataElement, temp);

        const message = `${roomName} lights are on`;
        
        lightController.displayNotification(message, 'afterend', mainRoomsContainer);

        lightController.removeNotification(document.querySelector('.notification'));

        return;

        gridLightButtonFunctionality(lightButton, 'lights are on')
        

        

        
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

mainRoomsContainer.addEventListener('change', function(e) {
    if (!e.target.closest('.slider')) return;
    
    const slider = e.target;
    const lightSwitch = slider.closest('.basic_settings').querySelector('.basic_settings_buttons button:first-child img');

    const intensity = slider.value;

    /**when slider is moved
     * the light should be turned on
     * the slide should start from 0 by default
     * when off at an intensity of whatever and the light is put on the light should reflect the level of intensity
     */
    
    // lightSwitch.style.filter = `brightness(${intensity / 10})`
    lightSwitch.style.filter = `drop-shadow(${0} ${0} ${intensity}px #ffd600)`;
    
    
})



