<template>
    <div class="layoutBox">
        <el-container>
            <el-header>
                <Header></Header>
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-container>
                    <el-main>Main</el-main>
                </el-container>
            </el-container>
        </el-container>
    </div>
</template>
<script>


// import "@/css/login.css"
import Header from "@/components/Header.vue"

export default {
    data() {
        return {

        };
    },
    components:{
        Header,
    },
    mounted() {

    },
    methods: {
        onload() {

        },


    },
};
</script>

<style scoped></style>