<template>
  <div class="main-header">
    <a href="#" class="logo">
      <span class="logo-mini">EVO</span>
      <span class="logo-lg">EVOLUTIONGAMING</span>
    </a>
    <div class="navbar">
      <div class="sidebar-toggle">
        <img src="~@/assets/img/sidebar-toggle.png" alt="">
      </div>
      <div class="user-menu">
        <img src="~@/assets/img/user.png" alt="">
        <div class="dropdown-toggle">
          <span>263041STA</span>
          <span class="triangle"></span>
        </div>
        <div class="dropdown-menu">
          <div class="user-footer">
            <div>Change Password</div>
          <div>Sign out</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>

import "@/css/header.css"


export default {
  name: 'Header',
  data() {
    return {
    }
  },
  methods: {
        onload() {
        },


    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
