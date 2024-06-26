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
            temp = e.target.attributes[0].textContent;
            lightButton.setAttribute('src', dataElement);
            lightButton.setAttribute('data-lightOn', temp);

            const message = `${roomName} lights are off`;

            // lightController.renderHTML(lightController.notification(`${roomName} lights are on`), 'afterend', mainRoomsContainer)

            lightController.displayNotification(message, 'afterend', mainRoomsContainer);

            lightController.removeNotification(document.querySelector('.notification'));
            
            return;
        }

        temp = e.target.attributes[0].textContent;
        lightButton.setAttribute('src', dataElement);
        lightButton.setAttribute('data-lightOn', temp);


        const message = `${roomName} lights are on`;

        // const message = lightController.notification(`${roomName} lights are on`);

        // lightController.renderHTML(message, 'afterend', mainRoomsContainer)

        lightController.displayNotification(message, 'afterend', mainRoomsContainer);

        lightController.removeNotification(document.querySelector('.notification'));
        
        // setTimeout(() => {
        //     document.querySelector('.notification').remove();
        // }, 6000);


        

        
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

