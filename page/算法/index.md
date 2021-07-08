！### 算法总结

## [冒泡排序](./排序/冒泡排序.md)

```javascript
const a = [2, 3, 4, [2, 3, 4, 3, [2, 3, [3]], 4], [5, 6, 7, [2, [4]]]];
function getLevel(arr) {
  let level = 1;
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      const subLevel = 1 + getLevel(element);
      if (subLevel > level) {
        level = subLevel;
      }
    }
  });

  return level;
}
console.log(getLevel(a));
```
