<template>
  <div class="container">

    <!-- START COMPONENT -->
    <header class="header">
      <div class="header__logo">
        <img class="header__img" src="./assets/Icon/header_title.png" alt="" />
        <h3 class="header__title">Станция технического обслуживания</h3>
      </div>
      <div class="header__auth">
        <!-- START COMPONENT -->
        <div class="auth">
          <button class="auth__login">Вход</button>
          <button class="auth__registred">Регистрация</button>
        </div>
        <!-- END COMPONENT -->
      </div>
    </header>
    <!-- END COMPONENT -->

    <div class="body">
      <aside class="aside">
        <!-- START COMPONENT -->
        <nav class="menu">
          <ul class="menu__list">
            <li class="menu__list-item">
              <img class="menu__icon" src="./assets/Icon/home.png" alt="img" />
              <router-link class="menu__link" to="/">Домашняя</router-link>
            </li>
            <li class="menu__list-item">
              <img class="menu__icon" src="./assets/Icon/PriceList.png" alt="img" />
              <router-link class="menu__link" to="/priceListView">Услуги</router-link>
            </li>
            <li class="menu__list-item">
              <img class="menu__icon" src="./assets/Icon/Client.png" alt="img" />
              <router-link class="menu__link" to="/clientView">Клиенты</router-link>
            </li>
          </ul>
        </nav>
        <!-- END COMPONENT -->
      </aside>
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style lang="scss">
@import './assets/styles/common.scss';
@import './assets/styles/header.scss';
@import './assets/styles/auth.scss';
@import './assets/styles/menu.scss';
</style>
