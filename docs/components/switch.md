# switch 开关


## 基本用法

<demo-block src="/switch">
:::slot descript
用法简单
:::

:::slot example
请在右边模拟手机上示范
:::

:::slot code
```html
<template>
  <div style="margin: 50px">
    <cqc-switch :checked="true" />
    <br>
    <cqc-switch :checked="true" :disabled="true" />
    <br>
    <cqc-switch @change="change1" :checked="checked" />
    <br>
    <cqc-switch :trueValue="1" :falseValue="0" @change="change2" />
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const change1 = e => {
      console.log('change1', e)
    }
    const change2 = e => {
      console.log('change2', e)
    }
    const checked = ref(false)
    setTimeout(() => {
      checked.value = true
    }, 1000);
    return {
      change1,
      change2,
      checked
    }
  }
}
</script>

<style>

</style>
```
:::
</demo-block>

## 属性

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|thumbWidth|按钮大小|number|-|30|
|width|轨道宽度|number|-|50|
|activeColor|打开时候的颜色|string|-|#04BE02|
|bgColor|轨道颜色|string|-|#fff|
|checked|是否打开|boolean|true/false|false|
|trueValue|打开的值|number,string,boolean|number,string,boolean|true|
|falseValue|打开的值|number,string,boolean|number,string,boolean|false|
|disabled|是否禁用|boolean|true/false|false|