<template>
    <div id="class">
        <Loader v-if="!classRoom"/>
    </div>
</template>

<script>
    import ClassController from "../../controllers/class.controller.js";
    import Loader from '../loading/loading-v1.vue';

    export default {
        name: "Class",
        data() {
            return {
                idClass: this.$route.params.id,
                classRoom: null
            }
        },
        components: {
            Loader
        },
        watch: {
            '$route': async function() {
                await this.checkLogged();
                this.getClass();
            }
        },
        methods: {
            async getClass() {
                const response = await ClassController.getClass(this.idClass);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    this.$router.push({
                        name: "setting"
                    });
                    return;
                }

                this.classRoom = response.data.data;
            },
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
        async mounted() {
            await this.checkLogged();
            this.getClass();
        }
    }
</script>

<style>

</style>
