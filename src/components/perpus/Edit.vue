<template>
    <div class="perpus">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            EDIT DATA PERPUS
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="PerpusUpdate">

                                <div class="form-group">
                                    <label>NAMA BARANG</label>
                                    <input type="text" class="form-control" v-model="perpus.nama_buku"
                                           placeholder="Masukkan nama_buku">
                                    <div v-if="validation.nama_buku">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.nama_buku[0] }}
                                        </div>
                                    </div>
                                </div>
                
                                  <div class="form-group">
                                    <label>penulis</label>
                                    <input type="text" class="form-control" v-model="perpus.penulis"
                                           placeholder="Masukkan pengarang">
                                    <div v-if="validation.penulis">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.penulis[0] }}
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label>pengarang</label>
                                    <input type="text" class="form-control" v-model="perpus.pengarang"
                                           placeholder="Masukkan pengarang">
                                    <div v-if="validation.pengarang">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.pengarang[0] }}
                                        </div>
                                    </div>
                                </div>


                                <div class="form-group">
                                    <label>ketersediaan</label>
                                    <input type="text" class="form-control" v-model="perpus.ketersediaan"
                                           placeholder="Masukkan ketersediaan">
                                    <div v-if="validation.ketersediaan">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.ketersediaan[0] }}
                                        </div>
                                    </div>
                                </div>
                                

                                <div class="form-group">
                                    <button type="submit" class="btn btn-md btn-success mr-2">UPDATE</button>
                                    <button type="reset" class="btn btn-md btn-danger">RESET</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                perpus: {},
                validation: []
            }
        },
        created() {
            axios.get(`http://localhost:8000/perpus/${this.$route.params.id}`)
                .then((response) => {
                this.perpus = response.data.data;
            });
        },
        methods: {
            PerpusUpdate() {
                axios.put(`http://localhost:8000/perpus/${this.$route.params.id}`, this.perpus)
                    .then((response) => {
                        this.$router.push({
                            name: 'perpus'
                        });
                        console.log(response);
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>