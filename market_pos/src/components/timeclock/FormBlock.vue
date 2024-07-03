<script setup></script>

<template>
  <div class="col-block">
    <div id="input-display"></div>
    <div id="login-input-container">
      <div class="input-btn" btn-value="1">1</div>
      <div class="input-btn" btn-value="2">2</div>
      <div class="input-btn" btn-value="3">3</div>

      <div class="input-btn" btn-value="4">4</div>
      <div class="input-btn" btn-value="5">5</div>
      <div class="input-btn" btn-value="6">6</div>

      <div class="input-btn" btn-value="7">7</div>
      <div class="input-btn" btn-value="8">8</div>
      <div class="input-btn" btn-value="9">9</div>
      <div class="input-btn back-btn" btn-value="back">
        <font-awesome-icon icon="fa-solid fa-arrow-left" />
      </div>
      <div class="input-btn" btn-value="0">0</div>
      <div class="input-btn go-btn" btn-value="go">
        <RouterLink to="timeclock"><font-awesome-icon icon="fa-solid fa-arrow-right" /></RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.col-block {
  max-width: 455px;
  padding: 60px 40px;
}
input {
  max-width: 100%;
  width: 100%;
  min-height: 100px;
  border-radius: 10px;
}
#input-display {
  min-height: 50px;
  margin-bottom: 30px;
  border: 2.5px solid var(--color-black);
  background-color: rgba(255, 255, 255, 0.35);
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
}
#login-input-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
}
.input-btn {
  margin: auto;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: var(--color-black);
  height: 90px;
  width: 90px;
  border: 1px solid var(--color-black);
  background-color: rgba(230, 230, 230, 0.6);
  border-radius: 999px;
  transition: 0.3s all;
  cursor: pointer;

  font-size: 24px;
  font-weight: 600;
}
.input-btn:hover {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 8px 5px rgba(0, 0, 0, 0.2);
}
.input-btn a {
  color: unset;
  text-decoration: unset;
}
.input-btn.back-btn,
.input-btn.go-btn {
  background-color: rgba(128, 0, 0, 0.8);
}
.input-btn.back-btn:hover,
.input-btn.go-btn:hover {
  background-color: rgba(128, 0, 0, 1);
}
</style>
