<template>
    <div id="forgotPassword">
        <div class="container">
            <div class="container formWindow" style="padding: 30px">
                <h3 class="colorPrimary" style="margin: 10px;">Tìm lại mật khẩu</h3>
                <form id="form-phone">
                    <div class="row">
                        <div class="col-8">
                            <div class="group">
                                <input type="number" required oninvalid="this.setCustomValidity('Vui lòng nhập số điện thoại')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Nhập số điện thoại</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn-primary mt-5">Tiếp tục</button>
                        </div>
                    </div>
                </form>
                <form id="form-email">
                    <div class="row">
                        <div class="col-8">
                            <div class="group">
                                <input type="text" required oninvalid="this.setCustomValidity('Vui lòng nhập email')" oninput="this.setCustomValidity('')">
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Nhập email</label>
                            </div>
                        </div>
                        <div class="col-4">
                            <button type="submit" class="btn-primary mt-5">Tiếp tục</button>
                        </div>
                    </div>
                </form>
                <button id="selectPhone" class="btn-select btn-selected">Số điện thoại</button>
                <button id="selectEmail" class="btn-select mt-3">Email</button>
                <p class="mt-5">
                    <router-link to="/dang-nhap" style="position: absolute; bottom: 20px">Quay lại</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Forgot Password',

        mounted() {
            const selectPhone = document.getElementById("selectPhone");
            const selectEmail = document.getElementById("selectEmail");
            const formPhone = document.getElementById("form-phone");
            const formEmail = document.getElementById("form-email");

            selectPhone.onclick = function() {
                selectPhone.classList.toggle("btn-selected");
                selectEmail.classList.toggle("btn-selected");
                formPhone.style.display = "block";
                formEmail.style.display = "none";
            }

            selectEmail.onclick = function() {
                selectPhone.classList.toggle("btn-selected");
                selectEmail.classList.toggle("btn-selected");
                formPhone.style.display = "none";
                formEmail.style.display = "block";
            }
        }
    }
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

#form-phone {
    display: block;
}

#form-email {
    display: none;
}

.btn-select {
    width: 130px;
    height: 50px;
    border:none;
    color: rgb(30, 136, 229);
    background: white;
    border-radius: 5px;
    border-bottom: none;
    transition: 0.2s;
    border: 1px solid rgb(30, 136, 229);
    margin: 5px;
}

.btn-selected {
    background: rgb(30, 136, 229);
    color: white;
    pointer-events: none;
}

</style>
