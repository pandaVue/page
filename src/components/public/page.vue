<!--分页-->
<template  id="page">
  <div>
    <div class="page">
        <ul class="page-box">
            <li class="prev" @click="prev()">上一页</li>
            <li v-for="(item,$index) in Pages" @click="go(item)" :class="{active:item==curPage}">{{item}}</li>
            <li class="next" @click="next()">下一页</li>
            <li class="jump-box"><input type="text" @keyup.13="jump($event)" v-model="jumpPage"/></li>
            <li class="pageall">共{{pageCount}}页</li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return {
            curPage:1,
            jumpState:false,//后续保留参数
            jumpPage:null,//跳转页码
        }
    },
    props:{
        defultPage:{//默认显示页数
            type:Number,
            default:5
        },
        limit:{//显示条数
            type:Number,
            default:20
        },
        total:{//数据总数
            type:Number,
        },
        defultJump:{//默认跳转页
            type:Number,
            default:1
        }
    },
    computed:{
        pageCount(){
            return Math.ceil(this.total/this.limit)
        },
        Pages(){
            var cur = this.curPage; //当前页码
            var pageall = this.pageCount; //共多少页
            var defultPage = this.defultPage;
            var array = [];
            var start  =parseInt((cur-1)/defultPage)*defultPage + 1; 
            var end;
            //结束页码
            if(start + defultPage > pageall){
                end = pageall+1
            }else{
                end = start + defultPage;
            }

            // 判断结束边界
            if(cur > pageall){
                cur = this.curPage = pageall;
                start  = parseInt((cur-1)/defultPage)*defultPage+1;
                end = pageall+1
            }

            //判断开始边界
            if(cur < 1){
                this.curPage = 1
                start  = 1; 
                if(start + defultPage > pageall){
                     end = pageall+1
                 }else{
                    end = start + defultPage;
                }
            }
            for(var i = start; i < end; i++){
                array.push(i)
            }
         return array
      }
    },
    components:{
    },
    methods:{
        go(index){
            this.curPage = index
            this.$emit('change',this.curPage); //父组件通过change获取当前页
        },
        prev(){
            this.curPage--;
            this.go(this.curPage);
        },
        next(){
            this.curPage++;
            this.go(this.curPage);
        },
        jump(){
            this.go(this.jumpPage);
        },

         /*
         *可以根据首页/尾页
         *自行扩展 
         *跳转首尾
         */
        first(){//首页
            this.go(1);
        },
        last(){//尾页
            this.go(this.pageCount);
        }
    },
    created(){
        this.go(this.defultJump);
    },
}
</script>
<style lang="stylus" scoped>
.page
    width 900px
    overflow hidden
.page-box
    margin 10px 
    li
        list-style none
        padding: 5px 10px
        margin-left: -1px
        float left
        background-color: #fff
        border: 1px solid #ddd
        color #337ab7
        cursor pointer
    .active 
        color #fff
        background #337ab7
    .jump-box 
        padding 0
        input 
            width 40px
            padding 8px 0
            border 0
            text-align center
</style>
