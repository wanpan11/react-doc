---
sidebar_position: 3
sidebar_label: 更新组件
sidebar_class_name: green
---

### 运行流程

<a href='https://docs.qq.com/flowchart/DTHdveFZ6c0xJT3RZ'>查看流程图</a>

### 变量

workInProgress = 当前调和中的 fiber
current = 当前页面展示的 fiber 节点

### 说明

```
在更新时会在当前的 current 的基础上派生新的 workInProgress （复用current节点的大部分属性）
workInProgress 与 current 存在差异的话就会重新构建该节点对应的处理方法
待续。。。
```
