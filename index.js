/**
 * 主入口文件
 * 导出各个组件
 */

import Vue from 'vue';
import VueTouch from 'vue-touch';
Vue.use(VueTouch);

// 组件包公共的样式
import './base/common.scss';

// 字体文件
import 'font-awesome/css/font-awesome.css';

// 淘宝flexible适配
import 'lib-flexible';

import ToastPlugin from './plugins/toast';
Vue.use(ToastPlugin);

module.exports = {
    number: require('./number'),
    checkbox: require('./checkbox'),
    rate: require('./rate'),
    shade: require('./shade'),
    select: require('./select'),
    scrollPicker: require('./scroll_picker'),
    group: require('./group'),
    cell: require('./cell'),
    fNumber: require('./form/f-number'),
    input: require('./input'),
    fInput: require('./form/f-input')
};

