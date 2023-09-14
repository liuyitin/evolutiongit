<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Sub Account</h1>
                <span>List</span>
            </div>
            <div class="content-header-right itemc">
                <div class="bf10 itemc">
                    <img src="~@/assets/img/bf10.png" alt="">
                    <span>Home</span>
                </div>
                <div class="bf11 itemc">
                    <img src="~@/assets/img/bf11.png" alt="">
                    <span>Sub Account</span>
                </div>
            </div>
        </div>
        <div class="layout-table-content">
            <div class="panel-header">Sub Accounrs</div>
            <div class="datagrid-toolbar">
                Status:
                <!-- <el-select v-model="state" filterable remote reserve-keyword placeholder="请输入关键词"
                    :remote-method="remoteMethod">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select> -->
            </div>
        </div>
    </div>
</template>
  
  
<script>

import "@/css/home.css"
import "@/css/layoutTable.css"

export default {
    data() {
        return {
            state:"",
        }
    },
    methods: {


    },
}
</script>
  
<style scoped></style>
  