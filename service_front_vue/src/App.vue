<template>
  <div class="container">
    <div class="container__header">
      <div class="container__header__title">
        <img
          class="header__title__img"
          src="./assets/Icon/header_title.png"
          alt=""
        />
        <h3>Станция технического обслуживания</h3>
      </div>
      <div class="container__header__admin">
        <button class="container__btn__logIn">Вход</button>
        <button class="container__btn__registred">Регистрация</button>
      </div>
    </div>
    <div class="container__body">
      <div class="container__aside">
        <ul>
          <li>
            <img
              class="menu__icon__size"
              src="./assets/Icon/home.png"
              alt="img"
            />
            <router-link to="/">Домашняя</router-link>
          </li>
          <li>
            <img
              class="menu__icon__size"
              src="./assets/Icon/PriceList.png"
              alt="img"
            />
            <router-link to="/priceListView">Услуги</router-link>
          </li>
          <li>
            <img
              class="menu__icon__size"
              src="./assets/Icon/Client.png"
              alt="img"
            />
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
.container {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
  // background-color: #e5e5e5;
  & .container__header {
    height: 50px;
    max-width: 100%;
    box-shadow: 1px 1px 5px gray;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    & .container__header__title {
      display: flex;
      align-items: center;
      // box-shadow: 1px 1px 10px gray;
    }
    & .container__header__title img {
      margin-left: 40px;
      height: 32px;
      width: 32px;
    }
    & .container__header__title h3 {
      margin-left: 5px;
      padding: 10px;
      color: #109cf1;
    }
    & .container__btn__logIn {
      width: 93.91px;
      background-color: rgb(35, 170, 35);
      color: white;
    }
    & .container__btn__registred {
      margin-left: 10px;
      background-color: rgb(168, 207, 26);
      color: rgb(246, 244, 244);
    }
  } // header
  & .container__body {
    box-shadow: 1px 1px 5px gray;
    // max-height: 700px;
    max-width: 100%;
    display: flex;
    & .container__aside {
      max-width: 12%;
      box-shadow: 1px 1px 5px gray;
      // background-color: #fff;
      padding: 2px;
    }
    & .container__aside ul {
      padding: 10px;
    }
    & .container__aside ul li {
      list-style: none;
      display: flex;
      align-items: center;
      color: #334d6e;
    }
    .menu__icon__size {
      height: 24px;
      width: 24px;
      margin-right: 5px;
    }
    & .container__content {
      padding: 20px 50px;
    }
  } // body
} // container
</style>
