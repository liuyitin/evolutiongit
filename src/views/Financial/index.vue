<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Report</h1>
                <span>Financial Report</span>
            </div>
            <div class="content-header-right itemc content-header">
                <ol class="breadcrumb">
                    <li>
                        <a href="#"><i class="fa fa-dashboard"></i>&nbsp;Home</a>
                    </li>
                    <li class="active">
                        Financial Report
                    </li>
                </ol>
                <!-- <div class="bf10 itemc">
                    <i class="fa fa-dashboard"></i>
                    <span>Home</span>
                </div>
                <div class="bf11 itemc">
                    <img src="~@/assets/img/bf11.png" alt="">
                    <span>Financial Report</span>
                </div> -->
            </div>
        </div>
        <div class="layout-table-content">
            <div class="datagrid-toolbar justifybetween">
                <div class="flexwrap">


                    <div>
                        Date/Time(UTC):
                        <DateBox class="DateTimeBoxwidth" inputId="d2" v-model="startdate" format="yyyy-MM-dd"></DateBox>
                        ~
                        <DateBox class="DateTimeBoxwidth" inputId="d2" v-model="startdate" format="yyyy-MM-dd"></DateBox>
                    </div>
                    &nbsp;
                    <div>
                        Agent:
                        <ComboBox inputId="c1" v-model="agent" :data="agentdata" class="statusComboBox"></ComboBox>
                    </div>
                    &nbsp;
                    <LinkButton class="btn searchbtn">Search</LinkButton>
                    &nbsp;
                    <LinkButton class="btn xlsbtn">Export (xls)</LinkButton>
                    &nbsp;
                    <LinkButton class="btn pdfbtn">Export (pdf)</LinkButton>

                </div>
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
            status: "All",
            agent: "SelectAgent",
            company: "All",
            companydata: [
                {
                    value: "All",
                    text: "All",
                },
                {
                    value: "263@com",
                    text: "263@com",
                },
            ],
            agentdata: [
                {
                    value: "SelectAgent",
                    text: "Select Agent",
                },
                {
                    value: "263041STA",
                    text: "263041STA",
                },
            ],
            statusdata: [
                {
                    value: "All",
                    text: "All",
                },
                {
                    value: "Active",
                    text: "Active",
                },
                {
                    value: "Suspended",
                    text: "Suspended",
                },
            ],
            list: [],
            total: 20,
            pageNumber: 1,
            pageSize: 20,
            pageList: [10, 20, 50, 100, 500],
            layout1: [
                'list', 'sep', 'first', 'prev', 'sep', 'manual', 'sep', 'next', 'last', 'sep', 'refresh', 'info',
            ],
            selection: null,
            startdate: "",

        }
    },
    methods: {
    },
    computed: {
    },
}
</script>
  
<style scoped>
.datagrid-toolbar {
    padding: 0;
    background: transparent;
    border: 0;
}

.statusComboBox {
    width: 120px;
}

.DateTimeBoxwidth {
    width: 164px;
}

.btn {
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    padding: 4px 5px;
    font-size: 16px;
    line-height: 21px;
    border-radius: 3px;
    color: #fff;
    height: 31px;
}

.btn .l-btn-text {
    font-size: 16px;
    color: #fff;

}

.searchbtn {
    background: #3c8dbc;
    border-color: #367fa9;

}

.searchbtn:hover {
    background: #367fa9;
}
.xlsbtn{
    background: #00a65a;
    border-color: #008d4c;
}
.xlsbtn:hover {
    background: #008d4c;
}
.pdfbtn{
    background: #dd4b39;
    border-color: #d73925;
}
.pdfbtn:hover {
    background: #d73925;
}
</style>
  