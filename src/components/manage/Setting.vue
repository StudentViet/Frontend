<template>
    <div id="setting">

    </div>
</template>

<script>
    export default {
        name: 'Setting',
        watch: {
            '$route' () {
                this.checkLogged();
            }
        },
        methods: {
            async checkLogged() {
                const response = await this.$store.dispatch('getUser');

                if (!response) {
                    this.$router.push({
                        name: "login"
                    });
                    return;
                }

                if (response.role_id == 2) {
                    this.$router.push({
                        name: "exam"
                    });
                    return;
                }
            }
        },
        mounted() {
            this.checkLogged();
        }
    }
</script>

<style>

</style>
