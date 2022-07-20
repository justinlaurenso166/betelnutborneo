<script setup>
    import Footer from "../components/Footer.vue"
    import Header from "../components/Headers.vue"
</script>

<template>
    <div>
        <header>
            <Header image="'../assets/images/bg-main.jpg'" title="Product Details" text="Our Detail Product"/>    
        </header>
        <section class="border-b-2 border-black">
            <div class="2xl:w-[60%] lg:w-[70%] w-[90%] m-auto">
                <div class="flex items-center py-20 2xl:flex-row-reverse lg:flex-row-reverse md:flex-col-reverse flex-col-reverse">
                    <div class="flex-1 w-full">
                        <!-- <h1 class="font-bold text-5xl tracking-wide">Shisha Gold</h1> -->
                        <ul class="text-xl list-disc leading-relaxed text-gray-500 ml-6">
                            <li>Origin : Indonesia (West Borneo)</li>
                            <li>Moisture : Below 5%</li>
                            <li>Quality : 70-75% and 80-85%</li>
                            <li>Shape : Whole / Half Split</li>
                            <li>Dried by Sun</li>
                            <li>GOOD QUALITY</li>
                        </ul>
                        <div class="mt-6">
                            <a target="blank" href="https://wa.me/6281255518331">
                                <button class="bg-black rounded-lg py-2 px-4 text-white text-lg font-bold tracking-wider">Order Product</button>
                            </a>
                        </div>
                    </div>
                    <div class="flex-1 w-full 2xl:mt-0 lg:mt-0 mb-10">
                        <img src="../assets/images/6.jpeg" class="2xl:w-[75%] lg:w-[75%] w-full rounded-lg shadow-lg shadow-gray-500">
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="2xl:w-[60%] lg:w-[70%] w-[90%] m-auto">
                <div class="py-20">
                    <h1 class="font-bold text-5xl tracking-wide">Shipment & Packaging</h1>

                    <div class="flex mt-8 gap-10 2xl:flex-row lg:flex-row md:flex-col-reverse flex-col-reverse">
                        <div class="flex-1">
                            <h5 class="text-lg">PRIVATELABEL</h5>
                            <p class="text-lg text-gray-500 mt-2">If you have a brand, we can package it according to your brand and packaging design for your company..</p>
                            <p class="text-lg text-gray-500 mt-2">
                                Our packaging : 
                                <ul class="leading-relaxed list-disc text-lg text-gray-500 ml-6">
                                    <li>Gunny Bag : 60 kg, or by request</li>
                                </ul>
                            </p>
                        </div>
                        <div class="flex-1">
                            <img src="../assets/images/5.jpeg" class="2xl:w-[80%] lg:w-[80%] md:w-[50%] w-[50%] m-auto rounded-xl shadow-xl shadow-gray-300">
                        </div>
                    </div>
                    <div class="flex mt-20 gap-10 2xl:flex-row lg:flex-row md:flex-col flex-col">
                        <div class="flex-1">
                            <img src="../assets/images/container.png" class="2xl:w-[80%] lg:w-[80%] md:w-[50%] w-[50%] m-auto rounded-xl shadow-xl shadow-gray-300">
                        </div>
                        <div class="flex-1">
                            <h5 class="text-xl">Container</h5>
                            <p class="text-lg text-gray-500 mt-3">20 ft Container : 17-18 TONS</p>
                            <p class="text-lg text-gray-500 mt-3">40 ft Container : 24-25 TONS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer class="bg-gray-100">
            <Footer />
        </footer>
    </div>
</template>