<template>
  <div class="container">
    <div class="headerPrice">
      <h5>Данные об услугах:</h5>
      <button class="btn btn-success rounded-pill" v-on:click="addNewItemShow">
        Добавить новую услугу
      </button>
    </div>
    <div class="enter-data" v-if="visibleAddNewPriceList">
      <label for="type"
        >Название:
        <input type="text" name="type" v-model="type" />
      </label>
      <label for="price"
        >Стоимость:
        <input type="text" name="price" v-model="price" />
      </label>
      <button
        v-on:click="addNewItem"
        v-if="visibleAdd"
        class="btn btn-success rounded-pill"
      >
        Добавить
      </button>
      <button v-if="visibleUpdate" @click="updateItem">Изменить</button>
      <button v-if="visibleRestore" @click="restoreVisible">Отменить</button>
    </div>
    <div class="content">
      <table>
        <tr>
          <th>Id</th>
          <th>Название услуги</th>
          <th>Стоимость</th>
          <th>Операции</th>
        </tr>
        <PriceListComponent
          v-for="item of priceLists"
          :key="item.id"
          :priceItem="item"
          v-on:updateItem="updateItemVisible"
          v-on:removeItem="removeItem"
        />
      </table>
    </div>
  </div>
</template>
<script>
import PriceListComponent from "@/components/PriceListComponent";
export default {
  data() {
    return {
      priceLists: null,
      getUrl: "http://localhost:3001/api/priceLists",
      visibleAddNewPriceList: false,
      id: 0,
      type: "Введите название услуги",
      price: null,
      visibleAdd: false,
      visibleUpdate: false,
      visibleRestore: false,
    };
  },
  // data: () => {
  //   return {
  //     priceLists: null,
  //     getUrl: "http://localhost:3001/api/priceLists",
  //     visibleAddNewPriceList: false,
  //     id: 0,
  //     type: "Введите название услуги",
  //     price: null,
  //     visibleAdd: false,
  //     visibleUpdate: false,
  //     visibleRestore: false,
  //   };
  // },
  components: {
    PriceListComponent,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    // Метод загрузки данных в объект
    async loadData() {
      const response = await fetch(this.getUrl, {
        method: "GET",
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
      this.priceLists = await response.json();
    },

    // Добавление нового обьекта в базу данных
    addNewItemShow() {
      // Видимость вкладки добавления нового объекта
      this.visibleAddNewPriceList = true;
      this.visibleUpdate = false;
      this.visibleRestore = true;
      this.visibleAdd = true;
    },
    async addNewItem() {
      // Создадим обьект полученный из input
      const newItem = { type: this.type, price: this.price };
      //Запрос на добавление
      await fetch(this.getUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(newItem),
      });

      // Обновляем данные с сервера
      this.loadData();

      // Обнуляем значения input
      this.type = "";
      this.price = "";
    },
    // Изменение данных
    updateItemVisible(id) {
      // Видимость формы ввода/изменения данных
      this.addNewItemShow();
      // Изменим разметку
      this.visibleUpdate = true;
      this.visibleRestore = true;
      this.visibleAdd = false;

      //Находим выбранный элемент для вывода в input
      const item = this.priceLists.find((i) => i.id === id);
      this.id = id;
      this.type = item.type;
      this.price = item.price;
    },
    async updateItem() {
      // Создадим объект из полей input
      const newItem = { id: this.id, type: this.type, price: this.price };
      //Запрос на обновление данных
      await fetch(this.getUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(newItem),
      });
      // Обновляем данные с сервера
      this.loadData();

      // Обнуляем значения input
      this.type = "";
      this.price = "";
    },
    // Удаление данных
    async removeItem(id) {
      console.log(`${this.getUrl}?id=${id}`);
      let result;
      fetch(`${this.getUrl}?id=${id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then((r2) => (result = r2));
      console.log(result);
      //.then((response) =>response.json())
      // .then((data) => console.log(data))
      // .catch((err) => console.log(err));

      // Обновляем данные с сервера
      await this.loadData();
      console.log(`URA`);
    },
    clearValue() {
      this.type = "";
      this.price = "";
    },
    restoreVisible() {
      this.visibleAddNewPriceList = false;
    },
  },
};
</script>
<style lang="scss">
.headerPrice {
  display: flex;
  padding: 4px;
}
table th,
td {
  border: 1px solid black;
}
</style>
