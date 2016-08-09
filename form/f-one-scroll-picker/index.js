/**
 * Created by youngwind on 16/8/9.
 */
import Vue from 'vue';
import './index.scss';

import Cell from '../../cell';
import ScrollPicker from '../../scroll_picker';
Vue.component('v-cell', Cell);
Vue.component('v-scroll-picker', ScrollPicker);

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
        options: {
            type: Array
        },
        selectedId: {
            type: [String, Number],
            default: 0
        }
    }
});
