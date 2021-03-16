<style src="./navbar.css"></style>
<script src="./navbar.js"></script>
<template>
  <div id="navBar">
    <nav
      class="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <img
            alt=""
            width="40px"
            height="auto"
            :src="require('../../assets/logo.png')"
          />
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            <i class="fa fa-search"></i>
            <input
              class="input"
              id="search"
              type="text"
              placeholder="Search for a startup or Connection"
            />
          </a>
        </div>

        <div class="navbar-end navbar-end--control">
          <div class="navbar-item">
            <AnalyticsSummary></AnalyticsSummary>

            <span class="is-light"
              ><i class="fa fa-user-o" aria-hidden="true"></i
            ></span>
            <span class="is-light"
              ><i class="fa fa-bell-o" aria-hidden="true"></i
            ></span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
