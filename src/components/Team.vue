<template>
  <div>
    <h1 class="pull-left">Team</h1>
    <div class="table">
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
    name: 'team',
    data() {
      return {
        fields: [{
          name: 'id',
          title: '번호'
        },
          ,{
            name: 'team',
            title: '팀명'
          },
          ,{
            name: 'department',
            title: '그룹명'
          },
          ,{
            name: 'totalNumber',
            title: '총원'
          },

          ,{
            name: 'assignedNumber',
            title: '가득'
          },
          {
            name: 'unassignedWorkingNumber',
            title: '가동'
          },
          {
            name: 'unassignedNotWorkingNumber',
            title: '비가동'
          }],
        callURL: CONFIG.API_URL + "/teams"
      }
    },
    components: {
      Vuetable
    }
  }
</script>

<style scoped>
</style>
