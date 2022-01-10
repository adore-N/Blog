import React from "react";
import './frontend.scss'
import MenuLeft from '../../components/MenuLeft';
interface ArticleList {
  H5: Array<object>
  JS: Array<object>
  VUE: Array<object>
  REACT: Array<object>
  [key: string] : Array<object>
}
interface CurrentArticle {
  order: number
  h1: string
}
class Frontend extends React.Component{
  state: Readonly<{
    rootSubmenuKeys: string[],
    menuItemList: object,
    articleList: ArticleList,
    currentArticle: CurrentArticle
  }> = {
    // 菜单选项 默认展开菜单第一个
    rootSubmenuKeys: ['H5', 'JS', 'VUE', 'REACT'],
    // 对应菜单下的选项
    menuItemList: {
      H5: ['Div居中方式', 'URL输入发生了什么？'],
      JS: ['闭包', '原型链'],
      VUE: ['双向绑定', 'MVVM'],
      REACT: ['待定'],
    },
    // 文章
    articleList: {
      H5: [
        {
          order: 0,
          h1: 'Div居中方式'
        },
        {
          order: 1,
          h1: 'URL输入发生了什么？'
        }
      ],
      JS: [
        {
          order: 0,
          h1: '闭包'
        },
        {
          order: 1,
          h1: '原型链'
        }
      ],
      VUE: [
        {
          order: 0,
          h1: '双向绑定'
        },
        {
          order: 1,
          h1: 'MVVM'
        }
      ],
      REACT: [
        {
          order: 0,
          h1: '待定'
        },
      ]
    },
    currentArticle: {
      order: 0,
      h1: ''
    }
  };
  /**
   * @description 点击菜单选项
   * @param menuItem 当前选中的选项
   */
  getMenuItem = (menuItem: { key: string }) => {
    // 处理menuItem 获取到分类以及下标
    const { key } = menuItem
    const classification = key.split('-')[0];
    const order = key.split('-')[1];
    const acticle =  this.state.articleList[classification].find((item: any)=> {
      return item.order === Number(order)
    })
    console.log(acticle, 'acticle');
    this.setState({
      currentArticle: acticle
    })
  }
  componentDidMount = ()=> {
    this.setState({
      currentArticle: this.state.articleList.H5[0]
    })
  }
  render(): React.ReactNode {
    const { rootSubmenuKeys, menuItemList, currentArticle}  = this.state;
      return (
        <div className="frontend">
          <div className="frontend-left">
            <MenuLeft rootSubmenuKeys={rootSubmenuKeys} menuItemList={menuItemList} getMenuItem={this.getMenuItem}></MenuLeft>
          </div>
          <div className="frontend-right">
          <div>111</div>
            <div>{currentArticle.h1}</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
            <div>111</div>
          </div>
        </div>
      )
  }
}
export default Frontend