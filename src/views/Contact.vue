<template>

  <div class="container">
    <h1>Contact </h1>
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
            type="subject"
            class="form-control"
            id="message"
            v-model="message"
            required
            placeholder="Enter message"
          />
        </div>
        <button @click="send" class="btn btn-primary">Send</button>
      </div>
      <div class="col-md-4"></div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
#split {
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 1;
  top: 0;
  overflow-x: hidden;
  padding-top: 20px;
}

#left {
  left: 0;
  background-color: #111;
}

#right {
  right: 0;
  background-color: red;
}

#centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

</style>