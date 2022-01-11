import React from "react";
class Fan extends React.Component{
  blogEditor: any = ''
  requireEditor = (callback: Function) => {
    // let vm = this;
    //设置全局变量，因为editormd依赖jquery
    (window as any).$=(window as any ).jQuery= $;
    //异步加载并执行
    // $.getScript("./static/editor.md-master/editormd.js",function(script){
    //   $.getScript("./static/editor.md-master/lib/marked.min.js",function(script){
    //     callback();
    //   })
    //   // setTimeout(()=> {
        

    //   // },2000)
    // })

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
  componentDidMount = () => {
    console.log(window);
    const that = this;
    this.requireEditor(
      function () {
        that.blogEditor = (window as any).editormd.markdownToHTML("editormd-html",{
          markdown:'# dsfjskdt',
          htmlDecode: "style,script,iframe",  // you can filter tags decode
          emoji: true,
          taskList: true,
          tex: true,  // 默认不解析
          flowChart: true,  // 默认不解析
          sequenceDiagram : true,  // 默认不解析
      })}
    )
    // return;
  }
  render(): React.ReactNode {
      return (
        <div className="home">
          <div id="editormd-html"></div>
        </div>
      )
  }
}
export default Fan