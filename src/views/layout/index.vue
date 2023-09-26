<template>
    <div class="layoutBox">
        <el-container>
            <el-header>
                <div class="main-header" :class="isshowminimenu ? 'w50' : ''">
                    <a href="#" class="medialogo">
                        <span class="logo-lg">EVOLUTIONGAMING</span>
                    </a>
                    <a href="#" class="logo">
                        <span class="logo-mini" v-show="isshowminimenu">EVO</span>
                        <span class="logo-lg" v-show="!isshowminimenu">EVOLUTIONGAMING</span>
                    </a>
                    <div class="navbar">
                        <div class="sidebar-toggle navbar-logo-lg" @click="isCollapse"></div>
                        <div class="sidebar-toggle navbar-logo-mini" @click="isCollapse1"></div>
                        <div class="user-menu">
                            <a href="#" class="user-menu-content" @click="usermenu">
                                <img src="~@/assets/img/user.png" alt="">
                                <span class="dropdown-toggle">{{ username }}</span>
                            </a>
                            <div class="navbar-dropdown-menu" v-show="isshowusermenu">
                                <div class="user-footer">
                                    <div @click="ChangePassword">Change Password</div>
                                    <div @click="signOut">Sign out</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-header>
            <el-container class="sectionBox" :class="miniisshowminimenu ? 'sectionBoxml' : ''">
                <div class="disflex"  @click="hideaside">
                    <div @mouseenter="mouseenter" @mouseleave="mouseLeave" class="asideBox"
                        :class="isshowminimenu ? 'mini-el-aside' : ''">

                        <el-aside>
                            <el-menu :default-active="$route.path" :unique-opened="true" router class="el-menu-vertical-demo">
                                <div class="user-panel">
                                    <div class="headsculpture">
                                        <img src="~@/assets/img/user.png" alt="">
                                    </div>
                                    <div class="info disnone">
                                        <p>263041STA</p>
                                        <div>
                                            <i class="fa fa-black-tie"></i>
                                            <span>Admin</span>
                                        </div>
                                    </div>
                                </div>

                                <el-menu-item-group>
                                    <template slot="title" class="disnone">Accounts</template>
                                    <el-menu-item index="/layout/sub">
                                        <div class="menu-item-img">
                                            <i class="fa fa-male"></i>
                                        </div>
                                        <span slot="title" class="disnone">Sub Account</span>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <template slot="title" class="disnone">Member</template>
                                    <el-menu-item index="/layout/member">
                                        <div class="menu-item-img">
                                            <i class="fa fa-users"></i>
                                        </div>
                                        <span slot="title" class="disnone">Member List</span>
                                    </el-menu-item>
                                    <el-menu-item index="/layout/transfer">
                                        <div class="menu-item-img">
                                            <i class="fa fa-dollar"></i>
                                        </div>
                                        <span slot="title" class="disnone">Member Transfer</span>
                                    </el-menu-item>
                                    <el-menu-item index="/layout/history">
                                        <div class="menu-item-img">
                                            <i class="fa fa-th-list"></i>
                                        </div>
                                        <span slot="title" class="disnone">All Members Bet History</span>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <template slot="title" class="disnone">Game Analysis Tool</template>
                                    <el-menu-item index="/layout/search-gameid">
                                        <div class="menu-item-img">
                                            <i class="fa fa-search"></i>
                                        </div>
                                        <span slot="title" class="disnone">Search Game ID</span>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <template slot="title" class="disnone">Report</template>
                                    <el-menu-item index="/layout/winloss">
                                        <div class="menu-item-img">
                                            <i class="fa fa-line-chart"></i>
                                        </div>
                                        <span slot="title" class="disnone">Win Loss Report</span>
                                    </el-menu-item>
                                    <el-menu-item index="/layout/financial">
                                        <div class="menu-item-img">
                                            <i class="fa fa-table"></i>
                                        </div>
                                        <span slot="title" class="disnone">Premium Settlement</span>
                                    </el-menu-item>
                                    <el-menu-item index="/layout/firstperson">
                                        <div class="menu-item-img">
                                            <i class="fa fa-table"></i>
                                        </div>
                                        <span slot="title" class="disnone">First Person Settlement</span>
                                    </el-menu-item>

                                    <el-menu-item index="/layout/gaming">
                                        <div class="menu-item-img">
                                            <i class="fa fa-line-chart"></i>
                                        </div>
                                        <span slot="title" class="disnone">Gaming Summary</span>
                                    </el-menu-item>
                                </el-menu-item-group>
                                <el-menu-item-group>
                                    <template slot="title" class="disnone">Documentation</template>
                                    <!-- <el-submenu index="10"> -->
                                    <el-submenu index="/layout/documentationapi">
                                        <template slot="title">
                                            <div class="menu-item-img">
                                                <i class="fa fa-file"></i>
                                            </div><span class="disnone">API</span>
                                        </template>
                                        <div class="ml5 openmenu disnone">
                                            <el-submenu index="/layout/documentationapi-onewallet">
                                            <!-- <el-submenu index="10-1"> -->
                                                <template slot="title">
                                                    <div class="menu-item-img">
                                                        <i class="fa fa-file"></i>
                                                    </div><span>One Wallet Integration</span>
                                                </template>
                                                <div class="pl20">
                                                    <el-menu-item
                                                        index="/layout/documentationapi-onewallet-user">User
                                                        Authentication (Seamless)</el-menu-item>
                                                </div>
                                            </el-submenu>
                                            <!-- <el-submenu index="10-2"> -->
                                            <el-submenu index="/layout/documentationapi-fundtransfer">
                                                <template slot="title">
                                                    <div class="menu-item-img">
                                                        <i class="fa fa-file"></i>
                                                    </div><span>Fund Transfer Integration</span>
                                                </template>
                                                <div class="pl20">
                                                    <el-menu-item
                                                        index="/layout/documentationapi-fundtransfer-user">User
                                                        Authentication (FT)</el-menu-item>
                                                </div>
                                            </el-submenu>


                                            <el-menu-item index="/layout/documentationapi-gamehistory">Game History
                                                API</el-menu-item>
                                            <el-menu-item index="/layout/documentationapi-gamelist">Game List
                                                API</el-menu-item>
                                            <el-menu-item index="/layout/documentationapi-kickPlayer">Kick Player
                                                API</el-menu-item>
                                        </div>
                                    </el-submenu>
                                    <el-submenu index="/layout/reference">
                                        <template slot="title">
                                            <div class="menu-item-img">
                                                <i class="fa fa-file"></i>
                                            </div><span class="disnone">Reference</span>
                                        </template>
                                        <div class="ml5 openmenu disnone">
                                            <el-menu-item index="/layout/reference-tablelist">Table List</el-menu-item>
                                            <el-menu-item index="/layout/reference-gametype">Game Type</el-menu-item>
                                            <el-menu-item index="/layout/reference-countrycode">Country Code</el-menu-item>
                                            <el-menu-item index="/layout/reference-currencycode">Currency
                                                Code</el-menu-item>
                                            <el-menu-item index="/layout/reference-languagecode">Language
                                                Code</el-menu-item>
                                        </div>
                                    </el-submenu>
                                </el-menu-item-group>
                            </el-menu>
                        </el-aside>
                    </div>
                    <el-container>
                        <el-main :class="isshowminimenu ? 'mini-el-main mini-el-aside' : ''">
                            <keep-alive>
                                <router-view></router-view>
                            </keep-alive>
                        </el-main>
                    </el-container>
                </div>
            </el-container>
        </el-container>
    </div>
</template>
<script>



import "@/css/bootstrap.css";
import "@/assets/AdminLTE/AdminLTE.min.css"
import "@/css/layout.css"

// import {mapGetters} from "vuex";

export default {
    data() {
        return {
            isshowusermenu: !1,
            isshowminimenu: !1,
            ismini: !1,
            miniisshowminimenu: !1,
            defalut:[],
        };
    },

    mounted() {

    },
    methods: {
        usermenu() {
            this.isshowusermenu = !this.isshowusermenu
        },
        ChangePassword(){
            this.$router.push({ name: "ChangePassword" })
        },
        signOut() {
            this.$router.push({ name: "login" })
        },
        isCollapse() {
            this.isshowminimenu = !this.isshowminimenu
            this.ismini = !this.ismini

        },
        isCollapse1() {
            this.miniisshowminimenu = !this.miniisshowminimenu
        },
        mouseenter() {
            if (this.ismini) {
                this.isshowminimenu = !1
            }
        },
        mouseLeave() {
            if (this.ismini) {
                this.isshowminimenu = !0
            }
        },
        hideaside() {
            this.miniisshowminimenu = !1
            this.isshowusermenu = !1
        },
      

    },
    computed: {
        // ...mapGetters(["getusername"]),
        username() {
            return localStorage.getItem("username")
        },

    },

};
</script>

<style scoped></style>