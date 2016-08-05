/**
 * Created by youngwind on 16/8/5.
 */

var Vue = require('vue');
var VUI = require('../index.js');

Vue.component('v-number', VUI.number);
Vue.component('v-checkbox', VUI.checkbox);
Vue.component('v-rate', VUI.rate);
Vue.component('v-shade',VUI.shade);
Vue.component('v-select',VUI.select);

new Vue({
    el: '#app',
    data: {
        number: 1
    }
});