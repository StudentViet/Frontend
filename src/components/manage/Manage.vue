<template>
    <div id="manage">
        <Header />
        <router-view></router-view>
    </div>
</template>

<script>
    import AuthController from "../../controllers/auth.controller.js";
    import Header from '../headers/Header-v1.vue';

    export default {
        name: 'Manage',

        components: {
            Header
        },
        watch: {
            '$route' () {
                this.checkLogged();
            }
        },
        methods: {
            async checkLogged() {
                try {
                    if (localStorage.getItem('accessToken') == '') {
                        localStorage.setItem('accessToken', '');
                        this.$router.push({
                            name: "login"
                        });
                        return;
                    }
                    var response = await AuthController.getUser();
                } catch (err) {
                    localStorage.setItem('accessToken', '');
                    this.$router.push({
                        name: "login"
                    });
                }

                this.$store.commit('setUser', response.data.data.user);
            }
        },
        mounted() {
            this.checkLogged();
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
