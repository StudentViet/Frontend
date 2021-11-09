<template>
    <div id="ResetPassword">
        <div class="container">
            <div class="container formWindow" style="padding: 30px">
                <h3 class="colorPrimary" align="center" style="margin: 10px"> Lấy lại mật khẩu </h3>
                <br />
                <br />
                <form @submit.prevent="ResetPassword()">
                    <div class="col-12">
                        <div class="group">
                            <input type="password" v-model="password" required oninvalid="this.setCustomValidity('Vui lòng nhập trường này')" oninput="this.setCustomValidity('')" />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Mật khẩu mới</label>
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="group">
                            <input type="password" v-model="confirmPassword" required oninvalid="this.setCustomValidity('Vui lòng nhập trường này')" oninput="this.setCustomValidity('')" />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Xác nhận mật khẩu mới</label>
                        </div>
                    </div>
                    <div align="center">
                        <button type="submit" class="btn-primary mt-5"> Tiếp tục </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import AuthController from "../../controllers/auth.controller.js";
    export default {
        name: "ResetPassword",
        data() {
            return {
                password: "",
                confirmPassword: "",
            };
        },
        mounted() {
            this.checkLogged();
            this.checkToken();
        },
        watch: {
            $route() {
                this.checkLogged();
                this.checkToken();
            },
        },
        methods: {
            async ResetPassword() {
                if (this.password == "" || this.confirmPassword == "") {
                    this.$snotify.error("Vui lòng nhập đầy đủ thông tin");
                    return;
                }
                if (this.password !== this.confirmPassword) {
                    this.$snotify.error("Mật khẩu bạn nhập không khớp");
                    return;
                }
                const response = await AuthController.ResetPassword(this.$route.params.token, this.password, this.confirmPassword);
                if (!response.data.isError) {
                    this.$snotify.success("Lấy lại mật khẩu thành công");
                    this.$router.push({
                        name: "login",
                    });
                    return;
                }
                
                this.$snotify.error(response.data.message);
            },
            async checkLogged() {
                const response = await this.$store.dispatch("getUser");
                if (response) {
                    this.$router.push({
                        name: response.role_id == 2 ? "exam" : "setting",
                    });
                }
            },
            async checkToken() {
                const response = await AuthController.checkTokenForgot(this.$route.params.token);
                if (response.data.isError) {
                    this.$router.push({
                        name: "login",
                    });
                }
            },
        },
    };
</script>
<style>
    .formWindow {
        margin: 0 auto;
        width: 60%;
        height: 80%;
        min-height: 400px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        box-shadow: 0px 5px 15px silver;
    }

    #form-email {
        display: none;
    }
</style>
