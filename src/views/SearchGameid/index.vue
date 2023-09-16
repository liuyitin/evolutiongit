<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Report</h1>
                <span>Search Game ID</span>
            </div>
            <div class="content-header-right itemc">
                <div class="bf10 itemc">
                    <i class="fa fa-dashboard"></i>
                    <span>Home</span>
                </div>
                <div class="bf11 itemc">
                    <img src="~@/assets/img/bf11.png" alt="">
                    <span>Search Game ID</span>
                </div>
            </div>
        </div>
        <div class="layout-table-content">
            <div class="addSubBox">
                <div class="addSubBox-header">
                    Search Game ID
                </div>
                <div class="formBox">
                    <div class="form-group flexwrap">
                        <div class="inputName flexwrap">
                            <p>Game ID</p>
                            <span>(Within 5 days time data records):</span>
                        </div>
                        &nbsp;
                        <TextBox v-model="searchvalue" class="inputTextBox"></TextBox>
                        &nbsp;
                        <LinkButton class="btn" @click="submitForm">Search</LinkButton>
                    </div>
                    <div class="content" >

                    </div>

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
                searchvalue: "",
            }
        }
    },
    methods: {
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
  
<style scoped>
.formBox {
    width: 100%;
    border-top: 1px solid #f4f4f4;
    padding: 25px;
}

.form-group {
    align-items: flex-start;
}

.inputName {
    font-size: 14px;
    line-height: 26px;
}

.inputName span {
    color: #4d5769;
    font-size: 10px;
}

.inputTextBox {
    border-radius: 5px;
    width: 250px;
    height: 28px;
    margin: 0;
}

.btn {
    background: #3c8dbc;
    border-color: #367fa9;
    border-radius: 3px;
    padding: 4px 8px;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    height: 31px;
}

.btn .l-btn-text {
    font-size: 14px;
    line-height: 21px;
}
.content{
    min-height: 250px;
    padding: 15px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
</style>
  