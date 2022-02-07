1. 绑定语法 
2. 列表渲染
3. 事件处理
4. class 和 style 绑定
5. 条件渲染
6. 模板和渲染函数

~~~javascript

with(this){return _c('div',{attrs:{"id":"app"}},[_c('h2',{attrs:{"title":title}},[_v(_s(title))]),_v(" "),_c('p',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(course),expression:"course"}],attrs:{"type":"text"},domProps:{"value":(course)},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_k($event.keyCode,"enter",13,$event.key,"Enter"))return null;return addCourse.apply(null, arguments)},"input":function($event){if($event.target.composing)return;course=$event.target.value}}}),_c('button',{on:{"click":addCourse}},[_v("add")])]),_v(" "),(courses.length == 0)?_c('p',[_v("没有课程信息")]):_c('div',{staticClass:"course-list"},_l((courses),function(c){return _c('div',{key:c,style:({backgroundColor: (selectedCourse === c ? '#ddd' : 'transparent') }),on:{"click":function($event){selectedCourse = c}}},[_v("\n        "+_s(c)+"\n      ")])}),0)])}


~~~