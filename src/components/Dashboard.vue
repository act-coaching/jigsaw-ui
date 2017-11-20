<template>
  <div class="table">
    <vuetable ref="vuetable"
              api-url="https://vuetable.ratiw.net/api/users"
              :fields="fields"
              pagination-data=""
    ></vuetable>
  </div>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default {
    name: 'Dashboard',
    data() {
      return {
        fields: [
          'name', 'email', 'birthdate',
          {
            name: 'address.line1',
            title: 'Address 1'
          },
          {
            name: 'address.line2',
            title: 'Address 2'
          },
          {
            name: 'address.zipcode',
            title: 'Zipcode'
          }
        ]
      }

    },
    components: {
      Vuetable
    }
  }
</script>

<style scoped>
</style>
