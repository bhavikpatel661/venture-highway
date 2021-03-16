<style src="./dashboard.css"></style>
<script src="./dashboard.js"></script>
<template>
  <div id="dashboard" class="content--max-height">
    <navbar></navbar>
    <div>
      <div class="columns content--max-height">
        <div class="column is-one-fifth" id="menuContainer">
          <MenuBar></MenuBar>
        </div>
        <div class="column main--content">
          <div class="tabs">
            <ul>
              <li class="is-active"><a>Recommendations</a></li>
              <li><a>Overview</a></li>
            </ul>
          </div>
          <div id="tab-content">
            <div class="is-active" data-content="1">
              <div class="columns">
                <div class="column is-one-fifth pt-0">
                  <Filters @filters="getFilters" />
                </div>

                <div class="row m-0">
                  <div
                    class="row m-0 block"
                    style="margin: 1.5em 0px !important"
                  >
                    <span class="col-lg-12"
                      >Total list of {{ ventureDetails.length }} startups</span
                    >
                  </div>
                  <div
                    v-for="(ventureDetail, index) in ventureDetails"
                    class="column is-half col-lg-12 col-sm-6"
                    :key="index"
                  >
                    <VentureDetails :ventureDetail="ventureDetail" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
