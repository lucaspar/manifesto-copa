import Vue      from 'vue';
import App      from '@/core/App';                      // main component
import store    from '@/core/store';                    // vuex store
import router   from '@/core/router';                   // vue-router

new Vue({
    store,
    router,
    components: { App },
    template: '<App/>'
}).$mount('#app');
