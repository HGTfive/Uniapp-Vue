
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

import {$http} from '@escook/request-miniprogram'
import Back from './components/Back.vue'

Vue.config.productionTip = false
Vue.component('my-back',Back)
uni.$http = $http
uni.$http.baseUrl = 'http://127.0.0.1:7777'

$http.beforeRequest = function(){
	uni.showLoading({
		title:"正在请求数据..."
	})
}
$http.afterRequest = function(){
	uni.hideLoading()
}

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

