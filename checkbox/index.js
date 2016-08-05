/**
 * Created by youngwind on 16/8/2.
 */
var Vue = require('vue');

require('./index.scss');

var vCheckbox = Vue.extend({
    template: require('./index.html'),
    props: {
        checked: false
    },
    methods: {
        toggle: function () {
            this.checked = !this.checked;
        }
    }
});

module.exports = vCheckbox;