/**
 * Created by youngwind on 16/8/6.
 */

import Vue from 'vue';
import './index.scss';

import IScroll from 'iscroll';
import find from 'lodash.find';
import findIndex from 'lodash.findindex';

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {
        display: {
            type: [Boolean],
            default: false
        },
        // 下拉选项数组对象
        options: {
            type: Array,
            default () {
                let ary = [];
                ary.push({
                    id: null,
                    name: ''
                });
                ary.push({
                    id: null,
                    name: ''
                });
                ary.push({
                    id: null,
                    name: ''
                });
                for (let i = 0; i < 100; i++) {
                    ary.push({
                        id: i + 1,
                        name: `测试数据${i}`
                    });
                }
                ary.push({
                    id: null,
                    name: ''
                });
                ary.push({
                    id: null,
                    name: ''
                });
                ary.push({
                    id: null,
                    name: ''
                });
                return ary;
            }
        },
        // 选中option的id
        selectedId: {
            type: [Number, String],
            default: 10
        }
    },
    ready () {
        // 此处的lib依赖于外部加载淘宝flexible,这是一个隐患
        this.rem2px = lib.flexible.rem2px('1rem').replace(/px/, '') * 1;  // eslint-disable-line no-undef
    },
    methods: {
        show () {
            this.display = true;

            // 此处异步调用的目的是使得dom元素渲染好之后再执行scroll初始化
            setTimeout(() => {
                this.myScroll = new IScroll('.v-scroll-picker-content', {

                    // 按距离滚动
                    snap: 'li'
                });

                let selectedIndex = 0;

                if (this.selectedId) {
                    selectedIndex = findIndex(this.options, {
                        id: this.selectedId
                    });
                }

                this.myScroll.scrollTo(0, -1 * (selectedIndex - 3) * this.rem2px);
            }, 0);
        },
        select () {
            let selectedOptionIndex = Math.abs(this.myScroll.y) / this.rem2px;

            // TODO 此处还需处理placeholder的配置数量问题
            this.selectedId = this.options[selectedOptionIndex + 3].id;

            this.hide();
        },
        hide () {
            this.display = false;
        }
    },
    computed: {
        selectedOption () {
            return find(this.options, {
                id: this.selectedId
            });
        }
    }
});
