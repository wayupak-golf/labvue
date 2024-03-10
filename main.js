const product = 'Socks'
const {createApp, ref} = Vue

createApp({
    setup() {
        const product = ref('Boots')
        const image = ref('./assets/images/socks_green.jpg')
        const inStock = ref(false)
        const inventory = ref(0)
        return { 
            product, 
            image,
            inStock,
            inventory
        }
    }  
}).mount('#app')