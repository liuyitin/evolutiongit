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
                </ol>

            </div>
        </div>
        <div class="layout-table-content">

            <Panel title="Sub Accounrs" :collapsible="false">
                <div class="datagrid-toolbar justifybetween">
                    <div class="flexwrap">
                        Status:
                        <ComboBox inputId="c1" v-model="status" :data="statusdata" class="statusComboBox"></ComboBox>&nbsp;
                        <LinkButton iconCls="icon-search">Search</LinkButton>
                    </div>
                    <LinkButton iconCls="icon-add" @click="addsub">Add</LinkButton>
                </div>
                <div class="DataGridBox">
                    <DataGrid :data="list" selectionMode="multiple" :fitColumns="false" 
                        style="width:100%;max-width: 570px;height: 100%;" @selectionChange="selection = $event">
                        <GridColumnGroup align="left" :frozen="true" width="30">
                            <GridHeaderRow>
                                <GridColumn align="center" cellCss="datagrid-td-rownumber" :frozen="true" width="30"
                                    class="GridColumnIndex">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{ scope.rowIndex + 1 }}
                                        </div>
                                    </template>
                                </GridColumn>
                            </GridHeaderRow>
                        </GridColumnGroup>
                        <GridColumnGroup>
                            <GridHeaderRow>
                                <GridColumn field="Username" title="Username" width="100">
                                    <template slot="body" slot-scope="scope">
                                        <div><a href="#">{{
                                            scope.row.Username }}</a></div>
                                    </template>
                                </GridColumn>

                                <GridColumn field="Name" title="Name" width="160">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{
                                            scope.row.Name }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Status" title="Status" width="80">
                                    <template slot="body" slot-scope="scope">
                                        <div >{{
                                            scope.row.Status }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Remark" title="Remark" width="200">
                                    <template slot="body" slot-scope="scope">
                                        <div >{{
                                            scope.row.Remark }}</div>
                                    </template>
                                </GridColumn>
                            </GridHeaderRow>
                        </GridColumnGroup>
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
                    Username: "erq123456@263041STA",
                    Name: "weq12312",
                    Status: "Active",
                    Remark: "wef123",
                    id: 1,
                    isactive: !1,
                },
                {
                    Username: "erq123456@263041STA",
                    Name: "weq12312",
                    Status: "Active",
                    Remark: "wef123",
                    id: 2,
                    isactive: !1,
                }
            ],
            total: 2,
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
.layout-main {
    height: 100%;
}
</style>
  