<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Member</h1>
                <span>List</span>
            </div>
            <div class="content-header-right itemc content-header">
                <ol class="breadcrumb">
                    <li>
                        <a href="#"><i class="fa fa-dashboard"></i>&nbsp;Home</a>
                    </li>
                    <li class="active">
                        Member
                    </li>
                </ol>

            </div>
        </div>
        <div class="layout-table-content">

            <Panel title="Member" :collapsible="false">
                <div class="datagrid-toolbar justifybetween">
                    <div class="flexwrap">
                        <div>
                            Agent:
                            <ComboBox inputId="c1" v-model="agent" :data="agentdata" class="statusComboBox"></ComboBox>
                        </div>
                        &nbsp;
                        <div class="searchBoxitem">
                            Username:
                            <SearchBox style="width:164px" placeholder="Username" v-model="value"
                                @search="onSearch($event)">
                            </SearchBox>
                        </div>
                        &nbsp;
                        <div class="searchBoxitem">
                            External ID (Provider):
                            <SearchBox style="width:164px" placeholder="External ID (Provider)" v-model="value"
                                @search="onSearch($event)">
                            </SearchBox>
                        </div>
                        &nbsp;
                        <div>
                            Status:
                            <ComboBox inputId="c1" v-model="status" :data="statusdata" class="statusComboBox"></ComboBox>
                        </div>
                        &nbsp;
                        <LinkButton iconCls="icon-search">Search</LinkButton>
                    </div>
                </div>
                <div class="DataGridBox">


                    <DataGrid :data="list" :fitColumns="false" fixColumnSize="Username"  selectionMode="multiple" style="width:100%;">
                        <GridColumnGroup :frozen="true" width="30">
                            <GridHeaderRow>
                                <GridColumn align="center" :frozen="true" cellCss="datagrid-td-rownumber" width="30"
                                    class="GridColumnIndex">
                                    <template slot="body" slot-scope="scope">
                                        <div style="max-width: 22px;">{{ scope.rowIndex + 1 }}
                                        </div>
                                    </template>
                                </GridColumn>
                            </GridHeaderRow>
                        </GridColumnGroup>
                     
                                <GridColumn field="Agent" title="Agent" width="100">
                                    <template slot="body" slot-scope="scope">
                                        <div style="max-width: 90px;">{{
                                            scope.row.Agent }}</div>
                                    </template>

                                </GridColumn>
                                <GridColumn field="Username" title="Username" width="200">
                                    <template slot="body" slot-scope="scope">
                                        <div style="max-width: 190px;">{{
                                            scope.row.Username }}</div>
                                    </template>

                                </GridColumn>
                                <GridColumn field="Provider" title="Provider" width="120">
                                    <template slot="body" slot-scope="scope">
                                        <div style="max-width: 110px;">{{
                                            scope.row.Provider }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Currency" title="Currency" width="60">
                                    <template slot="body" slot-scope="scope">
                                        <div style="max-width: 50px;">{{
                                            scope.row.Currency }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Balance" title="Balance" width="100">
                                    <template slot="body" slot-scope="scope">
                                        <div style="max-width: 90px;">{{
                                            scope.row.Balance }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Status" title="Status" width="80">
                                    <template slot="body" slot-scope="scope">
                                        <div style="max-width: 70px;">{{
                                            scope.row.Status }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Registed At" title="RegistedAt" width="120">
                                    <template slot="body" slot-scope="scope">
                                        <div style="max-width: 110px;">{{
                                            scope.row.RegistedAt }}</div>
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
            agent: "ALL",
            agentdata: [
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
            list: [
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
                {
                    Agent: "263041STA",
                    Username: "erq123456@263041STA",
                    Provider: "5312501",
                    Currency: "MYR",
                    Status: "Active",
                    RegistedAt: "2023-08-06 09:48:03",
                    Balance: "Not Applicable",
                },
            ],
            total: 164,
            pageNumber: 1,
            pageSize: 20,
            pageList: [10, 20, 50, 100, 500],
            layout1: [
                'list', 'sep', 'first', 'prev', 'sep', 'manual', 'sep', 'next', 'last', 'sep', 'refresh', 'info',
            ],
            selection: null,
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
.DataGridBox{
    overflow: auto;
}
</style>
  