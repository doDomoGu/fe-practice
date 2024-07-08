---
lang: zh-CN
---

# 代码整洁的 Javascript

> [原文转载](https://www.yuque.com/lpldplws/web/uc3snh)

## 简介

![image](./assets/clean_code/image.jpeg)

将源自 Robert C. Martin 的 [Clean Code](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)的软件工程原则适配到 JavaScript。

这不是一个代码风格指南，它是一个使用 JavaScript 来生产可读的，可重用的，以及可重构的软件的指南。

这里的每一项原则都不是必须遵守的，甚至只有更少的能够被广泛认可。 这些仅仅是指南而已，但是却是 _Clean Code_ 作者多年经验的结晶。

我们的软件工程行业只有短短的 50 年，依然有很多要我们去学习。 当软件架构与建筑架构一样古老时，也许我们将会有硬性的规则去遵守。 而现在，让这些指南做为你和你的团队生产的 JavaScript 代码的
质量的标准。

还有一件事：知道这些指南并不能马上让你成为一个更加出色的软件开发者，并且使用它们工作多年也并不意味着你不再会犯错误。每一段代码最开始都是草稿，像湿粘土一样被打造成最终的形态。最后当我们和搭档们一起审查代码时清除那些不完善之处，不要因为最初需要改善的草稿代码而自责，而是对那些代码下手。

## 变量

### 使用有意义并且可读的变量名称

**不好的：**

```js
const yyyymmdstr = moment().format('YYYY/MM/DD')
```

**好的：**

```js
const currentDate = moment().format('YYYY/MM/DD')
```

## 函数

## 对象和数据结构

## 类

## SOLID
