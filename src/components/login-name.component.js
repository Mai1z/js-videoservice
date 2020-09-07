import {Component} from '../core/component';

export class LoginNameComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        document.addEventListener('DOMContentLoaded', loginNameHandler.bind(this))
    }
}

function loginNameHandler() {
    const content = this.$el
    if (content) {
        content.value = localStorage.getItem('name') || 'Константин К.'
        content.addEventListener('input', () => {localStorage.setItem('name', content.value)})
    }
}

