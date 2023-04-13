<script>
    const sosmed = [
        {url: 'https://www.instagram.com/riscoaditama/', icon: '/src/assets/sosmed/riscoaditama.jpg', tag: '@riscoaditama', text_color: '#FFF7DA'},
        {url: 'https://www.instagram.com/warga_madani/', icon: '/src/assets/sosmed/warga_madani.jpg', tag: '@warga_madani', text_color: '#FCCD25'},
        {url: 'https://www.instagram.com/akhwat_madani/', icon: '/src/assets/sosmed/akhwat_madani.jpg', tag: '@akhwat_madani', text_color: '#F3C5C7'},
        {url: 'https://www.youtube.com/@riscoaditama', icon: '/src/assets/sosmed/risco_aditama.jpg', tag: 'risco aditama', text_color: '#FFF7DA'},
    ]
</script>

<div class="lg:flex justify-center items-center gap-8 h-full font-montserrat max-lg:pt-28">
    {#each sosmed as {url, icon, tag, text_color}}
            <a href={url} class="flex flex-col justify-center items-center">
                <img src={icon} alt={tag} class="lg:w-1/3 w-1/4 rounded-full" draggable="false" loading="lazy"/>
                <div class="text-center font-bold pt-4" style="color: {text_color};">{tag}</div>
            </a>
    {/each}
</div>