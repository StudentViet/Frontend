<template>
    <header>
        <div id="header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <router-link class="font-bold colorPrimary" to="/" style="font-size: 25px;"><img src="../../assets/logoNavbar.jpg" height="60"/></router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav mx-auto navbar-center">
                            <li><router-link to="/quan-ly/" class="font-bold">BÀI TẬP</router-link></li>
                            <li><router-link to="/quan-ly/thoi-khoa-bieu/" class="font-bold font-inactive">THỜI KHÓA BIỂU</router-link></li>
                        </ul>
                        <ul class="navbar-nav">
                            <div class="icon-btn">
                                <div class="amount">
                                    <p>2</p>
                                </div>
                                <i class="ri-notification-3-fill"></i>
                            </div>
                            <div class="dropdown">
                                <div class="icon-btn" id="settingBtn">
                                    <i class="ri-settings-5-fill"></i>
                                </div>
                                <ul class="dropdown-menu" id="dropdownOptions" aria-labelledby="dropdownOptions">
                                    <li><a class="dropdown-item" style="color: red" @click="logout()">Đăng xuất</a></li>
                                </ul>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'Header-v1',
        mounted() {
            this.doFunctions();
        },
        methods: {
            doFunctions() {
                const exam = document.querySelectorAll('.navbar-center > li > a')[0];
                const schedule = document.querySelectorAll('.navbar-center > li > a')[1];
                const settingBtn = document.querySelector('#settingBtn');

                exam.onclick = () => {
                    if (!exam.classList.contains('font-inactive')) return;
                    exam.classList.toggle('font-inactive');
                    schedule.classList.toggle('font-inactive');
                };

                schedule.onclick = () => {
                    if (!schedule.classList.contains('font-inactive')) return;
                    exam.classList.toggle('font-inactive');
                    schedule.classList.toggle('font-inactive');
                };

                settingBtn.onclick = () => document.querySelector('#dropdownOptions').classList.toggle("dropdown-active");
            },
            logout() {
                localStorage.setItem('accessToken', '');
                this.$router.push({
                    name: "login"
                });
            }
        }
    }
</script>

<style>

nav {
    padding: 20px;
    z-index: 100;
}

.bg-light {
    background: white !important;
}

.logo {
    font-size: 25px;
    font-weight: 500px;
    letter-spacing: 1px;
}
.icon-btn {
    position: relative;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: rgb(240, 242, 245);
    text-align: center;
    margin-top: 15px;
    margin-left: 10px;
    padding-top: 13px;
    cursor: pointer;
    transition: 0.2s;
}
.icon-btn:hover {
    background: silver;
}
.icon-btn:hover .amount {
    background: #ab261d;
    color: gray;
}
.icon-btn .amount {
    background: red;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
    height: 20px;
    color: white;
    font-size: 13px;
    text-align: center;
    font-weight: bold;
    border-radius: 50%;
    transition: 0.2s;
}

.navbar-center li {
    margin: 10px;
}

.navbar-center a {
    font-size: 18px;
}

@media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute;
        right: 20px;
    }
    .dropdown-active {
        display: block !important;
    }
}

</style>
