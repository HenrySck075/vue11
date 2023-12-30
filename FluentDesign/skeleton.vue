<template>
  <div id="fluent-skeleton"></div>
</template>

<style>
  #fluent-skeleton {
    border-radius: 4px;
    background-image: linear-gradient(to right, var(--colorNeutralStencil1) 0%, var(--colorNeutralStencil2) 50%, var(--colorNeutralStencil1) 100%);
    animation: funky 7s linear 3s 0s infinite;
    background-attachment: fixed;
    background-position: 50% 50%;
    background-size: 300% 100%;
    overflow: hidden;
    width: 100%;
    height:16px
  }
  @media screen and (prefer-reduced-motion: reduce) {
    #fluent-skeleton {
      animation-duration:0.01ms;
      animation-iteration-count: 1;
    }
  }
  @keyframes funky {
    0% {
      background-position-x: 300%;
    }
    100% {
      background-position-x: 100%;
    }
  }
</style>
