---
sidebar_position: 3
sidebar_label: render
sidebar_class_name: green
---

### 运行流程

<a href='https://docs.qq.com/flowchart/DTHdveFZ6c0xJT3RZ'>查看流程图</a>

### 变量

workInProgress = 当前调和中的· fiber

### 说明

```
React18 之前 reconciler 阶段 fiber 树生成的过程是不可中断的
因为 workLoopSync 一旦开始工作将不会中断，直到将 fiber 树构建完。(workInProgress !== null)


在18中 workLoopConcurrent 会判断当前更新任务是否超时，如果超时先暂停让浏览器先渲染。 (workInProgress !== null && !shouldYield())
如果中断 performWorkUntilDeadline 里的 workLoopConcurrent 会返回 hasMoreWork
如果为真 则发起下一次 postMassage
中断前 workInProgress 已经被赋值为下一个需要执行的fiber 再通过postMassage 进入下一次 performUnitOfWork(workInProgress)
从而实现了可中断更新
```
