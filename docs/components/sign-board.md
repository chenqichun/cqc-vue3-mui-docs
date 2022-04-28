# signBoard画板


## 基本用法

<demo-block src="/sign-board">
:::slot descript
画板导出的图片是base64图片
:::

:::slot example
请在右边模拟器上画画
:::

:::slot code
```html
<template>
  <cqc-sign-board 
  @getData="getData"
  :lineWidth="30"
  strokeStyle="red"
  ></cqc-sign-board>
</template>

<script>
export default {
  setup() {
    return {
      getData(e) {
        console.log(e)
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
|width|画板宽度|string|-|100vw|
|height|画板高度|string|-|100vh|
|lineWidth|线的大小|number|-|2|
|strokeStyle|线的颜色|string|-|#000|
|lineCap|线头形状|string|butt/round/square|round|
|lineDash|虚线设置|arrary|-|[0,0]|
|doubleLine|是否开启双线|boolean|true/false|false|
|miniType|导出图片的类型|string|miniType|image/png|
|canvasBg|背景色,如果需要背景色，请设置值，如blue|string,boolean|-|false|
