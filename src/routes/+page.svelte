<svelte:head>
	<title>Home</title>
</svelte:head>
<script>
</script>
<div class="text-3xl font-bold bg-[#202020] min-h-screen text-[#FFF7DA] overflow-hidden">
    <div class="main slide-in">
        main
      </div>
</div>

<style>
  /* animation slide in from buttom */
  .slide-in {
    animation: slideIn 1s ease-in-out;
  }
  @keyframes slideIn {
    0% {
      transform: translateY(100%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>

