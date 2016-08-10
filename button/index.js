/**
 * Created by youngwind on 16/8/10.
 */

import Vue from 'vue';
import './index.scss';


module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        value: {
            type: String,
            default: '按钮'
        }
    }
});