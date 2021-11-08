<template>
    <div id="login">
        <br />
        <br />
        <br />
        <div class="container mt-3">
            <div class="row container">
                <div class="col-5">
                    <a href="#">
                        <h5 class="colorPrimary"> Chào mừng bạn đến với <span class="colorPrimary font-bold">StudentViet</span> ! </h5>
                    </a>
                    <form @submit.prevent="Login()">
                        <div class="group">
                            <input v-model="user" type="text" required oninvalid="this.setCustomValidity('Vui lòng nhập email hoặc số điện thoại')" oninput="this.setCustomValidity('')" />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Email hoặc số điện thoại</label>
                        </div>
                        <div class="group">
                            <input v-model="password" type="password" required oninvalid="this.setCustomValidity('Vui lòng nhập mật khẩu')" oninput="this.setCustomValidity('')" />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Mật khẩu</label>
                        </div>
                        <div class="group">
                            <button type="submit" class="btn-primary">
                                <span class="font-bold">Đăng nhập</span>
                            </button>
                            <p class="text-center colorGray" style="font-size: 14px">Hoặc</p>
                            <button type="button" class="btn-primary">
                                <i class="fa fa-facebook-square" style="font-size: 20px; margin-right: 5px"></i>
                                <span class="font-bold">Đăng ký / Đăng nhập bằng facebook</span>
                            </button>
                            <p class="text-center colorGray" style="font-size: 15px"> Quên mật khẩu ? <router-link to="/quen-mat-khau" class="font-bold colorPrimary">Lấy lại mật khẩu</router-link>
                            </p>
                            <p class="text-center colorGray" style="font-size: 15px"> Chưa có tài khoản ? <router-link to="/dang-ky" class="font-bold colorPrimary">Đăng ký</router-link>
                            </p>
                        </div>
                    </form>
                </div>
                <div class="col-5">
                    <img src="../../assets/images/login.png" height="500" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import AuthController from "../../controllers/auth.controller.js";
    export default {
        name: "Login",
        data() {
            return {
                user: "",
                password: "",
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
            async Login() {
                if (this.user == "" || this.password == "") {
                    this.$snotify.error("Vui lòng nhập đầy đủ thông tin");
                    return;
                }
                const response = await AuthController.login(this.user, this.password);

                if (!response.data.isError) {
                    localStorage.setItem("accessToken", response.data.data.access_token.accessToken);
                    this.$snotify.success("Đăng nhập thành công");
                    this.$router.push({
                        name: "exam"
                    });
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
    #login {
        overflow-x: hidden;
    }

    #login img {
        pointer-events: none;
    }

    @media screen and (max-width: 820px) {
        #login img {
            display: none;
        }

        #login .row {
            display: block !important;
        }

        #login .col-5 {
            width: 100% !important;
        }
    }
</style>
