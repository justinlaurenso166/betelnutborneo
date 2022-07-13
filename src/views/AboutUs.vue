<script setup>
    import Navbar from "../components/Navbar.vue"
    import Features from "../components/Features.vue"
    import Footer from "../components/Footer.vue"
</script>

<template>
    <div>
        <div class="bg-black bg-opacity-80 text-white pb-20">
            <div class="2xl:w-[60%] lg:w-[85%] w-[90%] m-auto">
                <header>
                    <Navbar />
                </header>
                <div class="mt-10">
                    <div class="flex items-center 2xl:gap-10 gap-6 2xl:flex-row-reverse lg:flex-row-reverse flex-col 2xl:text-left lg:text-left text-center">
                        <div class="flex-1">
                            <h1 class="font-bold 2xl:text-5xl lg:text-5xl text-3xl tracking-wider text-right">JR Charcoal</h1>
                        </div>
                        <div class="flex-1">
                            <p class="2xl:text-xl lg:text-xl text-lg text-gray-200">We manage 100% coconut briquette charcoal. and jr charcoal is the best supplier in Indonesia. and we prioritize charcoal with the best quality because customer satisfaction is also our satisfaction. and in our factory is also able to produce 200 tons of coconut charcoal briquettes/ month</p>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <img src="../assets/images/img3.jpg" class="w-full">
                </div>
                <div class="mt-8">
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
            </div>
        </div>
        <div>
            <Features />
        </div>
        <footer class="bg-gray-100">
            <Footer />
        </footer>
    </div>
</template>