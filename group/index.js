/**
 * Created by youngwind on 16/8/8.
 */

import Vue from 'vue';
import './index.scss';

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        title: {
            type: String,
            default: '标题'
        }
    }
});
