import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMenus } from '../../store/actions/user/user'
import { Menu } from 'antd'
import * as Icons from '@ant-design/icons'
import { useLocation, useHistory } from 'react-router-dom'

const { SubMenu } = Menu

const NavSide = () => {
  let dispatch = useDispatch()
  let location = useLocation()
  let history = useHistory()
  // 拿到当前路由的路径
  let pathname = location.pathname
  // 拿到父级菜单的路径
  let subPath = pathname.split('/')[1]

  let menus = useSelector(state => state.user.menus)
  // 动态渲染图标
  let renderIcon = (name) => {
    return React.createElement(Icons && Icons[name], {
      style: {
        fontSize: '16px'
      }
    })
  }
  // 递归渲染侧边栏
  let renderMenu = (data) => {
    return data.map(item => {
      if (item.children && item.children.length) {
        return (
          <SubMenu icon={renderIcon(item.icon)} title={item.authName} key={item.path}>
            {
              renderMenu(item.children)
            }
          </SubMenu>
        )
      }
      return (
        <Menu.Item icon={renderIcon(item.icon)} title={item.authName} key={item.key}>
          {
            item.authName
          }
        </Menu.Item>
      )
    })
  }
  // 点击菜单
  let clickItem = ({ key }) => {
    history.push(key)
  }
  useEffect(() => {
    dispatch(getMenus())
  }, [])
  return (
    <Menu
      mode="inline"
      theme='dark'
      defaultSelectedKeys={[pathname]}
      defaultOpenKeys={[subPath]}
      onClick={clickItem}>
      {
        renderMenu(menus)
      }
    </Menu>
  )
}

export default NavSide