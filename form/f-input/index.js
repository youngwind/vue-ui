/**
 * Created by youngwind on 16/8/9.
 */

import Vue from 'vue';
import './index.scss';

import Cell from '../../cell';
import vInput from '../../input';
Vue.component('v-cell', Cell);
Vue.component('v-input', vInput);

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        title: {
            type: String,
            default: '姓名'
        },
        name: {
            type: String,
            default: 'name'
        },
        value: {
            type: [String, Number],
            default: '梁少峰'
        }
    }
});
