// 模拟异步数据调用
// export function getCourses() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve([{name: 'web全栈', price: 100},{name: 'web高级', price: 200}])
//     }, 2000);
//   })
// }

import axios from "axios";

export function getCourses() {
  return axios.get('/api/courses').then(res => res.data)
}