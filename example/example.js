/**
 * Created by youngwind on 16/8/5.
 */

import Vue from 'vue';
import './example.scss';
import {
    number, checkbox, rate, shade, select, scrollPicker, group, cell, fNumber,
    input, fInput, fOneScrollPicker, fRadio, fCheckBox
} from '../index';

Vue.component('v-number', number);
Vue.component('v-checkbox', checkbox);
Vue.component('v-rate', rate);
Vue.component('v-shade', shade);
Vue.component('v-select', select);
Vue.component('v-scroll-picker', scrollPicker);
Vue.component('v-group', group);
Vue.component('v-cell', cell);
Vue.component('v-f-number', fNumber);
Vue.component('v-input', input);
Vue.component('v-f-input', fInput);
Vue.component('v-f-one-scroll-picker', fOneScrollPicker);
Vue.component('v-f-radio', fRadio);
Vue.component('v-f-checkbox', fCheckBox);

let ageOptions = [];
for (let i = 1; i < 100; i++) {
    ageOptions.push({
        id: i,
        name: i
    });
}

new Vue({
    el: '#app',
    data: {
        name: '梁少峰',
        number: 1,
        selectOptions: ageOptions,
        selectedId: 20,
        radio: {
            name: 'country',
            value: 'China',
            options: [
                {
                    name: '中国',
                    value: 'China'
                },
                {
                    name: '美国',
                    value: 'USA'
                },
                {
                    name: '加拿大',
                    value: 'Canada'
                }
            ]
        },
        checkbox: {
            name: 'skill',
            value: ['nodejs', 'css'],
            options: [
                {
                    value: 'nodejs',
                    name: 'nodejs'
                },
                {
                    value: 'css',
                    name: 'css'
                },
                {
                    value: 'js',
                    name: 'js'
                },
                {
                    value: 'react',
                    name: 'react'
                }
            ]
        }

    },
    methods: {
        toast () {
            this.$vux.toast.show({

                text: 'Hello World',
                time: 1500,
                onShow () {
                    console.log('toast show');
                },
                onHide () {
                    console.log('toast hide');
                }
            });
        }

    }
});

