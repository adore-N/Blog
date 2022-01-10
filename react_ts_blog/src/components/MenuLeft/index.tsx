import React, { useState } from "react";
import './index.scss'
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useNavigate, } from 'react-router-dom'
const { SubMenu } = Menu;
type HeaderInfo = {
  key: string
  keyPath: string[]
}

const MenuLeft = (props: any) => {
  // console.log('MenuLeft',props);
  // 菜单选项 默认展开菜单第一个
  const rootSubmenuKeys = props.rootSubmenuKeys;
   // 对应菜单下的选项
  const menuItemList = props.menuItemList;
  const [openKey, setOpenKey ] = useState([rootSubmenuKeys[0]])

  const IconList = [<AppstoreOutlined/>, <MailOutlined/>, <SettingOutlined/>, <SettingOutlined/>]
  /**
   * @description 菜单点击事件
   * @param keys 当前点击的menu 返回值为 ['当前点击的menu']
   */
  const onOpenChange = (openKeys: string[]) => {
    const latestOpenKey: any = openKeys.find(key => openKey.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKey(openKeys);
    } else {
      setOpenKey(latestOpenKey ? [latestOpenKey] : []);
    }
  }
  /**
   * 
   * @param key 菜单item选中
   */
  const onSelect = (key: object) => {
    // console.log(key);
    props.getMenuItem(key)
  }
  //TODO: 需放在函数外 否则不生效 let Navigate: any = useNavigate() 
  let Navigate: any = useNavigate()
  function HandleClick(value: HeaderInfo) {
    const {key}  = value;
    Navigate(`/${key}`)
  }
  
  return (
    <Menu mode="inline" openKeys={openKey} onSelect={onSelect} onOpenChange={onOpenChange} style={{ width: '100%' }}>
      {
        rootSubmenuKeys.map((item: any, index: number) => (
          <SubMenu key={item} icon={IconList[index]} title={item}>
            {
              menuItemList[item].map((memuItem: string[], index: number) => (
                <Menu.Item key={item + '-' + index}>{memuItem}</Menu.Item>
              ))
            }
        </SubMenu>
        ))
      }
    </Menu>
  );
}

export default MenuLeft