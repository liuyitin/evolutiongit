<template>
    <div class="layout-main">
        <div class="content-header">
            <h1>Gaming Summary</h1>

        </div>

        <div class="section-search">
            <div class="row">
                <div class="col-xl-5 pb-5 pt-30">
                    <button type="button" class="btn btn-light btn-sm btn-period ">30m</button>
                    <button type="button" class="btn btn-light btn-sm btn-period ">1h</button>
                    <button type="button" class="btn btn-light btn-sm btn-period ">24h</button>
                    <button type="button" class="btn btn-light btn-sm btn-period ">7 Days</button>
                    <button type="button" class="btn btn-light btn-sm btn-period ">Today</button>
                    <button type="button" class="btn btn-light btn-sm btn-period active ">Yesterday</button>
                    <button type="button" class="btn btn-light btn-sm btn-period ">This Month</button>
                    <button type="button" class="btn btn-light btn-sm btn-period ">Previous Month</button>
                </div>
                <div class="col-xl-7">
                    <div class="row">
                        <div class="col-md-2">
                            <label class="alignText">Company</label>
                            <div>
                                <select name="company" id="company" class="form-control">
                                    <option value="" selected>All</option>
                                    <option value="9">263@com</option>
                                </select>
                            </div>
                        </div>
                        &nbsp;
                        <div class="col-md-2">
                            <label class="alignText">Agent</label>
                            <div>
                                <select name="agent" id="agent" class="form-control">
                                    <option value="" selected>All</option>
                                    <option value="1373">263041STA</option>
                                </select>
                            </div>
                        </div>
                        &nbsp;
                        <div class="col-md-5 mb16">
                            <label class="alignText">Date Range</label>
                            <div class="input-group date">
                                <div class="input-group-append">
                                    <div class="input-group-text">
                                        <i class="fa fa-calendar"></i>
                                    </div>
                                </div>
                                <input type="text" class="form-control" id="daterange">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="section-content">
            <div class="section-filter">
                <button class="accordion" :class="isshow ? 'active' : ''" @click="showpanel">
                    <svg class="svgSize" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                        <g fill="none" fill-rule="evenodd" style="">
                            <path d=" M0 0h24v24H0z">
                            </path>
                            <path
                                d="M15 5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1zm0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1zm0 5.5h6c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1zm-5.15 3.15l1.79-1.79c.2-.2.2-.51 0-.71l-1.79-1.79a.495.495 0 00-.85.35v3.59c0 .44.54.66.85.35zM9 16h-.3c-2.35 0-4.45-1.71-4.68-4.05A4.509 4.509 0 018.5 7H11c.55 0 1-.45 1-1s-.45-1-1-1H8.5c-3.86 0-6.96 3.4-6.44 7.36C2.48 15.64 5.43 18 8.73 18H9"
                                fill="currentColor" fill-rule="nonzero"></path>
                        </g>
                    </svg>Aggregated By</button>
                <div class="panel" :class="isshow ? 'maxh' : ''">
                    <div class="wrap">
                        <div class="card">
                            <h5 class="card-header">Available Aggregators</h5>
                            <div class="card-body">
                                <div class="aggregate">
                                    <div class="filter-list" id="main-filter">
                                        <div class="filter" id="game_type">
                                            Game
                                        </div>
                                        <div class="filter" id="table_name">
                                            Table
                                        </div>
                                        <div class="filter" id="currency">
                                            Currency
                                        </div>
                                        <div class="filter" id="status">
                                            Status
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <h5 class="card-header"><i class="fa fa-bars fa-rotate-90"></i> &nbsp Table Rows</h5>
                            <div class="card-body">
                                <div id="filter1" class="aggregate">
                                    <div class="empty-filter" id="empty-filter1">
                                        Drag and drop any available aggregator here.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <h5 class="card-header"><i class="fa fa-bars"></i> &nbsp Table Columns</h5>
                            <div class="card-body">
                                <div id="filter2" class="aggregate">
                                    <div class="empty-filter" id="empty-filter2">
                                        Drag and drop any available aggregator here.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="pivotGrid"></div>


            </div>
        </div>
    </div>
</template>
 <!-- <script src="~@/assets/js/jquery.js"></script> -->
 <!-- <script src="~@/assets/js/moment.js"></script> -->
<!-- <script src="~@/assets/daterangepicker/daterangepicker.js"></script> -->
  
<script>

import "@/css/home.css"
import "@/css/layoutTable.css"
import '@/assets/daterangepicker/daterangepicker.css';
// import $ from '@/utils/jqueryVender.js';
// import $ from "jquery";
// import "daterangepicker"
// require('daterangepicker')
// import  'moment';
// import  daterangepicker from '@/assets/daterangepicker/daterangepicker.js';


export default {
    data() {
        return {
            isshow:!1,

        }
    },
    methods: {
        showpanel(){
            this.isshow=!this.isshow
        },
    },
    mounted() {
        console.log(1111);
        this.$nextTick(() =>{
            console.log($('#daterange'),"$('#daterange')");
           $('#daterange').daterangepicker({
                // showDropdowns: true,
                timePicker: true, //显示时间
                timePickerIncrement: 30,
                autoUpdateInput:true,
                timePicker24Hour: true, //时间制
                // "opens": "center",
                // showWeekNumbers: true,
                time:{
                    enabled: true
                },
                locale: {
                    format: "YYYY-MM-DD HH:mm", //设置显示格式
                  
                },
            }, function (start, end, label) {
                // let timeRangeChange = [start.format('YYYY-MM-DD HH:mm'), end.format('YYYY-MM-DD HH:mm')];
                // console.log(timeRangeChange);
            })
        })
  

           

            $("#pivotGrid").dxPivotGrid({
                allowSortingBySummary: true,
                allowSorting: false,
                allowFiltering: true,
                allowExpandAll: true,
                showTotalsPrior: 'rows',
                height: 700,
                showBorders: true,
                showColumnGrandTotals: false,
                showRowTotals: false,
                showColumnTotals: false,
                export: {
                    enabled: true
                    },
                onExporting: function(e) { 
                    var workbook = new ExcelJS.Workbook(); 
                    var worksheet = workbook.addWorksheet('Main sheet'); 
                    DevExpress.excelExporter.exportPivotGrid({ 
                        worksheet: worksheet, 
                        component: e.component,
                        customizeCell: function(options) {
                            var excelCell = options;
                            excelCell.font = { name: 'Arial', size: 12 };
                            excelCell.alignment = { horizontal: 'left' };
                        } 
                    }).then(function() {
                        workbook.xlsx.writeBuffer().then(function(buffer) { 
                            saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Summary.xlsx'); 
                        }); 
                    }); 
                    e.cancel = true; 
                },
                fieldChooser: {
                    enabled: false,
                },
                fieldPanel: {
                    showColumnFields: true, 
                    showRowFields: true,
                    showDataFields: false,
                    showDataFields: false,
                    showFilterFields: false,
                    visible: true 
                },
                dataSource: ds

            });
    },
}
</script>
  
<style scoped>
.mb16 {
    margin-bottom: 16px;
}

.pt-30 {
    padding-top: 30px;
}

.content-header {
    padding: 20px;
    height: 76px;
}

.content-header h1 {
    line-height: 28px;
    margin-bottom: 8px;
    height: 28px;
}

.section-search {
    padding: 0 20px;
}

.btn-light {
    padding: 4px 13.6px;
    background: transparent;
    border-radius: 10px;
    border: 1px solid transparent;
    font-size: 14px;
    line-height: 21px;
}

.btn-light:not(:disabled):not(.disabled).active,
.btn-light.active {
    color: #fff;
    background-color: #367fa9;
    border-color: #367fa9;
}

.btn-light:hover {
    color: #fff;
    background-color: #367fa9;
    opacity: 50%;
}

.section-search label {
    font-size: 12px;
    margin-bottom: 8px;
}

.form-control {
    border-radius: 0;
    box-shadow: none;
    border-color: #d2d6de;
    height: 38px;
    padding: 6px 12px;
    font-size: 16px;
    line-height: 24px;
}

.section-content {
    padding: 0 20px 16px;

}

.section-filter {
    background-color: #fff;
    margin: 20px 0;
    padding: 25px 15px;
    border-radius: 10px;
    font-size: 12px;
    max-width: 100%;
    max-height: max-content;
}

.section-filter .filter-list {
    height: 100%;
    background-color: #ddd !important;
    max-height: max-content;
    background: #f1f4f8 !important;
    list-style-type: none;
    margin: 0;
    height: 100%;
    min-height: 200px;
}

.section-filter .filter {
    list-style-type: none;
    background: #fff;
    padding: 6px;
    margin: 10px 5px;
    border: #d9e2e9 1px solid;
    border-radius: 4px;
    cursor: pointer;
    text-align: center;
    vertical-align: middle;
}

.aggregate {
    padding: 10px;
    height: 100%;
    cursor: move;
    background: #f1f4f8;
}

.wrap {
    display: grid;
    grid-template-columns: repeat(4, 4fr);
    gap: 10px;
    padding-top: 10px;
    margin-left: -18px;
}

.accordion {
    background-color: #ecf0f5;
    color: #444;
    border-radius: 10px;
    cursor: pointer;
    padding: 13px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-weight: bold;
    font-size: 15px;
    transition: 0.4s;
}

.active,
.accordion:hover {
    background-color: #ecf0f5;
}

.accordion:after {
    content: url("https://stage-admin.asia-live.com/images/arrowdown.svg");
    color: #777;
    font-weight: bold;
    float: right;
    margin-left: 5px;
}

.accordion.active:after {
    content: url("https://stage-admin.asia-live.com/images/arrowup.svg");
}

.panel {
    padding: 0 18px;
    background-color: white;
    max-height: 0;
    overflow-y: hidden;
    transition: max-height 0.2s ease-out;
    margin-bottom: 20px;
}

.card-body {
    padding: 0;

}

.table {
    min-width: 100%;
    overflow-x: scroll;
}

.card-header {
    border-radius: 4px 4px 0 0;
    background: #f1f4f8;
    padding: 9px;
    font-size: 17px;
}

.empty-filter {
    align-items: left !important;

}

.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
    content: "\f0c9";
    font-weight: bold;
    color: #8496b6;
}

.svgSize {
    width: 45px;
    height: 25px;
    color: #8496b6;
}

.maxh {
    max-height: 381px;
}
</style>
  