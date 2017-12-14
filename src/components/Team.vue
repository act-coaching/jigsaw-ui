<template>
    <div>
        <h1 class="pull-left">Team</h1>
        <div class="table">
            <vuetable ref="vuetable"
                      :api-url="callURL"
                      :fields="fields"
                      title="Team"
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
              title: 'ID'
          }
              ,{
                  name: 'team',
                  title: '이름'
              }
              ,{
                  name: 'department',
                  title: '부서'
              }
              ,{
                  name: 'totalCount',
                  title: '총 인원수'
              }

              ,{
                  name: 'earning',
                  title: '가득'
              },
              {
                  name: 'working',
                  title: '가동'
              },
              {
                  name: 'staying',
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
