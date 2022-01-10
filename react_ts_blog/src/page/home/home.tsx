/**
 * @author chuyi
 * @description 首页
 */
import React from "react";
import './home.scss'
import { Button, Divider } from 'antd'
import IntorBox from '../../components/IntorBox'
import { Navigate } from 'react-router-dom';
// let useNavigate = useNavigate();
class Home extends React.Component{
  public state: Readonly<{noteList: any[],goStart: boolean}> = {
    noteList: [
      {
        title: '前端·知识',
        description: '每日重点攻克一个前端知识重难点，我们一起走进高级前端的世界，在进阶之路上，共勉！'
      },
      {
        title: '进阶·算法',
        description: '工作日每天搞定一道大厂前端面试题，一年后再回头，会感谢曾经努力的自己！（已完结）'
      },
      {
        title: '日常·分享',
        description: '你有故事，我有酒！'
      }
    ],
    goStart: false
  };
  /**
   * @description 跳转到前端页面
   */
  GoToH5 = () => {
    console.log(this.props);
    this.setState({
      goStart: true
    })
  }
  render(): React.ReactNode {
    const { noteList,goStart } = this.state
      return (
        <div className="home">
          <div className="content_box">
            <div className="content">
              <div className="title">Hello!</div>
              <div className="name">前端初一</div>
              <div className="tips">心有猛虎，细嗅蔷薇！</div>
              {
                goStart && <Navigate to="/frontend"/>
              }
              <Button type="primary" onClick={this.GoToH5}>Go Start!</Button>
              <Divider/>
              <div className="intro">
                {
                  noteList.map((item: object, index: number)=>{
                    return (
                      <IntorBox key={index} className="card" description={item}/>
                    )
                  })
                }
              </div>
              <Divider/>
            </div>
          </div>
        </div>
      )
  }
}
export default Home