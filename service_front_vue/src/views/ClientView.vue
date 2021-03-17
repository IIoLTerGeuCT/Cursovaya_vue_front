<template>
  <div class="container">
    <div class="headerClient">
      <h5>Данные об клиентах:</h5>
      <button class="btn btn-success rounded-pill" v-on:click="addNewItemShow">
        Добавить нового клиента
      </button>
    </div>
    <div class="enter-data" v-if="visibleAddNewClient">
      <label for="surname"
        >Фамилия:
        <input type="text" name="surname" v-model="surname" />
      </label>
      <label for="name"
        >Фамилия:
        <input type="text" name="name" v-model="name" />
      </label>
      <label for="patronamic"
        >Фамилия:
        <input type="text" name="patronamic" v-model="patronamic" />
      </label>
      <label for="date_born"
        >Дата рождения:
        <input type="date" name="date_born" v-model="date_born" />
      </label>

      <label for="habitation"
        >Место регистрации:
        <input type="text" name="habitation" v-model="habitation" />
      </label>
      <label for="pass_id"
        >Паспортные данные:
        <input type="text" name="pass_id" v-model="pass_id" />
      </label>
      <button
        v-on:click="addNewItem"
        v-if="visibleAdd"
        class="btn btn-success rounded-pill"
      >
        Добавить
      </button>
      <button v-if="visibleUpdate" @click="updateItem">Изменить</button>
      <button v-if="visibleRestore">Отменить</button>
    </div>
    <div class="content">
      <table>
        <tr>
          <th>Id</th>
          <th>Фамилия</th>
          <th>Имя</th>
          <th>Отчество</th>
          <th>Дата рождения</th>
          <th>Место регистрации</th>
          <th>Паспортные данные</th>
        </tr>
        <!-- <ClientComponent
          v-for="item of priceLists"
          :key="item.id"
          :priceItem="item"
          v-on:updateItem="updateItemVisible"
          v-on:removeItem="removeItem"
        /> -->
      </table>
    </div>
  </div>
</template>
<script>
import ClientComponent from "../components/ClientComponent";
export default {
  data() {
    return {
      clients: null,
    };
  },
  comments: ClientComponent,
};
</script>
