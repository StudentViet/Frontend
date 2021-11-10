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
        },
        watch: {
            '$route': async function () {
                await this.checkLogged();
            }
        },
        methods: {
            async checkLogged() {
                const response = await this.$store.dispatch('getUser');

                if (!response) {
                    this.$router.push({
                        name: "login"
                    });
                }
            }
        },
        async mounted() {
            await this.checkLogged();
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
