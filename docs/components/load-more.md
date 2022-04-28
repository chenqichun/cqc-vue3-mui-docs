# 上拉加载/下拉刷新

## 基本用法

<demo-block src="/load-more">
:::slot descript
<p>下拉刷新，等刷新数据后，要调用onTopLoaded()方法关闭。如this.$refs.xxx.onTopLoaded(), xxx为ref绑定的元素</p>
<p>上拉加载，加载数据后，要调用onBottomLoaded()方法关闭，如this.$refs.xxx.onBottomLoaded(), xxx为ref绑定的元素； 如果没有更多数据了，请设置finished的值为true</p>
:::

:::slot example
请在右边模拟手机进行上拉，下拉操作
:::

:::slot code
```html
<template>
  <div>
    <div style="height:100vh; overflow-y: auto">
    <cqc-load-more :topMethod="topMethod" :bottomMethod="bottomMethod" ref="more" :finished="finished">
      <div class="item" v-for="item in count" :key="item">{{ item }}</div>
      <div v-if="finished">五更多数据</div>
    </cqc-load-more>
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const more = ref(null)
    const finished = ref(false)
    const count = ref(20)
    const topMethod = () => {
      console.log('top')
      setTimeout(() => {
        finished.value = false
        count.value = 20
        more.value.onTopLoaded()
      }, 1000);
    }
    const bottomMethod = () => {
      console.log('bottom')
      setTimeout(() => {
         count.value += 20
      if (count.value >= 60) { finished.value =true}
        more.value.onBottomLoaded()
      }, 1000);
    }
    const close = () => {
      finished.value = true
    }
    return {
      topMethod,
      more,
      bottomMethod,
      close,
      finished,
      count
    }
  }
}
</script>

<style scoped>
.item {
  height:50px;
  line-height:50px;
  text-align:center;
  border: 1px solid #dbdbdb;
}
</style>
```
:::
</demo-block>

## 属性

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|topMethod|下拉刷新的回调|function|-|-|
|bottomMethod|上拉加载的回调|function|-|-|
|finished|如果上拉已经没有更过数据，请设置为true, 设为true后，将不会再触发上拉回调|boolean|true/false|false|
|bottomDistance|上拉阙值|number|-|100|