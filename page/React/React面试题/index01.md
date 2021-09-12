### 1、为什么 React 使用 JSX （关注点分离 =>价值在于简化程序的开发和维护）

-- 答题：

JSX 是 JavaScript 的一种语法拓展，结构类似 XML,JSX 主要用于声明 React 元素，但 React 中并不强制使用 JSX 元素，即便使用了，在编译中，也会通过 babel 插件转化为 React.createElement。在最新的 React17 利用自带编译器转换为 jsx

方案对比
模板 => 若关注度分离，引入概念多
模板字符串 =》 结构描述复杂，语法提示差
JXON => 语法提示差

### 2、类组件和函数组件有什么区别？（求同存异）

1. 本质上代表两种不同的设计思想和心智模式

   - 类组件的根基是 OOP,面向对象编程

   - 函数组件的根基是 FP 函数式编程

2. 相对于类组件，函数组件更加的<font color="red">简单、纯粹、简单、易测试</font>

3. 在使用场景中，在不使用 Recompose 或者 Hooks 的情况下，如需使用生命周期，就用类组件，

   若函数式组件使用 Recompose 和 Hooks 他们的功能就完全可以替代

4. 在设计模式上，类组件可以实现继承，

5. 性能优化：

类组件优化主要通过，shouldComponentDidUpdate

函数式组件主要通过 React.memo 来优化

6、未来趋势

函数式组件成为未来社区主推的方案，

### 3、如何设计 React 组件？

一个主题，多个分类

1. 展示组件

- 样式

- 布局
- 代理组件

1. 业务组件
   - 功能复用
   - 业务逻辑
   - 容器组件 =》拉取数据，组合组件

### 4、React 组件跨层级通信

1、父与子，=> props

2、子与父，=> 回调函数，实例对象（ref）

3、兄弟节点，=> 父节点的 state

4、在树形节不中相关的节点 => React Context ,状态管理工具（redux,mobx,） 全局事件（event ）

### 5、Virtual DOM 的工作原理

1、 facebook 创建 React 的初衷

- 简化开发
- 防止 XSS

通过虚拟 DOM 规避风险

react 主要实现组件的实现，更新调度

ReactDOM 提供了网页上的渲染

<font color="red">答题：</font>

虚拟 DOM 是通过 js 对象来描述 DOM 的结构，提升代码抽象能力，避免人为的 DOM 操作，降低代码风险，

react 中的 jsx 节点 通过 babel 的插件，转化为 React.createElement.(\_jsx),执行后，会返回一个 plain Object,他会表述自己的 tag 类型，tag 属性以及 children 的信息，这写 plain Object 通过树形结构组合成一颗 DOM 树，当状态发生变化的时候，将变更前后的 DOM 树进行差异比较，这个过程称为 diff,生成的结果称为 patch,计算之后，会渲染 patch 完成对真实 DOM 的操作

优势：（在有大量 DOM 操作的时候）

- 性能优越
- 规避 XSS
- 跨平台

缺点

- 内存占用过高
- 无法进行极致优化

### 6、React diff 算法的流程以及与其他框架相比有何不同

1. diff 算法是只生成更新补丁的方式，主要应用于虚拟 DOM 的变化，更新真实 DOM,所以 diff 算法一定是在这样一个过程中作用的，触发更新-生成补丁-应用补丁
2. 触发更新时机主要发生在 setState 以及 react hooks 操作之后，此时触发虚拟 DOM 树变更，遍历，采用了深度优先遍历算法，但传统的遍历算法效率较低，react 采用了分治的算法，将单一节点比对转化为三种类型比对，分别是

- 树对比 ==》因为网页中的节点很少有跨层级的移动，所以两组虚拟 DOM 树，只对同层级的节点进行比对
- 组件对比 =》 如果两个组件时同一类型，则进行树比对，否则放入补丁更新
- 元素对比 =》 主要发生在同层级中，通过标记节点，操作生成补丁，节点操作对应真是的 DOM 操作

3. 自 react 16 引入了 Fiber 架构，为了使整个过程够随时暂停，恢复，节点与树，分别采用了 FiberNode 和 FiberTree,进行重构，

FiberNode 使用了双链表的结构，可以直接找到兄弟节点（sibling）和子节点（child）

4. 整个更新过程由 current 与 workInProgress 两株树双缓冲完，workInProgress 更新完成后，再通过修改 current 指针去指向新的节点
5. 与其他框架对比
   - Preact
     - 相较于 react 整体设计思路相似，对底层的元素采用了真实的 DOM 比对，并没有采用 Fiber 的设计
   - Vue
     - 几乎一致

##### 如何根据 react diff 算法，优化代码

1、 尽量避免跨层级节点移动

2、通过设计唯一 key 进行优化，尽量减少组件层级深度

3、通过设置 shouldComponentUpdate 和 PureComponent 减少 diff 次数

### 7、解释 react 的渲染流程 



React Reconciler

#### 如何做性能优化

做优化 -> 有指标 -> 有比较 -> 有数据
做工程 -> 有调研 -> 有方案 -> 有结果

#### 分析调优

- 建立衡量标准
  - 指标
  - 采集
- 确认优化原因
- 实施方案过程
- 计算收益结果
  - 数据
  - 效果

Google 的Chrome 小组进一步提出以用户为核心的RAIL 模型，用更多的数字维度去阐释网页性能

![image-20210321214429785](/Users/shuxinliu/Library/Application Support/typora-user-images/image-20210321214429785.png)

衡量工具：lighthouse（业界标准）、New Relic 、阿里云 ARMS

FCP 首次绘制内容的耗时

TTI 页面可交互时间

FPS 前端页面帧率

page load 

静态资源及API 请求成功率

performance.getEntries



react-virtualized  react-window



reselect



#### 如何提升代码的可维护性

1、可分析性

- 预防： code review eslint prettier

- 兜底：快速定位线上问题  sentry + sourcemap ,mozila +sourcemap

  

2、可改变性（可拓展模式，）

- 划分边界
- 模块
- 组件设计模式 -通过分离容器组件与展示组件的分离方式，推荐storybook 沉淀展示组件

3、稳定性

- 

4、易测试性

5、 可维护性的依从性

- 针对样式的stylelint
- 针对代码提交 commitlint
- 针对代码风格 prettier
- 针对编辑器风格editorconfig
- 针对Javascript eslint



### 8、Hooks



- useState
- useEffect
- useContext
- useCallback
- useReducer
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue



#### 谈谈你对 react hooks 设计模式的理解

首先react hooks  没有权威的设计模式，很多工作还在建设中，在这次我谈一下自己的看法，首先用hooks 开发，要抛弃声明周期的思考模式，以effect 的角度重新思考，以前需要在各个声明周期实现事件订阅，取消订阅等操作，直接在effect中写就好了，在这样一个基础上，我总结了团队在项目上的一些开发心得，做成了开发规范进行推广

1、react.useMemo 取代了react.memo,因为react.memo 并不能控制组件=内部的共享，而useMemo 能更细粒度的控制缓存，更适合hooks 的场景

2、 常量，useCallback,useEffect 常量依赖

3、在实际项目使用中，采用外观模式，把获取用户，增加用户，删除用户逻辑封装到一个hooks 中，而组件内部是抽空的，不放任何业务逻辑，只需暴露状态与操作函数，

基于事物 transaction

react server component

### 9、React-Router 的实现原理与工作方式



react-router 的基础原理

开发模式  monorepo + lerna

![image-20210322231158531](/Users/shuxinliu/Library/Application Support/typora-user-images/image-20210322231158531.png)



### 10、React 生态





用结构化的思维去回答，（如果找不大合适的策略去结构化，那就分类）

有哪些  =》有几类   再为每一类例举两三个常用库即可，

名字 -> 适用场景 --> 主要功能 --> 核心原理

##### 初始化：



项目： create-react-app   craco || react-app-rewired

国内 umi dva

库 ： create-react-library storybook



##### 开发过程中：

路由： React-router

样式：css modules(css-loader)  ,css in js (styled-components,emotio)

基础组件：antd

功能组件：

- react-dnd ,react-draggable  拖拽
- Video-React 播放视频
- react-pdf-viewr 预览PDF
- react-window 和react-virtualized 长列表问题解决

状态管理：redux,mobx

构建工具：

- webpack
- rollup
- esBuild (go 编写，相比于穿透JavaScript构建工具，有10到100倍的性能)
- vite 

检查

![image-20210323090105307](/Users/shuxinliu/Library/Application Support/typora-user-images/image-20210323090105307.png)

发布：

由构建器完成打包，再丢到服务器上运行，此时静态文件可通过CDN 服务商，回源服务加速静态资源，

2、自行手动上传静态资源到CDN ，这里需要 s3-plugin-webpack 一类插件处理静态资源上传





整体概览

![image-20210323091422363](/Users/shuxinliu/Library/Application Support/typora-user-images/image-20210323091422363.png)

