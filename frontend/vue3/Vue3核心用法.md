# 1. Vue3 工程的创建

## 1.1 【基于 vue-cli 创建】

点击查看[官方文档](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)

> 备注：目前`vue-cli`已处于维护模式，官方推荐基于 `Vite` 创建项目。

```powershell
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version

## 安装或者升级你的@vue/cli 
npm install -g @vue/cli

## 执行创建命令
vue create vue_test

##  随后选择3.x
##  Choose a version of Vue.js that you want to start the project with (Use arrow keys)
##  > 3.x
##    2.x

## 启动
cd vue_test
npm run serve
```

---

## 1.2 【基于 vite 创建】(推荐)

一行命令快速创建

```bash
npm create vue@latest
```

![1729594049830](Vue3核心语法.assets/1729594049830.png)



Vite 创建和 vue-cli创建的区别：

Vite是vue团队新开发的构建工具，vue-cli 是一个脚手架，使用的是webpack构建

简单来说，Vite更快。可参考下列对比图

![1729594298474](Vue3核心语法.assets/1729594298474.png)

**项目结构介绍**

![1729594605419](Vue3核心语法.assets/1729594605419.png)

**核心源代码目录**

![1729594777540](Vue3核心语法.assets/1729594777540.png)

总结：

1. 根目录下的index.html 作为入口文件，引入src下的main.ts 文件作为后续的解析文件
2. main.ts 中利用 createApp( )  函数创建 应用实例，且以App.vue 文件作为页面主干

## 1.3 简单的效果实现

![1729599497566](Vue3核心语法.assets/1729599497566.png)

利用选项式API 实现了组件引入，状态变量效果。

**文件结构**

![1729599607042](Vue3核心语法.assets/1729599607042.png)

**App.vue**

```vue
<script lang="ts">
import person from './components/Person.vue'

export default {
  name: 'App',
  components: {
    person
  }
}
</script>

<template>
  <div class="app">
    <person></person>
  </div>
</template>

<style scoped>
.app {
  padding: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: cyan;
  height: 100px;
  width: 100%;
}
</style>
```

**Person.vue**

```vue
<script lang="ts">
export default {
  name: "person",
  data() {
    return {
      name: "张三",
      age: 18,
      tel: '19987765672'
    }
  },
  methods: {
    changeName() {
      this.name = '李四'
    },
    addAge() {
      this.age += 1
    },
    showTel() {
      alert(this.tel)
    }
  }
}
</script>

<template>
  <div class="Person">
    <h1>姓名：{{ name }}</h1>
    <h1>年龄：{{ age }}</h1>
    <button @click="changeName">修改姓名</button>
    <button @click="addAge">增加年龄</button>
    <button @click="showTel">获取联系方式</button>
  </div>
</template>

<style scoped>
.Person {
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: #f77234;
}
</style>
```

