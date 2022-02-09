### 1. 数据相关

#### `Vue.set` or  `vm.$set`

​	向响应式对象中添加一个属性，确保这个新属性是响应式的，并触发视图更新

~~~javascript
Vue.set(target, 'propertyName/index', value);
~~~

#### `Vue.delete` or `vm.$delete`

​	向响应式对象中删除一个属性，确保这个新属性是响应式的，并触发视图更新

~~~javascript
Vue.delete(target, 'propertyName');
~~~

### 2. 事件相关

> 事件的监听和回调都是同一实例。

#### `vm.$on`

监听当前实例上的自定义事件，事件由`vm.$emit`触发，回调函数会接收所有传入事件触发函数的额外参数。

~~~javascript
vm.$on('test', function(msg){
    console.log(msg)
})
// @test="callback(msg)"
~~~

#### `vm.$emit`

触发当前实例上的事件，附加参数传给回调函数。
~~~javascript
vm.$emit('test', 'hi')
~~~

#### `vm.$once`

监听事件，只触发一次，一旦触发，移除监听

#### `vm.off`

移除自定义事件监听器

~~~javascript
vm.$off()	// 移除所有事件监听器
vm.$off('test')	// 移除该事件所有监听器
vm.$off('test', callback)	// 只移除这个回调的监听器
~~~



#### 典型应用：事件总线

在Vue原型上添加一个Vue实例作为事件总线，实现组件间相互通信，且不受组件间关系的影响

~~~javascript
Vue.prototype.$bus = new Vue();
~~~

> 这样可以在任意组件中通过`this.$bus`访问到该实例。

范例：批量清除多个消息窗口

### 3. 节点引用
