# Django项目建立

1. pycharm的terminal中输入：

   ```
   django-admin startproject DataForward
   #Django-admin是否带py都可以的
   python manage.py runserver 0.0.0.0:8000#启动服务
   python manage.py runserver
   ```

2. 浏览器输入：

   ```
   http://127.0.0.1:8080/
   ```

![image-20201210134629483](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201210134631.png)

看到上图就是正确配置了。

3. 查看结构

   ![image-20201210140003261](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201210140006.png)

   init使得这个项目可以被引入。

   manage是负责启动的文件

   settings是配置文件包含了数据库**学习罗师兄的熊**

   urls是路由跳转

   wsgi 我们没有任何操作，负责关联

4. 模块化的开发习惯

   mysite属于主文件的入口，

   ```
   (win10env) D:\postgradute_code\mysite>python manage.py startapp data_fo
   在mysite文件夹下创建app，和mysite文件下的mysiteapp是同级的。
   mysite app是主项目，是app入口。
   
   ```

   ![image-20201210141623669](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201210141625.png)

   注册在mysite

   ![image-20201210141822487](https://raw.githubusercontent.com/hodge-ge/imgbed/main/20201210141823.png)

注册之后才可以被启动



## 流程

- 地址栏输入地址
- 发送请求到mysite下urls，发现请求的是根路径，跳转到另外的app下data_fo。 到data_fo下面的urls，检索地址，调用views.py下的home函数。
- 接下来到views.py函数，找到home函数，render函数把home.html内容展示到请求页面。

