<template>
  <div class="container">
    <h1>Register  please</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="fullname"
            v-model="fullname"
            required
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group">
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            required
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
            required
            placeholder="Password"
          />
          <div v-if="password.length > 1 && password.length <6 " class="text-danger">Greater than 6</div>
        </div>
        <div class="form-group">
          <input
            type="password"
            class="form-control"
            id="reenterpassword"
            v-model="reenterpassword"
            required
            placeholder="RenterPassword"
          />
          <div v-if="password != reenterpassword " class="text-danger">did not match</div>
        </div>
        <button @click="register" class="btn btn-primary">Register</button>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "register",
  data() {
    return {
      email: "",
      password: "",
      reenterpassword: ""
    };
  },
  mounted: function() {
    if (firebase.auth().currentUser) this.$router.replace("register");
  },
  methods: {
    register: function() {
      console.log("email" + this.email);
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user.user);
        })
        .catch(function(error) {
          alert("unable to register" + error.message);
        });
    }
  }
};
</script>

<style scoped>
</style>