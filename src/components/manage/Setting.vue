<template>
    <div id="setting">
        <Loader v-if="classRooms == null"/>
        <div class="container" v-else>
            <div class="row">
                <div class="col-md-12">
                    <div class="center-template">
                        <div v-if="!classRooms.length" class="mt-3">
                            <img class="text-center" src="../../assets/images/empty.png" height="250"/>
                            <h2 class="colorGray text-center mt-4">Bạn chưa có lớp học nào, hãy tạo một lớp học</h2>
                            <div class="icon-btn m-auto mt-4" title="Tạo lớp học" data-bs-toggle="modal" data-bs-target="#createClassModal">
                                <i class="fa fa-plus"></i>
                            </div>
                        </div>

                        <div v-else class="mt-3">
                            <div style="display: flex; flex-wrap; width: 120px; margin: 0 auto">
                                <div class="icon-btn m-auto mt-4" title="Tạo lớp học" data-bs-toggle="modal" data-bs-target="#createClassModal">
                                    <i class="fa fa-plus"></i>
                                </div>
                                <div class="icon-btn m-auto mt-4" title="Tạo bài tập" data-bs-toggle="modal" data-bs-target="#addExerciseModal">
                                    <i class="ri-file-add-fill"></i>
                                </div>
                            </div>
                            <div
                                class="classRoom mb-5"
                                style="position: relative"
                                v-for="(classRoom, index) in classRooms"
                                v-bind:item="classRoom.name"
                                v-bind:index="index"
                                v-bind:key="classRoom.idClass"
                            >
                            <a style="cursor: pointer; color: red; position: absolute; top: 10px; right: 0;" @click="deleteClass(classRoom.idClass)">Xóa</a>
                                <router-link :to="`/quan-ly/giao-vien/lop-hoc/${classRoom.idClass}`" style="color: black !important;">
                                    <h2> {{ classRoom.name }} </h2>
                                    <p> {{(classRoom.exercises > 0) ? `Lớp học có ${classRoom.exercises} bài tập` : "Lớp học chưa có bài tập nào"}} </p>
                                    <hr/>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="createClassModal" tabindex="-1" aria-labelledby="createClassModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" style="height: 550px">
                    <div class="modal-header">
                        <h5 class="modal-title">TẠO LỚP HỌC</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body mb-5" style="padding: 10px">
                        <form @submit.prevent="createClass()">
                            <div class="group">
                                <input
                                    v-model="name"
                                    type="text"
                                    oninvalid = "this.setCustomValidity('Vui lòng nhập tên lớp học')"
                                    oninput="this.setCustomValidity('');"
                                />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Tên lớp học</label>
                            </div>

                            <div class="group">
                                <input
                                    v-model="data"
                                    type="text"
                                    oninput="this.setCustomValidity('')"
                                />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Thêm học sinh (thêm bằng email và cách nhau một dấu phẩy)</label>
                            </div>

                            <button type="submit" class="btn-primary mt-3">Tạo</button>

                            <p class="text-center colorPrimary" style="font-size: 20px" v-if="classLink"><span class="colorGray">Link: </span> {{ classLink }} </p>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal fade" id="addExerciseModal" tabindex="-1" aria-labelledby="addExerciseModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">TẠO BÀI TẬP</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body mb-5" style="padding: 10px">
                        <form @submit.prevent="addExercise()">
                            <div class="group">
                                <input
                                    v-model="exercise.name"
                                    type="text"
                                    oninvalid="this.setCustomValidity('Vui lòng chọn một file word')"
                                    oninput="this.setCustomValidity('')"
                                />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Tên bài tập</label>
                            </div>

                            <div class="group">
                                <input v-model="exercise.date" type="date" id="datePicker" oninput="this.setCustomValidity('')" />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Ngày nộp (Tháng - Ngày - Năm)</label>
                            </div>

                            <div class="group">
                                <input v-model="exercise.time" type="time" id="timePicker" oninput="this.setCustomValidity('')" />
                                <span class="highlight"></span>
                                <span class="bar"></span>
                                <label>Thời gian nộp</label>
                            </div>

                            <div class="mt-3">
                                <treeselect class="mt-2" v-model="exercise.classes" :multiple="true" :options="options" placeholder="Chọn lớp học..." />
                            </div>

                            <div class="mt-3">
                                <label for="formFile" class="form-label colorPrimary">Bài tập</label>
                                <input class="form-control" type="file" accept="application/msword" @change="onFileChange">
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
    import Treeselect from '@riophae/vue-treeselect';
    import '@riophae/vue-treeselect/dist/vue-treeselect.css';

    import ManageController from "../../controllers/manage.controller.js";
    import ExerciseController from "../../controllers/exercise.controller.js";
    import Loader from '../loading/loading-v1.vue';

    export default {
        name: 'Setting',
        data() {
            return {
                name: "",
                data: "",
                classRooms: null,
                classLink: null,
                exercise: {
                    classes: [],
                    name: "",
                    date: null,
                    time: null,
                    file: null,
                },
                options: []
            }
        },
        components: {
            Loader,
            Treeselect
        },
        watch: {
            '$route': async function () {
                await this.checkLogged();
                this.getClass();
            }
        },
        methods: {
            ValidateEmail(email) {
                const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return regex.test(String(email).toLowerCase());
            },
            async createClass() {
                let error = false, self = this;
                this.data.replaceAll(' ', '');
                this.data.split(',').map(x => error = !self.ValidateEmail(x) );

                if (error && this.data.length) {
                    this.$snotify.error("Định dạng email thêm học sinh của bạn không hợp lệ");
                    return;
                }

                const response = await ManageController.createClass(this.name, this.data.split(','));

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }

                this.classLink = `http://localhost:8080/tham-gia-lop-hoc/${response.data.idClass}`
                this.$snotify.success(response.data.message);
                this.getClass();
            },
            async deleteClass(id) {
                const response = await ManageController.deleteClass(id);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }

                this.$snotify.success(response.data.message);
                this.getClass();
            },
            async addExercise() {
                if (this.exercise.name == '' || this.exercise.classes == [] || !this.exercise.date || !this.exercise.time || !this.exercise.file) {
                    this.$snotify.error("Vui lòng nhập đầy đủ thông tin bài tập");
                    return;
                }

                const expires_at = `${this.exercise.date} ${this.exercise.time}`
                const response = await ExerciseController.addExercise(this.exercise.classes.join(','), this.exercise.name, this.exercise.file, expires_at);

                if (response.data.isError) {
                    this.$snotify.error(response.data.message);
                    return;
                }

                this.$snotify.success(response.data.message);
                this.getClass();

            },
            async onFileChange(e) {
                this.exercise.file = e.target.files[0];
            },
            async getClass() {
                const response = await ManageController.getClass();
                this.classRooms = response.data.data.length ? response.data.data : [];
                this.options = [];
                this.classRooms?.map(x => this.options.push({ id: x.idClass, label: x.name}));
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

<style>
</style>
