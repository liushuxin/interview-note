## React 中的 Refs

### 问题一、什么是 Refs 他是如何使用的？

1. 提供一种方式，让我们能够<font color="red">访问 DOM 节点</font>，或者<font color="red"> 在 render 方法中创建的 React 元素</font>
2. 如何使用

2.1 在 DOM 中使用

2.1 在 React 组件中使用

#### 使用方式

##### 1、React.createRef 在类组件中创建一个 refs 对象，并挂载到 dom 节点，后一个类组件的 ref 属性中，函数式组件想要使用需要借助 React.forwardRef 进行转发

```react
// 代码待补充
```

##### 2、通过回调函数的形式使用(ref)=> {this.refDOM = ref}

```react
// 代码待补充``
```

##### 3、Hooks 使用方法 useRef 声明一个 ref 对象

```react
// 代码补充
```

##### 4、Hooks 使用方法 useImperativeHandle(ref,createHandle,[deps])

> 可以让你在使用 `ref` 时自定义暴露给父组件的实例值,与 forwardRef 一起使用

```react
// 代码补充
```

##### 5、React.forwardRef : Refs 转发 把父组件的 ref 当做一个 props,所以用它在函数组件中做 ref 转发，同时也可以用在高阶组件中 ref 的转发，也可以在类组件中做 ref 转发

```react
// 代码待补充
```

### 问题二、 Refs 在源码中是如何实现的？
