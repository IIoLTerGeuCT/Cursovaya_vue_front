<template>
  <div class="container">
    <div class="container__header">
      <div class="header__title">
        <img class="header__img" src="./assets/Icon/header_title.png" alt="" />
        <h3>Станция технического обслуживания</h3>
      </div>
      <div class="header__admin">
        <button class="admin__login">Вход</button>
        <button class="admin__registred">Регистрация</button>
      </div>
    </div>
    <div class="container__body">
      <div class="body__aside">
        <ul>
          <li>
            <img class="menu__icon" src="./assets/Icon/home.png" alt="img" />
            <router-link to="/">Домашняя</router-link>
          </li>
          <li>
            <img
              class="menu__icon"
              src="./assets/Icon/PriceList.png"
              alt="img"
            />
            <router-link to="/priceListView">Услуги</router-link>
          </li>
          <li>
            <img class="menu__icon" src="./assets/Icon/Client.png" alt="img" />
            <router-link to="/clientView">Клиенты</router-link>
          </li>
        </ul>
      </div>
      <div class="container__content">
        <router-view />
      </div>
    </div>
  </div>
</template>
<style lang="scss">
* {
  box-sizing: border-box;
}
.container {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
} // container
.container__header {
  height: 50px;
  max-width: 100%;
  box-shadow: 1px 1px 5px gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
} // header
.header__title {
  display: flex;
  align-items: center;
}
.header__img {
  margin-left: 40px;
  height: 32px;
  width: 32px;
}
.header__title h3 {
  margin-left: 5px;
  padding: 10px;
  color: #109cf1;
}
.admin__login {
  width: 93.91px;
  background-color: rgb(35, 170, 35);
  color: white;
}
.admin__registred {
  margin-left: 10px;
  background-color: rgb(168, 207, 26);
  color: rgb(246, 244, 244);
}
.container__body {
  box-shadow: 1px 1px 5px gray;
  max-width: 100%;
  display: flex;
} // body
.body__aside {
  width: 200px;
  box-shadow: 1px 1px 5px gray;
  padding: 2px;
}
.body__aside ul {
  padding: 10px;
}
.body__aside ul li {
  list-style: none;
  display: flex;
  align-items: center;
  color: #334d6e;
}
.menu__icon {
  height: 24px;
  width: 24px;
  margin-right: 5px;
}
.container__content {
  width: 100%;
  padding: 20px 50px;
}
</style>
