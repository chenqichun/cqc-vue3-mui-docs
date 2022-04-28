# scroll 滚动


## 基本用法

<demo-block src="/scroll">
:::slot descript
横向滚动的时候，注意元素要横着排列
:::

:::slot example
请在右边模拟手机上示范
:::

:::slot code
```html
<template>
  <h3>基本用法</h3>
  <div class="wapper">
    <cqc-scroll>
      <ul>
        <li v-for="n in 20" :key="n">{{ n }}</li>
      </ul>
    </cqc-scroll>
  </div>
  <br />
  <h3>隐藏左边</h3>
  <div class="wapper">
    <cqc-scroll>
      <ul>
        <div class="item">
          <span style="margin-left: -105px">你看不见我 -></span>
          😀 😁落魄前端 😂 🤣 😃 🙃 热天热怨天尤人天涯热望认为人iui与🙂 🤔 😄 🤨 😐 🙃 的方法😔 😕 🙃 🤑 😲 ☹️ 
        </div>
      </ul>
    </cqc-scroll>
  </div>
  <br />
  <h3>垂直滚动</h3>
  <div style="width: 90vw;margin: 0 auto; height: 400px; border: 1px solid #dbdbdb">
    <cqc-scroll direction="vertical">
      <div>
        <li class="item" v-for="n in 20" :key="n">{{ n }}</li>
      </div>
    </cqc-scroll>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.wapper {
  width: 90vw;
  margin:20px auto 0;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid #dbdbdb;
  ul {
    display: inline-block;
    white-space: nowrap;
    list-style: none;
    li {
      display: inline-block;
      height: 60px;
      line-height: 60px;
      width: 60px;
    }
  }
}
.item {
  height: 60px;
  line-height: 60px;
  width: 100%;
  text-align: center;
}
</style>
```
:::
</demo-block>

## 属性

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|direction|滚动的方向|string|horizontal/vertical|horizontal|
|prevent|是否阻止touchmove事件，一般情况下建议阻止|boolean|true/false|true|