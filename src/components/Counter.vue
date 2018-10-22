<template>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
import { InputNumber } from "element-ui";
export default {
  components: {
    "el-input-number": InputNumber
  },
  data() {
    return {
      num1: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>