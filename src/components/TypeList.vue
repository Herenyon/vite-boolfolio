<script>
import axios from 'axios';
import store from '../store';
export default {
    name: 'TypeList',
    data() {
        return {
            store,
            currentType: '',
            types: []
        }
    },
    methods: {
        getTypes() {
            axios.get(`${this.store.apiBaseUrl}/types`).then((response) => {
                this.types = response.data.result;
                console.log(this.types)
            })
        },
        changePage() {
            this.$router.push({
                name: 'types', params: {
                    slug: this.currentType

                }
            })

        }

    },
    created() {
        this.getTypes();
    }
}
</script>
<template>
    <select name="" id="" class="form-select" @change="changePage" v-model="currentType">
        <option :value="type.slug" v-for="type in types">{{ type.name }}</option>

    </select>
</template>