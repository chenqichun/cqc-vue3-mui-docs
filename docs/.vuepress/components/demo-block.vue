<template>
  <div class="demo-block">
    <div>
      <p>
      <slot name="descript"></slot>
    </p>
    <div class="source">
      <div class="example">
        <slot name="example" />
      </div>
      <div class="hightwrap" v-highlight :style="{height: show ? codeHeight + 'px' : '0' }" >
        <div ref="code">
          <slot name="code" />
        </div>
        <span class="copy" @click="handleCopy">复制</span>
      </div>
      <div class="bottom" @click="handleShow">
        <i :class="[show? 'cqc-icon-arrow-up' : 'cqc-icon-xiasanjiao', 'cqc-icon']"></i>{{show ? '收起代码' : '展开代码' }}
      </div>
    </div>
    </div>
    <div class="right" v-if="src" :style="{transform: `translateX(${showPhone ? 0 : '100%'})`}">
      <div class="hidePhone" @click="showPhone = !showPhone">{{showPhone ? '收起' : '展开'}}</div>
      <div class="iframe-wraper">
        <iframe width="100%" height="100%" :src="$url_base + src" />
      </div>
    </div>
    <div class="message-tip" ref="messageTip">
      复制成功
    </div>
  </div>
</template>

<script>
export default {
  name: 'demo-block',
  props: {
    title: String,
    section: String,
    content: String,
    src: String
  },
  data() {
    return {
      show: false,
      codeHeight: 0,
      showPhone: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
      this.codeHeight = this.$refs.code.clientHeight
      }, 0);
    })
  },
  methods: {
    handleCopy () {

      const textarea = document.createElement('textarea')
      textarea.style.width = textarea.style.height = 0;
      textarea.style.overflow = 'hidden'
      textarea.style.opacity = 0;
      textarea.value = this.$refs.code.querySelector('code').innerText
      document.body.appendChild(textarea)
      textarea.select()
      document.execCommand('copy')
      document.body.removeChild(textarea)
      this.$refs.messageTip.style.display = 'block'
      setTimeout(() => {
        this.$refs.messageTip.style.display = 'none'
      }, 1500);
    },
    escape(str) {
      str = str.replace(/&/g, '&amp;').replace(/</g, '&lt;')
      str = str.replace(/>/g, '&gt;')
      // str = str.replace(/"/g, '&quto;')
      // str = str.replace(/\'/g, '&#39;')
      str = str.replace(/`/g, '&#96;')
      str = str.replace(/\//g, '&#x2F;')
      return str
    },
    handleShow() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss">
.demo-block {
  position: relative;
  padding-right: 310px;
  iframe {
    border: none;
  }
  .message-tip {
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    border-radius: 4px;
    color: #67c23A;
    background: #e1f3d8;
    z-index: 999;
    display: none;
  }
  .right {
    position: fixed;
    top: 82px;
    right: 10px;
    z-index: 3;
    background: url('http://www.chenqichun.com/lib/vue3-mui-docs/phone.png') no-repeat;
    background-size: 100% 100%;
    width: 300px;
    height: 650px;
    transition: all 0.3s ease;
    .hidePhone {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-100%, -50%);
      border: 1px solid #dbdbdb;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      padding: 4px 6px;
      width: 15px;
      cursor: pointer;
    }
    .iframe-wraper {
      position: absolute;
      top: 50px;
      left: 10px;
      right: 10px;
      bottom: 88px;
      background: #fff;
    }
  }
  .example {
    padding: 24px;
  }
  .copy {
    position: absolute;
    right: 10px;
    top: 18px;
    color: #f8f8f8;
    padding: 4px;
    background: rgba(0,0,0,0.2);
    border-radius: 3px;
    cursor: pointer;
    z-index: 100;
    &:hover {
      color: #3eaf7c;
    }
  }
  .hightwrap {
    position: relative;
    transition: all 0.3s ease;
    height: 0;
    overflow: hidden;
    &.show {
      height: auto;
    }
  }
  pre code {
    background-color: #f8f8f8;
    padding: 2em 1em !important;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    font-size: 28px;
    color: #1f2f3d;
  }
  h3 {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .source {
    padding-bottom: 24px;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: .2s;
    margin-top: 10px;
    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6), 0 2px 4px 0 rgba(232, 237, 250, 0.5);
    }
  }
  .bottom {
    display: flex;
    justify-content: center;
    border-top: 1px solid #ebebeb;
    padding-top: 16px;
    align-items: center;
    cursor: pointer;
    .cqc-icon {
      transition: all 0.1s linear;
      margin-right: 2px;
    }
    &:hover {
      color: #3eaf7c;
      .cqc-icon {
        fill: #3eaf7c;
        margin-right: 6px
      }
    }
  }
}
</style>