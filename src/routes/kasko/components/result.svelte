
<script>
    export let brand_name;
    export let insurance_value;
    export let type_code;
    export let type_name;
    export let selected_year;
</script>

<div class="col-md-4 order-md-2 mb-4">
  <h4 class="d-flex justify-content-between align-items-center mb-3">
    <span class="text-muted"></span>
  </h4>
  <ul class="list-group mb-3">
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">Araç Kodu</h6>
      </div>
      <span class="text-muted" id="type_code">{ type_code }</span>
    </li>
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">Aracın Markası</h6>
      </div>
      <span class="text-muted" id="brand_name">{ brand_name }</span>
    </li>
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">Arac Tipi</h6>
        <small class="text-muted" id="type_name">{ type_name }</small>
      </div>
    </li>
    <li class="list-group-item d-flex justify-content-between lh-condensed">
      <div>
        <h6 class="my-0">Model</h6>
      </div>
      <span class="text-muted" id="selected_year">{ selected_year }</span>
    </li>
    <li class="list-group-item d-flex justify-content-between bg-light">
      <div class="text-success">
        <h6 class="my-0">Bedel</h6>
      </div>
      <span class="text-success" id="insurance_value">{ insurance_value }</span>
    </li>
  </ul>
</div>