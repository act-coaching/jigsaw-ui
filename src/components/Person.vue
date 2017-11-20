<template>
  <div class="table">
    <vuetable ref="vuetable"
              :api-url="callURL"
              :fields="fields"
    ></vuetable>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import * as CONFIG from '../config'

  export default {
    name: 'person',
    data() {
      return {
        fields: [{
            name: 'id',
            title: 'ID'
          },
          ,{
            name: 'name',
            title: '이름'
          },
          ,{
            name: 'nickname',
            title: '닉네임'
          },
          ,{
            name: 'email',
            title: '이메일'
          },

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
        callURL: CONFIG.API_URL + "/persons"
      }
    },
    components: {
      Vuetable
    }
  }
</script>

<style scoped>
</style>
