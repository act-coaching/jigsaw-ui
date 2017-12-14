<template>
  <div>
    <h1 class="pull-left">Project</h1>
    <div class="table">
      <vuetable ref="vuetable"
                :api-url="callURL"
                :fields="fields"
                title="PROJECT"
      ></vuetable>
    </div>
  </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable'
    import * as CONFIG from '../config'

    export default {
        name: 'project',
        data() {
            return {
                fields: [{
                    name: 'id',
                    title: 'ID'
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
                        name: 'totalCount',
                        title: '총인원'
                    },
                    {
                        name: 'pm',
                        title: 'PM'
                    },
                    {
                        name: 'dev',
                        title: '개발'
                    },
                    {
                        name: 'cx',
                        title: 'CX'
                    }],
                callURL: CONFIG.API_URL + "/project"
            }
        },
        components: {
            Vuetable
        }
    }
</script>

<style scoped>
</style>
