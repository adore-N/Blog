import React from "react";
import EditormdView from '../../components/EditormdView'
/**
 * @author chuyi
 * @description 算法页面
 */
class Algorithm extends React.Component{
  render(): React.ReactNode {
      return (
        <div className="algorithm">
          <EditormdView/>
        </div>
      )
  }
}
export default Algorithm