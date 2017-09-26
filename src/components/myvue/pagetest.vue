<!--测试页面-->
<template  id="page">
  <div>
        <page
        :total="53" 
        :limit="10" 
        :defultPage="5"
        :defultJump="1"
        @change="pageChange"></page>
  </div>
</template>
<script>
import Page from '../public/page.vue'
export default {
    data(){
        return {}
    },
    components:{
        Page
    },
    methods:{
      pageChange(index){
          alert(index)
      }
    }
}
</script>
<style lang="stylus" scoped>
.page
    width 900px
    overflow hidden
.page-box
    margin 10px 
    li
        padding: 5px 10px
        margin-left: -1px
        float left
        background-color: #fff
        border: 1px solid #ddd
        color #337ab7
    .active 
        color red
    .jump-box 
        padding 0
        input 
            width 40px
            padding 5px 0
            border 0
            text-align center
.prev,.next
    cursor pointer

        
</style>
