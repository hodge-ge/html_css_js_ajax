![image-20201216133816819](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216133819.png)

三驾马车：

- html 负责结构化的展示
- css负责样式
- js负责页面的动作相应

DOM：document object model 文本对象模型

![image-20201216141727180](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216141728.png)

html是根

![image-20201216141812305](D:\github_data\html_css_js_ajax\dom_learn\Untitled.assets\image-20201216141812305.png)

在console区域输入：

document是返回所有源码

document.getElementsByTagName("body") 获得html集合

document.getElementsByTagName("body") [0]获取第一个元素，也就是文档的body模块代码

document.getElementsByTagName("li") 获取li节点，共三个

document.getElementsByTagName("li").length      3

document.getElementsByClassName("list") 通过类名获取节点

document.getElementById("titleid")

![image-20201216145646033](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216145647.png)

这就是all和不加all的区别

dot .选择类

\# 选择id

![image-20201216152213591](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216152215.png)

两种方式选择节点

![image-20201216152700827](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216152702.png)

看到能修改的属性

![image-20201216152840828](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216152842.png)

驼峰命名：第一个词首字母不大写，之后所有单词的首字母大写

var title=document.querySelector("h1"); 可以变量存储

title.style.backgroundColor="green";



修改颜色：

![image-20201216154025603](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216154029.png)

第一种就是在网页上改动

![image-20201216154143486](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216154146.png)

第二种是在css文件里面修改 dot选择类

![image-20201216154721932](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216154724.png)

第三种选中标签，用dom添加类。能看到在网页中能看到新增的class，在console里面也能查到class已经被添加，但是html源码没有添加。

![image-20201216160231181](D:\github_data\html_css_js_ajax\dom_learn\dom笔记.assets\image-20201216160231181.png)

还可以去掉class

toggle函数可以帮助添加删除的交互操作

![image-20201216160909499](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216160911.png)

单击调用函数，对class增加删除反复操作

```
var title=document.querySelectorAll("h1")[1];
var bt=document.querySelector("button");
bt.addEventListener("click",function(){title.classList.toggle("title")})
```

## 改标签内容

document.querySelectorAll("h1")[1].innerHTML="good bye"

document.querySelectorAll("h1")[1].innerHTML="<em>good bye</em>"这个可以包含原生html内容

document.querySelectorAll("h1")[1].innerHTML; 直接返回内容    

document.querySelectorAll("h1")[1].textContent; 返回内

- innerHTML可以包含原生的HTML代码，比如加粗、强调
- innerContent只是说标签之间的文本内

attribute

属性内容在起始标签内：<li class="list">first</li> class就是attribute

![image-20201216171515042](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201216171516.png)

看节点的属性

```
<body>
    <h1 id="titleid" class="list">hello</h1>
    <h1 >hello world</h1>
    <button>click me</button>
    <ul id="sp-list">
        <li class="list">first</li>
        <li class="list">second</li>
        <li>third</li>
    </ul>
</body>
```

document.querySelector("h1").getAttribute("class")
	"list"



修改属性

```
查询
document.querySelector("h1").getAttribute("class")
"list"
document.querySelector("h1").attributes.class.value
"list"
修改
document.querySelector("h1").attributes.class.value="title";
"title"
增加：
document.querySelectorAll("h1")[1].setAttribute("class","title"); 
删除
document.querySelectorAll("h1")[1].removeAttribute("class");
```

