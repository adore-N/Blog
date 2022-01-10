import React from "react";
import './self.scss'
class Self extends React.Component{
  componentDidMount = () => {
    const blogEditor = (window as any).editormd("editormd",{
      placeholder : '欢迎使用editor.md 编辑器',
      width : "100%",
      height : "480",
      syncScrolling : "single",
      emoji :true,
      /* path : '../../../static/editor.md-master/lib/' ,*/
      path : '/static/editor.md-master/lib/',
      //pluginPath:'/plugins',
      saveHTMLToTextarea : true,
      tocm : true,
      tex :true,
      flowChart : true,
     //图片上传
     imageUpload : true,
     imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
     imageUploadURL : "/article/file/upload", // 文件上传的处理请求！
     onload : function() {
         console.log('onload', this);
     },
      //crossDomainUpload : true
      previewTheme: "dark"

      /**设置主题颜色*/
      /* editorTheme: "pastel-on-dark",
       theme: "gray",
       previewTheme: "dark"*/
    });
  }
  render(): React.ReactNode {
      return (
        <div className="self">
           <div id="editormd">
          </div>
        </div>
      )
  }
}
export default Self
