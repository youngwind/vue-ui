
var Vue = require('vue');
var VueTouch = require('vue-touch');
Vue.use(VueTouch);

require('./base/common.scss');

module.exports = {
    number: require('./number'),
    checkbox: require('./checkbox'),
    rate: require('./rate'),
    shade: require('./shade'),
    select:require('./select')
};