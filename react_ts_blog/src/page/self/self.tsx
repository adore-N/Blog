import React from "react";
import './self.scss'
class Self extends React.Component{
  // editor.md 编辑器 
  public blogEditor: any = ''

  requireEditor = (callback: Function) => {
    // let vm = this;
    //设置全局变量，因为editormd依赖jquery
    (window as any).$=(window as any ).jQuery= $;
    //异步加载并执行
    $.getScript("./static/editor.md-master/editormd.js",function(script){
        callback();
    })
    //加载css
    // $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/lib/editor.md/css/editormd.min.css') );
  }
  componentDidMount = () => {
    console.log(window);
    const that = this;
    this.requireEditor(
      function () {
        that.blogEditor = (window as any).editormd("editormd",{
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
         imageUploadURL : "http://localhost:3001/images", // 文件上传的处理请求！
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
    )
    // return;
  }

  getMarkdown = () => {
    const a =  this.blogEditor.getMarkdown()
    console.log(a);
    
  }

  render(): React.ReactNode {
      return (
        <div className="self">
          <button onClick={this.getMarkdown}>1111</button>
           <div id="editormd">
          </div>
        </div>
      )
  }
}
export default Self
