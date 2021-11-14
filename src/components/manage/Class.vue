<template>
    <div id="class">
        <Loader v-if="classRoom == null" />
        <div class="content" v-else>
            <div class="container">
                <div style="display: flex; flex-wrap; width: 100%;">
                    <h2 class="text-center"> Danh sách học sinh: {{ classRoom.name }} </h2>
                    <p style="display: flex;flex-flow: column; justify-content: center;">&nbsp;&nbsp;{{ classRoom.data.filter(x => x.email != this.$store.state.user.email).length }} học sinh</p>
                </div>
                <div style="display: flex; flex-wrap; width: 120px;" class="mb-5">
                    <div class="icon-btn m-auto mt-4" title="Thêm học sinh vào lớp học" data-bs-toggle="modal" data-bs-target="#addStudentModal">
                        <i class="fa fa-plus"></i>
                    </div>
                    <div class="icon-btn m-auto mt-4" title="Link tham gia lớp học" @click="copyLink()">
                        <i class="ri-links-line"></i>
                    </div>
                </div>

                <hr/>

                <div class="table-responsive">
                    <table class="table table-striped custom-table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <label class="control control--checkbox">
                                        <input type="checkbox" class="js-check-all" />
                                        <div class="control__indicator"></div>
                                    </label>
                                </th>
                                <th scope="col">#</th>
                                <th scope="col">Tên</th>
                                <th scope="col">Email</th>
                                <th scope="col">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                scope="row"
                                v-for="(user, index) in classRoom.data.filter(x => x.email != this.$store.state.user.email)"
                                v-bind:item="user.name"
                                v-bind:key="user.name"
                                v-bind:id="`user-${user.email}`"
                            >
                                <td>
                                    <label class="control control--checkbox">
                                        <input type="checkbox" />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>
                                    {{ index + 1 }}
                                </td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="name">{{ user.name }}</a>
                                    </div>
                                </td>
                                <td>
                                    {{ user.email }}
                                </td>
                                <td><a href="#" @click="removeStudent(user.email)">Xóa</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 v-if="!classRoom.data.filter(x => x.email != this.$store.state.user.email).length" class="colorGray text-center">Chưa có học sinh trong lớp học</h3>
                </div>

                <hr/>

                <h2 class="mb-5"> Bài tập: {{ classRoom.exercises.length }} </h2>

                <div class="table-responsive">
                    <table class="table table-striped custom-table">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <label class="control control--checkbox">
                                        <input type="checkbox" class="js-check-all" />
                                        <div class="control__indicator"></div>
                                    </label>
                                </th>
                                <th scope="col">#</th>
                                <th scope="col">Mô tả</th>
                                <th scope="col">Thời gian nộp bài</th>
                                <th scope="col">Tải bài tập</th>
                                <th scope="col">Xóa bài tập</th>
                                <th scope="col">Xem bài làm của học sinh</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                scope="row"
                                v-for="(exercise, index) in classRoom.exercises"
                                v-bind:item="exercise.name"
                                v-bind:key="exercise.idExam"
                                v-bind:id="`user-${exercise.idExam}`"
                            >
                                <td>
                                    <label class="control control--checkbox">
                                        <input type="checkbox" />
                                        <div class="control__indicator"></div>
                                    </label>
                                </td>
                                <td>
                                    {{ index + 1 }}
                                </td>
                                <td class="pl-0">
                                    <div class="d-flex align-items-center">
                                        <a href="#" class="name">{{ exercise.name }}</a>
                                    </div>
                                </td>
                                <td>
                                    {{ exercise.expires_at | moment("YYYY-MM-DD HH:mm") }}
                                </td>
                                <td><a style="cursor: pointer" class="colorPrimary" @click="downloadExercise(exercise.fileUrl)">Tải</a></td>
                                <td><a style="cursor: pointer" class="colorPrimary" @click="removeExercise(exercise.idExam)">Xóa</a></td>
                                <td><router-link :to="'/quan-ly/bai-tap/' + exercise.idExam" style="cursor: pointer" class="colorPrimary">Xem</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                    <h3 v-if="!classRoom.exercises.length" class="colorGray text-center">Lớp học chưa có bài tập nào</h3>
                </div>

            </div>
        </div>

        <div class="modal fade" id="addStudentModal" tabindex="-1" aria-labelledby="addStudentModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">THÊM HỌC SINH</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body mb-5" style="padding: 10px">
                        <form @submit.prevent="AddStudent()">
                            <div class="group">
                                <input
                                    v-model="user.email"
                                    type="text"
                                    oninvalid = "this.setCustomValidity('Vui lòng nhập email học sinh')"
                                    oninput="this.setCustomValidity('');"
                                />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Email</label>
                            </div>

                            <button type="submit" class="btn-primary mt-3">Thêm</button>
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
    import ClassController from "../../controllers/class.controller.js";
    import ExerciseController from "../../controllers/exercise.controller.js";
    import Loader from '../loading/loading-v1.vue';

    export default {
        name: "Class",
        data() {
            return {
                idClass: this.$route.params.id,
                classRoom: null,
                user: {
                    email: ''
                }
            }
        },
        components: {
            Loader
        },
        watch: {
            '$route': async function() {
                await this.checkLogged();
                this.getClass();
            }
        },
        methods: {
            async getClass() {
                const response = await ClassController.getClass(this.idClass);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    this.$router.push({
                        name: "setting"
                    });
                    return;
                }

                this.classRoom = response.data.data[0];
            },
            async downloadExercise(file_name) {
                const response = await ExerciseController.downloadExercise(file_name);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }

                this.$snotify.success("Tải bài tập thành công");

                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', file_name);
                document.body.appendChild(link);
                link.click();
            },
            async removeExercise(id) {
                const response = await ExerciseController.removeExercise(id);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }

                this.$snotify.success(response.data.message);
                this.getClass();
            },
            async AddStudent() {
                const response = await ClassController.addStudent(this.user.email, this.idClass);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }

                this.$snotify.success(response.data.message);
                this.getClass();
            },
            async removeStudent(email) {
                const response = await ClassController.removeStudent(email, this.idClass);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }

                document.getElementById(`user-${email}`).remove();

                this.$snotify.success(response.data.message);
                this.getClass();
            },
            async copyLink() {
                let inputc = document.body.appendChild(document.createElement("input"));
                inputc.value = `http://localhost:8080/tham-gia-lop-hoc/${this.classRoom.idClass}`;
                inputc.focus();
                inputc.select();
                document.execCommand('copy');
                inputc.parentNode.removeChild(inputc);

                this.$snotify.success("Đã copy link tham gia lớp học");
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
        async mounted() {
            await this.checkLogged();
            this.getClass();
        }
    }
</script>

<style scope>
    #class p {
        font-weight: 300;
    }

    #class h1,
    #class h2,
    #class h3,
    #class h4,
    #class h5,
    #class h6,
    #class .h1,
    #class .h2,
    #class .h3,
    #class .h4,
    #class .h5,
    #class .h6 {
        font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    }

    #class a {
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease;
    }

    #class a,
    #class a:hover {
        text-decoration: none !important;
    }

    #class .content {
        padding: 4rem 0;
    }

    #class h2 {
        font-size: 30px;
    }

    .custom-table {
        min-width: 900px;
    }

    .custom-table thead tr,
    .custom-table thead th {
        padding-bottom: 30px;
        border-top: none;
        border-bottom: none !important;
        color: #000;
    }

    .custom-table tbody th,
    .custom-table tbody td {
        color: #777;
        font-weight: 400;
        padding-bottom: 20px;
        padding-top: 20px;
        font-weight: 300;
        border: none;
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease;
    }

    .custom-table tbody th small,
    .custom-table tbody td small {
        color: #b3b3b3;
        font-weight: 300;
    }

    .custom-table tbody tr {
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease;
    }

    .custom-table tbody tr .name {
        text-decoration: line-through;
        position: relative;
        display: inline-block;
    }

    .custom-table tbody tr .name:before {
        content: "";
        height: 2px;
        top: 50%;
        position: absolute;
        left: 0;
        right: 0;
        background: #dc3545;
        opacity: 0;
        visibility: hidden;
    }

    .custom-table tbody tr.active {
        opacity: .4;
    }

    .custom-table tbody tr.active .name:before {
        opacity: 1;
        visibility: visible;
    }

    .custom-table .td-box-wrap {
        padding: 0;
    }

    .custom-table .box {
        background: #fff;
        border-radius: 4px;
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .custom-table .box td,
    .custom-table .box th {
        border: none !important;
    }

    .custom-control.ios-switch {
        --color: #4cd964;
        padding-left: 0;
    }

    .custom-control.ios-switch .ios-switch-control-input {
        display: none;
    }

    .custom-control.ios-switch .ios-switch-control-input:active~.ios-switch-control-indicator::after {
        width: 20px;
    }

    .custom-control.ios-switch .ios-switch-control-input:checked~.ios-switch-control-indicator {
        border: 10px solid var(--color);
    }

    .custom-control.ios-switch .ios-switch-control-input:checked~.ios-switch-control-indicator::after {
        top: -8px;
        left: 4px;
    }

    .custom-control.ios-switch .ios-switch-control-input:checked:active~.ios-switch-control-indicator::after {
        left: 0px;
    }

    .custom-control.ios-switch .ios-switch-control-input:disabled~.ios-switch-control-indicator {
        opacity: .4;
    }

    .custom-control.ios-switch .ios-switch-control-indicator {
        display: inline-block;
        position: relative;
        margin: 0 10px;
        top: 4px;
        width: 32px;
        height: 20px;
        background: #fff;
        border-radius: 16px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        border: 2px solid #ddd;
    }

    .custom-control.ios-switch .ios-switch-control-indicator::after {
        content: '';
        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 16px;
        -webkit-transition: .3s;
        -o-transition: .3s;
        transition: .3s;
        top: 0px;
        left: 0px;
        background: #fff;
        -webkit-box-shadow: 0 0 2px #aaa, 0 2px 5px #999;
        box-shadow: 0 0 2px #aaa, 0 2px 5px #999;
    }

    /* Custom Checkbox */
    .control {
        display: block;
        position: relative;
        margin-bottom: 25px;
        cursor: pointer;
        font-size: 18px;
    }

    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .control__indicator {
        position: absolute;
        top: 2px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 4px;
        border: 2px solid #ccc;
        background: transparent;
    }

    .control--radio .control__indicator {
        border-radius: 50%;
    }

    .control:hover input~.control__indicator,
    .control input:focus~.control__indicator {
        border: 2px solid #007bff;
    }

    .control input:checked~.control__indicator {
        border: 2px solid #007bff;
        background: #007bff;
    }

    .control input:disabled~.control__indicator {
        background: #e6e6e6;
        opacity: 0.6;
        pointer-events: none;
        border: 2px solid #ccc;
    }

    .control__indicator:after {
        font-family: 'icomoon';
        content: '\e5ca';
        position: absolute;
        display: none;
    }

    .control input:checked~.control__indicator:after {
        display: block;
        color: #fff;
    }

    .control--checkbox .control__indicator:after {
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -52%);
        -ms-transform: translate(-50%, -52%);
        transform: translate(-50%, -52%);
    }

    .control--checkbox input:disabled~.control__indicator:after {
        border-color: #7b7b7b;
    }

    .control--checkbox input:disabled:checked~.control__indicator {
        background-color: #007bff;
        opacity: .2;
        border: 2px solid #007bff;
    }
</style>
