import {config} from './modules/config'
import AppService from './modules/app.service'
import './modules/header'
import './css/style.css'
import './scss/style.scss'

console.log(config.key)

const service = new AppService('Hello world')
service.log()