// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
let instance = axios.create({
  	  headers: {'Content-Type':'application/x-www-form-urlencoded'},
	  transformRequest: [function (data) {
						    // Do whatever you want to transform the data
	    let ret = ''
	    for (let it in data) {
	      ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
	    }
	    ret = ret.substring(0,ret.length-1)
	    return ret
	}]
});
Vue.prototype.$http= instance


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
