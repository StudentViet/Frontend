<template>
    <div id="manage">
        <Header />

        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="center-template">
                        <img class="text-center" src="../../assets/images/empty.png" height="250"/>
                        <h2 class="colorGray text-center mt-4">Bạn chưa tham gia lớp học nào</h2>
                        <div class="icon-btn m-auto mt-4" title="Tham gia lớp học" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <i class="fa fa-plus" style="font-size: 20px"></i>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-6">
                    <h2 class="colorPrimary font-bold">THỜI KHÓA BIỂU</h2>
                    <p class="colorGray text-center mt-4" style="font-size: 20px">Hãy tham gia lớp học để nhận được thời khóa biểu</p>
                    <div class="icon-btn m-auto mt-4" title="Tham gia lớp học" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="fa fa-plus" style="font-size: 20px"></i>
                    </div>
                </div>
                <div class="col-6" style="border-left: 1px solid gray">
                    <h2 class="colorPrimary font-bold">BÀI TẬP</h2>
                    <p class="colorGray text-center mt-3" style="font-size: 20px">Hãy tham gia lớp học để nhận được bài tập</p>
                    <div class="icon-btn m-auto mt-4" title="Tham gia lớp học" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i class="fa fa-plus" style="font-size: 20px"></i>
                    </div>
                </div> -->
            </div>
        </div>

        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body mb-5" style="padding: 10px">
                        <form>
                            <div class="group">
                                <input
                                    type="text"
                                    required
                                    oninvalid = "this.setCustomValidity('Vui lòng nhập ID lớp học')"
                                    oninput="this.setCustomValidity('')"
                                />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>ID lớp học</label>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import Header from '../headers/Header-v1.vue';

    export default {
        name: 'Manage',

        components: {
            Header
        }
    }
</script>

<style>

#manage .col-6 h2 {
    text-align: center;
}

#manage img {
    pointer-events: none;
}

</style>
