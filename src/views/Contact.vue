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
                <p class="text-xl text-gray-500 mt-5">This is a short description elaborating the reason that you have mentioned above. Tell them why you are good!</p>
            </div>
            <div class="2xl:w-[60%] lg:w-[80%] w-[90%] m-auto 2xl:mt-20 mt-10">
                <div class="flex gap-10 2xl:flex-row lg:flex-row md:flex-col flex-col">
                    <div class="flex-1 py-10 px-8 shadow-lg shadow-gray-300">
                        <h2 class="font-bold 2xl:text-3xl lg:text-2xl md:text-2xl text-xl">Our Location</h2>
                        <p class="text-gray-600 mt-3 2xl:text-xl lg:text-lg md:text-lg text-lg">Surabaya</p>
                    </div>
                    <div class="flex-1 py-10 px-8 shadow-lg shadow-gray-300">
                        <h2 class="font-bold 2xl:text-3xl lg:text-2xl md:text-2xl text-xl">Call Us On</h2>
                        <p class="text-gray-600 mt-3 2xl:text-xl lg:text-lg md:text-lg text-lg">‪+62 819‑3313‑8839‬</p>
                    </div>
                    <div class="flex-1 py-10 px-8 shadow-lg shadow-gray-300">
                        <h2 class="font-bold 2xl:text-3xl lg:text-2xl md:text-2xl text-xl">Email Us</h2>
                        <p class="text-gray-600 mt-3 2xl:text-xl lg:text-lg md:text-lg text-lg">jreng@jrcharcoal.com</p>
                    </div>
                </div>
            </div>
            <div class="w-full mt-20">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.818086615596!2d109.31015841531706!3d-0.01961173556275922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d58eb7930f2a7%3A0x67e83102c3a33fd1!2sGg.%20Hishak%2027%2C%20Sungai%20Jawi%20Dalam%2C%20Kec.%20Pontianak%20Bar.%2C%20Kota%20Pontianak%2C%20Kalimantan%20Barat%2078244!5e0!3m2!1sid!2sid!4v1657611190033!5m2!1sid!2sid" width="100%" height="500" style="border:0;" allowfullscreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="text-center 2xl:w-[40%] lg:w-[60%] md:[80%] w-[90%] m-auto mt-20">
                <h1 class="font-bold text-5xl tracking-wider">Send Us A Message</h1>
                <p class="text-xl text-gray-500 mt-5">We would love to hear from you!</p>
            </div>
        </main>
        <footer class="bg-gray-100">
            <Footer />
        </footer>
    </div>
</template>