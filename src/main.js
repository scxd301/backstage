import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import VueResouce from 'vue-resource'
import About from "./components/About";
import Customers from "./components/Customers";
import Add from './components/Add';
import CustomerDetails from "./components/CustomerDetails";
import Edit from "./components/Edit";

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResouce)

//设置路由

const  router =new VueRouter({
  mode:'history',
  base:__dirname,
  routes:[
    {path:"/", component:Customers},
    {path:"/about", component:About},
    {path:"/add", component:Add},
    {path:"/customer/:id", component:CustomerDetails},
    {path:"/edit/:id", component:Edit}
  ]
})

new Vue({
  router,

  template:`<div id="app">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">盖亚后台管理系统</a>
          </div>
          <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
              <li><router-link to="/">主页</router-link></li>
              <li><router-link to="/about">关于我们</router-link></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><router-link to="/add">添加用户</router-link></li>
            </ul>
          </div><!--/.nav-collapse -->
      </div>
    </nav>
       <router-view></router-view>
</div>`

}).$mount('#app')
