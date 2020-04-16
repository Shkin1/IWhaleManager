import { dynamicWrapper, createRoute } from '@/utils/core';

const routesConfig = app => ({
    path: '/chat/robat',
    title: '聊天机器人',
    component: dynamicWrapper(app, [import('./model')], () => import('./components'))
});

export default app => createRoute(app, routesConfig);
