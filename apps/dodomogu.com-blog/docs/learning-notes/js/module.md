# JS 模块化

## 历史背景

JavaScript 语言本身的定位： 作为简单页面设计的支撑 -- 页面的动画效果 + 表单的提交等  
早期并无模块化或者命名空间的基础  
随着页面效果复杂度的日益增长，代码模块化的需求迫在眉睫

## 幼年期：无模块化

1. 开始需要页面加载不同的 js 库：动画库、表单库、格式化工具
2. 多种 js 文件被分在不同的文件中
3. 不同的文件又被同一个模版所引用

```html
// index.html
<script src="tools.js"></script>
<script src="map.js"></script>
// 主
<script src="main.js"></script>
```
