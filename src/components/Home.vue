<script>
export default {
  data() {
    return {
      hasToken: localStorage.getItem('papa') !== null
    };
  },
  methods: {
    Register() {
      this.$router.push('/register');
    },
    Login() {
      this.$router.push('/login');
    },
    Post() {
      this.$router.push('/post');
    },
    Delethistory(){
      this.$router.push('/delete');
    },
    Return() {
      this.$router.push('/post');
    },
    handleStorageChange(event) {
      if (event.key === 'papa') {
        this.hasToken = event.newValue !== null;
      }
    }
  },
  created() {
    window.addEventListener('storage', this.handleStorageChange);
  },
  beforeUnmount() {
    window.removeEventListener('storage', this.handleStorageChange);
  }
};
</script>


    <template>
  <h1>Welcome to Homepage</h1>
  <br/>
  <div class="twobuttons1"> 
    <v-btn v-if="!hasToken" @click="Register()">Register</v-btn>
     <v-btn v-if="!hasToken" @click="Login()">Login</v-btn>
  </div>
  <div class="twobuttons">
  <v-btn v-if="hasToken" @click="Return()">ADD TODO </v-btn> 
  <v-btn v-if="hasToken" @click="Delethistory()">History </v-btn>
    </div>
</template>