const notfundRoute = {
  name: 'NotFound',
  path: '/:pathMatch(.*)*',
  component: () => import('@/views/error/404.vue'),
  meta: {
      title: '内容不存在',
      hidden: true,
  },
};

const serverErrorRoute = {
  name: 'ServerError',
  path: '/serverError',
  component: () => import('@/views/error/500.vue'),
  meta: {
      title: 'serverError',
      hidden: true,
  },
};

const loginRoute = {
  name: "Login",
  path: "/login",
  component: () => import("@/views/login/index.vue"),
  meta: {
    title: '登录',
    hidden: true,
  },
};

export const layoutRoute = {
  name: "Home",
  path: "/",
  component: () => import("@/views/index.vue"),
  meta: {
    title: '主页',
    hidden: true,
  },
  children: [
    notfundRoute,
    serverErrorRoute,
  ],
};

const staticRoutes = [loginRoute];

export default staticRoutes;