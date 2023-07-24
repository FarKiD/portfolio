<h1>Welcome to SvelteKit</h1>
<p id="test">Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style lang="scss">
    @mixin helper {
        background: red;
    }

    #test {
        @include helper;
    }
</style>