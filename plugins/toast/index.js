/**
 * Created by youngwind on 16/8/8.
 */

import Vue from 'vue';
import './index.scss';

const Toast = Vue.extend({
    template: require('./index.html'),
    props: {
        display: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
        time: {
            type: Number,
            default: 2000
        }
    },
    watch: {
        display (val) {
            if (val) {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.display = false;
                }, this.time);
            }
        }
    }
});

let $vm;
let watcher;

module.exports = {
    install (vue, options) {
        if (!$vm) {
            $vm = new Toast({
                el: document.createElement('div')
            });
        }
        document.body.appendChild($vm.$el);

        const toast = {
            show (options) {
                watcher && watcher();
                if (typeof options === 'string') {
                    $vm.text = options;
                } else if (typeof options === 'object') {
                    Object.assign($vm, options);
                }

                if (options.onShow || options.onHide) {
                    watcher = $vm.$watch('display', (val) => {
                        val && options.onShow && options.onShow($vm);
                        val === false && options.onHide && options.onHide($vm);
                    });
                }

                $vm.display = true;
            },

            hide () {
                $vm.display = false;
            }
        };

        if (!vue.$vux) {
            vue.$vux = {
                toast
            };
        } else {
            vue.$vux.toast = toast;
        }

        vue.mixin({
            created: function () {
                this.$vux = vue.$vux;
            }
        });
    }
};

