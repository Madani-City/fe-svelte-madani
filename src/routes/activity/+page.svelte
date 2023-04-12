<script type="js">
    import {onMount} from 'svelte';
    import { browser } from '$app/environment';
    import { SwiperSlide, register } from 'swiper/element/bundle';
    register();
    let root;
    onMount(() => {
        console.log(root.querySelector('swiper-container'));
        const swiperEl = root.querySelector('swiper-container');

        const swiperParams = {
            effect: 'slide',
            rewind: true,
            centerInsufficientSlides: true,
            setWraperSize: true,
            navigation:{
                enableed: true,
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                420: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                },
                1024: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                },
                1280: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
            },
            on: {
            init() {
                // ...
            },
            },
        };
         Object.assign(swiperEl, swiperParams);

        return () => {
            swiperEl.initialize();
        };
    });
    
    const gambarEvent = [
        {
            src: '/src/assets/gambar/events/gambar (1).png',
            alt: 'gambar (1)'
        },
        {
            src: '/src/assets/gambar/events/gambar (2).png',
            alt: 'gambar (2)'
        },
        {
            src: '/src/assets/gambar/events/gambar (3).jpg',
            alt: 'gambar (3)'
        },
        {
            src: '/src/assets/gambar/events/gambar (4).jpg',
            alt: 'gambar (4)'
        },
        {
            src: '/src/assets/gambar/events/gambar (5).jpg',
            alt: 'gambar (5)'
        },
        {
            src: '/src/assets/gambar/events/gambar (6).png',
            alt: 'gambar (6)'
        },
        {
            src: '/src/assets/gambar/events/gambar (7).png',
            alt: 'gambar (7)'
        },
        {
            src: '/src/assets/gambar/events/gambar (8).png',
            alt: 'gambar (8)'
        },
        {
            src: '/src/assets/gambar/events/gambar (9).jpg',
            alt: 'gambar (9)'
        },
        {
            src: '/src/assets/gambar/events/gambar (10).png',
            alt: 'gambar (10)'
        }
    ];
    
    
</script>
    <div class="slider h-screen grid place-items-center max-sm:hidden" bind:this={root}>
        
        <swiper-container speed="1000">
        {#if browser}
            {#each gambarEvent as {src,alt}}
                <swiper-slide lazy="true">
                        <img src={src} alt={alt} class="object-cover rounded-md h-96 w-4/5" draggable="false" loading="lazy"/>
                </swiper-slide>
            {/each}
        {/if}
    </swiper-container>
       
    </div>
    <div class="max-sm:flex flex-col mt-16 justify-center items-center gap-8 sm:hidden">
        {#each gambarEvent as {src,alt}}
             <img src={src} alt={alt} class="object-cover rounded-md h-1/2 w-1/2" draggable="false" loading="lazy"/>
        {/each}
    </div>
    <!-- loop gambar event -->
<style>
    swiper-container {
        width: 80%;
        height: 50%;
        --swiper-navigation-color: #fff;
    }
    
</style>