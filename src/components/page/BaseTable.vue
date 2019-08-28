<template>
    <div class="table">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-tickets"></i>博客列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="handle-box">
                <el-button type="primary" icon="delete" class="handle-del mr10" @click="delAll">批量删除</el-button>
                <el-select v-model="select_cate" placeholder="选择分类" class="handle-select mr10">
                    <el-option key="0" label="全部" value=""></el-option>
                    <el-option key="1" label="博客" value="博客"></el-option>
                    <el-option key="2" label="娱乐" value="娱乐"></el-option>
                    <el-option key="3" label="学习" value="学习"></el-option>
                    <el-option key="4" label="生活" value="生活"></el-option>
                    <el-option key="5" label="留言" value="留言"></el-option>
                </el-select>
                <!-- <el-input v-model="select_word" placeholder="筛选关键词" class="handle-input mr10"></el-input> -->
                <el-button type="primary" icon="search" @click="search">搜索</el-button>
            </div>
            <el-table :data="data"  height="700" border style="width: 100%"   @row-click="tableRowClick" ref="multipleTable" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="b_title" label="标题" sortable width="150" align="center" >
                </el-table-column>
                <el-table-column prop="b_discript" label="摘要" width="220" align="center" >
                </el-table-column>
                <el-table-column prop="b_img_src" label="封面图" width="100" align="center" >
                <template slot-scope="scope">
                    <img :src="scope.row.b_img_src" class="head_pic"/>
                </template>
                </el-table-column>
                <el-table-column prop="b_content"  show-overflow-tooltip label="内容" width="200" align="center" >
                                <!-- <template slot-scope="scope">
                                    <div v-html="scope.row.b_content" style="height:200px;overflow:hidden;"></div>
                                </template> -->
                </el-table-column>
                <el-table-column prop="b_category" label="所属分类" >
                </el-table-column>
                <el-table-column prop="b_type" label="类型" >
                </el-table-column>
                <el-table-column prop="b_is_show_home" label="是否推荐到首页" >
                </el-table-column>
                <el-table-column prop="b_read_number" label="阅读数" >
                </el-table-column>
                <el-table-column prop="b_creat_time" label="创建时间" >
                </el-table-column>
                <el-table-column label="操作" width="180"  fixed="right">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination 
                background       
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="cur_page"
                :page-sizes="[10, 20, 30, 40,50]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"  
                :total="totalNumber"
                >
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="博客编辑" v-if ="editVisible" :visible.sync="editVisible" width="80%">
            <editorBlog :propsdd="editorObjData" />
        </el-dialog>

        <!-- 删除提示框 -->
        <el-dialog title="提示" v-if="delVisible" :visible.sync="delVisible" width="300px" center>
            <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="delVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteRow">确 定</el-button>
            </span>
        </el-dialog>
        
    </div>
</template>

<script>
 import $ from 'jquery';
 import editorBlog from './BaseForm.vue'
    export default {
        data() {
            return {
                url: './static/vuetable.json',
                tableData: [],
                totalNumber:null,
                editorObj:{},
                cur_page: 1,
                pageSize:10,
                deletRow:{},
                multipleSelection: [],
                select_cate: '',
                select_word: '',
                del_list: [],
                is_search: false,
                editVisible: false,
                delVisible: false,
                form: {
                    name: '',
                    date: '',
                    address: ''
                },
                idx: -1
            }
        },

        mounted () {
          this.getData("");
        },

        computed:{
            data() {
                return this.tableData
            },
            editorObjData(){
                return this.editorObj;
            }
        },
        components: {
          editorBlog
        },
        methods: {
            handleSizeChange(val){
                this.pageSize =val;
                this.getData();
            },
            // 分页导航
            handleCurrentChange(val) {
                this.cur_page = val;
                this.getData();
            },
            // 获取 easy-mock 的模拟数据
            getData(kw="") {
                // this.$axios.post(this.url, {
                //     page: this.cur_page
                // }).then((res) => {
                //     this.tableData = res.data.list;
                // })
                var _this =this;
                $.ajax({
                    url:"http://localhost:4444/searchBlog",    //请求的url地址
                    async:true,//请求是否异步，默认为异步，这也是ajax重要特性
                    type:"get",   //请求方式
                    data:{
                        keyWord:kw,
                        category:true,
                        curPage:_this.cur_page,
                        pageSize:_this.pageSize             
                    },
                    success:function(res){
                        //请求成功时处理
                            console.log(res ,'manageList') 
                            _this.tableData = res.list;
                            _this.totalNumber = res.total;
                             
                    }

                });
            },
            search() {
                this.getData(this.select_cate);
            },

            handleEdit(index, row) {
                console.log(row);
                this.editVisible = true;
                this.editorObj =row;
                // this.multipleSelection.push(row.b_id);

               
            },
            handleDelete(index, row) {
                this.idx = index;
                this.delVisible = true;
                this.deletRow = row;

            },
            tableRowClick(row){
                console.log("我被点击了")
                    this.$refs.multipleTable.toggleRowSelection(row);
            },
            delAll() {
                var _this =this;
                console.log(_this.multipleSelection,'_this.multipleSelection_this.multipleSelection');
                $.ajax({
                        url:"http://localhost:4444/deleteLargeBlog",    //请求的url地址
                        async:true,//请求是否异步，默认为异步，这也是ajax重要特性
                        type:"post",   //请求方式
                        data:{
                            list:JSON.stringify(_this.multipleSelection),           
                        },
                        success:function(res){
                            //请求成功时处理
                            
                            if(res.status == 1){
                                _this.$message.success('批量删除成功');
                                _this.multipleSelection = [];
                                _this.getData();
                            }
                        }

                });
                
            },
            handleSelectionChange(val) {
                console.log(val,'val dao di 是个什么鬼');
                
                // this.multipleSelection = val.b_id;
                this.multipleSelection=[];
                for (let i=0; i<val.length; i++) {
                    this.multipleSelection.push(val[i].b_id);
                }
           
                
            },
            // 保存编辑
            saveEdit() {
                this.$set(this.tableData, this.idx, this.form);
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx+1} 行成功`);
            },
            // 确定删除
            deleteRow(){
                var _this =this;
                if(this.deletRow){
                    
                     
                        $.ajax({
                                url:"http://localhost:4444/deleteBlog",    //请求的url地址
                                async:true,//请求是否异步，默认为异步，这也是ajax重要特性
                                type:"post",   //请求方式
                                data:{
                                    id:_this.deletRow.b_id,           
                                },
                                success:function(res){
                                    //请求成功时处理
                                    
                                    if(res.status == 1){
                                         _this.$message.success('删除成功');
                                         _this.delVisible = false;
                                         _this.getData();
                                    }
                                }

                        });
                       
                        
                }                    
            }
        }
    }

</script>

<style scoped>
.head_pic{
    width:80px;
    height: 100px;
}
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 120px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }
    .del-dialog-cnt{
        font-size: 16px;
        text-align: center
    }
</style>
