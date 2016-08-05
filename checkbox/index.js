/**
 * Created by youngwind on 16/8/2.
 * 复选框组件
 */

import Vue from 'vue';
import './index.scss';

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        checked: false
    },
    methods: {
        toggle () {
            this.checked = !this.checked;
        }
    }
});

