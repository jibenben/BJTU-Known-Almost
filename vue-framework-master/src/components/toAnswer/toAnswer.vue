<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-xs-2 menu">
        <span @click="back">取消</span>
      </div>
      <div class="col-xs-8 headline">
        <label>添加回答</label>
      </div>
      <div class="col-xs-2 menu">
        <span @click="toAnswer">发布</span>
      </div>
    </div>
    <div style="margin-top: 10px">
      <textarea placeholder="填写回答内容" class="form-control" rows="20" v-model="answerContent"></textarea>
    </div>
  </div>

</template>

<style scoped>
  .headline {
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }

  .menu {
    white-space: nowrap;
    font-size: 14px;
    color: #0e7bef;
  }

  .row {
    padding: 10px 0 10px 0;
    border-bottom: solid 1px #eeeeee;
  }

  label {
    margin: 0;
  }
</style>


<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'toAnswer',
    data () {
      return {
        answerContent: '',
        pid: ''
      }
    },
    mounted: function () {
      this.pid = this.$route.params.id
    },
    methods: {
      back () {
        window.history.back()
      },
      toAnswer () {
        if (this.answerContent.length !== 0) {
          let con = window.confirm('确定要提交吗？')
          let local = this
          let formd = new window.FormData()
          formd.append('uid', this.uid)
          formd.append('content', this.answerContent)
          formd.append('pid', this.pid)
          if (con) {
            this.$http.post('http://139.199.5.64/bjtu/index.php/home/index/answer', formd).then((response) => {
              console.log(response)
              if (response.data === 1) {
                window.alert('回答成功！')
                local.$router.push({ name: 'question', params: { id: local.pid } })
              }
            }, (response) => {
            })
          }
        }
      }
    },
    computed: {
      ...mapGetters([
        'uid'
      ])
    }
  }
</script>
