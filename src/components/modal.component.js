import {Component} from '../core/component'

export class ModalComponent extends Component {
    constructor(id) {
        super(id);
        this.body = document.body.classList
    }
    init() {
        const btn = document.querySelector('#login-btn')
        btn.addEventListener('click', this.modalOpen.bind(this))
        window.addEventListener('click', this.modalClose.bind(this))
    }

    modalOpen() {
        console.log('123')
        this.show()
        this.body.add('fixed')
    }

    modalClose(event) {
        if (event.target === this.$el) {
            this.hide()
            this.body.remove('fixed')
        }
    }
}

