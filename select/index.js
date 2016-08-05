/**
 * Created by youngwind on 16/8/5.
 * select框
 */

import Vue from 'vue';
import find from 'lodash.find';
import vShade from '../shade';

Vue.component('v-shade', vShade);
require('./index.scss');

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {

        // 是否显示下拉框
        display: {
            type: [Boolean],
            default: false
        },

        // 下拉选项数组对象
        options: {
            type: Array,
            default () {
                return [
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
                    }
                ];
            }
        },

        // 选中option的id
        selected: {
            type: [Number, String],
            default: 2
        }

    },
    methods: {
        open () {
            this.display = true;
        },
        selectOption (selectedId) {
            this.selected = selectedId;

            // 此处使用延时是为了让用户感知到自己选中了某项
            // 更好的处理方法是使用动画,而非延时关闭
            setTimeout(() => {
                this.close();
            }, 100);
        },
        close () {
            this.display = false;
        }
    },
    computed: {
        contentClass () {
            return {
                'v-select-content': true,
                'v-show': this.display
            };
        },

        selectedOption () {
            return find(this.options, {
                id: this.selected
            }).name;
        }
    }
});
