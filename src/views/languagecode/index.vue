<template>
    <div class="layout-main">
        <div class="content-header"></div>
        <p class="br"></p>
        <h3 class="content-title">Language Code Table</h3>
        <p class="br">Table of supported languages and their codes. Based on ISO 639-1</p>
        <table  class="table1">
            <thead>
                <tr>
                    <th>
                        <strong>Language</strong>
                    </th>
                    <th>
                        <strong>Code</strong>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in list" :key="index">
                    <td>
                        <strong>{{item.language}}</strong>
                    </td>
                    <td>{{item.code}}</td>
                </tr>
            </tbody>
        </table>
    
        <p class="br"></p>
    </div>
</template>
  
  
<script>

import "@/css/home.css"

export default {
    data() {
        return {
            list:[
                {
                    language:"Albanian",
                    code:"sq",
                },
                {
                    language:"Catalan, Valencian",
                    code:"sq",
                },
                {
                    language:"Chinese (Traditional)",
                    code:"sq",
                },
                {
                    language:"English (United Kindom)",
                    code:"sq",
                },
                {
                    language:"Romanian, Moldavian, Moldovan",
                    code:"sq",
                },
                {
                    language:"Spanish (United States)",
                    code:"sq",
                },
                {
                    language:"Albanian",
                    code:"sq",
                },
                {
                    language:"Albanian",
                    code:"sq",
                },
                {
                    language:"Albanian",
                    code:"sq",
                },
                {
                    language:"Albanian",
                    code:"sq",
                },
                {
                    language:"Albanian",
                    code:"sq",
                },
            ]
        }
    },
    methods: {

    },

}
</script>
  
<style scoped>
.layout-main {
    padding-left: 20px;
    font-size: 14px;
}

.content-header {
    padding: 15px 15px 0 15px;
    height: 0;
}
.br{
    min-height: 21px;
    line-height: 21px;
    margin-bottom: 16px;
    font-size: 14px;
    color: #212529;
}

.content-title {
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 33.5px;
    margin-bottom: 8px;
    font-size: 28px;
    font-weight: 500;
}

.table1 {
    width: 75%;
    font-family: 'Source Sans Pro','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-size: 14px;
}
tr{
    width: 100%;
    height: 54px;
}
th{
    background: #f1f1f1;
}

th, td {
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 30px;
    padding-right: 40px;
    border:3px solid #000;
    color: #212529;
    line-height: 18px;
  }
  h4{
    color: #212529;
    line-height: 36px;
    margin-bottom: 10px;
    font-weight: 500;
    font-size: 24px;
  }
  .table2{
    width: 40%;
  }
</style>
  