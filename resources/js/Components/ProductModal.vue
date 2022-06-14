<template>
    <div class="modal fade" :id="`product-description-${idModal}`" tabindex="-1" aria-labelledby="product-description" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>{{ description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductModal",
    props: {
        description: { type: String,  default: "" },
        title: { type: String,  default: "" },
        idModal: { type: Number,  default: "" },
    },
    mounted() {
        console.warn("mounted")
    }
}
</script>

<style scoped>

</style>
