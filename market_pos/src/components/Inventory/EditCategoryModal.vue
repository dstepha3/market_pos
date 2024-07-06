<script setup>

defineProps({})

function closeModal() {
  let modal = document.getElementById('editModal')
  let overlay = document.getElementById('modalOverlay')

  if (modal) {

    if (overlay) {
      overlay.style.display = 'none'
      overlay.style.opacity = '0'
    }

    modal.style.display = 'none'
  }
}
</script>

<template>
  <div id="editModal">
    <div class="message">
      <div class="message-meta">
        <div class="message-meta-inner">
          <div class="posted-by">
            <input id="categoryName" placeholder="Category Name" type="text">
          </div>
        </div>
        <div @click="closeModal()" class="saveBtn">Save</div>
      </div>
      <div class="form-container">
        <div id="parentCategory_input">
          <label for="parentCategory">Parent Category</label>
          <select name="parentCategory" id="pCat">
            <option value="">Select</option>
            <option value="Category">Category</option>
            <option value="Category">Category</option>
            <option value="Category">Category</option>
            <option value="Category">Category</option>
          </select> 
        </div>
        <div id="position_input">
          <label for="position">Position</label>
          <input name="position" type="text" placeholder="0">
        </div>
        <div id="color_input">
          <label for="color">Menu Color</label>
          <input name="color" type="color" value="#800000">
        </div>
        <div id="enabled_input">
          <label for="cat_enabled">Enabled?</label>
          <div>
            <span class="available"><font-awesome-icon icon="fa-solid fa-square-check" /></span>
            <span class="not-available" style="display: none;"><font-awesome-icon icon="fa-solid fa-square-xmark" /></span>
          </div>
        </div>
      </div>
    </div>
    <div class="closeContainer">
      <div @click="closeModal()" id="closeBtn"><font-awesome-icon icon="fa-solid fa-x" /></div>
    </div>
  </div>
</template>

<style scoped>
#editModal {
  display: none;

  position: absolute;
  z-index: 99;
  width: 750px;
  top: 20%;
  left: 0;
  right: 0;
  margin: auto auto;
}
.message {
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  border: 3px solid var(--color-red-dark);
  border-right-width: 8px;
  border-left-width: 8px;
  border-bottom-width: 10px;
  border-radius: 6px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.35);
  order: 2;
}
.message.important {
  border-color: #600000;
  order: 1 !important;
}
.message-meta {
  border-bottom: 1px solid var(--color-red-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-red-dark);
  padding: 20px;
  font-size: 14px;
  line-height: 16px;
  margin: 0;
  color: var(--color-text-light);

  font-weight: 700;
  opacity: 1;
}
.message .message-meta-inner {
  display: flex;
  font-size: 1px;
  align-items: center;
}
#categoryName{
  background-color: transparent;
  border: none;

  padding: 5px;
  font-size: 24px;
  font-weight: 800;
  color: rgba(255,255,255,0.9);
}
input[type="text"]{
  opacity: 1;
}
#categoryName::placeholder{
  opacity: 1 !important;
  font-weight: 800;
  color: rgba(255,255,255,0.9) !important;
}
.message.important .message-meta-inner::before {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--%3E%3Cpath fill='%23ffffff' d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24V264c0 13.3-10.7 24-24 24s-24-10.7-24-24V152c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z'/%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  content: '';
  height: 16px;
  width: 16px;
  display: inline-block;
  margin-right: 10px;
}
.saveBtn{
  background-color: var(--color-text-light);
  padding: 10px 20px;
  min-width: 150px;
  border: 5px double var(--color-red-dark);
  text-align: center;
  color: rgba(255,255,255,0.75);
  color: var(--color-red-dark);
  font-weight: 700;
  border-radius: 6px;
  text-transform: uppercase;
  transition: 0.3s all;
  cursor: pointer;
}
.saveBtn:hover{
  background-color: rgba(255,255,255,0.9);
}
.message-meta strong {
  font-weight: 900;
  color: #fff;
  opacity: 0.85;
  display: inline-block;
  margin-left: 3px;
}
.form-container {
  background-color: rgba(255, 255, 255, 0.9);
  opacity: 1;
  overflow: hidden;
  border-radius: 6px;
  color: var(--color-black);
  padding: 20px;

  font-size: 14px;
  /* min-height: 250px; */
  column-gap: 40px;

  display: grid;
  grid-template-columns: repeat(4,1fr);
}
.form-container > div{
  display: flex;
  flex-direction: column;
  text-align: center;
  row-gap: 15px;
}
.form-container label{
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
}
.form-container input, .form-container select{
  height: 25px;
  text-align: center;
}
.form-container select,
.form-container #enabled_input span,
input[type='color']{
  cursor: pointer;
}
#enabled_input svg{
  padding-top: 1px;
  height: 23px;
}
#color_input input{
  width: 100%;
}
#enabled_input .available{
  color: var(--color-green);
}
#enabled_input .unavailable{
  color: var(--color-red-light);
}
.closeContainer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
#closeBtn {
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 999px;
  height: 50px;
  width: 50px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s all;

  color: rgba(255, 255, 255, 0.5);
  font-size: 24px;
  text-align: center;
}
#closeBtn:hover {
  border: 2px solid rgba(255, 255, 255, 0.8);
  color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.35);
}
</style>
