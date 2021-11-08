<template>
    <div id="forgotPassword">
        <div class="container">
            <div class="container formWindow" style="padding: 30px">
                <h3 class="colorPrimary" style="margin: 10px"> Tìm lại mật khẩu </h3>
                <br />
                <br />
                <form @submit.prevent="Forgot()">
                    <div class="row">
                        <div class="col-8">
                            <div class="group">
                                <input type="email" v-model="email" required oninvalid="this.setCustomValidity('Vui lòng nhập email')" oninput="this.setCustomValidity('')" />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Nhập email</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn-primary mt-5"> Tiếp tục </button>
                        </div>
                    </div>
                </form>
                <p class="mt-1">
                    <router-link to="/dang-nhap" style="position: absolute; bottom: 20px">Quay lại</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    import AuthController from "../../controllers/auth.controller.js";
    export default {
        name: "Forgot Password",
        data() {
            return {
                email: "",
            };
        },
        mounted() {
            this.checkLogged();
        },
        watch: {
            '$route' () {
                this.checkLogged();
            }
        },
        methods: {
            ValidateEmail(email) {
                const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regex.test(String(email).toLowerCase());
            },
            async Forgot() {
                if (this.email == "") {
                    this.$snotify.error("Vui lòng nhập đầy đủ thông tin");
                    return;
                }
                if (!this.ValidateEmail(this.email)) {
                    this.$snotify.error("Định dạng email của bạn không hợp lệ");
                    return;
                }

                const response = await AuthController.forgot(this.email);

                if (!response.data.isError) {
                    this.$snotify.success(response.data.message);
                    return;
                }

                this.$snotify.error(response.data.message);
            },
            async checkLogged() {
                const response = await this.$store.dispatch('getUser');
                if (response) {
                    this.$router.push({
                        name: (response.role_id == 2) ? "exam" : "/"
                    });
                }
            }
        },
    };
</script>
<style>
    .formWindow {
        margin: 0 auto;
        width: 60%;
        height: 60%;
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
