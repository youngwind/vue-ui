/**
 * Created by youngwind on 16/8/9.
 */

import Vue from 'vue';
import './index.scss';

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        value: {
            type: [String, Number],
            default: '值'
        },
        placeholder: {
            type: [String, Number],
            default: '请输入XXXX'
        }
    }
});
