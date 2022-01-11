import React, { useEffect } from "react";
import './index.scss'
/**
 * @author chuyi
 * @description markdown markdown -> html 展示组件
 * @param callback 
 */
const requireEditor = (callback: Function) => {
  (window as any).$=(window as any ).jQuery= $;
  // 引入依赖文件
  $.when(
    $.getScript("./static/editor.md-master/editormd.js"),
    $.getScript("./static/editor.md-master/lib/flowchart.min.js"),
    $.getScript("./static/editor.md-master/lib/jquery.flowchart.min.js"),
    $.getScript("./static/editor.md-master/lib/marked.min.js"),
    $.getScript("./static/editor.md-master/lib/marked.min.js"),
    $.getScript("./static/editor.md-master/lib/raphael.min.js"),
    $.getScript("./static/editor.md-master/lib/sequence-diagram.min.js"),
    $.getScript("./static/editor.md-master/lib/underscore.min.js"),
    $.getScript("./static/editor.md-master/lib/prettify.min.js"),
    $.Deferred(function( deferred ){
        $( deferred.resolve );
    })).done(function(){
      callback();
    });
}
let blogEditor: any = ''
const EditormdView = (props: React.ReactNode | any) => {
    useEffect(()=> {
      requireEditor(
        function () {
          blogEditor = (window as any).editormd.markdownToHTML("editormd-html",{
            markdown:'# dsfjskdt',
            htmlDecode: "style,script,iframe",  // you can filter tags decode
            emoji: true,
            taskList: true,
            tex: true,  // 默认不解析
            flowChart: true,  // 默认不解析
            sequenceDiagram : true,  // 默认不解析
        })}
      )
    }, [])
    return (
      <div className="home">
        <div id="editormd-html"></div>
      </div>
    )
}

export default EditormdView