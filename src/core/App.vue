<template>
    <div id="wrapper">
        <NavBar/>
        <transition name="slide-fade">
            <router-view></router-view>
        </transition>
        <Footer/>
    </div>
</template>

<script>
import NavBar   from '@/components/Global/NavBar';
import Footer   from '@/components/Global/Footer';

export default {
    name: 'app',
    components: { NavBar, Footer },
    data() { return {} }
}
</script>

<style lang="scss">
@import 'app';

// Animations
.slide-fade-enter-active {          // entering animation
    transition: all 0.4s ease;
}
.slide-fade-leave-active {          // leaving animation
    transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter-to {              // entering delay
    transition-delay: 0.3s;
}
.slide-fade-enter, .slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}

// Centering styled checkboxes with margin
.b-checkbox {
    margin: 8px;    // 17/2 truncated
}

</style>
