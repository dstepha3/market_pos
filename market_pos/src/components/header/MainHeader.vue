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
                    <RouterLink v-if="current_page == 'waiting_room' || current_page == 'dashboard'" title="Exit" to="/"><font-awesome-icon icon="fa-solid fa-right-from-bracket" /> Exit</RouterLink>
                    <RouterLink v-if="current_page == 'dashboard'" title="Clock Out" to="/waiting_room"><font-awesome-icon icon="fa-solid fa-clock-rotate-left" /> Clockout</RouterLink>
                    <RouterLink v-if="current_page != 'dashboard' && user_clocked_in == true" to="/dashboard"><font-awesome-icon icon="fa-solid fa-house" /> Dashboard</RouterLink>
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
    align-items: center;
}
.header-inner > div{
    flex-basis: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
}
#return-btn{
    justify-content: flex-start;
    column-gap: 30px;
}
#return-btn a{
    color: var(--color-text);
    text-decoration: none;
    transition: 0.3s all;

    display: flex;
    align-items: center;
    column-gap: 10px;
    font-size: 12px;
    line-height: 16px;
}
#return-btn a svg{
    font-size: 16px;
    line-height: 16px;
}
#return-btn a:hover{
    color: #fff;
}
.header-inner .user-container{
    justify-content: flex-end;
    font-size: 12px;
    line-height: 16px;

}
</style>
