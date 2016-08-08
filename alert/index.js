/**
 * Created by youngwind on 16/8/7.
 * Alert组件
 */

import Vue from 'vue';
import './index.scss';

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        display: {
            type:Boolean,
            default:false
        }
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

