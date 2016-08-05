/**
 * Created by youngwind on 16/8/1.
 * 加减数字组件
 */

import Vue from 'vue';
import './index.scss';

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        value: 0
    },
    methods: {
        plus () {
            this.value++;
        },
        minus () {
            this.value--;
        }
    },
    computed: {
        hiddenMinus () {
            return this.value <= 0;
        }
    }
});

