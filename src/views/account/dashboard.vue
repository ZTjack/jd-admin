<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <b-card header="Account Summary">
          <b-table class="table-outline mb-0" hover responsive outline
                   :items="account_list"
                   :fields="account_fields"
                   head-variant="default"
          >
            <template slot="progress" scope="item">
              <div class="clearfix">
                <div class="float-left">
                  <strong>{{item.value}}%</strong>
                </div>
              </div>
              <b-progress class="progress-xs" v-model="item.value"
                          :variant="variant(item.value)"></b-progress>
            </template>
            <template slot="last_update" scope="item">
              <timeAgo :since="item.value"></timeAgo>
            </template>

          </b-table>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'
  import toastr from 'toastr'
  import '../../../node_modules/toastr/toastr.scss'
  import VueTimeago from 'vue-timeago'

  Vue.use(VueTimeago, {
    name: 'timeAgo',
    locale: 'zh-CN',
    locales: {
      'zh-CN': require('vue-timeago/locales/zh-CN.json')
    }
  })

  export default {
    name: 'account_dashboard',
    data () {
      return {
        timeNow: 1505833060007,
        account_list: [],
        account_fields: {
          name: {
            label: 'Name'
          },
          step_text: {
            label: 'Stage'
          },
          progress: {
            label: 'Progress'
          },
          last_update: {
            label: 'Last Update'
          }
        }
      }
    },
    computed: {},
    methods: {
      variant (value) {
        let $variant
        if (value <= 25) {
          $variant = 'info'
        } else if (value > 25 && value <= 50) {
          $variant = 'success'
        } else if (value > 50 && value <= 75) {
          $variant = 'warning'
        } else if (value > 75 && value <= 100) {
          $variant = 'danger'
        }
        return $variant
      },
      get_account_list: function () {
        axios.post('/api/account/all').then((res) => {
          this.account_list = res.data.account_list
        }, function (err) {
          toastr.error(err)
        })
      }
    },
    mounted () {

    },
    created () {
      this.get_account_list()
    }
  }
</script>


<style lang="scss">

</style>

