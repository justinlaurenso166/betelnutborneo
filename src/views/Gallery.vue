<script setup>
    import Footer from "../components/Footer.vue"
    import Navbar from "../components/Navbar.vue"
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import "swiper/css/pagination";
    import { Pagination, Autoplay } from "swiper";

    const modules = [Autoplay,Pagination]

</script>

<template>
    <div>
        <header>
            <div>
                <div class="bg-[url('../assets/images/bg1.jpg')] bg-cover bg-center bg-no-repeat rounded-br-[100px]">
                    <div class="bg-black bg-opacity-60 rounded-br-[100px]">
                        <div class="2xl:w-[60%] lg:w-[85%] w-[90%] m-auto ">
                            <Navbar />
                            <div class="pt-[120px] pb-[160px] ">
                                <h1 class="font-bold text-white 2xl:text-7xl lg:text-5xl md:text-5xl text-4xl 2xl:px-0 px-7 md:px-0">Our Gallery</h1>
                                <p class="text-white mt-6 tracking-wide 2xl:text-xl lg:text-xl md:text-xl text-lg 2xl:px-0 px-7 md:px-0"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </header>
        <main class="py-20">
            <div class="2xl:w-[60%] lg:w-[70%] w-[90%] m-auto">
                <div class="2xl:block lg:block md:block hidden">
                    <swiper
                            :slidesPerView="3"
                            :spaceBetween="30"
                            :pagination="{
                                clickable: true,
                            }"
                            :modules="modules"
                            class="mySwiper"
                            :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,
                            }"
                            :loop="true"
                            :loopFillGroupWithBlank="true"
                        >
                            <swiper-slide class="mb-16" v-for="i in 4" :key="i">
                                <img :src="`./images/${i}.png`" class="w-full rounded-lg shadow-lg shadow-gray-400">
                            </swiper-slide>
                        </swiper>
                </div>
                <div class="2xl:block lg:block md:block hidden mt-20">
                    <swiper
                            :slidesPerView="3"
                            :spaceBetween="30"
                            :pagination="{
                                clickable: true,
                            }"
                            :modules="modules"
                            class="mySwiper"
                            :autoplay="{
                                delay: 3000,
                                disableOnInteraction: false,
                            }"
                            :loop="true"
                            :loopFillGroupWithBlank="true"
                        >
                            <swiper-slide class="mb-16" v-for="i in 3" :key="i">
                                <img :src="`./images/${i+4}.jpeg`" class="w-full rounded-lg shadow-lg shadow-gray-400">
                            </swiper-slide>
                            <swiper-slide class="mb-16" v-for="i in 1" :key="i+10">
                                <img :src="`./images/${i+8}.jpeg`" class="w-full rounded-lg shadow-lg shadow-gray-400">
                            </swiper-slide>
                        </swiper>
                </div>
                <div class="2xl:hidden lg:hidden md:hidden block">
                    <swiper
                            :slidesPerView="1"
                            :spaceBetween="30"
                            :pagination="{
                                clickable: true,
                            }"
                            :modules="modules"
                            class="mySwiper"
                            :autoplay="{
                                delay: 2500,
                                disableOnInteraction: false,
                            }"
                            :loop="true"
                            :loopFillGroupWithBlank="true"
                        >
                            <swiper-slide class="mb-16" v-for="i in 4" :key="i">
                                <img :src="`./images/${i}.png`" class="w-full rounded-lg shadow-lg shadow-gray-400">
                            </swiper-slide>
                        </swiper>
                </div>
                <div class="2xl:hidden lg:hidden md:hidden block mt-10">
                    <swiper
                            :slidesPerView="1"
                            :spaceBetween="30"
                            :pagination="{
                                clickable: true,
                            }"
                            :modules="modules"
                            class="mySwiper"
                            :autoplay="{
                                delay: 3000,
                                disableOnInteraction: false,
                            }"
                            :loop="true"
                            :loopFillGroupWithBlank="true"
                        >
                            <swiper-slide class="mb-16" v-for="i in 3" :key="i">
                                <img :src="`./images/${i+4}.jpeg`" class="w-full rounded-lg shadow-lg shadow-gray-400">
                            </swiper-slide>
                            <swiper-slide class="mb-16" v-for="i in 1" :key="i+10">
                                <img :src="`./images/${i+8}.jpeg`" class="w-full rounded-lg shadow-lg shadow-gray-400">
                            </swiper-slide>
                        </swiper>

                </div>
            </div>
        </main>
        <footer class="bg-gray-100">
            <Footer />
        </footer>
    </div>
</template>