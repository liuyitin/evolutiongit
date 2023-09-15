<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.disflex{
  display: flex;
}
.itemc{
  display: flex;
  align-items: center;
}
.itemend{
  display: flex;
  align-items: flex-end;
}
.justifybetween{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
