<template>
    <div id="home">
        <Header />
        <div class="container mt-5">
            <div class="row">
                <div class="col-5">
                    <h1 class="colorPrimary font-bold mb-3">StudentViet</h1>
                    <h2 class="font-bold">Tại sao lại chọn StudentViet?</h2>
                    <p>StudentViet là một ứng dụng học tập ngay trên nền tảng web, rất tiện lợi cho giáo viên và học sinh.</p>
                    <p>Để sử dụng StudentViet, giáo viên và học sinh chỉ cần truy cập trang web, đăng nhập vào tài khoản và tham gia lớp học qua đường link của giáo viên.</p>
                </div>
                <div class="col-6">
                    <img src="../assets/images/welcome.png" height="300" id="welcome"/>
                </div>
            </div>
            <div class="mt-5">
                <h1 class="font-bold text-center">Giới thiệu</h1>
                <div id="display-flex-wrap" class="mt-5">
                    <div class="square" style="height: 420px;">
                        <h2 class="font-bold">Sáng lập</h2>
                        <p>StudentViet được sáng lập bởi nhóm của chúng em:</p>
                        <p><i>Châu Nguyễn Thanh Duy</i></p>
                        <p><i>Nguyễn Dương Thuận Phát</i></p>
                        <p><i>Hồ Minh Nhựt</i></p>
                        <p>Thuộc trường THCS Nguyễn Chí Thanh, Cao Lãnh.</p>
                        <p>Trong cuộc thi khoa học kĩ thuật THCS 2021-2022.</p>
                    </div>
                    <div class="square" style="height: 420px;">
                        <h2 class="font-bold">Tại sao lại tạo trang web này?</h2>
                        <p>Dưới sự ảnh hưởng của dịch bệnh covid-19, việc học tập đến trường ngày càng khó khăn hơn.</p>
                        <p>Do đó chúng ta nên cần các ứng dụng về học tập phù hợp với tình hình hiện tại và ứng dụng học tập đó phải dễ sử dụng và tiện lợi đối với học sinh và giáo viên.</p>
                        <p>Và đó là lí do mà chúng em cùng nhau tạo nên trang web học tập thuận tiện này <span class="font-bold">StudentViet</span>.</p>
                    </div>
                </div>
            </div>

            <div class="mt-5">
                <h1 class="font-bold text-center">Tính năng</h1>
                <p class="text-center" style="font-size: 23px;"><span class="font-bold colorPrimary">StudentViet</span> có gì vượt trội hơn so với các ứng dụng học tập online khác ?</p>
                <div id="display-flex-wrap" class="mt-5">
                    <div class="square" style="height: 270px;">
                        <h2 class="font-bold">Google meet</h2>
                        <p>Google meet là một trang web học online khác tiện, khá nhanh và không cần phải download về máy, tuy vậy nó vẫn chưa tiện lợi như không chia lớp học, không thể giao bài tập, không thể tạo thời khóa biểu.</p>
                    </div>
                    <h1 id="plus">+</h1>
                    <div class="square" style="height: 270px;">
                        <h2 class="font-bold">Microsoft teams</h2>
                        <p>Microsoft teams là một ứng dụng có đầy đủ tính năng như tạo lớp, giao bài tập, tạo thời khóa biểu nhưng nó khá chậm đặc biệt là đối với các máy yếu. Đồng thời còn bị một số tình trạng như mất kết nối và màn hình đen trong giữa lúc học, gây khá nhiều bất tiện.</p>
                    </div>
                </div>

                <p class="text-center mt-5" style="font-size: 23px;"> Cộng lại các ưu điểm của 2 ứng dụng <b>Google meet</b> và <b>Microsoft teams</b> ta được một ứng dụng hoàn hảo mới</p>
                <h3 class="font-bold colorPrimary text-center">StudentViet</h3>
                <div class="row mt-5" style="height: 300px;margin-bottom: 20px;">
                    <div class="col">
                        <h2 class="text-center">Giáo viên</h2>
                        <br/>
                        <div style="display: flex; flex-wrap: wrap;">
                            <div class="circle">Tạo lớp học</div>
                            <div class="circle">Giao bài tập</div>
                            <div class="circle">Tạo TKB</div>
                        </div>
                    </div>
                    <div class="col" id="border">
                        <h2 class="text-center">Học sinh</h2>
                        <br/>
                        <div style="display: flex; flex-wrap: wrap;">
                            <div class="circle">Làm bài tập</div>
                            <div class="circle">Xem thời TKB</div>
                            <div class="circle">Tham gia lớp học</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './headers/Header-v2.vue';
    export default {
        name: "Home",
        components: {
            Header
        }
    }
</script>

<style>

#home {
    font-family: Roboto !important;
    font-style: normal !important;
    font-weight: normal !important;
    line-height: 33px !important;
}

.square {
    max-width: 450px;
    border-radius: 10px;
    background: #2f94c5;
    color: white;
    padding: 15px;
    margin: auto;
}

.circle {
    width: 120px;
    height: 120px;
    background: #2f94c5;
    color: white;
    border-radius: 60%;
    margin: auto;
    text-align: center;
    justify-items: center;
    align-items: center;
    padding-top: 40px;
}

#border {
    border-left: 1px solid black;
}

#display-flex-wrap {
    display: flex;
    flex-wrap: wrap;
}

#plus {
    margin-top: 100px;
}

#home p {
    font-size: 18px;
}

@media (max-width: 871px) {
    #welcome {
        display: none;
    }
    #home .row {
        display: block !important;
    }

    #home .col-5 {
        width: 100% !important;
    }
    #home .col-6 {
        width: 100% !important;
    }

    #home #border {
        border: none;
    }

    #home #display-flex-wrap {
        display: block;
    }

    #home .square {
        margin-top: 10px;
    }

    #home #plus {
        margin: 0;
        text-align: center;
    }
}

@media (max-width: 305px) {
    #home .square {
        height: 470px !important;
    }
}
</style>
