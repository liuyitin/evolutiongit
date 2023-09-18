<template>
    <div class="layout-main">
        <div class="content-header"></div>
        <p class="br"></p>
        <h3 class="content-title">Currency Code Table</h3>
        <p class="br">ISO 4217</p>
        <input type="text" class="searchinput" placeholder="Search Currency">
        <table  class="table1">
            <thead>
                <tr>
                    <th>
                        <strong>Country Code</strong>
                    </th>
                    <th>
                        <strong>Description</strong>
                    </th>
                    <th>
                        <strong>Region</strong>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>AD</td>
                    <td>Andorra</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>United Arab Emirates</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>Antigua And Barbuda</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>Netherlands Antilles</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>Bosnia And Herzegowina</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>Congo, The Democratic Republic Of The</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>Micronesia, Federated States Of</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>South Georgia And The South Sandwich Islands</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>Lao People's Democratic Republic</td>
                    <td>Non Asia</td>
                </tr>

                <tr>
                    <td>AD</td>
                    <td>Macedonia, The Former Yugoslav Republic Of</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>United States Minor Outlying Islands</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>Saint Vincent And The Grenadines</td>
                    <td>Non Asia</td>
                </tr>
                <tr>
                    <td>AD</td>
                    <td>Andorra</td>
                    <td>Non Asia</td>
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
  .searchinput{
    width: 30%;
    padding: 12px 20px 12px 40px;
    border: 1px solid #ddd;
    margin-bottom: 12px;
    background: #fff;
  }
 
</style>
  