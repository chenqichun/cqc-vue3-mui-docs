# 无限滚动


## 基本用法

<demo-block src="infinite-scroll">
:::slot descript
infinite-scroll是一个指令,
无限滚动开始会使用MutationObserver 来检测滚动容器的内容高度是不是达到可滚动高度，
如果没有达到，会自动调用传入的load方法，直接内容高度达到可滚动高度就停止。
(默认immediate为true,即开启MutationObserver检测，如果为false,则不检测；如果设为false,请第一次请求的时候多请求数据，使得内容高度大于容器高度),
后续的滚动是根据是否达到阙值来触发
:::

:::slot example
请在右边模拟手机示范
:::

:::slot code
```html
<template>
  <div style="height:400px; overflow-y: auto; border:1px solid #dbdbdb">
    <div 
      v-infinite-scroll="load" 
      infinite-scroll-disabled="disabled"
      infinite-scroll-delay="delay"
      infinite-scroll-distance="30"
    >
      <div class="item" v-for="item in count" :key="item">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { infiniteScroll } from 'cqc-vue3-mui'
export default {
  directives: {
    infiniteScroll
  },
  setup() {
    const count = ref(0)
    const load = () => {
      console.log('load')
        count.value += 5
     }
    const disabled = ref(false)
    const delay = 100
    const immediate = ref(true)
    return {
      count,
      load,
      disabled,
      delay,
      immediate
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
|immediate|是否立即执行|boolean|true/false|true|
|delay|触发频率,毫秒|number|-|100|
|disabled|是否停止触发滚动|boolean|true/false|false|
|distance|滚动阙值,距离底部多少开始触发|number|-|10|