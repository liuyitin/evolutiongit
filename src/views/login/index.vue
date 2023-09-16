<template>
    <div class="loginBox">
        <div class="login-header">
            <div class="banner"></div>
            <div class="serverInfo">
                <div>ADMIN</div>
            </div>
            <div>
                <input class="login-input" v-model="username" type="text" placeholder="ENTER USERNAME" name="username" autofocus>
                <input class="login-input" v-model="password"  type="password" placeholder="ENTER PASSWORD" name="password" autocomplete="off">
                <div class="submit" @click="submit"></div>
            </div>
        </div>
        <div class="login-footer">
            <div class="upper-footer"></div>
            <div class="lower-footer"></div>
        </div>
    </div>
</template>
<script>


import "@/css/login.css"
import {mapMutations} from "vuex";


export default {
    data() {
        return {
            username:"",
            password:"",
        };
    },

    mounted() {
       
    },
    methods: {
        ...mapMutations(["setusername"]),
        submit(){
            let {username,password}=this
            if(username=="263041STA"&&password=="112233"){
                this.$router.push({name:"layout"})
                this.setusername(username)
                localStorage.setItem("username",username)
            }
        },

    },
};
</script>

<style scoped></style>