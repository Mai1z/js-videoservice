import './scss/style.scss'
import {NavigationComponent} from './components/navigation.component'
import {FilmsComponent} from './components/films.component'
import {ChannelsComponent} from './components/channels.component'
import {HeaderComponent} from './components/header.component'

const header = new HeaderComponent('header')
const navigation = new NavigationComponent('navigation')
const films = new FilmsComponent('films')
const channels = new ChannelsComponent('channels')

navigation.registerTabs([
    {name: 'films', component: films},
    {name: 'channels', component: channels}
])
