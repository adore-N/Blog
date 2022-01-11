import React, { useEffect } from "react";
import './index.scss'
/**
 * @author chuyi
 * @description markdown 编辑组件
 * @param callback 
 */
const requireEditor = (callback: Function): void => {
  // let vm = this;
  //设置全局变量，因为editormd依赖jquery
  (window as any).$=(window as any ).jQuery= $;
  //异步加载并执行
  $.getScript("./static/editor.md-master/editormd.js",function(script){
      callback();
  })
}
let blogEditor: any = ''
const Editormd = (props: React.ReactNode | any) => {

    useEffect(()=> {
      requireEditor(
        function () {
          blogEditor = (window as any).editormd("editormd",{
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

    }, [props])
    return (
      <div className="home">
        <div id="editormd"></div>
      </div>
    )
}

export default Editormd