/*global Vue*/
import Router from 'vue-router'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import Test3 from '@/components/Test3'
// import Test4 from '@/components/Test4'
// import Test5 from '@/components/Test5'
// import Test6 from '@/components/Test6'
// import Test7 from '@/components/Test7'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/Test1',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/Test3',
      name: 'Test3',
      component: Test3
    },
    {
      path: '/Test2',
      name: 'Test2',
      component: Test2
    },
    // {
    //   path: '/Test3',
    //   name: 'Test3',
    //   component: Test3
    // },
    // {
    //   path: '/Test4',
    //   name: 'Test4',
    //   component: Test4
    // },
    // {
    //   path: '/',
    //   name: 'Test5',
    //   component: Test5
    // }
  ]
})
