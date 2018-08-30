<template>
    <div>
        <Row :gutter="20" style="margin-top: 20px;">
            <i-col span="24">
                <Card shadow>
                card
                </Card>
            </i-col>
        </Row>
        <Row style="margin-top: 20px;">
            <i-col span="24">
                <Card>
                    <div>
                        <Input search enter-button="Search" placeholder="Enter something..." />
                    </div>
                    <Table :columns="tableRows" :data="tableDatas"></Table>
                </Card>
            </i-col>
        </Row>
  </div>
</template>
<script>
import Tables from '_c/tables'
export default {
    name: 'gateway-node',
    components: {
        Tables
    },
    data () {
        return {
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
                        return type === 'desc'?b>a:b<a
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
                        ]);
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
    }
}
</script>
