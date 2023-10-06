<script>
import { onMount } from 'svelte';

    onMount(() => {
  const url = window.location.href;
  let token = "";
  
  if (url.includes('access_token')) {
    token = url.split('#')[1].split('&')[1].split('=')[1];
  }
  if (token) {
    localStorage.setItem('accessToken', token);
    window.opener.postMessage({ accessToken: token });
    // window.close();
  }
});
</script>

<div class="bg-[#2b2b2b] w-screen h-screen">
    <div class="flex flex-col items-center justify-center h-screen">
        <div class="flex flex-col items-center justify-center">
        <h1 class="text-white text-2xl font-bold">Redirecting ...</h1>
        </div>
    </div>
</div>