
<script>
	import logo_madani from '$lib/assets/logo/Logo_Madani.png';
	import { fade, slide } from 'svelte/transition';
	import { page } from '$app/stores';
	import '../../app.css';
	let showMenu = false;
	let top;
	function toggleMenu() {
		showMenu = !showMenu;
	}
	function onTop() {
		top.scrollTo(0, 0);
	}
 </script>
<div class="h-[100vh] content-div scroll-container" bind:this={top}>
	<nav class="top-0 bg-[#2b2b2b] w-full font-montserrat fixed z-10">
		<div class="mx-14">
		  <div class="flex items-center justify-between h-20">
			<div class="flex-shrink-0">
			  <a href="/" class="text-white text-2xl font-bold" on:click={onTop}><img src={logo_madani} alt="logo" class="min-[2000px]:w-80 xl:w-64 lg:w-52 md:w-40 sm:w-36 w-32 aspect-auto	" width="512px" height="437px"></a>
			</div>
			<button class="block md:hidden text-white focus:outline-none" on:click={toggleMenu} aria-label="nav-toggle" id="nav-toggle" title="nav-toggle">
			  <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				{#if showMenu}
				  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.293 4.707a1 1 0 010 1.414l-14 14a1 1 0 01-1.414-1.414l14-14a1 1 0 011.414 0z" />
				  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.707 4.707a1 1 0 000 1.414l14 14a1 1 0 001.414-1.414l-14-14a1 1 0 00-1.414 0z" />
				{:else}
				  <path fill-rule="evenodd" clip-rule="evenodd" d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
				{/if}
			  </svg>
			</button>
			<div class="hidden md:block">
			  <div class="ml-10 flex items-baseline space-x-4 text-xl text-[#FFF7DA]">
				<a href="/" class="hover:text-white px-3 py-2 rounded-md font-medium" on:click={onTop}>Home</a>
				<a href="#about" class="hover:text-white px-3 py-2 rounded-md font-medium">About</a>
				<a href="#activity" class="hover:text-white px-3 py-2 rounded-md font-medium">Activity</a>
				<a href="#social-media" class="hover:text-white px-3 py-2 rounded-md font-medium">Social Media</a>
			  </div>
			</div>
		  </div>
		</div>
		{#if showMenu}
		<div transition:slide class="md:hidden absolute top-20 w-full bg-[#2b2b2b]">
		  <div class="flex flex-col items-start py-4 px-4 text-[#FFF7DA]">
			<a href="/" class="hover:text-white text-xl py-2" on:click={toggleMenu}>Home</a>
			<a href="#about" class="hover:text-white text-xl py-2" on:click={toggleMenu}>About</a>
			<a href="#activity" class="hover:text-white text-xl py-2" on:click={toggleMenu}>Activity</a>
			<a href="#social-media" class="hover:text-white text-xl py-2" on:click={toggleMenu}>Social Media</a>
		  </div>
		</div>
		{/if}
	  </nav>
	<slot />
</div>

<style>
	.scroll-container{
    scroll-snap-type: y mandatory;
    overflow: scroll;
	scroll-behavior: smooth;
	scroll-snap-stop: always;
  }
  .scroll-container::-webkit-scrollbar {
	display: none;
  }
</style>


  
