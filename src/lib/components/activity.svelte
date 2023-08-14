<script type="js">
    import {onMount} from 'svelte';
    import { browser } from '$app/environment';
    import { SwiperSlide, register } from 'swiper/element/bundle';
    import image from '$lib/assets/gambar/events/gambar (1).png';
    import image2 from '$lib/assets/gambar/events/gambar (2).png';
    import image3 from '$lib/assets/gambar/events/gambar (3).jpg';
    import image4 from '$lib/assets/gambar/events/gambar (4).jpg';
    import image5 from '$lib/assets/gambar/events/gambar (5).jpg';
    import image6 from '$lib/assets/gambar/events/gambar (6).png';
    import image7 from '$lib/assets/gambar/events/gambar (7).png';
    import image8 from '$lib/assets/gambar/events/gambar (8).png';
    import image9 from '$lib/assets/gambar/events/gambar (9).jpg';
    import image10 from '$lib/assets/gambar/events/gambar (10).png';
    register();
    let root;
    onMount(() => {
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
            src: image,
            alt: 'gambar (1)'
        },
        {
            src: image2,
            alt: 'gambar (2)'
        },
        {
            src: image3,
            alt: 'gambar (3)'
        },
        {
            src: image4,
            alt: 'gambar (4)'
        },
        {
            src: image5,
            alt: 'gambar (5)'
        },
        {
            src: image6,
            alt: 'gambar (6)'
        },
        {
            src: image7,
            alt: 'gambar (7)'
        },
        {
            src: image8,
            alt: 'gambar (8)'
        },
        {
            src: image9,
            alt: 'gambar (9)'
        },
        {
            src: image10,
            alt: 'gambar (10)'
        }
    ];
    
    
    
</script>
    <div class="slider h-screen grid place-items-center" bind:this={root}>
        
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
    <!-- <div class="max-sm:flex flex-col mt-16 justify-center items-center gap-8 sm:hidden">
        {#each gambarEvent as {src,alt}}
             <img src={src} alt={alt} class="object-cover rounded-md h-1/2 w-1/2" draggable="false" loading="lazy"/>
        {/each}
    </div> -->
    <!-- loop gambar event -->
<style>
    swiper-container {
        width: 80%;
        height: 50%;
        --swiper-navigation-color: #fff;
    }
    
</style>