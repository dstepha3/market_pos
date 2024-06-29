<script setup>

defineProps({
  username: {
    type: String,
    required: true
  },
  user_clocked_in: {
    type: Boolean,
    required: true
  },
  current_page: {
    type: String,
    required: true
  }
})
</script>

<template>
    <header>
        <div class="container">
            <div class="header-inner">
                <div id="return-btn" v-if="current_page != 'front_door'">
                    <RouterLink v-if="current_page == 'waiting_room' || current_page == 'dashboard'" to="/">exit</RouterLink>
                    <RouterLink v-if="current_page == 'dashboard'" to="/waiting_room">logout</RouterLink>
                    <RouterLink v-if="current_page != 'dashboard' && user_clocked_in == true" to="/dashboard">to dash</RouterLink>
                </div>
                <div class="date-container">
                    Saturday, June 29, 2024
                </div>
                <div class="user-container" v-if="current_page != 'front_door'">
                    <span class="welcome-message"></span>
                    <span class="username">{{ username }}</span>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
header{
  padding: 10px 0;
  background-color: #0d0d0d;
  box-shadow: 5px 0px 8px 5px rgba(0, 0, 0, 0.5);
  position: relative;
  z-index: 50;

  position: absolute;
  top: 0;
  width: 100%;
  min-height: 45px;
}
header .container{
    max-width: 1380px;
}
.header-inner{
    width: 100%;
    display: flex;
    justify-content: center;
}
.header-inner > div{
    flex-basis: 33%;
    display: flex;
    justify-content: center;
}
#return-btn{
    justify-content: flex-start;
}
.header-inner .user-container{
    justify-content: flex-end;
}
</style>
