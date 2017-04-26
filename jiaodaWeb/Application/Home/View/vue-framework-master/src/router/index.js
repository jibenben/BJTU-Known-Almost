/**
 * Created by leelddd on 4/8/2017.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/home/Home.vue'
import Question from '../components/question/Question.vue'
import Answer from '../components/answer/Answer.vue'
import Comment from '../components/comment/Comment.vue'
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
    }
  ]
})
