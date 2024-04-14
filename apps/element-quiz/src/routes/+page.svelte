<script type="ts">
	import { elementSymbols } from "@elemental-sea/element";
	import { m } from "@elemental-sea/internationalization-element-quiz";
</script>

<p>
	{m.hello_world()}
	{m.greeting({ name: "たかし" })}
</p>

<ul>
	{#each elementSymbols as symbol}
		<li>{symbol}</li>
	{/each}
</ul>
