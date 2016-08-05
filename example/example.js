/**
 * Created by youngwind on 16/8/5.
 */

var Vue = require('vue');
var VUI = require('../index.js');

Vue.component('v-number', VUI.number);
Vue.component('v-checkbox', VUI.checkbox);
Vue.component('v-rate', VUI.rate);
Vue.component('v-shade', VUI.shade);
Vue.component('v-select', VUI.select);

new Vue({
    el: '#app',
    data: {
        number: 1,
        selectOptions: [
            {
                id: 1,
                name: "测试数据1"
            },
            {
                id: 2,
                name: "测试数据测试2"
            },
            {
                id: 3,
                name: "测试数据测试长度3"
            },
            {
                id: 4,
                name: "测试数据测试长度3"
            },
            {
                id: 5,
                name: "测试数据测试长度3"
            },
            {
                id: 6,
                name: "测试数据测试长度3"
            },
            {
                id: 7,
                name: "测试数据测试长度3"
            },
            {
                id: 8,
                name: "测试数据测试长度3"
            },
            {
                id: 9,
                name: "测试数据测试长度3"
            },
            {
                id: 10,
                name: "测试数据测试长度3"
            }
        ],
        selectedId: 4
    }
});