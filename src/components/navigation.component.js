import {Component} from '../core/component'

export class NavigationComponent extends Component {
    constructor(id) {
        super(id);
        this.tabs = []
    }

    init() {
        this.$el.addEventListener('click', this.tabClickHandler.bind(this))
    }

    registerTabs(tabs) {
        this.tabs = tabs
    }

    tabClickHandler(event) {
        event.preventDefault()
        if (event.target.classList.contains('nav__tab')) {
            Array.from(this.$el.querySelectorAll('.nav__tab')).forEach(tab => {
                tab.classList.remove('active')
            })
            event.target.classList.add('active')

            const activeTab = this.tabs.find(tab => tab.name === event.target.dataset.name)
            this.tabs.forEach(tab => tab.component.hide())
            activeTab.component.show()
        }
    }
}
