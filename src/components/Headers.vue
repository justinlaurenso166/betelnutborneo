<script setup>
    import Navbar from "./Navbar.vue"

    const props = defineProps(['image','title','text']);

    const image = `bg-[url(${props.image})]`
    const title = props.title;
    const text = props.text;
</script>

<template>
    <div>
        <div :class="image" class=" bg-cover bg-center bg-no-repeat rounded-br-[100px]">
            <div class="bg-black bg-opacity-60 rounded-br-[100px]">
                <div class="2xl:w-[60%] lg:w-[85%] w-[90%] m-auto ">
                    <Navbar />
                    <div class="pt-[120px] pb-[160px] ">
                        <h1 class="font-bold text-white 2xl:text-7xl lg:text-5xl md:text-5xl text-4xl 2xl:px-0 px-7 md:px-0">{{title}}</h1>
                        <p class="text-white mt-6 tracking-wide 2xl:text-xl lg:text-xl md:text-xl text-lg 2xl:px-0 px-7 md:px-0">{{text}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>