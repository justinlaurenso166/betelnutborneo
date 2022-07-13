<script setup>
    import Footer from "../components/Footer.vue"
    import Header from "../components/Headers.vue"
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import "swiper/css/pagination";
    import { Pagination, Autoplay } from "swiper";

    const modules = [Autoplay,Pagination]

</script>

<template>
    <div>
        <header>
            <Header image="'../assets/images/bg-ques.jpg'" title="Our Gallery" text=""/>    
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
                            <swiper-slide class="mb-16" v-for="i in 10" :key="i">
                                <img src="../assets/images/img1.jpg" class="w-full">
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
                            <swiper-slide class="mb-16" v-for="i in 10" :key="i">
                                <img src="../assets/images/img1.jpg" class="w-full">
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