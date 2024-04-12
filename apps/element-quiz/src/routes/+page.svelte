<script type="ts">
	import { elementSymbols } from '@elemental-sea/element';
</script>

<ul>
	{#each elementSymbols as symbol}
		<li>{symbol}</li>
	{/each}
</ul>
