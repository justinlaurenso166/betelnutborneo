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
                            BetelNutBorneo
                        </router-link>
                    </div>
                    <div class="flex-1">
                        <div class="flex text-center 2xl:text-xl lg:text-lg tracking-wide justify-between items-center">
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                <router-link to="/">
                                    Home
                                </router-link>
                            </div>
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                <router-link to="/about-us">
                                    About Us
                                </router-link>
                            </div>
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                <router-link to="/product-details">
                                    Product Details
                                </router-link>
                            </div>
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                <router-link to="/gallery">
                                    Gallery
                                </router-link>
                            </div>
                            <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100">
                                <router-link to="/contact">
                                    Contact
                                </router-link>
                            </div>
                        </div>
                    </div>
                </nav>
                <nav class="flex 2xl:hidden lg:hidden text-white justify-between px-7 py-7 items-center ">
                    <div>
                        <h3 class="font-bold md:text-2xl text-xl tracking-wider">
                            <router-link to="/">
                                BetelNut<br>Borneo
                            </router-link>
                        </h3>
                    </div>
                    <div class="hover:cursor-pointer" @click="showNavbar()">
                        <font-awesome-icon :icon="!toggleNavbar ? `fa-solid fa-bars` : `fa-solid fa-close`" class="text-white text-3xl"/>
                    </div>
                </nav>
                <div class="menu bg-black text-white absolute left-0 w-full -mt-4 transition ease-in delay-150" v-if="toggleNavbar">
                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide border-b border-white">
                        <router-link to="/">
                            Home
                        </router-link>
                    </div>
                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide border-b border-white">
                        <router-link to="/about-us">
                            About Us
                        </router-link>
                    </div>
                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide border-b border-white">
                        <router-link to="/product-details">
                            Product Details
                        </router-link>
                    </div>
                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide border-b border-white">
                        <router-link to="/gallery">
                            Gallery
                        </router-link>
                    </div>
                    <div class="hover:cursor-pointer hover:text-orange-200 transition ease-in delay-100 py-3 px-4 text-lg tracking-wide">
                        <router-link to="/contact">
                            Contact
                        </router-link>
                    </div>
                </div>
    </div>
</template>