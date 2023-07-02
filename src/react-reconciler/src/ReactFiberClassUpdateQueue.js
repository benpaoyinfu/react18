export function initializeUpdateQueue(fiber) {
  // 创建一个新的更新队列
  const queue = {
    shared: {
      // 循环链表
      pending: null,
    },
  };
  fiber.updateQueue = queue;
}
