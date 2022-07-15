<script setup>
    import { ref } from "@vue/reactivity";

    const toggleNavbar = ref(false);

    const showNavbar = ()=>{
        toggleNavbar.value = !toggleNavbar.value;
    }
</script>

<template>
    <div>
        <nav class="2xl:flex text-white py-8 hidden lg:flex md:hidden">
                    <div class="flex-1 font-bold text-3xl tracking-widest">
                        <router-link to="/">
                            Betel Nut Supply
                        </router-link>
                    </div>
                    <div class="flex-1">
                        <div class="flex text-center 2xl:text-xl lg:text-lg tracking-wide justify-between items-center">
                                <router-link to="/">
                                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                            Home
                                    </div>
                                </router-link>
                                <router-link to="/about-us">
                                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                            About Us
                                    </div>
                                </router-link>
                                <router-link to="/product-details">
                                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                            Product Details
                                    </div>
                                </router-link>
                                <router-link to="/gallery">
                                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                            Gallery
                                    </div>
                                </router-link>
                                <router-link to="/contact">
                                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                            Contact
                                    </div>
                                </router-link>
                        </div>
                    </div>
                </nav>
                <nav class="flex 2xl:hidden lg:hidden text-white justify-between px-7 py-7 items-center ">
                    <div>
                        <h3 class="font-bold md:text-2xl text-xl tracking-wider">
                            <router-link to="/">
                                Betel Nut<br>Supply
                            </router-link>
                        </h3>
                    </div>
                    <div class="hover:cursor-pointer" @click="showNavbar()">
                        <font-awesome-icon :icon="!toggleNavbar ? `fa-solid fa-bars` : `fa-solid fa-close`" class="text-white text-3xl"/>
                    </div>
                </nav>
                <div class="menu bg-black text-white absolute left-0 w-full -mt-4 transition ease-in delay-150" v-if="toggleNavbar">
                        <router-link to="/">
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide border-b border-white">
                                    Home
                            </div>
                        </router-link>
                        <router-link to="/about-us">
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide border-b border-white">
                                    About Us
                            </div>
                        </router-link>
                        <router-link to="/product-details">
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide border-b border-white">
                                    Product Details
                            </div>
                        </router-link>
                        <router-link to="/gallery">
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide border-b border-white">
                                    Gallery
                            </div>
                        </router-link>
                        <router-link to="/contact">
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide">
                                    Contact
                            </div>
                        </router-link>
                </div>
    </div>
</template>