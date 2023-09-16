<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Report</h1>
                <span>Transfer History</span>
            </div>
            <div class="content-header-right itemc">
                <div class="bf10 itemc">
                    <i class="fa fa-dashboard"></i>
                    <!-- <img src="~@/assets/img/bf10.png" alt=""> -->
                    <span>Home</span>
                </div>
                <div class="bf11 itemc">
                    <img src="~@/assets/img/bf11.png" alt="">
                    <span>Transfer History</span>
                </div>
            </div>
        </div>
        <div class="layout-table-content">

            <Panel title="Transfer History" :collapsible="false">
                <div class="datagrid-toolbar justifybetween">
                    <div class="flexwrap">
                        <div>
                            Company:
                            <ComboBox inputId="c1" v-model="company" :data="companydata" class="statusComboBox"></ComboBox>
                        </div>
                        &nbsp;
                        <div>
                            Agent:
                            <ComboBox inputId="c1" v-model="agent" :data="agentdata" class="statusComboBox"></ComboBox>
                        </div>
                        &nbsp;
                        <div class="searchBoxitem">
                            Member:
                            <SearchBox style="width:164px" placeholder="Member" v-model="value"
                                @search="onSearch($event)">
                            </SearchBox>
                        </div>
                        &nbsp;
                     
                        <div>
                            Date/Time(UTC):
                            <DateTimeBox class="DateTimeBoxwidth" inputId="d2" v-model="startdate" format="yyyy-MM-dd HH:mm:ss"></DateTimeBox>
                            ~
                            <DateTimeBox class="DateTimeBoxwidth" inputId="d2" v-model="startdate" format="yyyy-MM-dd HH:mm:ss"></DateTimeBox>
                        </div>
                        &nbsp;
                        <LinkButton iconCls="icon-search">Search</LinkButton>
                    </div>
                    <LinkButton iconCls="icon-add" @click="addsub">Add</LinkButton>
                </div>
                <div>
                    <DataGrid :data="list" fixColumnSize="name" selectionMode="multiple" :footerData="footerData" :showFooter="true"
                        @selectionChange="selection = $event">
                        <GridColumn align="center" cellCss="datagrid-td-rownumber" width="30" class="GridColumnIndex">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 22px;">{{ scope.rowIndex + 1 }}
                                </div>
                            </template>
                        </GridColumn>
                        <GridColumn field="RefID" title="RefID" width="150">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 140px;">{{
                                    scope.row.RefID }}</div>
                            </template>

                        </GridColumn>
                        <GridColumn field="Agent" title="Agent" width="100">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 90px;">{{
                                    scope.row.Username }}</div>
                            </template>

                        </GridColumn>
                        <GridColumn field="Username" title="Username" width="120">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 110px;">{{
                                    scope.row.Username }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Currency" title="Currency" width="60">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 50px;">{{
                                    scope.row.Currency }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Credit" title="Credit" width="120" align="right">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 110px;">{{
                                    scope.row.Credit }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Debit" title="Debit" width="120" align="right">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 110px;">{{
                                    scope.row.Debit }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Balance" title="Balance" width="120" align="right">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 110px;">{{
                                    scope.row.Balance }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Datetime" title="Datetime" width="150">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 140px;">{{
                                    scope.row.Datetime }}</div>
                            </template>
                        </GridColumn>

                    </DataGrid>
                </div>

                <Pagination class="table-pagination" :total="total" :pageSize="pageSize" :pageNumber="pageNumber"
                    :pageList="pageList" beforePageText="Page" afterPageText="of {pages}" :showPageList="true"
                    :layout="layout1" @pageChange="onPageChange($event)"></Pagination>
            </Panel>

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
            agent:"All",
            company:"All",
            companydata:[
            {
                    value: "All",
                    text: "All",
                },
                {
                    value: "263@com",
                    text: "263@com",
                },
            ],
            agentdata:[
            {
                    value: "All",
                    text: "All",
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
            total: 0,
            pageNumber: 1,
            pageSize: 20,
            pageList: [10, 20, 50, 100, 500],
            layout1: [
                'list', 'sep', 'first', 'prev', 'sep', 'manual', 'sep', 'next', 'last', 'sep', 'refresh', 'info',
            ],
            selection: null,
            startdate:"",
            footerData:[
            { Username: "Sub-Total", Credit:"0.00",Debit: "0.00"},
      { Username: "Total", Credit: "0.00", Debit: "0.00" }
            ]
        }
    },
    methods: {
        addsub() {
            this.$router.push({ name: "add" })
        },
    },
    computed: {
        selectionInfo() {
            if (!this.selection) {
                return null;
            }
            return this.selection.map(function (row) { return row.Username }).join(",");
        }
    },
}
</script>
  
<style scoped>
.statusComboBox {
    width: 88px;
}
.DateTimeBoxwidth{
    width: 164px;
}
</style>
  