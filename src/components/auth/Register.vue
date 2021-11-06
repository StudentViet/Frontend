<template>
    <div id="register">
        <div class="container mt-3">
            <div class="container">
                <a href="#">
                    <h5 class="colorPrimary">Chào mừng bạn đến với <span class="colorPrimary font-bold">StudentViet</span> ! </h5>
                </a>
                <form>
                    <div class="row">
                        <div class="col-6">
                            <div class="group">
                                <input type="text" required oninvalid="this.setCustomValidity('Vui lòng nhập họ và tên đầy đủ')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Họ và Tên</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="group ml-5">
                                <input type="text" required oninvalid="this.setCustomValidity('Vui lòng nhập email đầy đủ')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="group">
                                <input type="number" required oninvalid="this.setCustomValidity('Vui lòng nhập đúng số điện thoại')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Số điện thoại</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="group ml-5">
                                <input type="date" id="datePicker" required oninvalid="this.setCustomValidity('Vui lòng nhập ngày sinh')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Ngày sinh</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="group">
                                <input type="text" required oninvalid="this.setCustomValidity('Vui lòng nhập tên trường')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Tên trường học</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="group ml-5">
                                <input type="text" required oninvalid="this.setCustomValidity('Vui lòng nhập lớp')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Lớp</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="group">
                                <input type="password" required oninvalid="this.setCustomValidity('Vui lòng đặt mật khẩu')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Mật khẩu</label>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="group ml-5">
                                <input type="password" required oninvalid="this.setCustomValidity('Vui lòng xác nhận mật khẩu')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Xác nhận mật khẩu</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mt-4">
                        <select class="form-select" required>
                            <option value="">Vai trò của tôi</option>
                            <option value="0">Tôi là học sinh</option>
                            <option value="1">Tôi là giáo viên</option>
                        </select>
                    </div>
                    <div class="group">
                        <button type="submit" class="btn-primary">
                            <span class="font-bold">Đăng ký</span>
                        </button>
                        <p class="text-center colorGray" style="font-size: 14px;">Hoặc</p>
                        <button type="button" class="btn-primary">
                            <i class="fa fa-facebook-square" style="font-size: 20px; margin-right: 5px;"></i>
                            <span class="font-bold">Đăng ký / Đăng nhập bằng facebook</span>
                        </button>
                        <p class="text-center colorGray" style="font-size: 15px;"> Đã có tài khoản ? <router-link to="/login" class="font-bold colorPrimary">Đăng nhập</router-link> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Register',
        mounted() {
            Date.prototype.toDateInputValue = (function() {
                var local = new Date(this);
                local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
                return local.toJSON().slice(0,10);
            });

            document.getElementById('datePicker').value = new Date().toDateInputValue();
        }
    }
</script>

<style>

</style>
