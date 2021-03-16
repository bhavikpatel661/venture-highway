/**
 * FIlters vue component
 */

export default {
  name: 'Filters',
  data: function () {
    return {
      filterObject: { stage: '', chief: '', lastactivity: '', fundings: '', sectors: '', subsectors: '', referral: '', cities: '' }
    }
  },
  filters: {
    uppercase: function (v) {
      return v.toUpperCase()
    }
  },
  methods: {
    applyFilters: function (ele) {
      console.log('called', this.filterObject.stage)
      this.$emit('filters', this.filterObject)
    }
  }
}
