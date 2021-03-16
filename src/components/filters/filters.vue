<style src="./filters.css"></style>
<script src="./filters.js"></script>
<template>
  <div class="filters">
    <nav class="panel">
      <div class="panel-block filters-items">
        <div class="field block">
          <label class="label label--control">Stages</label>
          <div class="select">
            <select v-model="filterObject.stage">
              <option value="">Select Stages</option>
              <option value="opt1">Opt 1</option>
            </select>
          </div>
        </div>

        <div class="field block">
          <label class="label label--control">Chiefs</label>
          <div class="select">
            <select v-model="filterObject.chief">
              <option value="">Select Chiefs</option>
              <option value="opt1">Opt 1</option>
            </select>
          </div>
        </div>

        <div class="field block">
          <label class="label label--control">Last Activity</label>
          <div class="select">
            <select v-model="filterObject.lastactivity">
              <option value="">Select Last Activity</option>
              <option value="opt1">Opt 1</option>
            </select>
          </div>
        </div>

        <div class="field block">
          <label class="label label--control">Fundings</label>
          <div class="select">
            <select v-model="filterObject.fundings">
              <option value="">Select Fundings</option>
              <option value="opt1">Opt 1</option>
            </select>
          </div>
        </div>

        <div class="field block">
          <label class="label label--control">Sectors</label>
          <div class="select">
            <select v-model="filterObject.sectors">
              <option value="">Select Sectors</option>
              <option value="opt1">Opt 1</option>
            </select>
          </div>
        </div>

        <div class="field block">
          <label class="label label--control">Subsectors</label>
          <div class="select">
            <select v-model="filterObject.subsectors">
              <option value="">Select Subsectors</option>
              <option value="opt1">Opt 1</option>
            </select>
          </div>
        </div>

        <div class="field block">
          <label class="label label--control">Referral</label>
          <div class="select">
            <select v-model="filterObject.referral">
              <option value="">Select Referral</option>
              <option value="opt1">Opt 1</option>
            </select>
          </div>
        </div>

        <div class="field block">
          <label class="label label--control">Cities</label>
          <div class="select">
            <select v-model="filterObject.cities">
              <option value="">Select Cities</option>
              <option value="opt1">Opt 1</option>
            </select>
          </div>
        </div>
      </div>

      <div class="panel-block">
        <button
          class="button is-dark text--capitalize block"
          id="signIn"
          @click="applyFilters($event)"
        >
          {{ "Apply Filters" | uppercase }}
        </button>
      </div>
    </nav>
  </div>
</template>
