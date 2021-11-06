<template>
    <div id="login">
        <div class="container mt-3">
            <div class="row container">
                <div class="col-5">
                    <a href="#">
                        <h5 class="colorPrimary">Chào mừng bạn đến với <span class="colorPrimary font-bold">StudentViet</span> ! </h5>
                    </a>
                    <form>
                        <div class="group">
                            <input type="text" required oninvalid="this.setCustomValidity('Vui lòng nhập email hoặc số điện thoại')" oninput="this.setCustomValidity('')">
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Email hoặc số điện thoại</label>
                        </div>
                        <div class="group">
                            <input type="password" required oninvalid="this.setCustomValidity('Vui lòng nhập mật khẩu')" oninput="this.setCustomValidity('')">
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Mật khẩu</label>
                        </div>
                        <div class="group">
                            <button type="submit" class="btn-primary">
                                <span class="font-bold">Đăng nhập</span>
                            </button>
                            <p class="text-center colorGray" style="font-size: 14px;">Hoặc</p>
                            <button type="button" class="btn-primary">
                                <i class="fa fa-facebook-square" style="font-size: 20px; margin-right: 5px;"></i>
                                <span class="font-bold">Đăng ký / Đăng nhập bằng facebook</span>
                            </button>
                            <p class="text-center colorGray" style="font-size: 15px;"> Quên mật khẩu ? <router-link to="/quen-mat-khau" class="font-bold colorPrimary">Lấy lại mật khẩu</router-link> </p>
                            <p class="text-center colorGray" style="font-size: 15px;"> Chưa có tài khoản ? <router-link to="/dang-ky" class="font-bold colorPrimary">Đăng ký</router-link> </p>
                        </div>
                    </form>
                </div>
                <div class="col-5">
                    <img src="../../assets/images/login.png" height="500"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login'
    }
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
