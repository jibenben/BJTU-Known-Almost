/**
 * Created by leelddd on 4/8/2017.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Question from '../components/question/Question.vue'
import Answer from '../components/answer/Answer.vue'
import Comment from '../components/comment/Comment.vue'
import Login from '../components/user/Login.vue'
import Register from '../components/user/Register.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/question/:id',
      name: 'question',
      component: Question
    },
    {
      path: '/answer/:id',
      name: 'answer',
      component: Answer
    },
    {
      path: '/comment/:id',
      name: 'comment',
      component: Comment
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
