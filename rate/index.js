var Vue = require('vue');
var VueTouch = require('vue-touch');
Vue.use(VueTouch);

require('./index.scss');

var vNumber = Vue.extend({
    template: require('./index.html'),
    props: {

        // 总共有几颗星星
        max: {
            type: [Number, String],
            default: 5,
            coerce: function (max) {
                return parseInt(max);
            }
        },

        // 选中几颗星星
        value: {
            type: [Number, String],
            default: 1,
            coerce: function (value) {
                return parseInt(value)
            }
        },

        // 星星的图案种类
        type: {
            type: [String],
            default: 'star',
            coerce: function (type) {

                var otherTypeList = ['heart'];

                if (otherTypeList.indexOf(type) === -1) {
                    console.warn('warning from rate组件: 请注意,此icon类型:' + type + '暂不支持');
                    return 'star'
                } else {
                    return type;
                }

            }
        }

    },
    methods: {
        setRate: function (index) {
            this.value = (index === this.value ? index - 1 : index);
        }
    },
    computed: {
        items: function () {
            var ary = [];
            for (var i = 0; i < this.max; i++) {
                var isActive = this.value > i ? 1 : 0;
                ary[i] = {
                    isActive: isActive,
                    className: isActive ? 'fa-' + this.type : 'fa-' + this.type + '-o'

                }
            }
            return ary;
        }
    }
});

Vue.component('v-rate', vNumber);