import Home from '../views/home/home'
// 配置路由

// 有权限
const authRoutes = [
    {
        path  :'/',
        component:Home,
        // 是否精准匹配
        exact:true,
        meta:{
            title:'首页'
        }
    }
]
// 没权限
const authRoutes = [
    {
        path  :'/',
        component:Home,
        // 是否精准匹配
        exact:true,
        meta:{
            title:'首页'
        }
    }
]