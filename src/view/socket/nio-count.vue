<template>
    <div style="padding: 20px">
        <Row :gutter="16">
            <i-col span="6">
                <Card :bordered="false">
                    <p slot="title">连接总数</p>
                    <p>当前：<span class="num-count">{{socketCount}}</span></p>
                </Card>
            </i-col>
        </Row>
        <br>
        <Row :gutter="16">
            <i-col span="4">
                <Card :bordered="false">
                    <p slot="title">已连接SIM列表</p>
                    <ul style="padding: 20px">
                        <li>1000001</li>
                        <li>2000002</li>
                        <li>3000003</li>
                    </ul>
                </Card>
            </i-col>
            <i-col span="20">
                <Card :bordered="false">
                    <p slot="title">连接详情</p>
                    <div>
                        <h1 class="inline">sim: 10001</h1>
                        <h1>online: true</h1>
                    </div>
                </Card>
            </i-col>
        </Row >
    </div>
</template>

<script>
import { getCount } from '@/api/socket'

export default {
    name: 'nio-count',
    data() {	
        return {
            socketCount: 0
        }
    },
    computed: {
        
    },
    methods: {

    },
    mounted () {
    getCount().then(res => {
      this.socketCount = res.data.count;
    })
  }
}
</script>

<style scoped>
.num-count {
    font-size: 50px;
    color: rgba(140, 10, 201, 0.986)
}
</style>