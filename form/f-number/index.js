/**
 * Created by youngwind on 16/8/8.
 */

import Vue from 'vue';
import './index.scss';

import Cell from '../../cell';
import vNumber from '../../number';
Vue.component('v-cell', Cell);
Vue.component('v-number', vNumber);

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        title: {
            type: String,
            default: '年龄'
        },
        name: {
            type: String,
            default: 'age'
        },
        value: {
            type: [String, Number],
            default: 0
        }
    }
});

