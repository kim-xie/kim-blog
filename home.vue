<template>
  <div class="button-wrap">
    <button type="button">点我</button>
  </div>
</template>
  
<script>
</script>
<style lang="less" scoped>
.button-wrap {
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 500px auto;
}
button {
  user-select: none;
  position: relative;
  height: 60px;
  width: 60px;
  margin: 0 35px;
  border-radius: 50px;
  border: none;
  outline: none;
  letter-spacing: 2px;
  color: #3d4351;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0 3px 3px 0 rgba(175, 179, 185, 0.1);
}

button:first-child,
button:first-child:hover {
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
}

button:last-child,
button:last-child:hover {
  background: linear-gradient(90deg, #fa7199, #f5ce62, #e43603, #fa7199);
  background-size: 400%;
}

button:first-child::before,
button:last-child::before {
  content: "";
  position: absolute;
  background: inherit;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  border-radius: 50px;
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s;
}

button:last-child:before,
button:last-child:before,
button:first-child:hover:before,
button:last-child:hover:before {
  opacity: 1;
  z-index: -1;
}

button,
button:hover {
  z-index: 1;
  animation: glow 8s linear infinite;
}

@keyframes glow {
  0% {
    background-position: 0%;
  }

  100% {
    background-position: 400%;
  }
}
</style>