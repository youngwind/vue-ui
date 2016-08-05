
var Vue = require('vue');
var VueTouch = require('vue-touch');
Vue.use(VueTouch);

require('./index.scss');

var vNumber = Vue.extend({
    template: require('./index.html'),
    props: {
        max: {
            type: [Number, String],
            default: 5
        },
        value: {
            type: [Number, String],
            default: 1
        }
    },
    methods: {
        setRate: function (index) {
            this.value = index + 1;
        }
    },
    computed: {
        items: function () {
            var ary = [];
            for (var i = 0; i < this.max * 1; i++) {
                ary[i] = {
                    isActive: (this.value * 1 > i ? 1 : 0)
                }
            }
            return ary;
        }
    }
});

Vue.component('v-rate', vNumber);