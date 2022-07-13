<script setup>
    import Features from "../components/Features.vue"
    import Footer from "../components/Footer.vue"
    import Navbar from "../components/Navbar.vue"
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import "swiper/css/pagination";
    import { Pagination, Autoplay } from "swiper";
    import { ref } from "@vue/reactivity";

    const modules = [Autoplay,Pagination]


</script>

<template>
    <div>
        <header class="bg-[url('../assets/images/bg-main.jpg')] 2xl:h-screen lg:h-screen md:h-screen h-auto bg-no-repeat bg-cover rounded-br-[100px]">
        <div class="bg-black bg-opacity-30 2xl:h-screen lg:h-screen md:h-screen h-auto rounded-br-[100px]">
            <div class="2xl:w-[65%] xl:w-[85%] lg:w-[85%] w-[100%] m-auto">
                <Navbar />
                <div class="bg-content text-white flex 2xl:h-[650px] lg:h-[500px] md:h-[500px] h-[750px] 2xl:-mt-0 lg:-mt-0 md:-mt-0 -mt-20 items-center 2xl:justify-start justify-center">
                    <div class="2xl:w-auto w-[90%] 2xl:m-0 2xl:text-left text-center md:m-0 md:text-left">
                        <div>
                            <h3 class="font-normal 2xl:text-3xl lg:text-3xl md:text-3xl text-2xl tracking-wider">Supplying Across The Globe</h3>
                        </div>
                        <div class="mt-5">
                            <h1 class="font-bold 2xl:text-5xl lg:text-5xl md:text-5xl text-3xl tracking-wider 2xl:leading-relaxed lg:leading-relaxed leading-relaxed md:leading-relaxed">The Leading Supplier <br> Of Charcoal Product</h1>
                        </div>
                        <div class="mt-8">
                            <button class="bg-transparant text-white border-white border-2 py-3 px-4 rounded-lg font-bold 2xl:text-xl lg:text-xl md:text-xl text-lg tracking-wider transition ease-in-out delay-100 hover:bg-white hover:text-black hover:border-black" @click="$router.push({path:'/product-details'})">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
        <div class="header-4content w-[90%] m-auto -mt-10 bg-white rounded-lg shadow-xl 2xl:block lg:block hidden">
            <div class="flex">
                <div class="flex-1 flex gap-6 py-5 pl-5 border-r border-black">
                    <div class="flex-0">a</div>
                    <div class="flex-1">
                        <h3 class="font-bold tracking-wider text-2xl">Green Natural</h3>
                        <h4 class="tracking-wide text-lg mt-2 text-gray-500">Dari bahan alam</h4>
                    </div>
                </div>
                <div class="flex-1 flex gap-6 py-5 pl-5 border-r border-black">
                    <div class="flex-0">a</div>
                    <div class="flex-1">
                        <h3 class="font-bold tracking-wider text-2xl">Burn Hotter</h3>
                        <h4 class="tracking-wide text-lg mt-2 text-gray-500">Pembakaran sangat tinggi</h4>
                    </div>
                </div>
                <div class="flex-1 flex gap-6 py-5 pl-5 border-r border-black">
                    <div class="flex-0">a</div>
                    <div class="flex-1">
                        <h3 class="font-bold tracking-wider text-2xl">Burn Longest</h3>
                        <h4 class="tracking-wide text-lg mt-2 text-gray-500">Pembakaran yang lama</h4>
                    </div>
                </div>
                <div class="flex-1 flex gap-6 py-5 pl-5">
                    <div class="flex-0">a</div>
                    <div class="flex-1">
                        <h3 class="font-bold tracking-wider text-2xl">Private Label</h3>
                        <h4 class="tracking-wide text-lg mt-2 text-gray-500">Produk tersertifikasi</h4>
                    </div>
                </div>
            </div>
        </div>
        <main>
            <section class="about-us 2xl:h-screen lg:h-screen flex items-center 2xl:py-0 lg:py-0 py-20">
                <div class="2xl:w-[60%] lg:w-[70%] w-[90%] m-auto">
                    <div class="flex gap-20 items-center 2xl:flex-row-reverse lg:flex-row-reverse flex-col-reverse">
                        <div class="flex-1">
                            <div class="about-us-title">
                                <h2 class="font-bold text-5xl tracking-wider">About Us</h2>
                            </div>
                            <div class="about-us-text mt-7">
                                <p class="text-xl text-gray-500 leading-relaxed">
                                    We manage 100% coconut briquette charcoal. and jr charcoal is the best supplier in Indonesia. and we prioritize charcoal with the best quality because customer satisfaction is also our satisfaction. and in our factory is also able to produce 200 tons of coconut charcoal briquettes/ month
                                </p>
                            </div>
                            <div class="about-us-button mt-8">
                                <button class="border border-black font-semibold py-2 px-5 tracking-wider rounded-md transition ease-in-out delay-100 hover:bg-black hover:text-white hover:border-white"  @click="$router.push({path:'/about-us'})">Learn More</button>
                            </div>
                        </div>
                        <div class="flex-1">
                            <img src="../assets/images/powder.jpg" alt="" class="h-full 2xl:w-full lg:w-full md:w-2/3 m-auto">
                        </div>
                    </div>
                </div>
            </section>
            <section class="features">
                <Features></Features>
            </section>
            <section>
                <div class="2xl:w-[60%] lg:w-[70%] md:w-[60%] w-[90%] m-auto py-10">
                    <div>
                        <h1 class="font-bold 2xl:text-5xl lg:text-5xl text-4xl tracking-wider text-center">Our Product</h1>
                        <hr class="w-32 border-2 border-black m-auto mt-6">
                    </div>
                    <div class="flex 2xl:flex-row lg:flex-row md:flex-col flex-col gap-8 mt-14">
                        <div class="flex-1 flex items-center gap-8 2xl:flex-row lg:flex-row flex-col">
                            <div class="flex-0 w-[30%]">
                                <img src="../assets/images/img1.jpg" class="rounded-full inline">
                            </div>
                            <div class="flex-1"><h3 class="font-bold text-2xl tracking-wider">Sisha Gold</h3></div>
                        </div>
                        <div class="flex-1 flex items-center gap-8 2xl:flex-row lg:flex-row flex-col">
                            <div class="flex-0 w-[30%]">
                                <img src="../assets/images/img1.jpg" class="rounded-full inline">
                            </div>
                            <div class="flex-1"><h3 class="font-bold text-2xl tracking-wider">Hardwood</h3></div>
                        </div>
                        <div class="flex-1 flex items-center gap-8 2xl:flex-row lg:flex-row flex-col">
                            <div class="flex-0 w-[30%]">
                                <img src="../assets/images/img1.jpg" class="rounded-full inline">
                            </div>
                            <div class="flex-1"><h3 class="font-bold text-2xl tracking-wider">Silver Gold</h3></div>
                        </div>
                        <div class="flex-1 flex items-center gap-8 2xl:flex-row lg:flex-row flex-col">
                            <div class="flex-0 w-[30%]">
                                <img src="../assets/images/img1.jpg" class="rounded-full inline">
                            </div>
                            <div class="flex-1"><h3 class="font-bold text-2xl tracking-wider">BBQ</h3></div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="pb-20">
                <div class="2xl:w-[60%] lg:w-[70%] w-[90%] m-auto 2xl:mb-0 mb-10">
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
                        <swiper-slide class="mb-16">
                            <div class="flex items-center gap-10 2xl:flex-row-reverse lg:flex-row-reverse flex-col-reverse">
                                <div class="flex-1">
                                    <h2 class="font-bold text-4xl tracking-wider">Barbeque</h2>
                                    <p class="mt-5 text-xl text-gray-500">Barbeque Charcoal has the benefit of having great heat for grilling or barbeque, especially for difficult foods like goat and beef</p>
                                    <div class="mt-8">
                                        <button class="bg-black text-white shadow-lg shadow-gray-300 text-lg tracking-wide py-3 px-5 rounded-lg"  @click="$router.push({path:'/product-details'})">See Details</button>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <img src="../assets/images/img2.jpg">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="mb-10">
                            <div class="flex items-center gap-10 2xl:flex-row-reverse lg:flex-row-reverse flex-col-reverse">
                                <div class="flex-1">
                                    <h2 class="font-bold text-4xl tracking-wider">Barbeque</h2>
                                    <p class="mt-5 text-xl text-gray-500">Barbeque Charcoal has the benefit of having great heat for grilling or barbeque, especially for difficult foods like goat and beef</p>
                                    <div class="mt-8">
                                        <button class="bg-black text-white shadow-lg shadow-gray-300 text-lg tracking-wide py-3 px-5 rounded-lg" @click="$router.push({path:'/product-details'})">See Details</button>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <img src="../assets/images/img2.jpg">
                                </div>
                            </div>
                        </swiper-slide>
                        <swiper-slide class="mb-10">
                            <div class="flex items-center gap-10 2xl:flex-row-reverse lg:flex-row-reverse flex-col-reverse">
                                <div class="flex-1">
                                    <h2 class="font-bold text-4xl tracking-wider">Barbeque</h2>
                                    <p class="mt-5 text-xl text-gray-500">Barbeque Charcoal has the benefit of having great heat for grilling or barbeque, especially for difficult foods like goat and beef</p>
                                    <div class="mt-8">
                                        <button class="bg-black text-white shadow-lg shadow-gray-300 text-lg tracking-wide py-3 px-5 rounded-lg" @click="$router.push({path:'/product-details'})">See Details</button>
                                    </div>
                                </div>
                                <div class="flex-1">
                                    <img src="../assets/images/img2.jpg">
                                </div>
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </section>
            <section>
                <div class="bg-[url('../assets/images/bg-ques.jpg')] flex items-center h-[500px] bg-cover bg-center bg-no-repeat justify-center">
                    <div class="bg-slate-300 text-center 2xl:w-2/5 lg:w-2/5 w-[90%] rounded-xl p-7">
                        <h1 class="font-bold tracking-wider 2xl:text-5xl lg:text-5xl text-4xl">Questions ?</h1>
                        <h3 class="font-bold tracking-wide text-3xl mt-4">Let's get in touch</h3>
                        <div class="mt-5">
                            <button class="bg-black rounded-lg py-2 px-4 text-white text-lg font-bold tracking-wider">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <footer class="bg-gray-100">
            <Footer></Footer>
        </footer>
    </div>
</template>