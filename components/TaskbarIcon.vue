<template>
  <div class="taskbaricon">
    <slot></slot>
  </div>
</template>

<style>
  .taskbaricon {
    border-radius:4px;
    width: 41px;
    height: 41px;
    position: relative;
    top: -4px;
    left: -4px;
    transition: background-color 0.1s ease-out;
    border-width: 2px;
  }
  .taskbaricon:not(.clock) > * {
    position: relative;
    top: 6px;
    left: 6px;
  }
  .taskbaricon:hover {
    background-color: rgba(81,81,81,0.7);
  }
</style>
