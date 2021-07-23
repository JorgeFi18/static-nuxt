<template>
    <header class="heading">
        <NuxtLink to="/">
            <img src="/index.jpeg" alt="logo" width="120" height="60" />
        </NuxtLink>
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
                <NuxtLink to="/contact">
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

  img {
      height: 60px;
  }
  
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
