<script lang="ts" setup>

</script>
<!-- https://assets1.lottiefiles.com/packages/lf20_045azgm7Xf.json - 1
https://assets2.lottiefiles.com/packages/lf20_WRUlcX98bQ.json - 2
https://assets7.lottiefiles.com/packages/lf20_ysHooHIFLV.json - 3
https://assets2.lottiefiles.com/packages/lf20_g3DlbOr8yo.json - 4
https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json - 5 -->

<template>
    <section class="flex items-center flex-1 py-16">
        <div class="flex flex-col w-full">
            <h1 class="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
                <client-only>
                    <Vue3Lottie animationLink="https://assets7.lottiefiles.com/packages/lf20_ysHooHIFLV.json" :height="300"
                        :width="300" :pause-on-hover="true" />
                </client-only>
                <span
                    class="text-6xl font-extrabold text-transparent bg-gradient-to-r from-green-400 via-blue-600 to-purple-700 bg-clip-text sm:text-5xl">
                    Coming Soon!
                </span>
            </h1>

            <p class="max-w-3xl mx-auto mt-6 text-lg text-center text-gray-700 dark:text-white md:text-xl">
                <b>
                    Ready for a new Nuxt 3 Theme?<br></b>
                Welcome to Gradient, a beautiful and modern<br>
                Nuxt 3 theme for your next project.
            </p>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
