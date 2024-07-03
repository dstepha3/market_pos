<script setup>

defineProps({
  type: {
    type: String,
    required: true
  }
})

</script>


<template>
    <div class="tile-inner">
        {{ type }}
    </div>
</template>