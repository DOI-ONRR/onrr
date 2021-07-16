import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default:  Home,
    },
    props: true,
  },
  {
    path: "/getting-started",
    props: true,
    component: () => import(/* webpackChunkName: "TwoColumnleft" */ "../views/TwoColumnLeft"),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page") 
      },
      {
        path: ':slug',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page"),
        props: true,
      },
    ]
  },
  {
    path: "/reporting",
    name: "TwoColumnLeft",
    props: true,
    component: () => import(/* webpackChunkName: "TwoColumnLeft" */ "../views/TwoColumnLeft"),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page") 
      },
      {
        path: ':slug',
        name: 'TwoColumnLeft',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page") ,
        props: true,
      },
    ]
  },
  {
    path: "/references",
    name: "TwoColumnLeft",
    props: true,
    component: () => import(/* webpackChunkName: "TwoColumnLeft" */ "../views/TwoColumnLeft"),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page") 
      },
      {
        path: ':slug',
        name: 'TwoColumnLeft',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page"),
        props: true,
      },
    ]
  },
  {
    path: "/paying",
    name: "TwoColumnLeft",
    props: true,
    component: () => import(/* webpackChunkName: "TwoColumnLeft" */ "../views/TwoColumnLeft"),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page") 
      },
      {
        path: ':slug',
        name: 'TwoColumnLeft',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page"),
        props: true,
      },
    ]
  },
  {
    path: "/compliance-enforcement",
    name: "TwoColumnLeft",
    props: true,
    component: () => import(/* webpackChunkName: "TwoColumnLeft" */ "../views/TwoColumnLeft"),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page") 
      },
      {
        path: ':slug',
        name: 'TwoColumnLeft',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page"),
        props: true,
      },
    ]
  },
  {
    path: "/indian-resources",
    name: "TwoColumnLeft",
    props: true,
    component: () => import(/* webpackChunkName: "TwoColumnLeft" */ "../views/TwoColumnLeft"),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page") 
      },
      {
        path: ':slug',
        name: 'TwoColumnLeft',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page"),
        props: true,
      },
    ]
  },
  // {
  //   path: "/about-onrr/contact-us",
  //   props: true,
  //   components: {
  //     default: () => import(/* webpackChunkName: "Contact" */  "../views/TwoColumnLeft"),
  //     contact: () => import(/* webpackChunkName: "Contact" */ "../views/Contact"),
  //   },
  // },
  {
    path: "/about-onrr",
    name: "TwoColumnLeft",
    props: true,
    component: () => import(/* webpackChunkName: "TwoColumnLeft" */ "../views/TwoColumnLeft"),
    children: [
      {
        path: '/',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page") 
      },
      {
        path: 'contact-us',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Contact"),
        props: true
      },
      {
        path: ':slug',
        name: 'TwoColumnLeft',
        component: () => import(/* webpackChunkName: "Page" */ "../views/Page"),
        props: true,
      },
    ]
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "PageNotFound" */ "../views/PageNotFound"),
  }
  
]

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: "nav-active-class",
  routes
})

export default router
