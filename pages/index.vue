<template>
    <main class="container pg-content main">
      <div>
        <h1 class="title">
          Power Gym
        </h1>
        <h2 class="subtitle">
          Somos tu mejor opcion para mantenerte saludable.
        </h2>
      </div>
      <div class="columns">
        <div class="column item">
          <NuxtLink to="/mision" class="item__content">
            Mision
          </NuxtLink>
        </div>
        <div class="column item">
          <NuxtLink to="/vision" class="item__content">
            Vision
          </NuxtLink>
        </div>
        <div class="column item">
          <NuxtLink to="/values" class="item__content">
            Valores
          </NuxtLink>
        </div>
      </div>
      <div class="redirection">
        <NuxtLink to="/plans">Conoce nuestros planes</NuxtLink>
      </div>
    </main>
</template>

<script>
export default {
  head: {
    title: 'Power GYM Home Page',
    meta: [
      { name: 'description', content: 'Pagina principal de Power GYM'}
    ]
  }
}
</script>

<style lang="scss" scoped>
.item {
  min-height: 165px;

  &__content {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #f15048d4;
    color: #fff;
    height: 100%;
    transition: all 0.5s;
    border-radius: 6px;
    font-size: 2rem;

    &:hover {
      transform: scale(1.1);
      background-color: #c92017;
    }
  }

  @media (max-width: 450px) {
    height: 180px;
  }
}
</style>
