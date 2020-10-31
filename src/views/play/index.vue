<template>
  <div class="content">
    <span id="txt" />
  </div>
</template>
<script>
export default {
  name: 'Name',
  components: {},
  props: {},
  data() {
    return {
      txt: document.getElementById('txt'),
      dafaultOpt: {
        greetings: 'hellworld!', // 文字
        speed: 60 // 速度
      }
    }
  },
  computed: {},
  watch: {},
  beforeMount() {},
  mounted() {},
  activated() {},
  methods: {
    change(options) {
      let str = this.txt.innerHTML
      console.log(str)
      let text = []
      let num = 0
      let s1
      const setting = Object.assign(this.dafaultOpt, options)
      text = setting.greetings.split('')
      console.log(text)
      const addLetter = () => {
        const timer = Math.round(Math.random * 200 + setting.speed)
        setTimeout(() => {
          str += text[num]
          console.log(str)
          this.txt.innerHTML = str
          if (num > text.length - 2) {
            num = 0
            setTimeout(() => {
              deleteLetter()
            }, 3000)
            return false
          } else {
            num++
            addLetter()
          }
        }, timer)
      }
      const deleteLetter = () => {
        s1 = setInterval(() => {
          str = str.substring(0, str.length - 1)
          console.log(str)
          this.txt.innerHTML = str
          if (this.txt.innerHTML === '') {
            setTimeout(addLetter, 1000)
            clearInterval(s1)
          }
        }, 40)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  display: flex;
  justify-content: baseline;
  align-items: center;
  box-sizing: border-box;
  width: 800px;
  height: 300px;
  margin-bottom: 25px;
  padding: 20px;
  font-size: 70px;
  font-weight: 500;
  color: #fff;
  background-color: #2e3436;
}

.content :before {
  content: "$ ";
}

.content:after {
  content: "";
  display: inline-block;
  height: 70px;
  width: 8px;
  vertical-align: baseline;
  background-color: currentcolor;
  animation: cursor 1s infinite;
}

@keyframes cursor {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 1;
  }

  51% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
}
</style>
