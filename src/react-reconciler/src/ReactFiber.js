import { HostRoot } from "./ReactWorkTags";
import { NoFlags } from "./ReactFiberFlags";
/**
 * @param tag fiber的类型 函数组件：0， 类组件：1， 原生组件：5，根元素：3
 * @param pendingProps 等待生效或者处理的属性
 * @param key 唯一标识
 */
export function FiberNode(tag, pendingProps, key) {
  this.tag = tag;
  this.key = key;
  // fiber的类型 来自于虚拟节点的type 如h1 span
  this.type = null;
  // 此fiber对应的真实dom节点 每个虚拟dom => fiber节点 => 真实dom
  this.stateNode = null;

  // 指向父节点
  this.return = null;
  // 指向第一个子节点
  this.child = null;
  // 指向弟弟
  this.sibling = null;

  // 等待生效的属性
  this.pendingProps = pendingProps;
  // 已经生效的属性
  this.memoizedProps = null;

  /**
   * 每个fiber还会有自己的状态 每一种fiber存的状态类型不一样
   * 类组件对应的fiber存的就是类实例的状态
   * HostRoot存的就是要渲染的元素
   */
  this.memoizedState = null;

  // 更新队列
  this.updateQueue = null;

  // 副作用标识 表开始要针对此fiber做何种操作
  this.flags = NoFlags;
  // 子节点对应的副作用标识
  this.subtreeFlags = NoFlags;
  // 替身，轮替（双缓冲技术）
  this.alternate = null;
}
function createFiber(tag, pendingProps, key) {
  return new FiberNode(tag, pendingProps, key);
}
export function createHostRootFiber() {
  return createFiber(HostRoot, null, null);
}
