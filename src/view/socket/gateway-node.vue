<template>
    <div>
        <Card class="mt20">
            <Form :model="search" :label-width="80" class="mt10">
                <Row>
                    <i-col span="8">
                        <FormItem label="网关类型：">
                            <Input type="text" v-model="search.type" />
                        </FormItem>
                    </i-col>
                </Row>
                <Row class="tc mb20">
                    <Button type="primary" class="mr20" @click="onSearch">搜 索</Button>
                    <Button type="default" @click="reset">重 置</Button>
                </Row>
                <Row class="tr mb20">
                    <Button type="primary" @click="add">新 增</Button>
                </Row>
            </Form>
            <Table :columns="tableRows" :data="tableDatas"></Table>
            <Row class="tr mt10">
                <Page :total="pageCtrl.total" :page-size="pageCtrl.pageSize" :current="pageCtrl.current" show-elevator show-total @on-change="onChange" />
            </Row>
        </Card>
        <Modal v-model="modalOn" title="新增网关节点" @on-ok="ok" @on-cancel="cancel">
            <Form :model="newNode" :label-width="80" class="mt10">
                <FormItem label="节点名称：">
                    <Input type="text" v-model="newNode.name" placeholder="请输入节点名称" />
                </FormItem>
                <FormItem label="网关类型：">
                    <Input type="text" v-model="newNode.type" placeholder="请输入网关类型" />
                </FormItem>
                <FormItem label="IP：">
                    <Input type="text" v-model="newNode.ip" placeholder="请输入IP" />
                </FormItem>
                <FormItem label="端口：">
                    <Input type="text" v-model="newNode.port" placeholder="请输入端口" />
                </FormItem>
                <FormItem label="是否可用：">
                    <RadioGroup v-model="newNode.useFlag">
                        <Radio label="是"></Radio>
                        <Radio label="否"></Radio>
                    </RadioGroup>
                </FormItem>
            </Form>
        </Modal>
    </div>
</template>
<script>
import Tables from '_c/tables'
import { getCount } from '@/api/socket.js'
export default {
  name: 'gateway-node',
  components: {
    Tables
  },
  data () {
    return {
      //   分页数据
      pageCtrl: {
        total: 100,
        pageNo: 10,
        pageSize: 10,
        current: 1
      },
      // 搜索数据
      search: {
        type: ''
      },
      //   模态框开关
      modalOn: false,
      //   新增节点数据
      newNode: {
        name: '', // 节点名称
        type: '', // 网关类型
        ip: '',
        port: '',
        useFlag: ''
      },
      tableRows: [
        {
          title: '节点名称',
          key: 'name',
          fixed: 'left',
          editable: true
        },
        {
          title: '网关类型',
          key: 'type',
          sortable: true,
          sortMethod: (a, b, type) => {
            return type === 'desc' ? b > a : b < a
          }
        },
        {
          title: 'IP',
          key: 'ip'
        },
        {
          title: '端口',
          key: 'port'
        },
        {
          title: '是否可用',
          key: 'useFlag'
        },
        {
          title: '操作',
          key: 'action',
          fixed: 'right',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'View'),
              h('Button', {
                props: {
                  type: 'text',
                  size: 'small'
                }
              }, 'Edit')
            ])
          }
        }
      ],
      tableDatas: [
        {
          name: '808-node1',
          type: '1',
          ip: '127.0.0.1',
          port: 6379,
          useFlag: '可用'
        },
        {
          name: '808-node2',
          type: '2',
          ip: '127.0.0.1',
          port: 6379,
          useFlag: '可用'
        },
        {
          name: 'gb-node1',
          type: '3',
          ip: '127.0.0.1',
          port: 6379,
          useFlag: '可用'
        },
        {
          name: 'gb-node2',
          type: '4',
          ip: '127.0.0.1',
          port: 6379,
          useFlag: '可用'
        },
        {
          name: '808-node3',
          type: '5',
          ip: '127.0.0.1',
          port: 6379,
          useFlag: '可用'
        }
      ]
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    //   查询数据
    getList () {
      this.search.pageNo = this.pageCtrl.current
      getCount(this.search)
        .then(res => {

        })
    },
    //   搜索
    onSearch () {
      this.getList()
    },
    // 重置
    reset () {
      // 清空搜索条件
      this.search.type = ''
      //   重置页码
      this.search.page = 1
      this.pageCtrl.current = 1
      this.getList()
    },
    // 翻页
    onChange (page) {
      this.pageCtrl.current = page
      this.getList()
    },
    // 新增
    add () {
      this.modalOn = true
    },
    // 添加确定按钮
    ok () {

    },
    // 添加取消按钮
    cancel () {
      this.newNode.name = ''
      this.newNode.type = ''
      this.newNode.ip = ''
      this.newNode.port = ''
      this.newNode.useFlag = ''
    }
  }
}
</script>
