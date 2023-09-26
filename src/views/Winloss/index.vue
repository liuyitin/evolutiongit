<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Report</h1>
                <span>Win Loss</span>
            </div>
            <div class="content-header-right itemc  content-header">
                <ol class="breadcrumb">
                    <li>
                        <a href="#"><i class="fa fa-dashboard"></i>&nbsp;Home</a>
                    </li>
                    <li class="active">
                        Win Loss
                    </li>
                </ol>

            </div>
        </div>
        <div class="layout-table-content">

            <Panel title="Win/Loss" :collapsible="false">
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
                            Currency:
                            <SearchBox style="width:164px" placeholder="Member" v-model="value" @search="onSearch($event)">
                            </SearchBox>
                        </div>
                        &nbsp;
                        <div>
                            Group By:
                            <ComboBox inputId="c1" v-model="status" :data="statusdata" class="statusComboBox"></ComboBox>
                        </div>
                        &nbsp;
                        <div>
                            Date/Time(UTC):
                            <DateTimeBox class="DateTimeBoxwidth" inputId="d2" v-model="startdate"
                                format="yyyy-MM-dd HH:mm"></DateTimeBox>
                            ~
                            <DateTimeBox class="DateTimeBoxwidth" inputId="d2" v-model="enddate" format="yyyy-MM-dd HH:mm">
                            </DateTimeBox>
                        </div>
                        &nbsp;
                        <LinkButton iconCls="icon-search">Search</LinkButton>
                    </div>
                </div>
                <div class="DataGridBox">
                    <DataGrid :data="list" selectionMode="multiple" :fitColumns="false" @selectionChange="selection = $event"
                        style="width:100%;max-width: 1030px;height: 100%;">
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
                                <GridColumn field="Name" title="Name" width="250">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{
                                            scope.row.Name }}</div>
                                    </template>

                                </GridColumn>

                                <GridColumn field="Currency" title="Currency" width="60">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{
                                            scope.row.Currency }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Player" title="Player" width="80" align="right">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{
                                            scope.row.Player }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Tickets" title="Tickets" width="80" align="right">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{
                                            scope.row.Tickets }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Bet" title="Bet" width="150" align="right">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{
                                            scope.row.Bet }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Payout" title="Payout" width="150" align="right">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{
                                            scope.row.Payout }}</div>
                                    </template>
                                </GridColumn>

                                <GridColumn field="Win" title="Win" width="150" align="right">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{
                                            scope.row.Payout }}</div>
                                    </template>
                                </GridColumn>
                                <GridColumn field="Margin" title="Margin" width="80" align="right">
                                    <template slot="body" slot-scope="scope">
                                        <div>{{
                                            scope.row.Margin }}</div>
                                    </template>
                                </GridColumn>
                            </GridHeaderRow>
                        </GridColumnGroup>
                    </DataGrid>
                </div>


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
            agent: "All",
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
            startdate: new Date(new Date(new Date().toLocaleDateString()).getTime()),
            enddate: new Date(new Date(new Date().toLocaleDateString()).getTime() + 24 * 60 * 60 * 1000 - 1),

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
    mounted() {
   
    },
}
</script>
  
<style scoped>
.layout-main {
    height: 100%;
}

.statusComboBox {
    width: 88px;
}

.DateTimeBoxwidth {
    width: 164px;
}



</style>
  