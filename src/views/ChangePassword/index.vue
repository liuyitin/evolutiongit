<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Home</h1>
                <span>Change Password</span>
            </div>
            <div class="content-header-right itemc content-header">

                <ol class="breadcrumb">
                    <li>
                        <a href="#"><i class="fa fa-dashboard"></i>&nbsp;Home</a>
                    </li>
                    <li class="active">
                        Change Password
                    </li>
                </ol>
            </div>
        </div>
        <div class="layout-table-content">
            <div class="row">
                <div class=" col-md-6">
                    <div class="addSubBox">
                        <div class="addSubBox-header">
                            Change Password
                        </div>
                        <Form :model="data">
                            <div class="formBox">

                                <div class="form-group">
                                    <Label class="col-sm-3" for="email" align="top">Old Password</Label>
                                    <div class="col-sm-9">
                                        <PasswordBox v-model="data.oldpassword" placeholder="Old Password" :showEye="false">
                                        </PasswordBox>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <Label class="col-sm-3" for="email" align="top">New Password</Label>
                                    <div class="col-sm-9">
                                        <PasswordBox v-model="data.newpassword" placeholder="New Password" :showEye="false">
                                        </PasswordBox>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <Label class="col-sm-3" for="email" align="top">Confirm Password</Label>
                                    <div class="col-sm-9">
                                        <PasswordBox v-model="data.confirmpassword" placeholder="Confirm Password"
                                            :showEye="false">
                                        </PasswordBox>
                                    </div>
                                </div>


                            </div>


                        </Form>
                        <div class="form-footer">
                    <LinkButton class="btn Cancel" @click="toback">Cancel</LinkButton>
                    <LinkButton class="btn submitform" @click="submitForm">Submit</LinkButton>
                </div>
                    </div>
                </div>

               
            </div>

        </div>
    </div>
</template>
  
  
<script>

import "@/css/home.css"
import "@/css/addSub.css"
// import { mapGetters } from "vuex";

export default {
    data() {
        return {
            data: {
                oldpassword: "",
                newpassword: "",
                confirmpassword: "",
            }
        }
    },
    methods: {
        toback() {
            this.$router.back()
        },
        submitForm() {

        },
    },
    computed: {
        // ...mapGetters(["getusername"]),
        loginusername() {
            return localStorage.getItem("username")
        },

    },

}
</script>
  
<style scoped></style>
  