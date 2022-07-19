<script setup>
    import Footer from "../components/Footer.vue"
    import Header from "../components/Headers.vue"
</script>

<template>
    <div>
        <header>
            <Header image="'../assets/images/bg-features.jpg'" title="Contact Us" text=""/>    
        </header>
        <main class="py-20">
            <div class="text-center 2xl:w-[40%] lg:w-[60%] md:[80%] w-[90%] m-auto">
                <h1 class="font-bold text-5xl tracking-wider">Get in Touch</h1>
            </div>
            <div class="2xl:w-[60%] lg:w-[80%] w-[90%] m-auto 2xl:mt-20 mt-10">
                <div class="flex gap-10 2xl:flex-row lg:flex-row md:flex-col flex-col">
                    <div class="flex-1 py-10 px-8 shadow-lg shadow-gray-300">
                        <h2 class="font-bold 2xl:text-3xl lg:text-2xl md:text-2xl text-xl">Our Location</h2>
                        <p class="text-gray-600 mt-3 2xl:text-xl lg:text-lg md:text-lg text-lg">West Borneo, Pontianak</p>
                    </div>
                    <div class="flex-1 py-10 px-8 shadow-lg shadow-gray-300">
                        <h2 class="font-bold 2xl:text-3xl lg:text-2xl md:text-2xl text-xl">Call Us On</h2>
                        <p class="text-gray-600 mt-3 2xl:text-xl lg:text-lg md:text-lg text-lg">‪+62 812-5551-8331‬</p>
                    </div>
                    <div class="flex-1 py-10 px-8 shadow-lg shadow-gray-300">
                        <h2 class="font-bold 2xl:text-3xl lg:text-2xl md:text-2xl text-xl">Email Us</h2>
                        <p class="text-gray-600 mt-3 2xl:text-xl lg:text-lg md:text-lg text-lg">betelnut.supply@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="text-center 2xl:w-[40%] lg:w-[60%] md:[80%] w-[90%] m-auto mt-24">
                <h1 class="font-bold text-5xl tracking-wider">Send Us A Message</h1>
                <p class="text-xl text-gray-500 mt-5">We would love to hear from you!</p>
            </div>
        </main>
        <footer class="bg-gray-100">
            <Footer />
        </footer>
    </div>
</template>