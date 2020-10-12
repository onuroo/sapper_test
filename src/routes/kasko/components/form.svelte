<script>
  import { createEventDispatcher } from 'svelte';

  import { getInsuranceDataRequest } from '../../../requests/insurance_requests';

  const dispatch = createEventDispatcher();

  const years = Array.apply(0, new Array(new Date().getFullYear() - 2005)).map((i, index) => new Date().getFullYear() - index);

  let selected_year = null;
  let selected_brand_name = null;
  let selected_brand_type = null;

  let brand_names = [];
  let type_names = [];
  let insurances = [];

  function handleOnChangeYear(event) {
    const { value } = event.target;
    if (selected_year !== value) {
      selected_brand_name = null;
      selected_brand_type = null;

      brand_names = [];
      type_names = [];

      selected_year = value;
      getInsuranceDataRequest({ year: parseFloat(value) }).then((response) => {
        brand_names = response.brand_names;
      });
    }
  }

  function handleOnChangeBrandName(event) {
    const { value } = event.target;
    if (value !== selected_brand_name) {
      selected_brand_type = null;
      selected_brand_name = value;

      type_names = [];

      getInsuranceDataRequest({ year: selected_year, brand_name: selected_brand_name }).then((response) => {
        type_names = response.type_names;
        insurances = response.insurance
      });
    }
  }

  function handleOnChangeTypeName(event) {
    const { value } = event.target;
    selected_brand_type = value;

    const selected_insurance = insurances.find(item => item.type_name === selected_brand_type)

    dispatch('on_selected_insurance', {
      data: {...selected_insurance , selected_year },
    });
  }
    
</script>

<div class="col-md-8 order-md-1">
  <form class="needs-validation" novalidate="">
  
    <div class="mb-3">
      <label for="year">Aracın Model Yılı</label>
        <!-- svelte-ignore a11y-no-onchange -->
        <select on:change={ handleOnChangeYear } class="custom-select d-block w-100" id="year" required="">
          <option value="">Seçiniz...</option>

          {#each years as year}
            <option value={ year }>{ year }</option>
          {/each}
          
        </select>
        <div class="invalid-feedback">
          Lütfen geçerli bir yıl seçiniz.
        </div>
    </div>
    <div class="mb-3">
      <label for="brand">Aracın Markası</label>
      <!-- svelte-ignore a11y-no-onchange -->
        <select on:change={ handleOnChangeBrandName } class="custom-select d-block w-100" id="brand" required="">
          <option value="">Seçiniz...</option>
          {#each brand_names as brand_name}
            <option value={ brand_name }>{ brand_name }</option>
          {/each}

        </select>
        <div class="invalid-feedback">
          Lütfen geçerli bir araç markası seçiniz.
        </div>
    </div>
    <div class="mb-3">
      <label for="brand_type">Aracın Tipi</label>
      <!-- svelte-ignore a11y-no-onchange -->
        <select on:change={ handleOnChangeTypeName } class="custom-select d-block w-100" id="brand_type" required="">
          <option value="">Seçiniz...</option>
           {#each type_names as type_name}
            <option value={ type_name }>{ type_name }</option>
          {/each}
        </select>
        <div class="invalid-feedback">
          Lütfen geçerli bir araç tipi seçiniz.
        </div>
    </div>
    <hr class="mb-4">
    <div class="mb-3">
        <small class="text-muted">* Birliğimiz üyesi sigorta şirketlerinin sigortaladıkları motorlu kara taşlarının kasko değerlerini belirlemelerinde yardımcı olmak üzere, piyasa fiyatları göz önüne alınarak saptanan ve sektör içi bir hizmet gereği Birlik üyelerine duyurulan bu fiyatların yapılacak işlemlerde esas alınmasından, TSB hiç bir şekilde sorumluluk kabul etmez. *Listedeki otomobil, arazi taşıtı ve hafif ticari araçların değerleri INDICATA firmasının katkılarıyla oluşturulmaktadır. Kamyon, çekici, otobüs, motosiklet, zirai traktör gibi araçların değerleri ise TSB tarafından hazırlanmaktadır. </small>
      </div>
    <div class="mb-3">
        <small class="text-muted">İNDICATA firmasından gelen değerlerin kontrolünde ve listenin TSB tarafından hazırlanan bölümü için ikinci el araç ilan siteleri, ithalatçı, imalatçı firmalar ve bunların web siteleri, galeriler, konu ile ilgili süreli yayınlar, gazetelerin ikinci el ilanları ve bunların web siteleri, alıcı veya satıcı tarafından ibraz edilen fatura ve benzeri belgeler gibi kaynaklardan yararlanılmaktadır. </small>
    </div>
    <hr class="mb-4">
  </form>
</div>