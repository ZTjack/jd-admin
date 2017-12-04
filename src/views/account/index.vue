<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-6">
        <b-card>
          <div slot="header">
            <strong>Add Account</strong>
          </div>
          <b-form-fieldset
            label="Name"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="text" v-model="name"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Sex"
            :label-cols="3"
            :horizontal="true">
            <b-form-radio
              :options="[
                {text: 'Male',value: 'male'},
                {text: 'Female',value: 'female'}
              ]"
              v-model="sex"></b-form-radio>
          </b-form-fieldset>
          <b-form-fieldset
            label="Tel"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="number" v-model="tel"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="ID Card"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="number" v-model="id_card"></b-form-input>
          </b-form-fieldset>
          <div slot="footer">
            <b-button size="sm" variant="primary" @click="addAccount"><i class="fa fa-dot-circle-o"></i> Submit
            </b-button>
            <b-button size="sm" variant="danger" @click="resetAccountInfo"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </div>
      <div class="col-md-6">
        <b-card>
          <div slot="header">
            <strong>Update Account Record</strong>
          </div>
          <b-form-fieldset
            label="Account"
            :label-cols="3"
            :horizontal="true">
            <b-form-select
              :plain="true"
              :options="name_list"
              value="Please select"
              v-model="account_name">
            </b-form-select>
          </b-form-fieldset>
          <b-form-fieldset
            label="Step"
            :label-cols="3"
            :horizontal="true">
            <b-form-input-static type="text" :value="account.step_text"></b-form-input-static>
          </b-form-fieldset>
          <b-form-fieldset
            label="Comment"
            :label-cols="3"
            :disabled="true"
            :horizontal="true">
            <b-form-input type="text" v-model="comment"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Pass Time"
            :label-cols="3"
            :disabled="true"
            :horizontal="true">
            <b-form-input type="text" v-model="pass_time" placeholder="YYYY-MM-DD"></b-form-input>
          </b-form-fieldset>
          <div slot="footer">
            <b-button size="sm" variant="primary" @click="addRecord"><i class="fa fa-dot-circle-o"></i> Submit
            </b-button>
            <b-button size="sm" variant="danger" @click="resetRecordInfo"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </div>

    </div><!--/.row-->

    <div class="row">
      <div class="col-md-12">
        <b-card>
          <div slot="header">
            <strong>Records</strong>
          </div>
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Username</th>
              <th>Date registered</th>
              <th>Role</th>
              <th>Status</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Yiorgos Avraamu</td>
              <td>2012/01/01</td>
              <td>Member</td>
              <td>
                <span class="badge badge-success">Active</span>
              </td>
            </tr>
            <tr>
              <td>Avram Tarasios</td>
              <td>2012/02/01</td>
              <td>Staff</td>
              <td>
                <span class="badge badge-danger">Banned</span>
              </td>
            </tr>
            <tr>
              <td>Quintin Ed</td>
              <td>2012/02/01</td>
              <td>Admin</td>
              <td>
                <span class="badge badge-secondary">Inactive</span>
              </td>
            </tr>
            <tr>
              <td>Enéas Kwadwo</td>
              <td>2012/03/01</td>
              <td>Member</td>
              <td>
                <span class="badge badge-warning">Pending</span>
              </td>
            </tr>
            <tr>
              <td>Agapetus Tadeáš</td>
              <td>2012/01/21</td>
              <td>Staff</td>
              <td>
                <span class="badge badge-success">Active</span>
              </td>
            </tr>
            </tbody>
          </table>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import toastr from 'toastr'
  import _ from 'lodash'
  import '../../../node_modules/toastr/toastr.scss'

  export default {
    name: 'account',
    data () {
      return {
        name: undefined,
        sex: 'male',
        tel: undefined,
        id_card: undefined,
        account_list: [],
        name_list: [],
        account_name: undefined,
        pass_time: undefined,
        comment: undefined
      }
    },
    computed: {
      account: function () {
        let index = _.findIndex(this.account_list, {name: this.account_name})
        if (index >= 0) {
          return this.account_list[index]
        } else {
          return {}
        }
      }
    },
    methods: {
      get_account_list: function () {
        axios.post('/api/account/all').then((res) => {
          this.account_list = res.data.account_list
          this.name_list = res.data.account_list.map(function (item) {
            return item.name
          })
        }, function (err) {
          toastr.error(err)
        })
      },
      addAccount: function () {
        if (this.name && this.tel) {
          let param = {
            name: this.name,
            tel: this.tel,
            sex: this.sex,
            id_card: this.id_card
          }
          axios.post('/api/account/add', param).then((res) => {
            if (res.data.done) {
              toastr.success(`添加${this.name}成功`)
              this.resetAccountInfo()
            } else {
              toastr.error(`添加${this.name}失败`)
            }
          })
        }
      },
      addRecord: function () {
        if (this.account.id && this.pass_time) {
          let param = {
            account_id: this.account.id,
            step_index: this.account.step_index,
            comment: this.comment,
            pass_time: this.pass_time
          }
          axios.post('/api/account/addRecord', param).then((res) => {
            if (res.data.done) {
              toastr.success(`添加记录成功`)
              this.resetRecordInfo()
              this.get_account_list()
            } else {
              toastr.error(`添加记录成功`)
            }
          }, (err) => {
            toastr.error(err)
          })
        }
      },
      resetRecordInfo: function () {
        this.comment = undefined
        this.pass_time = undefined
      },
      resetAccountInfo: function () {
        this.name = undefined
        this.sex = 'male'
        this.tel = undefined
        this.id_card = undefined
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

