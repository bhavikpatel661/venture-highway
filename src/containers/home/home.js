import welcome from 'components/welcome/welcome.vue'
import Login from 'components/login/login.vue'
export default {
  name: 'home',
  data: function () {
    return {
      text: 'Home',
      message: 'Your App',
      show: true
    }
  },
  methods: {
    messageHome: function () {
      alert(this.customMessage)
    }
  },
  components: {
    welcome,
    Login
  },
  computed: {
    customMessage: function () {
      return `This is ${this.message}`
    }
  }
}
