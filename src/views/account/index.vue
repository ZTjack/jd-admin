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
              :options="account_list"
              value="Please select"
              v-model="account.name">
            </b-form-select>
          </b-form-fieldset>
          <b-form-fieldset
            label="Step"
            :label-cols="3"
            :horizontal="true">
            <b-form-input-static type="text" :value="account.step_index"></b-form-input-static>
          </b-form-fieldset>
          <b-form-fieldset
            label="Comment"
            :label-cols="3"
            :disabled="true"
            :horizontal="true">
            <b-form-input type="text" v-model="account.desc"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="Pass Time"
            :label-cols="3"
            :disabled="true"
            :horizontal="true">
            <b-form-input type="text" v-model="account.pass_time"></b-form-input>
          </b-form-fieldset>
          <div slot="footer">
            <b-button size="sm" variant="primary" @click="updateRecord"><i class="fa fa-dot-circle-o"></i> Submit
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
  import '../../../node_modules/toastr/toastr.scss'

  export default {
    name: 'account',
    data () {
      return {
        name: undefined,
        sex: 'male',
        tel: undefined,
        id_card: undefined,
        account_list: ['b', 'c'],
        account: {
          id: undefined,
          name: '',
          step_text: '',
          step_index: undefined,
          pass_time: undefined,
          desc: undefined
        }
      }
    },
    methods: {
      get_account_list: function () {
        axios.post('/api/account/all').then((res) => {
          this.account_list = res.data.account_list
        })
      },
      updateRecord: function () {

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
              this.reset()
            } else {
              toastr.error(`添加${this.name}失败`)
            }
          })
        }
      },
      resetRecordInfo: function () {

      },
      resetAccountInfo: function () {
        this.name = undefined
        this.sex = 'male'
        this.tel = undefined
        this.id_card = undefined
      }
    },
    mounted () {

    }
  }
</script>


<style lang="scss">

</style>

