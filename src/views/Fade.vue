<template>
  <div class="fade">
     <input v-model="message" v-on:keyup.enter="show===true ? show=false : show=true" >
    <el-button @click="show = !show">Click Me</el-button>

    <div style="display: flex; margin-top: 20px; height: 100px;">
      <transition name="el-fade-in-linear">
        <div v-show="show" class="transition-box">.el-fade-in-linear</div>
      </transition>
      <transition name="el-fade-in">
        <div v-show="show" class="transition-box">.el-fade-in</div>
      </transition>
    </div>
    <p>原始字符串: {{ message }}</p>
    <p>计算后反转字符串: {{ reversedMessage }}</p>
    <p>方法反转字符串: {{ reversedMessage2() }}</p>
    <div style="width:200px;height:200pxtext-align:center;line-height:200px"  class="test" :class="{active:isActive,green:isGreen}">
      wowkow武凯乾
    </div>
	<div>
		<button v-on:keyup.enterclick.prevent.self.once="warn('Form cannot be submitted yet.', $event)">
		  按钮
		</button>
		
	</div>
  </div>
</template>

<script>
    export default {
    data: () => ({
      message : "wowkow武凯乾",
      isActive: true,
      isGreen : true,
      show: true
    }),
    watch : {//watch监听属性运行在计算属性之前
      message : function (newVal,oldVal) {
        alert(oldVal + " ，被改变为：" + newVal)
      }
    },
    created :function(){
      //alert("11")
    },
    computed:{
	    reversedMessage : function(){
	  	  return this.message.split('').reverse().join('');
      },
      site :{
        get : function(){
          return this.message;
        },
        set : function(val){
          this.message = val;
        }
      }
      
    },
    methods: {
      reversedMessage2 : function(){
        return this.message.split('').reverse().join('');
      },
	  warn : function(message,event){
		  if(event){
			  console.log(event);
			  event.preventDefault();
			  event.stopPropagation();
		  }
		  alert(message)
	  }
    },
  }
</script>

<style>
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .test{
    font-size: 20px;
  }
  .green {
    color: #ff0000;
  }
  .active {
    background: #409EFF;
  }
</style>