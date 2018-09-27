<template>
  <div>
    <h3>四种Input状态</h3>
    <div class="example">
      <div>
        <p>基础用法</p>
        <w-input placeholder="请输入内容"></w-input>
      </div>
      <div>
        <p>错误提醒状态</p>
        <w-input placeholder="错误提示显示" error="我是错误提醒文字"></w-input>
      </div>
      <div>
        <p>禁用状态</p>
        <w-input placeholder="这是disabled状态" disabled></w-input>
      </div>
      <div>
        <p>只读状态</p>
        <w-input placeholder="这是readonly状态" readonly></w-input>
      </div>
      <pre><code>{{example}}</code></pre>
    </div>
    <h3>支持Input事件</h3>
    <p>支持Input事件触发：change、blur、focus、input</p>
    <div>
      <div>
        <w-input placeholder="支持事件触发" ></w-input>
        <pre><code>{{eventContent}}</code></pre>
      </div>
      <div class="model-wrapper">
        <div class="model">
        <w-input placeholder="双向绑定value值" v-model="message" class="model-input"></w-input>
          <span>{{message}}</span>
        </div>
        <div class="model">
          <w-button @click="changeMessage">点我改变</w-button>
        </div>
      <pre><code>{{modelContent}}</code></pre>
      </div>
    </div>
  </div>
</template>
<script>
import Input from "../../../src/input";
import Button from "../../../src/button";
export default {
  components: {
    "w-input": Input,
    "w-button": Button
  },
  data() {
    return {
      example: `<w-input placeholder="请输入内容"></w-input>
<w-input placeholder="错误提示显示" error="我是错误提醒文字"></w-input>
<w-input placeholder="这是disabled状态" disabled></w-input>
<w-input placeholder="这是readonly状态" readonly></w-input>`,
      eventContent: `<w-input placeholder="支持事件触发" 
  @change="onChange" 
  @blur="onBlur" 
  @focus="onFocus" 
  @input="onInput"
></w-input>
<script>
  export defalut{
    methods:{
      onChange($event){
        //得到change的event对象
      },
      onBlur($event){
        //得到blur的event对象
      },
      onFocus($event){
        //得到focus的event对象
      },
      onInput(value){
        //得到Input事件触发时的value值
      }
    }
  }
< /script>`,
      modelContent:`<w-input placeholder="双向绑定value值" v-model="message"></w-input>
<span>{{message}}</span>
<w-button @click="changeMessage">点我改变</w-button>
<script>
  export default{
    data(){
      return{
        message:'这是初始value值'
      }
    },
    methods:{
      changeMessage(){
        this.message = '这是由button改编的value值'
      }
    }
  }
< /script>`,
      message: `这是初始value`
    };
  },
  methods: {
    changeMessage() {
      this.message = "这是由button改变的值";
    },
  }
};
</script>
<style lang="scss" scoped>
p {
  font-size: 14px;
  color: rgb(68, 66, 66);
  line-height: 16px;
}
.example {
  display: flex;
  flex-wrap: wrap;
  > * {
    width: 50%;
  }
  pre {
    width: 100%;
  }
}
.model-wrapper{
  display: flex;
  flex-direction: column;
  .model{
    margin:6px 0;
    span{
    font-size: 14px;
    }
    .model-input{
      margin-right: 16px;
    }
  }
}
</style>

