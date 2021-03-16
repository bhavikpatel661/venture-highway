<style src="./login.css"></style>
<script src="./login.js"></script>
<template>
  <div id="login">
    <div class="card">
      <div class="card-content">
        <div class="field block text--centralize login--header">
          <img
            alt=""
            width="40px"
            height="auto"
            :src="require('../../assets/logo.png')"
          />
          <h2>Sign in to continue</h2>
        </div>

        <div class="field block">
          <label class="label label--control">User Name</label>
          <div class="control">
            <input class="input" type="text" />
          </div>
        </div>

        <div class="field block">
          <label class="label label--control">Password</label>
          <div class="control">
            <input class="input" type="password" />
          </div>
        </div>

        <button class="button is-dark text--capitalize block" id="signIn">
          <router-link to="/dashboard">
            {{ "Sign In" | uppercase }}</router-link
          >
        </button>

        <div class="field block text--centralize" id="needHelp">
          <a>Need Help?</a>
        </div>
      </div>
    </div>
  </div>
</template>
