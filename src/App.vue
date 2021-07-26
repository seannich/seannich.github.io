<template>
  <div id="app">
    <div id="nav">
      <router-link to="/index">about</router-link> |
      <router-link to="/projects">projects</router-link>
    </div>
    <transition name="view">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000009;

    &.router-link-exact-active {
      color: #b20d30;
      text-transform: uppercase;
      text-decoration: underline;
    }
  }
}

.page {
  width: 100;
  margin: 0 auto;
  max-width: 768px;
  padding: 15px;
  box-sizing: border-box;
}

.view-enter-active,
.view-leave-active {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease;
}

.view-enter-active {
  transition-delay: 0.3s;
}

.view-enter {
  opacity: 0;
  // transform: translateX(-1920px);
}

.view-enter-to {
  opacity: 1;
  // transform: translateX(0);
}

.view-leave {
  opacity: 1;
  // transform: translateX(0);
}

.view-leave-to {
  opacity: 0;
  // transform: translateX(1920px);
}

.footer {
  border-top: solid lightgray thin;
  width: 90%;
  margin: auto;
  padding: 1%;
}
</style>
