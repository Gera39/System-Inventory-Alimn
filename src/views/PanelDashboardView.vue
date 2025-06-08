<template>
    <SidebarPage/>
     <div class="p-4 sm:ml-64">
        <router-view></router-view>
    </div>
   
</template>

<script lang="ts" setup>  
import SidebarPage from '../layout/SidebarPage.vue';
// import InventoryPage from '../pages/InventoryPage.vue';
</script>
<style scoped></style>