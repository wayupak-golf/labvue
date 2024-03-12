const product = 'Socks'
const {createApp, ref, computed} = Vue

const app = createApp ({
    setup() {
        const cart = ref([])
        const premium = ref(true)
        function updateCart(id) {
            cart.value.push(id)
        }
        return { 
            cart,
            premium,
            updateCart
        }
    }  
})

app.component('review-form', reviewform);

app.component('review-list', reviewList);

app.component('product-display', productDisplay)



app.mount('#app')