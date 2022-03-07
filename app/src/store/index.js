import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import home from './home'
import search from './search'
import detail from './detail/detail'
// 对外暴露store类的一个实例
export default new Vuex.Store({
    // 实现vuex仓库模块式开发存储数据
    modules:{
        home,
        search,
        detail
    }
})