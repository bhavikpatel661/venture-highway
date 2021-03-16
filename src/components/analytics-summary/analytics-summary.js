/**
 * Analytics summary compponent
 */
import { mapState } from 'vuex'

export default {
  name: 'AnalyticsSummary',
  computed: {
    ...mapState([
      'analyticsSummary'
    ])
  },

  mounted: function () {
    this.$store.dispatch('LOAD_ANALYTICS_SUMMARY')
  }
}
