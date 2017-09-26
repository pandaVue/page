# page

> \一个简单的vue分页

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```
For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
# 组件应用
    <page
        :total="total" 
        :limit="10" 
        :defultPage="5"
        :defultJump="1"
        @change="pageChange"></page>
    /*
    *引入组件
    *limit，等可像total自定义变量
    */

    import Page from '../public/page.vue'
    export default {
        data(){
            return {
                 total:100
            }
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

# page
公共组件目录 page/src/components/public/

测试目录 page/src/components/myvue/

样式是自己随意加的可以自行修改 有什么不足请多指教
# page
