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
const gridLightButtonFunctionality = function(lightButton, notificationMessage) {
    
    let dataElement = lightButton.dataset.lighton;
    let temp;
    const roomName = lightButton.closest('.rooms').querySelector('p').textContent;
    
    lightController.lightSwitch(lightButton, dataElement, temp);

            const message = `${roomName} ${notificationMessage}`;
            
            lightController.displayNotification(message, 'afterend', mainRoomsContainer);

            lightController.removeNotification(document.querySelector('.notification'));
            
            return;
}


// Event handlers
mainRoomsContainer.addEventListener('click', function (e) {
    if (e.target.closest('.basic_settings_buttons > button:first-child')) {
        const lightButton = e.target;
        // let dataElement = lightButton.dataset.lighton;
        // let temp;
        // const roomName = lightButton.closest('.rooms').querySelector('p').textContent;
        
        console.log('initially off: ', lightController.isLightOff);
        
        
        if (lightButton.getAttribute('src') === './assets/svgs/light_bulb.svg') {
            lightController.isLightOff = true;
            // lightController.lightSwitch(lightButton, dataElement, temp);
            
            // const message = `${roomName} lights are off`;
            
            // lightController.displayNotification(message, 'afterend', mainRoomsContainer);

            // lightController.removeNotification(document.querySelector('.notification'));
            
            // return;
            lightButton.style.filter = `drop-shadow(0 0 0)`;
            gridLightButtonFunctionality(lightButton, 'lights are off')
            return;
        }
        
        // lightController.lightSwitch(lightButton, dataElement, temp);


        // const message = `${roomName} lights are on`;
        
        // lightController.displayNotification(message, 'afterend', mainRoomsContainer);

        // lightController.removeNotification(document.querySelector('.notification'));
        
        // return;
        
        lightButton.style.filter = `drop-shadow(0 0 ${lightController.lightIntensity}px #ffd600)`; 
        lightController.isLightOff = false;
        gridLightButtonFunctionality(lightButton, 'lights are on');
        return;
        

        

        
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
    lightController.lightIntensity = slider.value;

    /** TODO: NOTE: 
     * when slider is moved
     * the light should be turned on
     * the slide should start from 0 by default
     * when off at an intensity of whatever and the light is put on the light should reflect the level of intensity
     */
    
    // lightSwitch.style.filter = `brightness(${intensity / 10})`

    // intensity >= 1 ? 
    // lightSwitch.setAttribute('src', "./assets/svgs/light_bulb_on.svg")
    // lightSwitch.setAttribute('data-lightOn', "./assets/svgs/light_bulb_off.svg") :
    // `
    //     <img src="./assets/svgs/light_bulb_off.svg" data-lightOn="./assets/svgs/light_bulb.svg" alt="fullscreen button svg icon">
    // `;

    if (intensity >= 1) {
        lightSwitch.setAttribute('src', "./assets/svgs/light_bulb.svg")
        lightSwitch.setAttribute('data-lightOn', "./assets/svgs/light_bulb_off.svg")
        lightController.isLightOff = false; 
    } else {
        lightSwitch.setAttribute('src', "./assets/svgs/light_bulb_off.svg")
        lightSwitch.setAttribute('data-lightOn', "./assets/svgs/light_bulb.svg") 
        lightController.isLightOff = true;
    }
    
    // gridLightButtonFunctionality(lightSwitch, `light intensity at ${intensity}`)
    
    lightSwitch.style.filter = `drop-shadow(${0} ${0} ${intensity}px #ffd600)`;
    
    
})


// TODO: slider should start from 0



