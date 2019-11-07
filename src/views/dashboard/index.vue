<!--
 * @Author: fengbozhang
 * @Date: 2019-10-23 13:44:17
 * @LastEditors: fengbozhang
 * @LastEditTime: 2019-11-05 14:55:44
 -->
<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="6" class="dashboard-block">
        <div class="header">
          <el-col :span="12">
            <el-col :span="24">
              <div>用户新增</div>
            </el-col>
          </el-col>
          <el-col :span="12">
            <el-radio-group v-model="radio1">
              <el-radio-button label="日" />
              <el-radio-button label="周" />
              <el-radio-button label="月" />
            </el-radio-group>
          </el-col>
        </div>
        <div class="footer">
          <el-col :span="24" class="footer-header">
            <el-col :span="24">
              <div>33,555</div>
            </el-col>
          </el-col>
          <el-col :span="24">
            <el-col :span="12"><div>总计用户</div></el-col>
            <el-col :span="12"><div style="float:right">88,888</div></el-col>
          </el-col>
        </div>
      </el-col>
      <el-col :span="6" class="dashboard-block">
        <div class="grid-content bg-purple">
          <div class="bg-purple-header">12</div>
          <div>321</div>
        </div>
        <div class="grid-content bg-purple">
          <div>123</div>
          <div>32</div>
        </div>
      </el-col>
      <el-col :span="6" class="dashboard-block">
        <div class="grid-content bg-purple">
          <div class="bg-purple-header">12</div>
          <div>321</div>
        </div>
        <div class="grid-content bg-purple">
          <div>123</div>
          <div>32</div>
        </div>
      </el-col>
      <el-col :span="6" class="dashboard-block">
        <div class="grid-content bg-purple">
          <div class="bg-purple-header">12</div>
          <div>321</div>
        </div>
        <div class="grid-content bg-purple">
          <div>123</div>
          <div>32</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container{
  padding: 20px;
  background-color: rgba(95,94,94,0.1);
  &>.dashboard-block{
    background-color: rgba(250, 245, 245, 0.1)
  }
}
.header {
  min-height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(106,106,106,0.2)
}
.footer{
  min-height: 120px;
  padding-top: 20px;
  padding-bottom: 20px;
  &>.footer-header{
    min-height: 50px;
    line-height: 50px
  }
}
.el-row {
    margin-bottom: 20px;
    margin-left: 0;
    margin-right: 0;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    min-height: 36px;
    // display: flex;
    // justify-content: space-between;
    // flex-direction: row
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
