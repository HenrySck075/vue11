<script setup>
  import { useSlots, TransitionGroup,h } from 'vue';
  // 7 6.5 8
  const slots = useSlots()
  const {page} = defineProps({page: String})
  // how do i v-if without the else
  return ()=>h(TransitionGroup, {style: {position: "relative"}, tag: "ft"},slots.default().map(v=>v.props.page==page?v:h("span")))
</script>

<style>
  .ft-leave-from, .ft-enter-to {
    opacity: 1;
    left: 0
  }
  .ft-leave-to{
    opacity: 0;
    left: -8px;
  }
  .ft-enter-to{
    opacity: 0;
    left: 8px;
  }
  .ft-enter-active {
    transition-property: left, opacity;
    transition-duration: var(--durationUltraSlow);
    transition-timing-function: var(--curveAccelerateMid);
  }
  .ft-leave-active {
    transition-property: left, opacity;
    transition-duration: var(--durationUltraSlow);
    transition-timing-function: var(--curveDecelerateMid);
  }
</style>
