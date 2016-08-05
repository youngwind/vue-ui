/**
 * 打分组件
 */

import Vue from 'vue';
import './index.scss';

module.exports = Vue.extend({
    template: require('./index.html'),
    props: {

        // 总共有几颗星星
        max: {
            type: [Number, String],
            default: 5,
            coerce (max) {
                return parseInt(max);
            }
        },

        // 选中几颗星星
        value: {
            type: [Number, String],
            default: 1,
            coerce (value) {
                return parseInt(value);
            }
        },

        // 星星的图案种类
        type: {
            type: [String],
            default: 'star',
            coerce: function (type) {
                let otherTypeList = ['star', 'heart'];

                if (otherTypeList.indexOf(type) !== -1) {
                    return type;
                } else {
                    console.warn('warning from rate组件: 请注意,此icon类型:' + type + '暂不支持');
                    return 'star';
                }
            }
        }

    },
    methods: {
        setRate (index) {
            this.value = (index === this.value ? index - 1 : index);
        }
    },
    computed: {
        items () {
            var ary = [];
            for (var i = 0; i < this.max; i++) {
                var isActive = this.value > i ? 1 : 0;
                ary[i] = {
                    isActive: isActive,
                    className: isActive ? 'fa-' + this.type : 'fa-' + this.type + '-o'

                };
            }
            return ary;
        }
    }
});

