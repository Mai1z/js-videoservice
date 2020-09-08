import {Component} from '../core/component'

export class ChannelsComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        const btn = document.querySelector('.nav__tab[data-name=channels]')
        btn.addEventListener('click', () => {this.render()})
    }

    render() {
        setTimeout(() => {this.scrollbarHandler()}, 0)
    }

    scrollbarHandler() {
        const scrollContainer = document.querySelector('.channels'),
            scrollContent = document.querySelector('.channels__items')

        let contentPosition = 0,
            scrollerBeingDragged = false,
            scroller,
            topPosition,
            scrollerHeight,
            normalizedPosition,
            visibleRatio,
            scrollPercentage,
            mouseDifferential,
            scrollEquivalent

        const calculateScrollerHeight = () => {
            visibleRatio = scrollContainer.offsetHeight / scrollContent.scrollHeight;
            return visibleRatio * scrollContainer.offsetHeight;
        }

        const moveScroller = (event) => {
            scrollPercentage = event.target.scrollTop / scrollContent.scrollHeight
            topPosition = scrollPercentage * (scrollContainer.offsetHeight - 5)
            scroller.style.top = topPosition + 'px'
        }

        const startDrag = (event) => {
            normalizedPosition = event.pageY;
            contentPosition = scrollContent.scrollTop;
            scrollerBeingDragged = true;
        }

        const stopDrag = (event) => {
            scrollerBeingDragged = false;
        }

        const scrollBarScroll = (event) => {
            if (scrollerBeingDragged === true) {
                mouseDifferential = event.pageY - normalizedPosition;
                scrollEquivalent = mouseDifferential * (scrollContent.scrollHeight / scrollContainer.offsetHeight);
                scrollContent.scrollTop = contentPosition + scrollEquivalent;
            }
        }

        const createScroller = () => {
            scroller = document.createElement("div")
            scroller.className = 'channels__scrollbar'
            scrollerHeight = calculateScrollerHeight()

            if (scrollerHeight / scrollContainer.offsetHeight < 1){
                scroller.style.height = scrollerHeight + 'px'
                scrollContainer.appendChild(scroller)
                scrollContainer.className += ' showScroll'

                scroller.addEventListener('mousedown', startDrag)
                window.addEventListener('mouseup', stopDrag)
                window.addEventListener('mousemove', scrollBarScroll)
            }
        }

        createScroller()

        scrollContent.addEventListener('scroll', moveScroller)
    }
}


