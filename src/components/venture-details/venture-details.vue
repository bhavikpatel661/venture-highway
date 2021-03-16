<style src="./venture-details.css"></style>
<script src="./venture-details.js"></script>
<template>
   <div class="card">
   <div class="card-content">
      <div class="media">
         <div class="media-left">
            <figure class="image is-48x48">
               <img :src="ventureDetail.logo" alt="Placeholder image">
            </figure>
         </div>
         <div class="media-content">
            <p class="title is-4">{{ventureDetail.name}} <em class="fa fa-external-link-square icon-external-link"></em></p>
            <p class="subtitle is-6 text--subtitle">Founded in {{ventureDetail.founded}}, {{ventureDetail.location}}</p>
         </div>
         <div class="media-content ta-r">
            <div class="title is-4 title--control">
               <span class="dot"></span>
               <span class="dot"></span>
               <span class="dot"></span>
            </div>
            <div class="subtitle is-6 text--subtitle">To Meet</div>
         </div>
      </div>
   </div>
   <div class="card-content">
      <h4 class="block strong">{{ventureDetail.budget}}</h4>
      <div class="block">
         <p>{{ventureDetail.desc}}</p>
      </div>
      <div class="columns">
         <div class="column">
            <label class="checkbox checkbox--control">
            <input type="checkbox">
            </label>
            <label class="rating">
            <span class="strong"> {{ventureDetail.rating}}/ </span>5</label>
         </div>
         <div class="column">
            <div class="chief">
               <div class="chief--contact">
                  <p class="chief--contact--title ta-r">Chief</p>
                  <p class="chief--contact--name ">{{ventureDetail.chief}}</p>
               </div>
               <div class="chief--avatar">
                  <figure class="image is-32x32">
                     <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png">
                  </figure>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
