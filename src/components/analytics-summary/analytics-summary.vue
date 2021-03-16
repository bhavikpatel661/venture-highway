<style src="./analytics-summary.css"></style>
<script src="./analytics-summary.js"></script>
<template>
  <div id="analytics">
    <ul>
      <li v-for="(data, index) in analyticsSummary" :key="index">
        <span class="strong p-0">{{ data.value }}</span>&nbsp;{{ data.key }}
      </li>
    </ul>
  </div>
</template>
