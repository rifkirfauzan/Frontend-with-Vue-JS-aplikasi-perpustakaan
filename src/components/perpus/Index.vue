<template>
    <div class="perpus">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                           DATA PERPUS
                        </div>
                        <div class="card-body">
                            <router-link :class="['btn btn-md btn-success mb-2']" to="/create">TAMBAH DATA</router-link>
                            <hr>

                            <div class="table-responsive mt-2">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>NAMA_BUKU</th>
                                        <th>PENULIS</th>
                                        <th>PENGARANG</th>
                                        <th>KETERANGAN</th>
                                        <th>AKSI</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="perpus in perpus" :key="perpus.id">
                                        <td>{{ perpus.nama_buku }}</td>
                                        <td>{{ perpus.penulis }}</td>
                                        <td>{{ perpus.pengarang }}</td>
                                        <td>{{ perpus.ketersediaan }}</td>
                                        <td class="text-center">
                                            <router-link :to="{name: 'edit', params: { id: perpus.id }}" class="btn btn-sm btn-primary mr-2">EDIT</router-link>
                                            <button @click.prevent="PerpusDelete(perpus.id)" class="btn btn-sm btn-danger">HAPUS</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

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
                perpus: []
            }
        },
        created() {
            axios.get('http://localhost:8000/perpus').then(response => {
                this.perpus = response.data.data;
            });
        },
        methods: {
            PerpusDelete(id)
            {
                axios.delete(`http://localhost:8000/perpus/${id}`)
                    .then(response => {
                        this.perpus.splice(this.perpus.indexOf(id), 1);
                        console.log(response);
                    }).catch(error => {
                    console.log(error.response);
                });
            }
        }

    }
</script>