'use script'
// basics settings element
const allRooms = document.querySelectorAll('.rooms');
const mainRoomsContainer = document.querySelector('.application_container');
const basicSettings = document.querySelector('.basic_settings');
const basicSettingsButtons = document.querySelectorAll('.basic_settings_buttons');

// advanced settings elements


// helper variables
const object = {
    hall: { name: 'hall', numOfLights: 6, isLightOff: false, },
    bedroom: { name: 'bedroom', numOfLights: 3, isLightOff: true, },
    bathroom: { name: 'bathroom', numOfLights: 1, isLightOff: true, },
    ['outdoor lights']: { name: 'outdoor lights', numOfLights: 6, isLightOff: true, },
    ['guest room']: { name: 'guest room', numOfLights: 4, isLightOff: true, },
    kitchen: { name: 'kitchen', numOfLights: 3, isLightOff: true, },
    [['walkway & corridor']]: { name: 'walkway & corridor', numOfLights: 8, isLightOff: false, },
}


// imports
import Light from './js/basicSettings.js';
import AdvanceSettings from './js/advanceSettings.js';

// object creation
const lightController = new Light();

const component1 = {
    name: 'bedroom',
    numOfLights: 3,
    isLightOff: true,
}
const bedroom = new AdvanceSettings(component1);
// console.log(bedroom);

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
        
        // console.log('initially off: ', lightController.isLightOff);
        
        
        if (lightButton.getAttribute('src') === './assets/svgs/light_bulb.svg') {
            lightController.isLightOff = true;
            
            lightButton.style.filter = `drop-shadow(0 0 0)`;
            gridLightButtonFunctionality(lightButton, 'lights are off')
            return;
        }
        
        
        lightButton.style.filter = `drop-shadow(0 0 ${lightController.lightIntensity}px #ffd600)`; 
        lightController.isLightOff = false;
        gridLightButtonFunctionality(lightButton, 'lights are on');
        return;

        // TODO: set the initial starting of the range to 0 and when the light is turned off the range should move from 0 to 1
        

        

        
        // const parentElement = e.target.closest('.rooms');
        // // parentElement.style.filter = `brightness${(0.9)}`;

        // // parentElement.style.opacity = 0.1;
        // // document.styleSheets[0].cssRules[28].style.setProperty('filter', `brightness${0.9}`)
        // console.log(document.styleSheets[0].cssRules[28].style.setProperty('filter', 'brightness(0.9)'))
        // // console.log('r')
        // console.log(document.styleSheets[0].cssRules[28].style)
        // const currentLightOutput = document.styleSheets[0].cssRules[28].style.filter;
    };

    // expanding additional functionalities or advance settings
    if (e.target.closest('.basic_settings_buttons > button:last-child')) {
        e.target.closest('body').querySelector('.advanced_features_container').classList.remove('hidden');
        const selectedComponent = e.target.closest('.rooms').querySelector('p').textContent;

        // console.log(selectedComponent.toLowerCase(), object[selectedComponent.toLowerCase()])
        
        const selectedComponentObject = new AdvanceSettings(object[selectedComponent.toLowerCase()])

        // console.log(selectedComponentObject)
        const markup = selectedComponentObject.markup();

        const container = document.querySelector('.advanced_features')

        selectedComponentObject.renderHTML(markup, 'beforeend', container);
        


    };
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


    if (intensity >= 1) {
        lightSwitch.setAttribute('src', "./assets/svgs/light_bulb.svg")
        lightSwitch.setAttribute('data-lightOn', "./assets/svgs/light_bulb_off.svg")
        lightController.isLightOff = false; 
    } else {
        lightSwitch.setAttribute('src', "./assets/svgs/light_bulb_off.svg")
        lightSwitch.setAttribute('data-lightOn', "./assets/svgs/light_bulb.svg") 
        lightController.isLightOff = true;
    }
    
    
    lightSwitch.style.filter = `drop-shadow(${0} ${0} ${intensity}px #ffd600)`;
    
    
})


// TODO: slider should start from 0
/**
 * get an object data
 * TODO: research!!! does the smart light involve sockets and plugs
 */

/**default settings / customize
 * @10:00pm the bedroom lights go off => time to sleep
 * @6:30am the bedroom lights turn on => time to wake up
 * {
 *  component: bedroom,
 *  numberOfLights: 3,
 *  isLightOff: true,
 *  defaultTimeOff: 10:00pm,
 *  defaultTimeOn: 6:30am,
 *  
 * }
 * 
 * @6:00pm the outside lights turn on => it's evening
 * @6:00am the outside lights go off => it's morning
 * 
 */

// Advance settings
const advancedFeaturesContainer = document.querySelector('.advanced_features_container');
const closeButton = document.querySelector('.close-btn');

advancedFeaturesContainer.addEventListener('click', function(e) {
    // e.target.closest('body');

})

closeButton.addEventListener('click', function() {
    const parent = document.querySelector('.advanced_features');
    parent.replaceChildren(parent.firstElementChild); // remove children elements expect the first child
    advancedFeaturesContainer.classList.add('hidden');
})



