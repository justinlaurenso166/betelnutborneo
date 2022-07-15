import { createApp } from 'vue'
import App from './App.vue'
import "../src/assets/style.css"
import Router from "./router.js"
import "../src/assets/index.css"

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(faEnvelope, faPhone, faInstagram, faBars, faClose, faCheckCircle, faMoneyCheckDollar)

createApp(App).use(Router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')