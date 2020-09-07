import './scss/style.scss'
import {NavigationComponent} from './components/navigation.component'
import {FilmsComponent} from './components/films.component'
import {ChannelsComponent} from './components/channels.component'
import {MobileHeaderComponent} from './components/mobile-header.component'
import {LoginNameComponent} from './components/login-name.component'
import {ScrollbarComponent} from "./components/scrollbar.component";

new MobileHeaderComponent('header')
new LoginNameComponent('login-name')
new ScrollbarComponent('scrollbar')
const navigation = new NavigationComponent('navigation')
const films = new FilmsComponent('films')
const channels = new ChannelsComponent('channels')

navigation.registerTabs([
    {name: 'films', component: films},
    {name: 'channels', component: channels}
])
