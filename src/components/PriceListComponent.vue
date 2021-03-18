<template>
  <tr>
    <td>{{ priceItem.id }}</td>
    <td>{{ priceItem.type }}</td>
    <td>{{ priceItem.price }}</td>
    <td>
      <div>
        <button v-on:click="$emit('updateItem', priceItem.id)">Изменить</button>
        <button v-on:click="$emit('removeItem', priceItem.id)">Удалить</button>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["priceItem"],
};
</script>
<style></style>
