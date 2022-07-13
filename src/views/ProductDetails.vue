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
                        <h1 class="font-bold text-5xl tracking-wide">Shisha Gold</h1>
                        <ul class="mt-8 text-xl list-disc leading-relaxed text-gray-500 ml-6">
                            <li>Origin : Indonesia (East Java)</li>
                            <li>Ash Content : 2-2.5%</li>
                            <li>Moisture : -6% maximum</li>
                            <li>Volatile Matter : 15% maximum</li>
                            <li>Fixed Carbon : 75-78%</li>
                            <li>Calorie : 7500-8000</li>
                            <li>NO ODOR</li>
                            <li>Ash Color : white/silver</li>
                            <li>Raw Material : coconut shell charcoal</li>
                            <li>Burning Time : 2,5 hours maximum</li>
                        </ul>
                        <div class="mt-6">
                            <button class="bg-black rounded-lg py-2 px-4 text-white text-lg font-bold tracking-wider">Order Product</button>
                        </div>
                    </div>
                    <div class="flex-1 w-full 2xl:mt-0 lg:mt-0 mb-10">
                        <img src="../assets/images/img1.jpg" class="2xl:w-[70%] lg:w-[70%] w-full rounded-lg shadow-lg shadow-gray-500">
                    </div>
                </div>
            </div>
        </section>
        <section class="border-b-2 border-black">
            <div class="2xl:w-[60%] lg:w-[70%] w-[90%] m-auto">
                <div class="flex items-center py-20 2xl:flex-row-reverse lg:flex-row-reverse md:flex-col-reverse flex-col-reverse">
                    <div class="flex-1 w-full">
                        <h1 class="font-bold text-5xl tracking-wide">Shisha Gold</h1>
                        <ul class="mt-8 text-xl list-disc leading-relaxed text-gray-500 ml-6">
                            <li>Origin : Indonesia (East Java)</li>
                            <li>Ash Content : 2-2.5%</li>
                            <li>Moisture : -6% maximum</li>
                            <li>Volatile Matter : 15% maximum</li>
                            <li>Fixed Carbon : 75-78%</li>
                            <li>Calorie : 7500-8000</li>
                            <li>NO ODOR</li>
                            <li>Ash Color : white/silver</li>
                            <li>Raw Material : coconut shell charcoal</li>
                            <li>Burning Time : 2,5 hours maximum</li>
                        </ul>
                        <div class="mt-6">
                            <button class="bg-black rounded-lg py-2 px-4 text-white text-lg font-bold tracking-wider">Order Product</button>
                        </div>
                    </div>
                    <div class="flex-1 w-full 2xl:mt-0 lg:mt-0 mb-10">
                        <img src="../assets/images/img1.jpg" class="2xl:w-[70%] lg:w-[70%] w-full rounded-lg shadow-lg shadow-gray-500">
                    </div>
                </div>
            </div>
        </section>
        <section class="border-b-2 border-black">
            <div class="2xl:w-[60%] lg:w-[70%] w-[90%] m-auto">
                <div class="flex py-20 gap-20 2xl:flex-row lg:flex-row md:flex-col flex-col">
                    <div class="flex-1">
                        <h1 class="font-bold text-5xl tracking-wide">Size</h1>
                        <img src="../assets/images/size.jpg" class="w-full mt-8">
                        <p class="text-center text-xl mt-3">
                            For other shapes or sizes, please contact us
                        </p>
                    </div>
                    <div class="flex-1">
                        <h1 class="font-bold text-5xl tracking-wide">Ash Color</h1>
                        <img src="../assets/images/color.jpg" class="w-full mt-8">
                        <p class="text-center text-xl mt-3">
                            What as color do you want? please contact us
                        </p>
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
                            <h5 class="text-lg">PRIVATELABEL & OEM</h5>
                            <p class="text-lg text-gray-500 mt-2">We carry out OEM production and will produce briquettes according to your brand and packaging design.</p>
                            <p class="text-lg text-gray-500 mt-3">Don’t worry, we ensure that your brand privacy is protected. Send us your packaging design and we will do it for you.</p>
                            <p class="text-lg text-gray-500 mt-2">
                                Our packaging size : 
                                <ul class="leading-relaxed list-disc text-lg text-gray-500 ml-6">
                                    <li>Innerplastic: 1 kg, 500 gr, 250 g</li>
                                    <li>Innerbox: 1 kg, 500 gr , 250 gr</li>
                                    <li>Masterbox: 10 kg, 20 kg</li>
                                    <li>Gunny Bag: 10 kg, 20kg</li>
                                </ul>
                            </p>
                        </div>
                        <div class="flex-1">
                            <img src="../assets/images/shipment.jpg" class="2xl:w-[80%] lg:w-[80%] md:w-[50%] w-[50%] m-auto">
                        </div>
                    </div>
                    <div class="flex mt-12 gap-10 2xl:flex-row lg:flex-row md:flex-col flex-col">
                        <div class="flex-1">
                            <img src="../assets/images/container.png" class="2xl:w-[80%] lg:w-[80%] md:w-[50%] w-[50%] m-auto">
                            
                        </div>
                        <div class="flex-1">
                            <h5 class="text-xl">Container</h5>
                            <p class="text-lg text-gray-500 mt-3">20 ft Container : 17-18 ton</p>
                            <p class="text-lg text-gray-500 mt-3">40 ft Container : 24-25 on</p>
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