<template>
  <div class="home">
    <!-- <div class="home__img"> -->
    <img class="home__img" src="./../assets/Image/background.jpg" alt="img" />
    <!-- </div> -->
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
  width: 100%;

  @media screen and (min-width: 900px) {
    display: flex;
  }
}
.home__img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  @media screen and (min-width: 900px) {
    width: 60%;
  }
}
.home__info {
  padding: 10px;
  @media screen and (min-width: 900px) {
    width: 40%;
  }
}
</style>
