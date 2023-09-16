<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Report</h1>
                <span>Bet History</span>
            </div>
            <div class="content-header-right itemc">
                <div class="bf10 itemc">
                    <i class="fa fa-dashboard"></i>
                    <!-- <img src="~@/assets/img/bf10.png" alt=""> -->
                    <span>Home</span>
                </div>
                <div class="bf11 itemc">
                    <img src="~@/assets/img/bf11.png" alt="">
                    <span>Bet History</span>
                </div>
            </div>
        </div>
        <div class="layout-table-content">

            <Panel title="Bet History" :collapsible="false">
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
                            Status:
                            <ComboBox inputId="c1" v-model="status" :data="statusdata" class="statusComboBox"></ComboBox>
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
                    <DataGrid :data="list" fixColumnSize="name" selectionMode="multiple" 
                        @selectionChange="selection = $event">
                        <GridColumn align="center" cellCss="datagrid-td-rownumber" width="30" class="GridColumnIndex">
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 22px;">{{ scope.rowIndex + 1 }}
                                </div>
                            </template>
                        </GridColumn>
                        <GridColumn field="ID" title="ID" >
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.RefID }}</div>
                            </template>

                        </GridColumn>
                        <GridColumn field="Agent" title="Agent" >
                            <template slot="body" slot-scope="scope">
                                <div style="max-width: 90px;">{{
                                    scope.row.Username }}</div>
                            </template>

                        </GridColumn>
                        <GridColumn field="Username" title="Username" >
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Username }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Currency" title="Currency">
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Currency }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Game" title="Game" >
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Game }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="GameID" title="Game ID" >
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.GameID }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="BetCode" title="Bet Code">
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.BetCode }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Bet" title="Bet" >
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Bet }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Payout" title="Payout">
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Payout }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Win" title="Win">
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Payout }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="PlacedOn" title="Placed On (UTC)">
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Payout }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Datetime" title="Datetime (UTC)">
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Datetime }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Status" title="Status">
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Status }}</div>
                            </template>
                        </GridColumn>
                        <GridColumn field="Result" title="Result">
                            <template slot="body" slot-scope="scope">
                                <div >{{
                                    scope.row.Result }}</div>
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
            total: 20,
            pageNumber: 1,
            pageSize: 20,
            pageList: [10, 20, 50, 100, 500],
            layout1: [
                'list', 'sep', 'first', 'prev', 'sep', 'manual', 'sep', 'next', 'last', 'sep', 'refresh', 'info',
            ],
            selection: null,
            startdate:"",
         
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
  