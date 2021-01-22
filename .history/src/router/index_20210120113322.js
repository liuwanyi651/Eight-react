// 配置路由
import Home from '../views/home/home'
import Login from '../views/login/login'
import NotFound from '../views/404/404'

// 有权限
export  const authRoutes = [
    {
        path  :'/',
        component:Home,
        // 是否精准匹配
        exact:true,
        meta:{
            title:'首页',
            icon
        }
    }
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