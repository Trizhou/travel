// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'babel-polyfill'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body) // 移动端点击300ms延迟解决
Vue.use(VueAwesomeSwiper) // 图片滚动

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
