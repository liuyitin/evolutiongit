<template>
    <div class="layoutBox">
        <el-container>
            <el-header>
                <div class="main-header" :class="isshowminimenu ? 'w50' : ''">
                    <a href="#" class="logo">
                        <span class="logo-mini" v-show="isshowminimenu">EVO</span>
                        <span class="logo-lg" v-show="!isshowminimenu">EVOLUTIONGAMING</span>
                    </a>
                    <div class="navbar">
                        <div class="sidebar-toggle" @click="isCollapse">
                            <img src="~@/assets/img/sidebar-toggle.png" alt="">
                        </div>
                        <div class="user-menu">
                            <div class="user-menu-content" @click="usermenu">
                                <img src="~@/assets/img/user.png" alt="">
                                <div class="dropdown-toggle">
                                    <span class="username">263041STA</span>
                                </div>
                            </div>
                            <div class="dropdown-menu" v-show="isshowusermenu">
                                <div class="user-footer">
                                    <div>Change Password</div>
                                    <div @click="signOut">Sign out</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-header>
            <el-container class="sectionBox">
                <div @mouseenter="mouseenter" @mouseleave="mouseLeave" :class="isshowminimenu ? 'mini-el-aside' : ''">
                    <el-aside>
                        <el-menu :default-openeds="$route.path" :unique-opened="true" router>
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
                                <el-menu-item index="2">
                                    <div class="menu-item-img">
                                        <i class="fa fa-users"></i>
                                    </div>
                                    <span slot="title" class="disnone">Member List</span>
                                </el-menu-item>
                                <el-menu-item index="3">
                                    <div class="menu-item-img">
                                        <i class="fa fa-dollar"></i>
                                    </div>
                                    <span slot="title" class="disnone">Member Transfer</span>
                                </el-menu-item>
                                <el-menu-item index="4">
                                    <div class="menu-item-img">
                                        <i class="fa fa-th-list"></i>
                                    </div>
                                    <span slot="title" class="disnone">All Members Bet History</span>
                                </el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <template slot="title" class="disnone">Game Analysis Tool</template>
                                <el-menu-item index="5">
                                    <div class="menu-item-img">
                                        <i class="fa fa-search"></i>
                                    </div>
                                    <span slot="title" class="disnone">Search Game ID</span>
                                </el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <template slot="title" class="disnone">Report</template>
                                <el-menu-item index="6">
                                    <div class="menu-item-img">
                                        <i class="fa fa-line-chart"></i>
                                    </div>
                                    <span slot="title" class="disnone">Win Loss Report</span>
                                </el-menu-item>
                                <el-menu-item index="7">
                                    <div class="menu-item-img">
                                        <i class="fa fa-table"></i>
                                    </div>
                                    <span slot="title" class="disnone">Premium Settlement</span>
                                </el-menu-item>
                                <el-menu-item index="8">
                                    <div class="menu-item-img">
                                        <i class="fa fa-table"></i>
                                    </div>
                                    <span slot="title" class="disnone">First Person Settlement</span>
                                </el-menu-item>

                                <el-menu-item index="9">
                                    <div class="menu-item-img">
                                        <i class="fa fa-line-chart"></i>
                                    </div>
                                    <span slot="title" class="disnone">Gaming Summary</span>
                                </el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group>
                                <template slot="title" class="disnone">Documentation</template>
                                <el-submenu index="10">
                                    <template slot="title">
                                        <div class="menu-item-img">
                                            <i class="fa fa-file"></i>
                                        </div><span class="disnone">API</span>
                                    </template>
                                    <div class="ml5 openmenu disnone">
                                        <el-submenu index="10-1">
                                            <template slot="title">
                                                <div class="menu-item-img">
                                                    <i class="fa fa-file"></i>
                                                </div><span>One Wallet Integration</span>
                                            </template>
                                            <div class="pl20">
                                                <el-menu-item index="10-1-1">User Authentication (Seamless)</el-menu-item>
                                            </div>
                                        </el-submenu>
                                        <el-submenu index="10-2">
                                            <template slot="title">
                                                <div class="menu-item-img">
                                                    <i class="fa fa-file"></i>
                                                </div><span>Fund Transfer Integration</span>
                                            </template>
                                            <div class="pl20">
                                                <el-menu-item index="10-2-1">User Authentication (FT)</el-menu-item>
                                            </div>
                                        </el-submenu>


                                        <el-menu-item index="10-3">Game History API</el-menu-item>
                                        <el-menu-item index="10-4">Game List API</el-menu-item>
                                        <el-menu-item index="10-5">Kick Player API</el-menu-item>
                                    </div>
                                </el-submenu>
                                <el-submenu index="11">
                                    <template slot="title">
                                        <div class="menu-item-img">
                                            <i class="fa fa-file"></i>
                                        </div><span class="disnone">Reference</span>
                                    </template>
                                    <div class="ml5 openmenu disnone">
                                        <el-menu-item index="11-1">Table List</el-menu-item>
                                        <el-menu-item index="11-2">Game Type</el-menu-item>
                                        <el-menu-item index="11-3">Country Code</el-menu-item>
                                        <el-menu-item index="11-4">Currency Code</el-menu-item>
                                        <el-menu-item index="11-5">Language Code</el-menu-item>
                                    </div>
                                </el-submenu>
                            </el-menu-item-group>
                        </el-menu>
                    </el-aside>
                </div>

                <el-container>
                    <el-main>
                        <router-view />
                    </el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>


// import "@/css/login.css"

import "@/css/layout.css"
export default {
    data() {
        return {
            isshowusermenu: !1,
            isshowminimenu: !1,
            ismini: !1,
        };
    },

    mounted() {

    },
    methods: {

        usermenu() {
            this.isshowusermenu = !this.isshowusermenu
        },
        signOut() {
            this.$router.push({ name: "login" })
        },
        isCollapse() {
            this.isshowminimenu = !this.isshowminimenu
            this.ismini = !this.ismini
            // console.log(this.isshowminimenu, "this.isshowminimenu");
            // this.setIsshowminimenu(this.isshowminimenu)
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

    },

};
</script>

<style scoped>
.el-header {
    height: 50px !important;
}

.sectionBox {
    height: calc(100vh - 50px);
}

.el-main {
    padding: 0;
}
</style>