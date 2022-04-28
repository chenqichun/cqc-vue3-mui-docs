# range滑块

## 基本用法

<demo-block src="/range">
:::slot descript
:::

:::slot example
请在右边模拟手机上示范
:::

:::slot code
```html
<template>
  <div style="width: 300px;margin: 50px 0 0 20px">
    <cqc-range></cqc-range>
  </div>
  <div style="width: 300px;margin: 50px 0 0 20px">
    <cqc-range :current="40" color="red" bgColor="blue"></cqc-range>
  </div>
  <br>
  <div style="width: 300px;margin: 50px 0 0 20px">
    <cqc-range @change="handleChange">
      <template v-slot:startText>
        开始
      </template>
      <template v-slot:endText>
        结束
      </template>
    </cqc-range>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      handleChange(e, r) {
        console.log(e, r)
      }
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
|thumbWidth|按钮宽度|number|-|30|
|thumbColor|按钮颜色|string|-|#fff|
|height|轨道的宽度|number|-|1|
|color|进度条的颜色|string|-|#26a2ff|
|bgColor|轨道背景颜色|string|-|#a9acb1|
|current|设置初始值|number|0-100|0|

## 方法

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|change|回调,会返回(e1,e2), e1是整数, e2是浮点数|function|-|-|

## 插槽

|参数|说明|类型|可选值|默认值|
|:----:|:----:|:----:|:----:|:----:|
|startText|左边文字插槽|slot|-|-|
|endText|右边文字插槽|slot|-|-|
