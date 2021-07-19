<template>
    <header class="heading">
        <img src="/gym-logo.png" alt="logo" />
        <ul>
            <li>
                <NuxtLink to="/">
                    Inicio
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/plans">
                    Planes
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/">
                    Contacto
                </NuxtLink>
            </li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
.heading {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #424242;
  margin: 0;

  ul {
      display: flex;

      li {
          padding: 5px 10px;

          a{
            color: #fff;
          }
      }
  }
}
</style>
