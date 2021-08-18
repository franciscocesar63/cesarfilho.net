import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'



library.add(faFacebook)
library.add(faGithub)
library.add(faLinkedin)
library.add(faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)
