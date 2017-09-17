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
            <b-form-input type="text"></b-form-input>
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
              value="male"></b-form-radio>
          </b-form-fieldset>
          <b-form-fieldset
            label="Tel"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="number"></b-form-input>
          </b-form-fieldset>
          <b-form-fieldset
            label="ID Card"
            :label-cols="3"
            :horizontal="true">
            <b-form-input type="number" ></b-form-input>
          </b-form-fieldset>
          <div slot="footer">
            <b-button type="submit" size="sm" variant="primary"><i class="fa fa-dot-circle-o"></i> Submit</b-button>
            <b-button type="reset" size="sm" variant="danger"><i class="fa fa-ban"></i> Reset</b-button>
          </div>
        </b-card>
      </div>
      <div class="col-md-6">
        <b-card>
          <div slot="header">
            <strong>Account List</strong>
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
          <ul class="pagination">
            <li class="page-item"><a class="page-link" href="#">Prev</a></li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">4</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
          </ul>

        </b-card>
      </div><!--/.col-->
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

</script>


<style lang="scss">

</style>

