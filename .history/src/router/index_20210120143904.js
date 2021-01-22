// 配置路由
import Home from '../views/home/home'
import Login from '../views/login/login'
import NotFound from '../views/404/404'
import User from '../views/user/user'
import Goods from '../views/goods/goods'
import Params from "../views/params/params"
import Category from "../views/category/category"
import Role from "../views/role/role"
import Rights from "../views/rights/rights"
import Order from "../views/order/order"
import Reports from "../views/reports/reports"
// 有权限
export  const authRoutes = [
    {
        path  :'/',
        component:Home,
        // 是否精准匹配
        exact:true,
        meta:{
            title:'首页',
            icon:'HomeOutlined'
        }
    },
    {
        path  :'/users/users',
        component:User,
        // 是否精准匹配
        exact:true,
        meta:{
            title:'用户',
            icon:'UserOutline'
        }
    },
]
// 没权限
export const commomRoutes = [
    {
        path  :'/login',
        component:Login ,
        // 是否精准匹配
        exact:true,
        meta:{                                                                                                                                                               
            title:'登录'
        }
    },
    {
        path  :'/404',
        component:NotFound ,
        // 是否精准匹配
        exact:true,
        meta:{
            title:'错误'
        }
    }
]