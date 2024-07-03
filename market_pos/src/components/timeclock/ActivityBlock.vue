<script setup>
defineProps({})
</script>

<template>
  <div class="col-block">
    <div class="block-heading">
      Recent Activity
      <div><RouterLink to="employee/activity">See All Activity</RouterLink></div>
    </div>
    <ul v-if="true" class="activity-list">
      <li><strong>Clocked Out:</strong> <span>06/29/2024 at 03:10 PM</span></li>
      <li><strong>Returned from Break:</strong> <span>06/29/2024 at 12:01 PM</span></li>
      <li><strong>Went on Break:</strong> <span>06/29/2024 at 11:30 AM</span></li>
      <li><strong>Clocked In:</strong> <span>06/29/2024 at 08:50 AM</span></li>
      <li><strong>Clocked Out:</strong> <span>06/28/2024 at 03:10 PM</span></li>
      <li><strong>Returned from Break:</strong> <span>06/28/2024 at 12:01 PM</span></li>
      <li><strong>Went on Break:</strong> <span>06/28/2024 at 11:30 AM</span></li>
      <li><strong>Clocked In:</strong> <span>06/28/2024 at 08:50 AM</span></li>
    </ul>
    <div v-else class="no-activity-list">No Recent Activity</div>
  </div>
</template>

<style scoped>
.col-block {
  padding: 60px 40px;
}
.block-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.block-heading a {
  font-family: 'Open Sans', sans-serif;
  color: var(--color-text-light);
  font-size: 12px;
  text-decoration: none;
  transition: 0.3s all;
}
.block-heading a:hover {
  color: #fff;
}
.activity-list {
  list-style-type: none;
  padding: 0;
  margin: 0;

  max-height: 110px;
  overflow-y: scroll;
}
.activity-list li {
  margin-bottom: 15px;
  font-size: 14px;
  line-height: 16px;
  display: flex;
}
.activity-list li strong {
  min-width: 160px;
  font-weight: 600;
  color: #fff;
  opacity: 0.9;
}
.activity-list li span {
  width: 100%;
  text-align: right;
}
.activity-list > :last-child {
  margin-bottom: 0;
}
.no-activity-list {
  text-align: center;
  margin-top: 20px;
}
</style>
