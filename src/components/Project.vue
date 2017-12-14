<template>
  <div>
    <h1 class="pull-left">Project</h1>
    <div class="table">
      <vuetable ref="vuetable"
                :api-url="projectListCallURL"
                :fields="projectFields"
                title="PROJECT"
                @click="onRowClick"
      ></vuetable>
        <br>
        <h2>Result</h2>
        <vuetable ref="vuetable"
                  :api-url="projectSelectedURL"
                  :fields="projectSelectedField"
                  title="PROJECT SELECTED"
        ></vuetable>

    </div>
  </div>
</template>

<script>
    import Vuetable from 'vuetable-2/src/components/Vuetable'
    import * as CONFIG from '../config'

    export default {
        name: 'project',
        methods:{
            onRowClick : function(row){
                alert(1);
            }

        },
        data() {
            return {
                projectFields: [{
                    name: 'id',
                    title: 'ID'
                },

                    {
                        name: 'projectName',
                        title: '프로젝트명'
                    },
                    {
                        name: 'projectCode',
                        title: '프로젝트코드',
                        onclick : 'searchProjectPerson'
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
                projectListCallURL: CONFIG.API_URL + "/project",

                searchProjectCode : "PJT_0542",
                projectSelectedField: [{
                    name: 'id',
                    title: 'ID'
                },

                    {
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
                projectSelectedURL: CONFIG.API_URL + "/dashboard/projectCode/PJT_0542"


            }
        },
        components: {
            Vuetable
        }
    }
</script>

<style scoped>
</style>
