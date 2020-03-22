import Vuex from 'vuex'
import Vue from 'vue'
import {reqCompanyMsg} from 'network/commonReq'



Vue.use(Vuex)

const state = {
    sid: null,
    companyMsg:{}
}

const store = new Vuex.Store({
    state,
    actions:{
        reqCompanyMsg(){
            return reqCompanyMsg()
        }
    },
    mutations:{
      getCompanyMsg(state){
          this.dispatch('reqCompanyMsg').then(res=>{state.companyMsg = res.data});

      },
      setSid(state, sid){
          state.sid = sid
      }
    },

})
export default store