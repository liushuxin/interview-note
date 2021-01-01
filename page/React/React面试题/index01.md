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



### 4、React组件跨层级通信

1、父与子，=> props

2、子与父，=>  回调函数，实例对象（ref）

3、兄弟节点，=> 父节点的state 

4、在树形节不中相关的节点 => React Context ,状态管理工具（redux,mobx,） 全局事件（event ）



### 5、Virtual DOM 的工作原理

1、 facebook 创建React 的初衷

- 简化开发
- 防止XSS

通过虚拟DOM 规避风险

react主要实现组件的实现，更新调度

ReactDOM 提供了网页上的渲染



<font color="red">答题：</font>

虚拟DOM 是通过js 对象来描述DOM 的结构，提升代码抽象能力，避免人为的DOM 操作，降低代码风险，

react 中的jsx节点 通过babel 的插件，转化为React.createElement.(_jsx),执行后，会返回一个plain Object,他会表述自己的tag 类型，tag 属性以及children 的信息，这写plain Object 通过树形结构组合成一颗DOM 树，当状态发生变化的时候，将变更前后的DOM树进行差异比较，这个过程称为diff,生成的结果称为patch,计算之后，会渲染patch 完成对真实DOM 的操作

优势：（在有大量DOM 操作的时候）

- 性能优越
- 规避XSS
- 跨平台

缺点

- 内存占用过高
- 无法进行极致优化



#### 





· 





