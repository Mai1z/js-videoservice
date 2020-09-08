import {Component} from '../core/component';

export class LoginNameComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        document.addEventListener('DOMContentLoaded', this.loginNameHandler.bind(this))
    }

    loginNameHandler() {
        const content = this.$el
        if (content) {
            content.value = localStorage.getItem('name') || 'Константин К.'
            content.addEventListener('input', () => {localStorage.setItem('name', content.value)})
        }
    }
}
