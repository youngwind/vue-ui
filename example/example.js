/**
 * Created by youngwind on 16/8/5.
 */

import Vue from 'vue';
import {number, checkbox, rate, shade, select} from '../index';
Vue.component('v-number', number);
Vue.component('v-checkbox', checkbox);
Vue.component('v-rate', rate);
Vue.component('v-shade', shade);
Vue.component('v-select', select);

new Vue({
    el: '#app',
    data: {
        number: 1,
        selectOptions: [
            {
                id: 1,
                name: '测试数据1'
            },
            {
                id: 2,
                name: '测试数据测试2'
            },
            {
                id: 3,
                name: '测试数据测试长度3'
            },
            {
                id: 4,
                name: '测试数据测试长度3'
            },
            {
                id: 5,
                name: '测试数据测试长度3'
            },
            {
                id: 6,
                name: '测试数据测试长度3'
            },
            {
                id: 7,
                name: '测试数据测试长度3'
            },
            {
                id: 8,
                name: '测试数据测试长度3'
            },
            {
                id: 9,
                name: '测试数据测试长度3'
            },
            {
                id: 10,
                name: '测试数据测试长度3'
            }
        ],
        selectedId: 4
    }
});

