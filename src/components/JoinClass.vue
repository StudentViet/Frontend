<template>
    <div id="JoinClass">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="center-template">
                        <img src="../assets/images/invite.png" height="400" />
                        <h2 class="colorGray d-block"> THAM GIA LỚP HỌC </h2>
                        <h2 class="colorGray d-block"> QUAY LẠI <router-link to="/" class="font-bold"> TRANG CHỦ </router-link> </h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import ClassController from '../controllers/class.controller';
    export default {
        name: "JoinClass",
        data() {
            return {
                idClass: this.$route.params.id,
                teacher: true
            }
        },
        watch: {
            '$route.params.id': async function() {
                await this.checkLogged();
                this.joinClass();
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

                if (response.role_id == 1) {
                    this.$snotify.error("Giáo viên không thể tham gia lớp học");
                    this.$router.push({
                        name: "setting"
                    });
                    return;
                }

                this.teacher = false;
            },
            async joinClass() {
                if (this.teacher) return;

                try {
                    var response = await ClassController.joinClass(this.idClass);
                } catch (err) {
                    this.$snotify.error("Không thể tham gia lớp học");
                }

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }
                this.$snotify.success(response.data.message);
                this.$router.push({
                    name: "exam"
                });
            }
        },
        async mounted() {
            await this.checkLogged();
            this.joinClass();
        }
    }
</script>

<style>

</style>
