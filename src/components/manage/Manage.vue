<template>
    <div id="manage">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
    import Header from '../headers/Header-v1.vue';

    export default {
        name: 'Manage',

        components: {
            Header
        }
    }
</script>

<style>

#manage .col-6 h2 {
    text-align: center;
}

#manage img {
    pointer-events: none;
}

</style>
