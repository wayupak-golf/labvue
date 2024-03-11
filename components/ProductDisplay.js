const productDisplay = { 
    emits: ['add-to-cart'],
    template: `<div class = "product-display">
    <div class = "produc-container">
        <div class = "product-image">
            <!--image goes here-->
            <img :src="image">
        </div>
    </div>
</div>
<div class = "product-info">
    <h1>{{title}}</h1>
    <p v-if="inventory > 10 ">In Stock</p>
    <p v-else-if="inventory <= 10 && inventory > 0">Almost sold out</p>
    <p>Shipping:{{shipping}}</p>
    <ul>
        <li v-for="detail in details">{{detail}}</li>
    </ul>
    <div v-for="(variant, index) in variants" :key="variant.id"
    @mouseover="updateVariant(index)"
    class="color-circle" :style="{ backgroundColor: variant.color }">
    </div>
    <button class="button" :disabled="!inStock" @click="addToCart"
    :class="{ disabledButton: !inStock }">Add To Cart</button>
</div>`,
props: {
    premium: Boolean
},

setup(props,{emit}) {
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
    const cart = ref([])

    const onSale = ref(true)

    function addToCart() {
        emit('add-to-cart', variants.value[selectedVariant.value].id)
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

    const shipping = computed(() => {
        return props.premium ? 'Free' : 30;
    });

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
        shipping,
        saleStatus
    }
}  
}