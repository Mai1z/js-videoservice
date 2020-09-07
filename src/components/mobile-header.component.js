import {Component} from '../core/component';

export class MobileHeaderComponent extends Component {
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
        this.hide()
    } else {
        classList.add('open')
        this.show()
    }
}
