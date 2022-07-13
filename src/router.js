import { createWebHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Gallery from "./views/Gallery.vue";
import AboutUs from "./views/AboutUs.vue";
import Contact from "./views/Contact.vue";
import ProductDetails from "./views/ProductDetails.vue";

const routes = [
    { path: "/", name: "Homepage", component: Home },
    { path: "/gallery", name: "Gallery", component: Gallery },
    { path: "/product-details", name: "ProductDetails", component: ProductDetails },
    { path: "/contact", name: "Contact", component: Contact },
    { path: "/about-us", name: "AboutUs", component: AboutUs },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 }
    }
})

export default router;