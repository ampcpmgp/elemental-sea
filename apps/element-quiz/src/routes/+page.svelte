<script type="ts">
	import { elementSymbols } from 'element';
</script>

<ul>
	{#each elementSymbols as symbol}
		<li>{symbol}</li>
	{/each}
</ul>
