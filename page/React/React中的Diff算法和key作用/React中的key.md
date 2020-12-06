## React 中的 key 的使用

> 考察知识点：React Diff 算法

### 问题一、 React 中的 key 是什么，有什么用处？

1. 是什么：key 值用来标识唯一性，
1. 和 type 值一起，标识同级节点当前元素的唯一性，当前要更新的元素是否是同一个元素，是的话，实现复用
1. 利用 key 的唯一性 特性，将 fiber 下的的 children 利用 ES6 的 Map 构建一个 key-map 数据，便于快速查找(quick lookups)（因为原先是链表图不方便取值，也不方便对其进行增删改查）
