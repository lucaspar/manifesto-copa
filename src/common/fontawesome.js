import { library } from '@fortawesome/fontawesome-svg-core';
import { faGoogle } from '@fortawesome/free-brands-svg-icons'; // brands
import { faSpinner } from '@fortawesome/free-solid-svg-icons'; // others
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';

/*
* gallery:
* https://fontawesome.com/icons?d=gallery&m=free&q=
* usage: <font-awesome-icon :icon="['fas', 'spinner']" />
*/

library.add(                // add new icons here
    faSpinner,
    faGoogle,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
