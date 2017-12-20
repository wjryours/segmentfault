import Vue from 'vue'
import Router from 'vue-router'

const Headerline = resolve => require(['@/view/headerline'],resolve)
const Article = resolve => require(['@/view/article'],resolve)
const Question = resolve => require(['@/view/question'],resolve)
const Discover = resolve => require(['@/view/discover'],resolve)
const User = resolve => require(['@/view/user'],resolve)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Headerline',
      component: Headerline
    },
    {
      path: '/Headerline',
      name: 'Headerline',
      component: Headerline
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    },
    {
      path: '/Question',
      name: 'Question',
      component: Question
    },
    {
      path: '/Discover',
      name: 'Discover',
      component: Discover
    },
    {
      path: '/User',
      name: 'User',
      component: User
    }
  ]
})
