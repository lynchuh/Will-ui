<template>
  <div>
    <h3>3. 双向绑定</h3>
      <div class="model-wrapper">
        <div class="model">
        <w-input placeholder="双向绑定value值" v-model="message" class="model-input"></w-input>
          <span>{{message}}</span>
        </div>
        <div class="model">
          <w-button @click="changeMessage">点我改变</w-button>
        </div>
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

