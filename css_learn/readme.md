# CSS学习笔记
```html
层叠样式表 sascading Stylesheetss
```
- 不是编程语言
- 高速浏览器如何指定样式、布局等

- 所有属性都要有分号做结尾

基本样式：
- 内联式（不推荐使用，维护繁琐）
    将style属性（style attribute）添加到相关标签（relevant tag）。
    不适用外部css
    ```html
    <p style="color:white; background-color:gray;">
    This is an example of inline styling. 
</p>
- 嵌入式
在HTML页面head的<style>元素内定义
```html
 <head>
      <style>
      p {
         color:white;
         background-color:gray;
      }
      </style>
   </head>
```

- 外联式（最有用）

使用此方法，所有样式规则都包含在单个文本文件中，该文件以.css 扩展名保存。然后使用<link>标记在HTML中引用此CSS文件。<link>元素位于头部内部。
```html
<head>
   <link rel="stylesheet" href="example.css">
</head>

p {
   color:white;
   background-color:gray;
}

```