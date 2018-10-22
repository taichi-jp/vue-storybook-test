<template>
  <el-button type="primary" :icon="iconType" :style="styles">{{ label }}</el-button>
</template>
<script>
import { Button } from "element-ui";
export default {
  components: {
    "el-button": Button
  },
  props: {
    label: {
      type: String,
      default: "My Button"
    },
    backGroundColor: {
      type: String,
      default: "#409eff"
    },
    height: {
      type: Number,
      default: 50
    },
    width: {
      type: Number,
      default: 150
    },
    icon: {
      type: String,
      default: ""
    }
  },
  computed: {
    styles() {
      return {
        "--color": this.backGroundColor,
        "--height": this.height,
        "--width": this.width
      };
    },
    iconType() {
      return this.icon;
    }
  }
};
</script>
<style scoped>
button {
  --color: #409eff;
  --height: 50px;
  --width: 100px;
  background-color: var(--color);
  height: var(--height);
  width: var(--width);
  border-radius: 5px;
  font-size: 18px;
  line-height: 1.5;
  padding: 0 10px;
  display: inline-block;
}
</style>