import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Registration from '@/components/Registration'
import BaseView from '@/components/BaseView'
import GoogleDrive from "@/views/GoogleDrive"
import OneDrive from "@/views/OneDrive"
import Dropbox from "@/views/Dropbox"
import Box from "@/views/Box"
import SharePoint from "@/views/SharePoint"
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router);

export const router = new Router(
    {
      mode: 'history',
      routes: [
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
        {
          path:'/registration',
          name: 'Registration',
          component: Registration
        },
        {
          path: '/',
          name: 'BaseView',
          component: BaseView,
        },
        {
          path: '/google_drive',
          name: 'google_drive',
          component: GoogleDrive
        },
        {
          path: '/onedrive',
          name: 'onedrive',
          component: OneDrive
        },
        {
          path: '/sharepoint',
          name: 'sharepoint',
          component: SharePoint
        },
        {
          path: '/dropbox',
          name: 'dropbox',
          component: Dropbox
        },
        {
          path: '/box/',
          name: 'box',
          component: Box
        },
        {
          path: '/hello_world',
          name: 'hello_world',
          component: HelloWorld
        },
        {
          path: '*', redirect: '/'
        }
      ]
    }
);

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/forget/password/email/', '/forget/password', '/forget/password/confirm/', '/registration'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user-token');
  if (authRequired && !loggedIn) {
    return next('/login');
  }

  next();
});

export default router;




