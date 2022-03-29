### react 源码学习

---

#### 使用方法

1. 在源码包 package.json 目录执行
   - yarn 安装依赖
   - yarn link (3 个包都需要)
2. 新起脚手架项目 npx create-react-app react_app
3. 根目录执行 yarn link react react-dom scheduler

#### 注意

- 每个包可能依赖其它包 yarn link 之后，可根据不同包依赖 yarn link packname

> 源码包 基于 react 17.0.2

- react - src/react

- react-dom - src/react-dom

- scheduler - src/scheduler

---

> 使用 Todo Tree

- 筛选标记 WANPAN
