<template>
<nav class="navbar is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <!-- brand -->
        <router-link style="color:inherit" to="/">
            <h2 class="is-size-4">MANIFESTO</h2>
        </router-link>
        <!-- <a role="button" class="navbar-burger" data-target="nav-menu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a> -->
    </div>
    <div class="navbar-menu" id="nav-menu">
        <div class="navbar-end">
            <!-- <div class="navbar-item"></div> -->
        </div>
    </div>
</nav>
</template>

<script>
export default {
    name: 'NavBar',
    data: () => { return {}},
    methods: {},
    mounted: () => {                                // NAVBAR TOGGLE
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
        $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
                const target_el = document.getElementById( el.dataset.target );
                el.classList.toggle('is-active');
                target_el.classList.toggle('is-active');
            });
        });
    },
    watch: {
        $route(to, from) {     // hide menus on route changes
            const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
            $navbarBurgers.forEach( el => {
                // get target from "data-target"
                const target_el = document.getElementById( el.dataset.target );
                el.classList.remove('is-active');
                target_el.classList.remove('is-active');
            });
        }
    }
};

</script>

<style lang="scss" scoped>
.navbar .navbar-brand {
  text-align: center;
  display: block;
  width: 100%;
}

.navbar .navbar-brand > .navbar-item,
.navbar .navbar-brand .navbar-link {
  display: inline-block;
}
</style>
