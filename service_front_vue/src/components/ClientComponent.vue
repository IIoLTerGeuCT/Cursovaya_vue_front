<template>
  <tr>
    <td>{{ clientItem.id }}</td>
    <td>{{ clientItem.surname }}</td>
    <td>{{ clientItem.name }}</td>
    <td>{{ clientItem.patronamic }}</td>
    <td>{{ clientItem.date_born }}</td>
    <td>{{ clientItem.habitation }}</td>
    <td>{{ clientItem.pass_id }}</td>
    <td>
      <div>
        <button v-on:click="$emit('updateItem', clientItem.id)">
          Изменить
        </button>
        <button v-on:click="$emit('removeItem', clientItem.id)">Удалить</button>
      </div>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["clientItem"],
};
</script>
<style></style>
