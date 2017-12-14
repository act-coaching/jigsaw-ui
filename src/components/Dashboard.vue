<template>
  <div>
    <h1 class="pull-left">Dashboard</h1>
    <div class="table">
      <input type="text" v-model="searchValue" placeholder="Search" @keyup.enter="search">
      <button v-on:click="search">search</button>
      <vuetable ref="vuetable"
                :api-url="callURL"
                :fields="fields"
                title="asdfa"
      ></vuetable>
    </div>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import * as CONFIG from '../config'

  export default {
    name: 'Dashboard',
    methods : {
      search : function(event){
          if(this.searchValue.length == 0) {
              this.callURL = CONFIG.API_URL + "/persons";
          } else{
              this.callURL = CONFIG.API_URL + "/persons/name/" + this.searchValue;
          }
      }
    },
    data() {
      return {
        searchValue : "",
        fields: [{
          name: 'id',
          title: 'ID'
        }
          ,{
            name: 'name',
            title: '이름'
          }
          ,{
            name: 'nickname',
            title: '닉네임'
          }
          ,{
            name: 'email',
            title: '이메일'
          }

          ,{
            name: 'employeeNumber',
            title: '사번'
          },
          {
            name: 'cellPhoneNumber',
            title: '휴대전화번호'
          },
          {
            name: 'team',
            title: '팀명'
          },
          {
            name: 'department',
            title: '부서명'
          },
          {
            name: 'projectName',
            title: '프로젝트명'
          },
          {
            name: 'projectCode',
            title: '프로젝트코드'
          },
          {
            name: 'rank',
            title: '직급'
          }, {
            name: 'duty',
            title: '직무'
          },{
            name: 'assignType',
            title: '투입구분'
          }],
        callURL: CONFIG.API_URL + "/dashboard"
      }
    },
    components: {
      Vuetable
    }
  }
</script>

<style scoped>
</style>
