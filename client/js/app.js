class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chat')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatBox } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))
    }

    toggleState(chatbox) {
        this.state = !this.state;

        // show or hides the box
        if (this.state) {
            chatbox.classList.add('chatbox--active')
        } else {
            chatbox.classList.remove('chatbox--active')
        }
    }
}

const chatbox = new Chatbox();
chatbox.display();
