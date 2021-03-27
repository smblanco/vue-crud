<template>
  <div class="layout-content">
    <div class="content-section implementation">
      <div class="card">
        <DataTable :value="products">
          <Column field="email" header="Email"></Column>
          <Column field="firstName" header="FirstName"></Column>
          <Column field="id" header="Category"></Column>
          <Column field="lastName" header="LastName"></Column>
          <Column field="picture" header="Picture">
            <template #body="{data}">
              <img :src="data.picture" width="23"/>

            </template>
          </Column>
          <Column field="title" header="title"></Column>

        </DataTable>
      </div>
    </div>
  </div>
</template>
<script>
  import ProductService from '../service/ProductService';
export default {
    data() {
        return {
            products: null
        }
    },
    productService: null,
    created() {
        this.productService = new ProductService();
    },
    mounted() {
        this.productService.getProductsSmall().then(data=>this.products=data);
        
    }
}
</script>