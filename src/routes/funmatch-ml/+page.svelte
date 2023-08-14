<script>
    import bg_gatot from '$lib/assets/gambar/background/bg-gatot.png';
    import bg_sayap from '$lib/assets/gambar/background/bg-sayap-button.svg';
    import bg_logo from '$lib/assets/logo/logo_image_madani.png';
    import image_yisunsin from '$lib/assets/gambar/yisunsin.png';
	import { onMount } from 'svelte';
    let timeInterval;
    let messageinterval = "Time is up"
    const countDownDate = new Date("Aug 20, 2023 08:00:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const timer = ()=> {
        var now = new Date().getTime();
        var distance = countDownDate - now;
         days = Math.floor(distance / (1000 * 60 * 60 * 24));
         hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
         seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }

    $: if(distance > 0){ timeInterval = setInterval(timer, 1000);}
    if (distance < 0) {
        clearInterval(timeInterval);
    }
    
</script>
<main>
    <section class="w-screen h-screen bg-cover bg-gradient-to-l from-neutral-950 from-5% via-neutral-900 via-35% to-transparent">
        <img src="{bg_gatot}" alt="" class="h-screen absolute -z-10 top-0 w-screen object-cover">
        <div class="z-10 flex h-screen justify-center flex-col text-white font-barlowsemi sm:items-end items-center">
            <div class="text-center sm:-translate-x-16">
                <img src="{bg_logo}" alt="logo-madani" class="inline-block">
                <p style="text-shadow: 0px 1px 10px rgba(252, 205, 37, 100);" class="font-bold xl:text-[3rem] uppercase mt-16 lg:text-[2.5rem] text-[1.5rem]">The gate for the<br>legends is now open</p>
                <p class="text-[1.25rem]">Prepare your team and become champhion in <br> madani mobile legends tournament</p>
                <a href="#register" class="block bg-primary text-black font-bold p-2 custom-button relative mt-24" style="--bgsayap: url({bg_sayap});">REGISTER NOW</a>
            </div>
        </div>
    </section>
    <section class="w-screen h-screen font-barlow">
        <div class="flex h-screen items-center justify-center">
            <div class=" text-primary flex-grow">
                <div class="top-5 m-auto text-center justify-center font-barlowsemi font-bold">
                    {#if distance <= 0}
                        <p class="text-3xl md:text-4xl">{messageinterval}</p>
                        {:else}
                        <div class="pb-10 text-shadow-primary">
                            <p class="text-3xl md:text-4xl pb-2">Match Countdown</p>
                            <p class="text-lg sm:text-2xl lg:text-4xl">{days} Days : {hours} Hours : {minutes} Minutes : {seconds} Second</p>
                        </div>
                    {/if}
                    <div class="text-center items-center w-full">
                        <a href="#register" class="inline-block my-5 bg-primary text-black font-bold p-2 md:w-[30%] register">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="w-screen h-screen relative font-barlow" id="register">
        <div class="flex h-screen flex-row items-center sm:justify-end justify-center">
            <div class="w-[80%] bg-[#3F3F3F] sm:w-[70%] md:h-[60%] text-primary flex relative">
                <img src="{image_yisunsin}" alt="gambar_yisunsin" class="object-contain -translate-x-64 absolute bottom-0 scale-105 max-lg:hidden">
                <div class="top-5 lg:absolute lg:right-10 h-full sm:w-1/2  w-[70%] m-auto text-center">
                    <p class="font-bold xl:text-5xl mb-10 lg:text-4xl md:text-3xl sm:text-2xl text-xl">WE'RE INVITING YOU</p>
                    <p class="inline-block whitespace-normal text-left mb-20 text-white">Join the action, show off your talents, and strive to become the ultimate champion. With amazing rewards and unforgettable moments awaiting, <span class="text-primary">follow the rules</span> and don't miss out on this incredible opportunity. Register now and become a champion </p>
                    <div class="text-center items-center w-full">
                        <a href="https://forms.gle/FVP1H8wEdhPRyQPL8" class="inline-block my-5 bg-primary text-black font-bold p-2 md:w-[40%] register">Register</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
    .custom-button::before{
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 200%;
        left: 0;
        bottom: -35%;
        background-image: var(--bgsayap);
        z-index: -1;
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transition: transform .5s;
    }
    .custom-button:hover::before{
        transform: scale(1.15);
    }
    .custom-button, .register{
        transition: box-shadow .5s;
    }
    .custom-button:hover, .register:hover{
        box-shadow: 0px 0px 20px 0px rgba(252, 205, 37);
    }

    .text-shadow-primary{
        text-shadow: 0px 0px 40px rgba(252, 205, 37, 0.7);
    }
</style>