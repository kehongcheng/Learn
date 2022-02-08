~~~javascript
{
  beforeCreate(){}  // 执行时组件实例还未创建  通常用于插件开发中执行一些初始化任务
  Created(){}       // 组件初始化完毕  各种数据都可以使用，常用于异步获取数据
  beforeMounted(){} // 未执行渲染、更新  dom未创建
  mounted(){}       // 初始化结束 dom已创建 可用于获取访问数据和dom元素
  beforeUpdate(){}
  updated()
  beforeDestroy(){}
  destroyed(){}
}
~~~