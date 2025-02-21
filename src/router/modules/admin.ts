import Layout from '@/layout/index.vue'
export default [
  {
    path: '/admin',
    name: 'admin',
    component: Layout,
    authKey: 'back_user_center',
    meta: {
      // title: '用户中心',
      icon: 'component',
    },
    redirect: '/admin/user',
    children: [
      {
        path: 'user',
        name: 'adminUser',
        authKey: 'back_user_manage',
        meta: {
          // title: '用户管理',
          icon: 'user',
        },
        component: () => import('@/views/admin/user/index.vue'),
      },
      {
        path: 'detail',
        name: 'adminDetail',
        authKey: 'back_user_detail',
        hidden: true,
        meta: {
          // title: '用户详情',
        },
        component: () => import('@/views/admin/user/Detail.vue'),
      },
      {
        path: 'role',
        name: 'roleManage',
        authKey: 'back_role_manage',
        meta: {
          // title: '角色管理',
          icon: 'peoples',
        },
        component: () => import('@/views/admin/role/index.vue'),
      },
      {
        path: 'auth',
        name: 'authManage',
        authKey: 'back_auth_manage',
        meta: {
          // title: '权限管理',
          icon: 'lock',
        },
        component: () => import('@/views/admin/auth/index.vue'),
      },
      {
        path: 'auth/config/:authId',
        name: 'authMenuConfig',
        authKey: 'back_auth_menu_manage',
        hidden: true,
        meta: { title: '权限配置' },
        component: () => import('@/views/admin/auth/AuthMenuConfig.vue'),
      },
    ],
  },
]
