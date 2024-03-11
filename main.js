const product = 'Socks'
const {createApp, ref, computed} = Vue

createApp({
    setup() {
        const product = ref('Boots')
        const brand = ref('SE 331')
        // const image = ref('./assets/images/socks_green.jpg')
        // const inStock = ref(false)
        const inventory = ref(100)
        const details = ref([
            '50% cotton', 
            '30% wool', 
            '20% polyester'
        ])
        const variants = ref([
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ])

        const selectedVariant = ref(0)
        const cart = ref(0)

        const onSale = ref(true)

        function addToCart() {
            cart.value += 1
        }

        const title = computed(() => {
            return brand.value + ' ' + brand.value
        })

        const image = computed(() => {
            return variants.value[selectedVariant.value].image
        })

        const inStock = computed(() => {
            return variants.value[selectedVariant.value].quantity
        })


        function updateImage(variantImage) {
            image.value = variantImage
        }

        function updateVariant(index) {
            selectedVariant.value = index;
        }

        const saleStatus = computed(() => {
            if (onSale.value) {
                return `${brand.value} ${product.value} is on sale!`;
            } else {
                return '';
            }
        });
        



        return { 
            title,
            image,
            inStock,
            inventory,
            details,
            variants,
            cart,
            addToCart,
            updateImage,
            updateVariant,
            saleStatus
        }
    }  
}).mount('#app')