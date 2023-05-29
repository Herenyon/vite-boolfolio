<script>
import axios from 'axios';
export default {
    name: "DetailPage",
    data() {
        return {
            apiBaseUrl: "http://127.0.0.1:8000/api",
            apiUrl: {
                portfs: "/portf"
            },
            port: null,
        }
    },
    methods: {
        getPortfs() {
            axios.get(this.apiBaseUrl + this.apiUrl.portfs + "/" + this.$route.params.slug)
                .then((response) => {
                    this.port = response.data.result;

                })
        }

    },
    created() {
        this.getPortfs()
    }
}

</script>
<template>
    <section>
        <div class="container">
            <h2>{{ port.repo_title }}</h2>
            <p>{{ port.description }}</p>
        </div>
    </section>
</template>
