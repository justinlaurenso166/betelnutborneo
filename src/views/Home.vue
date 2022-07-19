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
                            <h3 class="font-normal 2xl:text-3xl lg:text-3xl md:text-3xl text-2xl tracking-wider">Supplying Across The World</h3>
                        </div>
                        <div class="mt-5">
                            <h1 class="font-bold 2xl:text-5xl lg:text-5xl md:text-5xl text-3xl tracking-wider 2xl:leading-relaxed lg:leading-relaxed leading-relaxed md:leading-relaxed">The Best Supplier <br> Of Betel Nut Product</h1>
                        </div>
                        <div class="mt-8">
                            <button class="bg-transparant text-white border-white border-2 py-3 px-4 rounded-lg font-bold 2xl:text-xl lg:text-xl md:text-xl text-lg tracking-wider transition ease-in-out delay-100 hover:bg-white hover:text-black hover:border-black" @click="$router.push({path:'/about-us'})">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </header>
        <div class="header-4content 2xl:w-[55%] xl:w-[60%] lg:w-[65%] m-auto -mt-14 bg-white rounded-lg drop-shadow-xl shadow-gray-500 2xl:block lg:block hidden px-2">
            <div class="flex items-center text-center justify-center py-10 gap-5">
                <div class="flex-1 border-r-2 border-r-black">
                    <h1 class="font-bold 2xl:text-4xl lg:text-3xl md:text-2xl text-xl tracking-wider"><span class="mr-4"><font-awesome-icon icon="fa-solid fa-check-circle" class=" text-orange-600" /></span>Best Quality</h1>
                </div>
                <div class="flex-1">
                    <h1 class="font-bold 2xl:text-4xl lg:text-3xl md:text-2xl text-xl tracking-wider"><span class="mr-2"><font-awesome-icon icon="fa-solid fa-money-check-dollar" class="text-green-600" /></span> Competitive Price</h1>
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
                                    Betel nuts, also known as Areca nuts, are mostly grown in Southeast Asia. The betel nut supply is the best in Indonesia. We prioritize betel nuts of the highest quality and lowest price. We serve only the highest quality, with a dry content of less than 5%. Our product has 2 types: whole and half-split.
                                    <br><br>
                                    We produce 100 tons of dried betel nuts in a month. We accepted FCL and LCL.
                                </p>
                            </div>
                        </div>
                        <div class="flex-1">
                            <img src="../assets/images/4-edit.png" alt="" class="h-full 2xl:w-full lg:w-full md:w-2/3 m-auto rounded-lg">
                        </div>
                    </div>
                </div>
            </section>
            <!-- <section class="features">
                <Features></Features>
            </section> -->
            <section>
                <div class="2xl:w-[60%] lg:w-[70%] md:w-[60%] w-[90%] m-auto py-20">
                    <div>
                        <h1 class="font-bold 2xl:text-5xl lg:text-5xl text-4xl tracking-wider text-center">Our Product</h1>
                        <hr class="w-32 border-2 border-black m-auto mt-6">
                    </div>
                    <div class="flex 2xl:flex-col lg:flex-col md:flex-col flex-col mt-10">
                        <div class="text-center">
                            <h4 class="font-bold text-2xl">Quality : </h4>
                            <p class="text-xl mt-3">80-85% Good Cut, Half Split</p>
                            <p class="text-xl mt-3">70-75% Good Cut, Half Split</p>
                            <p class="text-xl mt-3">Others Quality.</p>
                        </div>
                        <div class="2xl:w-2/3 flex m-auto 2xl:gap-20 lg:gap-20 md:gap-10 gap-10 2xl:flex-row lg:flex-row md:flex-col flex-col mt-14">
                            <div class="flex-1 flex items-center gap-8 2xl:flex-row lg:flex-row flex-col">
                                <div class="flex-0 w-[80%] m-auto">
                                    <img src="../assets/images/4.png" class="rounded-lg inline w-full h-full">
                                </div>
                                <!-- <div class="flex-1"><h3 class="font-bold text-2xl tracking-wider">Silver Gold</h3></div> -->
                            </div>
                            <div class="flex-1 flex items-center gap-8 2xl:flex-row lg:flex-row flex-col">
                                <div class="flex-0 w-[80%] m-auto">
                                    <img src="../assets/images/1.png" class="rounded-lg inline w-full h-full">
                                </div>
                                <!-- <div class="flex-1"><h3 class="font-bold text-2xl tracking-wider">BBQ</h3></div> -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="bg-gray-100">
                    <div class="2xl:w-[60%] lg:w-[70%] md:w-[60%] w-[90%] m-auto py-20">
                        <div class="flex 2xl:flex-row lg:flex-row md:flex-col flex-col 2xl:gap-0 lg:gap-0 md:gap-10 gap-10">
                            <div class="flex-1 text-center 2xl:border-r lg:border-r border-black">
                                <h1 class="font-bold 2xl:text-3xl lg:text-3xl text-2xl tracking-wider text-center">Payment Terms</h1>
                                <p class="text-2xl mt-8">
                                    L/C, and T/T
                                </p>
                            </div>
                            <div class="flex-1 text-center">
                                <h1 class="font-bold 2xl:text-3xl lg:text-3xl text-2xl tracking-wider text-center">Shipping</h1>
                                <p class="text-2xl mt-8">
                                    FOB, CNF, and CIF
                                </p>
                            </div>
                        </div>
                    </div>
            </section>
            <section>
                <div class="bg-[url('../assets/images/bg1.jpg')]  h-[500px] bg-cover bg-center bg-no-repeat">
                    <div class="bg-black bg-opacity-30 h-[500px] w-full flex items-center justify-center">
                        <div class="bg-slate-300 text-center 2xl:w-2/5 lg:w-2/5 w-[90%] rounded-xl p-7">
                            <h1 class="font-bold tracking-wider 2xl:text-5xl lg:text-5xl text-4xl">Questions ?</h1>
                            <h3 class="font-bold tracking-wide text-3xl mt-4">Let's get in touch</h3>
                            <div class="mt-5">
                                <a target="blank" href="https://wa.me/6281255518331">
                                    <button class="bg-black rounded-lg py-2 px-4 text-white text-lg font-bold tracking-wider">Contact Us</button>
                                </a>
                            </div>
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