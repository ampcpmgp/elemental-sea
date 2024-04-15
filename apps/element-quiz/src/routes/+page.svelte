<script type="ts">
	import { elementSymbols } from "@elemental-sea/element";
	import { m, runtime } from "@elemental-sea/internationalization-element-quiz";
</script>

<p>
	{m.hello_world()}
	{m.greeting({ name: "たかし" })}
</p>

{#each runtime.availableLanguageTags as tag}
	<a href={`/${tag}`}> <button>{tag}</button></a>
{/each}

<ul>
	{#each elementSymbols as symbol}
		<li>{symbol}</li>
	{/each}
</ul>
