class General {
    #componentsData = {
        hall: { name: 'bedroom', numOfLights: 3, isLightOff: true, },
        bedroom: { name: 'bedroom', numOfLights: 3, isLightOff: true, },
        bathroom: { name: 'bedroom', numOfLights: 3, isLightOff: true, },
        ['outside']: { name: 'bedroom', numOfLights: 3, isLightOff: true, },
        ['guest room']: { name: 'bedroom', numOfLights: 3, isLightOff: true, },
        kitchen: { name: 'bedroom', numOfLights: 3, isLightOff: true, },
        [['walkway & corridor']]: { name: 'bedroom', numOfLights: 3, isLightOff: true, },
    }
    constructor () {}

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
        }, 6000);
    }

}

export default General