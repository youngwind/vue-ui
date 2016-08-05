/**
 * Created by youngwind on 16/8/1.
 */

var Vue = require('vue');
var VueTouch = require('vue-touch');
Vue.use(VueTouch);

require('../base/common.scss');
require('./index.scss');

var vNumber = Vue.extend({
    template: require('./index.html'),
    props: {
        value: 0
    },
    methods: {
        plus: function () {
            this.value++;
        },
        minus: function () {
            this.value--;
        }
    },
    computed: {
        hiddenMinus: function () {
            return this.value <= 0 ? true : false;
        }
    }
});

Vue.component('v-number', vNumber);