<svelte:head>
	<title>Home</title>
</svelte:head>
<script>
  import video_webm from '$lib/assets/video/welkam madani 2d vp10.webm';
  import video_mp4 from '$lib/assets/video/welkam_madani_2d.mp4';
  import About from '$lib/components/about.svelte';
  import Activity from '$lib/components/activity.svelte';
  import SocialMedia from '$lib/components/socialmedia.svelte';
</script>
<div class="font-bold text-[#FFF7DA] font-montserrat h-full grid place-items-center snap-y snap-mandatory overflow-y-auto content-div">
    <div class="main flex flex-col mx-auto items-center justify-center h-screen snap-center">
        <video autoplay loop muted preload="auto" class="w-[45%] max-:hidden mix-blend-lighten aspect-video">
          <source src={video_webm} type="video/webm">
          <source src={video_mp4} type="video/mp4">
          <track kind="captions" srclang="en" label="English" default>
        </video>
        <div class="md:text-3xl xl:text-5xl sm:text-xl min-[2400px]:text-9xl max-[360px]:text-xs">KOMUNITAS GAMERS MUSLIM INDONESIA</div>
        <div class="text-[#FCCD25] mt-2 min-[350px]:text-sm md:text-xl min-[2400px]:text-5xl text-xs">KUY GABUNG, JADI BAGIAN KOTA MADANI</div>
        <a 
          href="https://discord.gg/VbGZ8yvhKw" 
          target="_blank" 
          class="bg-[#FCCD25] hover:bg-[#E0B722] mt-10 py-5 px-6 text-[#202020] min-[2400px]:text-7xl md:text-xl text-sm font-bold">
          GABUNG SEKARANG
        </a>
    </div>
    <section id="about" class="h-screen snap-center">
      <About />
    </section>
    <section id="activity" class="h-screen snap-center">
      <Activity />
    </section>
    <section id="social-media" class="h-screen snap-center">
      <SocialMedia />
    </section>
</div>

<style>
	.content-div::-webkit-scrollbar {
		display: none;
	}
</style>

