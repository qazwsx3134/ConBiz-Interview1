## Q1 Explain why does this color not works, and how to fix make it work on 1st list

因為CSS有權重

1. .container .shop-list li.item
2. .container .shop-list .item

之所以顯示的是1的color而不是2的color是因為
1.的權重比較高 是 0,3,1 的權重 (id, class, element)
而2.只有 0,3,0

## Q2 Write styling make every other line give background color to next one

要讓他們隔行變色，要用nth-child
如果要奇數行，要用:nth-child(odd)

```css
.container .shop-list .item:nth-child(even) {
  background-color: #f0f0f0;
}
```