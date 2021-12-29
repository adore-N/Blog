import React from "react";
import './index.scss'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined,CalculatorFilled } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom'
type HeaderInfo = {
  key: string
  keyPath: string[]
}

const MenuHeader = (props: any) => {
  //TODO: 需放在函数外 否则不生效 let Navigate: any = useNavigate() 
  let Navigate: any = useNavigate()
  function HandleClick(value: HeaderInfo) {
    const {key}  = value;
    Navigate(`/${key}`)
  }
  return (
    <Menu className="MenuHeader" onClick={HandleClick} defaultSelectedKeys={[window.location.pathname.split('/')[1]]}  mode="horizontal">
    <Menu.Item key="home" icon={<MailOutlined />}>
       首页
    </Menu.Item>
    <Menu.Item key="acticle"  icon={<AppstoreOutlined />}>
      文章
    </Menu.Item>
    <Menu.Item key="fan"  icon={<SettingOutlined />}>
      娱乐
    </Menu.Item>
    <Menu.Item key="self"  icon={<CalculatorFilled />}>
      我的
    </Menu.Item>
  </Menu>
  )
}

export default MenuHeader