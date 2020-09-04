export class Component {
    constructor(id) {
        this.$el = document.getElementById(id)
        this.init()
    }

    init() {}

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }

    hide() {
        this.$el.classList.add('hide')
    }

    show() {
        this.$el.classList.remove('hide')
    }
}
