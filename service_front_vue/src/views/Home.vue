<template>
  <div class="home">
    <div class="home__img">
      <img
        class="home__img__item"
        src="./../assets/Image/background.jpg"
        alt="img"
      />
    </div>
    <div class="home__info">
      <h3>
        СТО «Лидер» быстро и профессионально выполняет ремонт и обслуживание
        любых марок автомобилей
      </h3>
      <p>
        Предлагаем собственникам и пользователям транспортных средств Донецка
        целый комплекс услуг. В организации работают специалисты, которые быстро
        найдут общий язык с машинами, и их компетенции могут оказаться очень
        кстати для решения вашей конкретной проблемы.
      </p>
    </div>
  </div>
</template>
<style lang="scss">
@import url("https://fonts.googleapis./css2?family=Syne+Mono&display=swap");

.home {
  font-family: "Syne Mono", monospace;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 60% 40%;
  height: 600px;
  max-width: 100%;
  & .home__img img {
    width: 100%;
    height: calc(100% - 50px);
  }
  & .home__info {
    padding: 10px;
  }
}
</style>
