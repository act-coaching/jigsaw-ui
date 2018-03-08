<template>
 <div>
     <h1 class="pull-left">Project</h1>
     <div class="table">
       <vuetable ref="vuetable"
                 :api-url="callURL"
                 :fields="fields"
                 title="project"
       ></vuetable>
     </div>
   </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'
  import * as CONFIG from '../config'

  export default {
    name: 'Project',
    data() {
      return {
        fields: [{
          name: 'id',
          title: 'ID'
        },
          ,{
            name: 'projectName',
            title: '프로젝트명'
          },
          ,{
            name: 'totalCnt',
            title: '총인원'
          },
          ,{
            name: 'pmCnt',
            title: 'PM'
          },

          ,{
            name: 'devCnt',
            title: 'DEV'
          },
          {
            name: 'cxCnt',
            title: 'CX'
          }],
        callURL: CONFIG.API_URL + "/projects"
      }
    },
    components: {
      Vuetable
    }
  }
</script>

<style scoped>
</style>
