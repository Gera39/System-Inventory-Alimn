<template>

<div href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.espn.com.mx%2Ffutbol%2Fequipo%2F_%2Fid%2F227%2Famerica&psig=AOvVaw32KB0_IsqjrQTIeMGhbwPZ&ust=1749434265611000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCf0dHc4I0DFQAAAAAdAAAAABAE" alt="">
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Nombre Alimento</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Descripcion- Tipo </p>
        <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Añadir al Inventario
        </button>
    </div>
</div>
<ModalComponent/>
</template>
<script lang="ts" setup>
import ModalComponent from '../components/ModalComponent.vue';
</script>
<style scoped></style>