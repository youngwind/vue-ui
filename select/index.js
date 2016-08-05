/**
 * Created by youngwind on 16/8/5.
 * select框
 */

var Vue = require('vue');
var find = require(('lodash.find'));

var vShade = require('../shade');
Vue.component('v-shade', vShade);


require('./index.scss');

var vSelect = Vue.extend({
    template: require('./index.html'),
    props: {

        // 是否显示下拉框
        display: {
            type: [Boolean],
            default: true
        },

        // 下拉选项数组对象
        options: {
            type: Array,
            default: function () {
                return [
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
                    }
                ]
            }
        },

        // 选中option的id
        selected: {
            type: [Number, String],
            default: 2
        }

    },
    methods: {
        open: function () {
            this.display = true;
        },
        selectOption: function (selectedId) {
            var that = this;
            this.selected = selectedId;

            // 此处使用延时是为了让用户感知到自己选中了某项
            // 更好的处理方法是使用动画,而非延时关闭
            setTimeout(function () {
                that.close();
            }, 100)
        },
        close: function () {
            this.display = false;
        }
    },
    computed: {
        contentClass: function () {
            return {
                'v-select-content': true,
                'v-show': this.display
            }
        },

        selectedOption: function () {
            return find(this.options, {
                id: this.selected
            }).name
        }
    }
});

module.exports = vSelect;