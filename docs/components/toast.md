# Toast消息提示

## 基本用法

<demo-block>
:::slot descript
用法 Toast(opts) opts可以是字符串 或者 对象
调用后返回一个实例，实例上有close()方法，
调用后会立即关闭。
:::

:::slot example
请在右边模拟手机上示范
:::

:::slot code
```html
<template>
  <div>
    <button @click="click('success')">成功</button>
    <br>
    <button @click="click('error')">错误</button>
    <br>
    <button @click="click('warn')">警告</button>
    <button @click="close">手动关闭</button>
  </div>
</template>

<script>
import { Toast } from 'cqc-vue3-mui'
export default {
  name: 'App',
  setup() {
    let count = 0;
    let t;
    const click = (type) => {
     t = Toast({message: 'hahah',icon:type, duration: 2000, position: 'middle'})
    }
    const close = () => {
      t && t.close()
    }
    return {
      click,
      close
    }
  }
}
</script>

```
:::
</demo-block>

## 属性

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
||||||