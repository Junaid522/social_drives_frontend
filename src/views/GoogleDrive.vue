<template>
  <div>
  <Header></Header>
  <h3>GoogleDrive</h3>
  <p>get respective user googledrive data.</p>
    <button v-on:click="sync_data" @click="popToast" class="btn btn-primary" style="float: right; margin: 10px;">Refresh</button>
    <b-table striped hover :items="data"></b-table>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import ApiService from '../apis/api-services'
    export default {
      name: "GoogleDrive",
      components:{
        Header
      },
      comments: {},
      data() {
        return {
          data: null,
          refreshed_data: null,
        }
      },
      methods: {
        google_drive_data: function () {
          ApiService.drive_data('googledrive')
            .then(response => {
              this.data = response;
              console.log(this.data);
            })
            .catch(
              error => {
                console.log(error)
              }
            )
        },
        sync_data: function () {
          ApiService.syncronization('googledrive')
            .then(response => {
              this.refreshed_data = response;
              console.log(this.refreshed_data);
            })
            .catch(
              error => {
                console.log(error)
              }
            )
        },
        popToast() {
          // Use a shorter name for this.$createElement
          const h = this.$createElement;
          // Increment the toast count
          this.count++;
          // Create the message
          const vNodesMsg = h(
            'p',
            { class: ['text-center', 'mb-0'] },
            [
              h('b-spinner', { props: { type: 'grow', small: true } }),
              ' Sync ',
              h('strong', {}, 'has'),
              ` been started. Refresh after a while. `,
              h('b-spinner', { props: { type: 'grow', small: true } })
            ]
          );

          // Pass the VNodes as an array for message and title
          this.$bvToast.toast([vNodesMsg], {

            solid: true,
            variant: 'info'
          })
        }
      },
      beforeMount() {
        this.google_drive_data();
      }
    }
</script>

<style scoped>

</style>
