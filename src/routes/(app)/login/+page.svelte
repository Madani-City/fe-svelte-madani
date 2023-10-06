<svelte:head>
	<title>Login</title>
</svelte:head>

<!-- Script -->
<script>
const serverId = '859707595191484418' // ID Aplikasi Discord Anda
const discordOAuthUrl = 'https://discord.com/api/oauth2/authorize?client_id=1159761094932439050&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Flogin%2Fredirect-uri&response_type=token&scope=guilds%20identify%20email'
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

