import Navbar from 'components/navbar/navbar.vue'
import MenuBar from 'components/menu/menu.vue'
import Filters from 'components/filters/filters.vue'
import VentureDetails from 'components/venture-details/venture-details.vue'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  data: function () {
    return {
      text: 'dashboard'
    }
  },
  methods: {
    getFilters: function (value) {
      console.log('filters are here parent ->>> ', value)
    }
  },
  components: {
    Navbar,
    MenuBar,
    Filters,
    VentureDetails
  },
  computed: {
    ...mapState([
      'ventureDetails'
    ])
  },
  mounted: function () {
    this.$store.dispatch('LOAD_VENTURE_DETAILS').then(function (ventureDetails) {
      console.log(ventureDetails)
    })
  }
}
