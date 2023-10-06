<svelte:head>
	<title>Login</title>
</svelte:head>

<!-- Script -->
<script>
	import { onMount } from "svelte";


const serverId = '859707595191484418'
const clientId = '1159736344159989760'; // ID Aplikasi Discord Anda
const redirectUri = 'http://127.0.0.1:5173/login'; // URI Pengalihan Anda
const discordOAuthUrl = 'https://discord.com/api/oauth2/authorize?client_id=1159736344159989760&redirect_uri=http%3A%2F%2F127.0.0.1%3A5173%2Flogin&response_type=token&scope=guilds%20identify%20email'
let accessToken = ''

const loginBtnHandler = () => {
  const page = window.open(discordOAuthUrl, '_blank', 'width=500,height=800')
  window.addEventListener('message', (event) => {
    if (event.origin !== window.location.origin) return;
    accessToken = event.data.accessToken;

    if (accessToken) {
      getUserData(accessToken);
      // checkMembershipServer(accessToken);
    }
  });
}

const getUserData = (token) => {
  fetch('https://discord.com/api/v10/users/@me', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      const imageUser = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}.png`;
      console.log(imageUser);
    });
}

const checkMembershipServer = (token) => {
  fetch(`https://discord.com/api/v10/users/@me/guilds`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      const isMember = data.some((server) => server.id === serverId);
      console.log('apakah dia member', isMember);
    });
}

onMount(() => {
  const url = window.location.href;
  let token = "";
  
  if (url.includes('access_token')) {
    token = url.split('#')[1].split('&')[1].split('=')[1];
  }


  if (token) {
    localStorage.setItem('accessToken', token);
    window.opener.postMessage({ accessToken: token });
    window.close();
  }
});

</script>

<!-- HTML -->

    <section>
      <div class="main flex flex-col mx-auto items-center justify-center h-screen snap-center font-bold text-[#FFF7DA]">
          <button
            on:click={loginBtnHandler}
            class="login-btn bg-[#FCCD25] hover:bg-[#E0B722] mt-10 py-5 px-6 text-[#202020] min-[2400px]:text-7xl md:text-xl text-sm font-bold uppercase">
            login
          </button>
      </div>
    </section>

<style>
</style>

