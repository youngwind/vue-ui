/**
 * Created by youngwind on 16/8/10.
 */

import Vue from 'vue';
import './index.scss';

import Cell from '../../cell';
import vNumber from '../../number';

module.exports = Vue.extend({
    template: require('./index.html'),
    components: {
        'v-cell': Cell,
        'v-number': vNumber
    },
    props: {
        name: {
            type: String,
            default: 'country'
        },
        value: {
            type: [String, Number],
            default: 'China'
        },
        options: {
            type: Array,
            default () {
                return [
                    {
                        value: 'China',
                        name: '中国'
                    },
                    {
                        value: 'USA',
                        name: '美国'
                    },
                    {
                        value: 'Japan',
                        name: '日本'
                    }
                ];
            }
        }
    },
    methods: {
        select (val) {
            this.value = val;
        }
    }
});
