<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Sub Account</h1>
                <span>List</span>
            </div>
            <div class="content-header-right itemc content-header">

                <ol class="breadcrumb">
                    <li>
                        <a href="#"><i class="fa fa-dashboard"></i>&nbsp;Home</a>
                    </li>
                    <li class="active">
                        Sub Account
                    </li>
                    <li class="active">
                        Add
                    </li>
                </ol>
                <!-- <div class="bf10 itemc">
                    <i class="fa fa-dashboard"></i>
                    <span>Home</span>
                </div>
                <div class="bf11 itemc">
                    <img src="~@/assets/img/bf11.png" alt="">
                    <span>Sub Account</span>
                    <img src="~@/assets/img/bf11.png" alt="">
                    <span>Add</span>
                </div> -->
            </div>
        </div>
        <div class="layout-table-content">
            <div class="addSubBox">
                <div class="addSubBox-header">
                    Add Sub Account
                </div>
                <Form :model="data">
                    <div class="formBox">
                        <div class="row">
                            <div class=" col-md-6">
                                <div class="form-group username">
                                    <Label for="name" align="top">Username</Label>
                                    <TextBox class="col-xs-5" inputId="name" v-model="data.username" placeholder="Username">
                                    </TextBox>
                                    <div class="loginusername">@{{ loginusername }}</div>
                                </div>
                                <div class="form-group">
                                    <Label class="col-sm-2" for="email" align="top">Password</Label>
                                    <div class="col-sm-10">
                                        <PasswordBox v-model="data.password" placeholder="Password" :showEye="false">
                                        </PasswordBox>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <Label class="col-sm-2" for="hero" align="top">Name</Label>
                                    <div class="col-sm-10">
                                        <TextBox inputId="email" v-model="data.name" placeholder="Name">
                                        </TextBox>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <Label class="col-sm-2" for="hero" align="top">Remark</Label>
                                    <div class="col-sm-10">
                                        <TextBox inputId="email" v-model="data.remark" placeholder="Remark">
                                        </TextBox>
                                    </div>
                                </div>

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
</template>
  
  
<script>

import "@/css/home.css"
import "@/css/addSub.css"

export default {
    data() {
        return {
            data: {
                username: "",
                password: "",
                name: "",
                remark: "",
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
  