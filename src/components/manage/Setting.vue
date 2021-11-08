<template>
    <div id="setting">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="center-template">
                        <img class="text-center" src="../../assets/images/empty.png" height="250"/>
                        <h2 class="colorGray text-center mt-4">Bạn chưa có lớp học nào, hãy tạo một lớp học</h2>
                        <div class="icon-btn m-auto mt-4" title="Tạo lớp học" data-bs-toggle="modal" data-bs-target="#createClassModal">
                            <i class="fa fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="createClassModal" tabindex="-1" aria-labelledby="createClassModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-body mb-5" style="padding: 10px">
                        <form @submit.prevent="CreateClass()">
                            <div class="group">
                                <input
                                    v-model="name"
                                    type="text"
                                    required
                                    oninvalid = "this.setCustomValidity('Vui lòng nhập tên lớp học')"
                                    oninput="this.setCustomValidity('')"
                                />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Tên lớp học</label>
                            </div>

                            <div class="group">
                                <input
                                    v-model="data"
                                    required
                                    type="text"
                                    oninput="this.setCustomValidity('')"
                                />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Thêm học sinh (email hoặc số điện thoại, cách nhau một dấu phẩy)</label>
                            </div>

                            <button type="submit" class="btn-primary mt-3">Tạo</button>
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
    import ManageController from "../../controllers/manage.controller.js";

    export default {
        name: 'Setting',
        data() {
            return {
                name: "",
                data: ""
            }
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
            ValidatePhone(phone) {
                const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
                return regex.test(phone);
            },
            async CreateClass() {
                let error = false, self = this;
                this.data.split(', ').map(x => { if (!self.ValidateEmail(x) && !self.ValidatePhone(x)) error = true });

                if (error) {
                    this.$snotify.error("Định dạng email hoặc số điện thoại thêm học sinh của bạn không hợp lệ");
                    return;
                }

                const response = await ManageController.createClass(this.name, this.data.split(', '));
                console.log(response);

                if (!response.data.isError) {
                    this.$snotify.success(response.data.message);
                    return;
                }

                this.$snotify.error(response.data.message);
            },
            async checkLogged() {
                const response = await this.$store.dispatch('getUser');

                if (!response) {
                    this.$router.push({
                        name: "login"
                    });
                    return;
                }

                if (response.role_id == 2) {
                    this.$router.push({
                        name: "exam"
                    });
                    return;
                }
            }
        },
        mounted() {
            this.checkLogged();
        }
    }
</script>

<style>

</style>
