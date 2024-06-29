class General {
    componentsData = {
        hall: { name: 'hall', numOfLights: 6, isLightOff: false, autoOn: '06:30', autoOff: '22:00' },
        bedroom: { name: 'bedroom', numOfLights: 3, isLightOff: true, autoOn: '06:30', autoOff: '22:00' },
        bathroom: { name: 'bathroom', numOfLights: 1, isLightOff: true, autoOn: '06:30', autoOff: '22:00' },
        ['outdoor lights']: { name: 'outdoor lights', numOfLights: 6, isLightOff: true, autoOn: '06:30', autoOff: '22:00' },
        ['guest room']: { name: 'guest room', numOfLights: 4, isLightOff: true, autoOn: '06:30', autoOff: '22:00' },
        kitchen: { name: 'kitchen', numOfLights: 3, isLightOff: true, autoOn: '06:30', autoOff: '22:00' },
        [['walkway & corridor']]: { name: 'walkway & corridor', numOfLights: 8, isLightOff: false, autoOn: '06:30', autoOff: '22:00' },
    }

    constructor () {
        // this.autoOn = autoOn;
        // this.autoOff = autoOff;
        this.isLightOff = true;
        this.lightIntensity = 5;
    }

    renderHTML (element, position, container) {
        container.insertAdjacentHTML(position, element);
    }

    notification (message) {
        return `
            <div class="notification">
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

}

export default General