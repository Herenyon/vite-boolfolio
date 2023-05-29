<script>
import TypeList from './TypeList.vue';
export default {
    name: 'Header',
    components: { TypeList }
}
</script>

<template>
    <header class="container">
        <h1>Header</h1>
        <nav>
            <ul class="list-unstyled m-0 p-0 gap-2 d-flex">
                <li>
                    <router-link :to="{ name: 'home' }" class="nav-link">
                        Home
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'portf' }" class="nav-link">
                        Portf
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'about' }" class="nav-link">
                        About
                    </router-link>
                </li>
                <li>
                    <TypeList />
                </li>

            </ul>
        </nav>
    </header>
</template>