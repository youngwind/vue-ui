/**
 * Created by youngwind on 16/8/5.
 * 全局半透明黑色遮罩
 */

import Vue from 'vue';
import './index.scss';

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        display: {
            type: [Boolean],
            default: false
        }
    },
    methods: {
        hide () {
            this.display = false;
        }
    },
    computed: {
        shadeWrapperClass () {
            return {
                'v-shade-wrapper': true,
                'v-show': this.display
            };
        }
    }
});

