# 目录
- 1. 实现jsx语法
- 2. 创建FiberRoot

### 什么是虚拟dom?
- React.createElement 函数所返回的就是一个虚拟 DOM
- 虚拟 DOM 就是一个描述真实 DOM 的纯 JS 对象

### 为什么要记录子节点的flags?
```js
为了性能优化

react执行共分为两个阶段
1. render 计算副作用
2. commit 提交副作用 修改真实dom
如果当前节点的subtreeFlags为0 则表示其子节点没有副作用变更
儿子的副作用会向上递归到父亲
```
### 什么是fiber?
- fiber是一个执行单元
- fiber是一个数据结构
  - 我们希望把fiber的构建过程变成可中断，可暂停和恢复的过程