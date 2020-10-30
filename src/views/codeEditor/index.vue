<template>
  <div>
    <el-select v-model="choose" placeholder="请选择" @change="change">
      <el-option
        v-for="item in codeLanguage"
        :key="item"
        :label="item"
        :value="item"
      />
    </el-select>
    <MonacoEditor
      v-if="show"
      class="vs"
      style="
        text-align: left;
        background-color: #fff;
        height: 300px;
        width: 700px;
      "
      :language="choose"
      :code="code"
      :editor-options="options"
      @mounted="onMounted"
      @codeChange="onCodeChange"
    />
  </div>
</template>
<script>
import MonacoEditor from "vue-monaco-editor";

export default {
  name: "",
  components: { MonacoEditor },
  props: {
    answer: {
      type: [String, Array, Boolean, Object],
      default: "",
    },
  },
  data() {
    return {
      editCode: "",
      show: true,
      choose: "javascript",
      codeLanguage: ["C#", "java", "javascript", "python", "c"],
      code: this.answer,
      editor: null,
      options: {
        theme: "vs",
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        automaticLayout: true,
        glyphMargin: true,
        showFoldingControls: "always",
        formatOnPaste: true,
        formatOnType: true,
        folding: true,
      },
    };
  },
  watch: {},
  destroyed() {},
  mounted() {
    this.$nextTick(function () {
      console.log(123);
    });
  },
  methods: {
    change(val) {
      this.show = false;
      this.show = true;
    },
    onMounted(editor) {
      this.editor = editor;
    },
    onCodeChange(editor) {
      // this.$parent.printCode()
      this.editCode = editor.getValue();
      console.log(this.editCode);
      this.$emit("change", editor.getValue());
      // console.log(editor.getValue())
    },
  },
};
</script>
<style scoped>
#main {
  /* padding: 20px; */
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}
.content {
  width: 100%;
  min-height: 400px;
  /* padding: 20px 0; */
  margin-top: 40px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
}
</style>
