import login from "../page/login";
import test from "../page/test";


export const loginRoutes=[
    {path: '*', redirect: '/login'},
    {path: '/login', component: login},
    {path: '/test', component:test},
]
