import { createHostRootFiber } from "./ReactFiber";
import { initializeUpdateQueue } from "./ReactFiberClassUpdateQueue";
function FiberRootNode(containerInfo) {
  this.containerInfo = containerInfo;
}

export function createFiberRoot(containerInfo) {
  const root = new FiberRootNode(containerInfo);
  // HostRoot就是根节点div#root 为根节点创建fiber
  const uninitializedFiber = createHostRootFiber();
  // 根容器的current指向创建的根fiber
  root.current = uninitializedFiber;
  // 根fiber的stateNode 真实dom节点的FiberRootNode
  uninitializedFiber.stateNode = root;
  initializeUpdateQueue(uninitializedFiber);
  return root;
}
