<script>
export default {
    name: 'Main',
    props: {
        data: Object
    }
}
</script>

<template>
    <main class="container">
        <h1>Main</h1>
        <div class="col col-md-4" v-for="portf in data">
            <div class="card my-4 gy-4">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ portf.repo_title }}</h5>
                    <p class="card-text">{{ portf.description }}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </main>
</template>