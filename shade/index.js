/**
 * Created by youngwind on 16/8/5.
 * 全局半透明黑色遮罩
 */

var Vue = require('vue');

require('./index.scss');

var vShade = Vue.extend({
    template: require('./index.html'),
    props: {
        display: {
            type: [Boolean],
            default: false
        }
    },
    methods: {
        hide: function () {
            this.display = false;
        }
    },
    computed: {
        shadeWrapperClass: function () {
            return {
                'v-shade-wrapper': true,
                'v-show': this.display
            }
        }
    }
});

module.exports = vShade;