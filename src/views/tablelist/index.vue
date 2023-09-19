<template>
    <div class="layout-main">
        <div class="content-header">
            <div class="itemend">
                <h1>Documentation</h1>
                <span>Table List</span>
            </div>
            <div class="content-header-right itemc  content-header">
                <ol class="breadcrumb">
                    <li>
                        <a href="#"><i class="fa fa-dashboard"></i>&nbsp;Home</a>
                    </li>
                    <li class="active">
                        Table List
                    </li>
                </ol>
              
            </div>
        </div>
        <div class="layout-table-content">
            <div class="mt10">
                <br />
                <br />
            </div>
            <div class="gridContaineBox">
                <div class="dx-viewport demo-container dx-device-desktop dx-device-generic dx-theme-generic dx-theme-generic-typography dx-color-scheme-light"
                    style="width:90%">
                    <div id="gridContainer" class="gridContainer"></div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  
<script>

import "@/css/home.css"
import '@/assets/dx/dx.common.css';
import '@/assets/dx/dx.light.css';

export default {
    data() {
        return {
            list: [
                {
                    "Table Name": "Baccarat SW",
                    "Table ID": "rev2xgz6sjfqam4i",
                    "Direct Launch Table ID": "rev2xgz6sjfqam4i",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Turkish Lightning Roulette DNT",
                    "Table ID": "TRLRou0000000001",
                    "Direct Launch Table ID": "TRLRou0000000001",
                    "Game Type": "dhp",
                    "Minimum": 1,
                    "Maximum": 3333,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "BLACKJACK Classic 60 DNT",
                    "Table ID": "nrgrpmxusbsdh2wt",
                    "Direct Launch Table ID": "nrgrpmxusbsdh2wt",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Classic Speed Blackjack 51 DNT",
                    "Table ID": "o5wtz3igp3jf7b3c",
                    "Direct Launch Table ID": "o5wtz3igp3jf7b3c",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed Blackjack L DNT",
                    "Table ID": "k4r2hyhw4eqqb6us",
                    "Direct Launch Table ID": "k4r2hyhw4eqqb6us",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "First Person Top Card DNT",
                    "Table ID": "rng-topcard00001",
                    "Direct Launch Table ID": "rng-topcard00001",
                    "Game Type": "rng-topcard",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed Roulette",
                    "Table ID": "lkcbrbdckjxajdol",
                    "Direct Launch Table ID": "lkcbrbdckjxajdol",
                    "Game Type": "roulette",
                    "Minimum": 0.1,
                    "Maximum": 5000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "BLACKJACK Classic 64 DNT",
                    "Table ID": "nu4sfh6imn6jgvah",
                    "Direct Launch Table ID": "nu4sfh6imn6jgvah",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed Auto Roulette",
                    "Table ID": "SpeedAutoRo00001",
                    "Direct Launch Table ID": "SpeedAutoRo00001",
                    "Game Type": "roulette",
                    "Minimum": 0.1,
                    "Maximum": 5000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Classic 53 DNT",
                    "Table ID": "nl7mfw3oy4xar22t",
                    "Direct Launch Table ID": "nl7mfw3oy4xar22t",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed Baccarat F DNT",
                    "Table ID": "nmwde3fd7hvqhq43",
                    "Direct Launch Table ID": "nmwde3fd7hvqhq43",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed Baccarat I DNT",
                    "Table ID": "nxpkul2hgclallno",
                    "Direct Launch Table ID": "nxpkul2hgclallno",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed VIP Blackjack D DNT",
                    "Table ID": "SpeedBlackjack04",
                    "Direct Launch Table ID": "SpeedBlackjack04",
                    "Game Type": "blackjack",
                    "Minimum": 10,
                    "Maximum": 2500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "First Person Deal or No Deal DNT",
                    "Table ID": "RngDealNoDeal001",
                    "Direct Launch Table ID": "RngDealNoDeal001",
                    "Game Type": "rng-dealnodeal",
                    "Minimum": 1,
                    "Maximum": 1000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Platinum VIP DNT",
                    "Table ID": "h463tlq1rhl1lfr2",
                    "Direct Launch Table ID": "h463tlq1rhl1lfr2",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Roulette",
                    "Table ID": "vctlz20yfnmp1ylr",
                    "Direct Launch Table ID": "vctlz20yfnmp1ylr",
                    "Game Type": "roulette",
                    "Minimum": 1,
                    "Maximum": 5000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "First Person Golden Wealth Baccarat DNT",
                    "Table ID": "rng-gwbaccarat00",
                    "Direct Launch Table ID": "rng-gwbaccarat00",
                    "Game Type": "rng-baccarat",
                    "Minimum": 1,
                    "Maximum": 2000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Fortune VIP DNT",
                    "Table ID": "ejx1a04w4ben0mou",
                    "Direct Launch Table ID": "ejx1a04w4ben0mou",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Salon Priv\u00e9 Baccarat G DNT",
                    "Table ID": "p34i6wgax7bqb5cg",
                    "Direct Launch Table ID": "p34i6wgax7bqb5cg",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed Baccarat B DNT",
                    "Table ID": "lv2kzclunt2qnxo5",
                    "Direct Launch Table ID": "lv2kzclunt2qnxo5",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Korean Speaking Speed Baccarat",
                    "Table ID": "npn3y3hkld2mcdjt",
                    "Direct Launch Table ID": "npn3y3hkld2mcdjt",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Dragon Tiger",
                    "Table ID": "DragonTiger00001",
                    "Direct Launch Table ID": "DragonTiger00001",
                    "Game Type": "dragontiger",
                    "Minimum": 1,
                    "Maximum": 10000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "BLACKJACK Classic 57 DNT",
                    "Table ID": "nohenl2miyplaad3",
                    "Direct Launch Table ID": "nohenl2miyplaad3",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack VIP U DNT",
                    "Table ID": "bciewncrf5ijneys",
                    "Direct Launch Table ID": "bciewncrf5ijneys",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "First Person Dragon Tiger DNT",
                    "Table ID": "rng-dragontiger0",
                    "Direct Launch Table ID": "rng-dragontiger0",
                    "Game Type": "rng-dragontiger",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Classic Speed Blackjack 48 DNT",
                    "Table ID": "o5t5x6oip3jdbfcg",
                    "Direct Launch Table ID": "o5t5x6oip3jdbfcg",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Korean Speed Baccarat A",
                    "Table ID": "onokyd4wn7uekbjx",
                    "Direct Launch Table ID": "onokyd4wn7uekbjx",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Classic C DNT",
                    "Table ID": "p7nfdxlgue4vix3v",
                    "Direct Launch Table ID": "p7nfdxlgue4vix3v",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Cash Or Crash",
                    "Table ID": "CashOrCrash00001",
                    "Direct Launch Table ID": "CashOrCrash00001",
                    "Game Type": "cashorcrash",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "No Commission Speed Baccarat A DNT",
                    "Table ID": "ndgv76kehfuaaeec",
                    "Direct Launch Table ID": "ndgv76kehfuaaeec",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Classic 54 DNT",
                    "Table ID": "nohedgkjiypk7zja",
                    "Direct Launch Table ID": "nohedgkjiypk7zja",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed VIP Blackjack A DNT",
                    "Table ID": "SpeedBlackjack01",
                    "Direct Launch Table ID": "SpeedBlackjack01",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Video Poker",
                    "Table ID": "VPTable000000001",
                    "Direct Launch Table ID": "VPTable000000001",
                    "Game Type": "videopoker",
                    "Minimum": 0.1,
                    "Maximum": 10000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Korean Speaking Speed Baccarat 2",
                    "Table ID": "oga6ftnw3fltvggm",
                    "Direct Launch Table ID": "oga6ftnw3fltvggm",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Lightning Blackjack",
                    "Table ID": "LightningSbj0001",
                    "Direct Launch Table ID": "LightningSbj0001",
                    "Game Type": "lightningscalablebj",
                    "Minimum": 1,
                    "Maximum": 5000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Classic 67 DNT",
                    "Table ID": "nvzbpog76teuybs7",
                    "Direct Launch Table ID": "nvzbpog76teuybs7",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Silver 5 DNT",
                    "Table ID": "gazgtkid9h1b0dn9",
                    "Direct Launch Table ID": "gazgtkid9h1b0dn9",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Immersive Roulette",
                    "Table ID": "7x0b1tgh7agmf6hv",
                    "Direct Launch Table ID": "7x0b1tgh7agmf6hv",
                    "Game Type": "roulette",
                    "Minimum": 0.1,
                    "Maximum": 5000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "First Person Baccarat DNT",
                    "Table ID": "rngbaccarat00000",
                    "Direct Launch Table ID": "rngbaccarat00000",
                    "Game Type": "rng-baccarat",
                    "Minimum": 1,
                    "Maximum": 15000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack VIP 1",
                    "Table ID": "o7347okwaeasvy2y",
                    "Direct Launch Table ID": "o7347okwaeasvy2y",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Classic Speed Blackjack 46 DNT",
                    "Table ID": "o5edqlternkvi3td",
                    "Direct Launch Table ID": "o5edqlternkvi3td",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Classic Speed Blackjack 42 DNT",
                    "Table ID": "o47f2ww2j24qanvc",
                    "Direct Launch Table ID": "o47f2ww2j24qanvc",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Casino Hold'em UI 3.0",
                    "Table ID": "HoldemTable00001",
                    "Direct Launch Table ID": "m27szsrplc2ab2l5",
                    "Game Type": "holdem",
                    "Minimum": 0.5,
                    "Maximum": 1500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Silver 2 DNT",
                    "Table ID": "9f4xhuhdd005xlbl",
                    "Direct Launch Table ID": "9f4xhuhdd005xlbl",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack VIP 12 DNT",
                    "Table ID": "pdk5zo7cey6upxlm",
                    "Direct Launch Table ID": "pdk5zo7cey6upxlm",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Classic Speed Blackjack 40 DNT",
                    "Table ID": "o4lbh3j4pwqrergf",
                    "Direct Launch Table ID": "o4lbh3j4pwqrergf",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Classic F DNT",
                    "Table ID": "p7nfnb7k436fi5zm",
                    "Direct Launch Table ID": "p7nfnb7k436fi5zm",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "BLACKJACK Classic 70 DNT",
                    "Table ID": "ob34b36gdmtjx42e",
                    "Direct Launch Table ID": "ob34b36gdmtjx42e",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "First Person Lightning Roulette DNT",
                    "Table ID": "rng-rt-lightning",
                    "Direct Launch Table ID": "rng-rt-lightning",
                    "Game Type": "rng-roulette",
                    "Minimum": 0.1,
                    "Maximum": 5000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "PRQ 2HandPoker DNT",
                    "Table ID": "nvonbym4lncqauzf",
                    "Direct Launch Table ID": "nvonbym4lncqauzf",
                    "Game Type": "dhp",
                    "Minimum": 1,
                    "Maximum": 3333,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Classic Speed Blackjack 44 DNT",
                    "Table ID": "o47fz3pxj24qamsl",
                    "Direct Launch Table ID": "o47fz3pxj24qamsl",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Classic B DNT",
                    "Table ID": "p7nfamwu436fiac7",
                    "Direct Launch Table ID": "p7nfamwu436fiac7",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed Baccarat H DNT",
                    "Table ID": "nxpj4wumgclak2lx",
                    "Direct Launch Table ID": "nxpj4wumgclak2lx",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack VIP 15 DNT",
                    "Table ID": "pdk53n4bjkgepr5u",
                    "Direct Launch Table ID": "pdk53n4bjkgepr5u",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Classic 17 DNT",
                    "Table ID": "mwplom52theqikpt",
                    "Direct Launch Table ID": "mwplom52theqikpt",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "2 Hand Casino Holdem",
                    "Table ID": "DHPTable00000001",
                    "Direct Launch Table ID": "DHPTable00000001",
                    "Game Type": "dhp",
                    "Minimum": 1,
                    "Maximum": 3333,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack H",
                    "Table ID": "nc3u2l6y0khszjv7",
                    "Direct Launch Table ID": "nc3u2l6y0khszjv7",
                    "Game Type": "blackjack",
                    "Minimum": 25,
                    "Maximum": 2500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "No Commission Baccarat",
                    "Table ID": "NoCommBac0000001",
                    "Direct Launch Table ID": "NoCommBac0000001",
                    "Game Type": "baccarat",
                    "Minimum": 1,
                    "Maximum": 10000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed Baccarat Q",
                    "Table ID": "o4kyj7tgpwqqy4m4",
                    "Direct Launch Table ID": "o4kyj7tgpwqqy4m4",
                    "Game Type": "baccarat",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack Silver 3 DNT",
                    "Table ID": "qlrc3fq3v7p6awm4",
                    "Direct Launch Table ID": "qlrc3fq3v7p6awm4",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack A",
                    "Table ID": "uwd2bl2khwcikjlz",
                    "Direct Launch Table ID": "uwd2bl2khwcikjlz",
                    "Game Type": "blackjack",
                    "Minimum": 5,
                    "Maximum": 2500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "EVO PowerBall",
                    "Table ID": "PowerBall0000001",
                    "Direct Launch Table ID": "PowerBall0000001",
                    "Game Type": "powerball",
                    "Minimum": 1,
                    "Maximum": 10000,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Blackjack VIP X DNT",
                    "Table ID": "bghflgi59db7d7r2",
                    "Direct Launch Table ID": "bghflgi59db7d7r2",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Speed Blackjack J DNT",
                    "Table ID": "i5j1cyqhrypkih23",
                    "Direct Launch Table ID": "i5j1cyqhrypkih23",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
                {
                    "Table Name": "Classic Speed Blackjack 50 DNT",
                    "Table ID": "o5t5z67hfiidaugl",
                    "Direct Launch Table ID": "o5t5z67hfiidaugl",
                    "Game Type": "blackjack",
                    "Minimum": 0.1,
                    "Maximum": 500,
                    "Currency": "MYR"
                },
            ]
        }
    },
    methods: {

    },
    mounted() {
        $('#gridContainer').dxDataGrid({

            columns: ['Table Name', 'Table ID', 'Direct Launch Table ID', 'Game Type', { caption: 'Default Bet Limit', columns: [{ caption: 'Min', dataField: 'Minimum', dataType: 'number', }, { caption: 'Max', dataField: 'Maximum', dataType: 'number', }] }],
            showColumnLines: true,
            showRowLines: true,
            columnAutoWidth: true,
            rowAlternationEnabled: true,
            showBorders: true,
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [5, 10, 20],
            },
            export: {
                enabled: true,
            },
            onExporting(e) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('TableList');

                DevExpress.excelExporter.exportDataGrid({
                    component: e.component,
                    worksheet,
                    autoFilterEnabled: true,
                }).then(() => {
                    workbook.xlsx.writeBuffer().then((buffer) => {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'TableList.xlsx');
                    });
                });
                e.cancel = true;
            },
            searchPanel: {
                visible: true,
            },
            dataSource:this.list,
            // dataSource: new DevExpress.data.CustomStore({
            // load(loadOptions) {
            //   const deferred = $.Deferred();
            //   $.ajax({
            //     url: 'https://stage-admin.asia-live.com/api/lobby/v1/0/tablelist',
            //     dataType: 'json',
            //     data: {
            //       'x-csrf-token': "zuFuUSmcjJLOvYGlWVUOUaG402jq2HfZe1qwk6MZ",
            //       'agent'        : $('#agent_id').val(),
            //     },
            //     success(result) {
            //       console.log(result);
            //       deferred.resolve(result);
            //     },
            //     error() {
            //       deferred.reject('Data Loading Error');
            //     },
            //     timeout: 5000,
            //   });

            //   return deferred.promise();
            // },
            // }),
        })
    }

}
</script>
  
<style scoped>
.mt10 {
    font-size: 14px;
    margin-top: 10px;
}

.gridContaineBox {
    width: 100%;
}

.gridContainer {
    padding: 10px;
    height: 90%;
}

.dx-datagrid-headers {
    color: #959595;
}
</style>
  