import React from "react";
import './home.scss'
import { Skeleton, List, } from 'antd'
class Home extends React.Component{

  render(): React.ReactNode {
    let listData: any = [];
    for (let i = 0; i < 23; i++) {
      listData.push({
        href: 'https://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://joeschmoe.io/api/v1/random',
        description:
          'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }

      return (
        <div className="home">
          <div className="content_box">
            <div className="content">
              {/* <Skeleton avatar paragraph={{rows: 4}}/> */}
            {
              listData.length > 0 ? listData.map((item: any)=> {
                return (
                  <div>{item.avatar}</div>
                ) 
              }) : <Skeleton/>
            }
            </div>
            <div className="tops_message"></div>
          </div>
        </div>
      )
  }
}
export default Home