<template>
  <div class="container">
    <h1>Login please</h1>
    <br />
    <br />
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
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
        </div>
        <vue-recaptcha
					sitekey="6LcMYcoZAAAAAGiz9n6lkE_UGLcJh4yxegUSDvIq"
					@verify="mxVerify"
				></vue-recaptcha>
				<br />
        <button @click="login" class="btn btn-primary">Login</button>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(user => {
          console.log(user.user);
        })
        .catch(function(error) {
          alert("unable to login" + error.message);
        });
    }
  }
};
</script>

<style scoped>
</style>