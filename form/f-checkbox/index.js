/**
 * Created by youngwind on 16/8/10.
 */

import Vue from 'vue';
import './index.scss';

import Cell from '../../cell';

module.exports = Vue.extend({
    template: require('./index.html'),
    components: {
        'v-cell': Cell
    },
    props: {
        name: {
            type: String,
            default: 'country'
        },
        value: {
            type: Array,
            default: ['nodejs,js']
        },
        options: {
            type: Array,
            default () {
                return [
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
                    }
                ];
            }
        }
    },
    methods: {
        select (val) {
            let index = this.value.indexOf(val);
            if (index === -1) {
                this.value.push(val);
            } else {
                this.value.splice(index, 1);
            }
        }
    }
});
