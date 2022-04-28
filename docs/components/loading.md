# loading弹框

## 基本用法

<demo-block src="/loading">
:::slot descript
引入Loading, Loading.open()打开, Loading.close()关闭
:::

:::slot example
请在右边模拟手机上示范
:::

:::slot code
```html
<template>
  <div>
    <button @click="open">打开loading</button>
  </div>
</template>

<script>
import { Loading } from 'cqc-vue3-mui'
export default {
  name: 'App',
  setup() {
    const open = () => {
      Loading.open({text: 'loading...'})
      setTimeout(() => {
        Loading.close()
      }, 3000);
    }
    return {
      open
    }
  }
}
</script>


```
:::
</demo-block>

## 方法

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|open|打开弹窗||||
|close|关闭弹窗||||