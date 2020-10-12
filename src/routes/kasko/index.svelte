<script context="module">
	// export function preload() {
	// 	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
	// 		return { posts };
	// 	});
	// }
</script>

<script>
  import Form from './components/form.svelte';
  import Result from './components/result.svelte';


  let insurance_object = {
    brand_name: '',
    insurance_value: '',
    type_code: '',
    type_name: '',
    selected_year: '',
  }

  const onSelectedInsurance = (event) => {
    insurance_object = event.detail.data;
    console.log('event.detail.data', event.detail.data);
  }

</script>

<svelte:head>
	<title>Kasko</title>
</svelte:head>

<div class="container">
<div class="py-5 text-center">
    <h2>Kasko Değer Listesi</h2>
    <p class="lead">TSB hiç bir şekilde sorumluluk kabul etmez. *Listedeki otomobil, arazi taşıtı ve hafif ticari araçların değerleri INDICATA firmasının katkılarıyla oluşturulmaktadır. Kamyon, çekici, otobüs, motosiklet, zirai traktör gibi araçların değerleri ise TSB tarafından hazırlanmaktadır.</p>
</div>
<div class="row">
    <Result {...insurance_object} />
    <Form on:on_selected_insurance={ onSelectedInsurance } />
</div>
</div>