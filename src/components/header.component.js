import {Component} from '../core/component';

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        const btn = this.$el.querySelector('.header-inner__burger')
        btn.addEventListener('click', buttonHandler.bind(this))
    }
}

function buttonHandler(event) {

    const classList = event.target.classList

    if (classList.contains('open')) {
        classList.remove('open')
        this.close()
    } else {
        classList.add('open')
        this.open()
    }
}
