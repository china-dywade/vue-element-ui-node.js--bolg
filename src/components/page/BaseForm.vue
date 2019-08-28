<template>
    <div class="publishBlogContainer">
        <div class="hideUpload">
                 <el-upload                 
                    :action="uploadUrl"
                    name="file"
                    :show-file-list="false"
                    :on-success="handlehideSuccess"
                    :before-upload="quillImgBefore"
                    accept='.jpg,.jpeg,.png,.gif'
                    >
                    <!-- <span class="avatar" v-if="ruleForm.imgsrc" :style="{backgroundImage:'url(' + ruleForm.imgsrc + ')'}"></span> -->
                </el-upload>
        </div>
        <div class="container">


            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="博客标题" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="博客摘要" prop="decript">
                <el-input v-model="ruleForm.decript"></el-input>
            </el-form-item>
            <el-form-item label="博客类型" prop="region">
                <el-select v-model="ruleForm.region" placeholder="请选择文章类型">
                <el-option label="原创" value="原创"></el-option>
                <el-option label="转载" value="转载"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="是否推荐首页" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
                <span style="color:red;" v-show="ruleForm.delivery">全部分类最多只能推荐5篇文章到首页！</span>
            </el-form-item>
            <el-form-item label="所属分类" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                <el-radio label="博客"></el-radio>
                <el-radio label="娱乐"></el-radio>
                <el-radio label="学习"></el-radio>
                <el-radio label="生活"></el-radio>
                <el-radio label="留言"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="博客内容" prop="descss">
                <quill-editor ref="myTextEditor" v-model="ruleForm.descss"  @change="onEditorChange($event)" :options="editorOption"></quill-editor>
            </el-form-item>
            <el-form-item label="上传封面" prop="imgsrc">
               <el-upload
                    class="avatar-uploader"
                    :action="uploadUrl"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload">
                    <!-- <span class="avatar" v-if="ruleForm.imgsrc" :style="{backgroundImage:'url(' + ruleForm.imgsrc + ')'}"></span> -->
                    <img v-if="ruleForm.imgsrc" :src="ruleForm.imgsrc" class="avatar" />
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">更新文章</el-button>
            </el-form-item>
            </el-form>

        </div>
    </div>
</template>

<script>
    // 工具栏配置
    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
    
      [{'header': 1}, {'header': 2}],               // custom button values
      [{'list': 'ordered'}, {'list': 'bullet'}],
      [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
      [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
      [{'direction': 'rtl'}],                         // text direction
    
      [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
      [{'header': [1, 2, 3, 4, 5, 6, false]}],
    
      [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      [{'font': []}],
      [{'align': []}],
      ['link', 'image', 'video'],
      ['clean']                                         // remove formatting button
    ]
    
    import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import $ from 'jquery';
    import {quillEditor, Quill} from 'vue-quill-editor'
    import {container, ImageExtend} from 'quill-image-extend-module'
    Quill.register('modules/ImageExtend', ImageExtend)
    export default {
        name:'editor',
        props:['propsdd'],
        data: function(){
            return {
                uploadUrl:"http://localhost:4444/upload/img",
                editorOption: {
                    placeholder: '请输入博客内容',
                    modules: {
                        // 拖拽图片，复制图片，并上传至服务器
                        ImageExtend: {
                            loading: true,
                            name: 'img',
                            action: "http://localhost:4444/upload/img",
                            response: (res) => {
                                console.log(res,'imgage url')
                                // return res.sucess.path;
                            }
                        },
                        // 工具条的相关设置
                        toolbar:{
                            container: toolbarOptions,  // 工具栏
                            handlers: {
                                'image': function (value) {
                                        if (value) {
                                             document.querySelector('.hideUpload .el-upload--text').click()
                                        } else {
                                            this.quill.format('image', false);
                                        }
                                }
                            }
                        }
                    }
                },
                ruleForm: {
                            name: this.propsdd.b_title,
                            region: this.propsdd.b_type,
                            delivery: this.propsdd.b_is_show_home =="否"?0:1,
                            decript:this.propsdd.b_discript,
                            resource:this.propsdd.b_category,
                            imgsrc:this.propsdd.b_img_src,
                            creatime:this.propsdd.b_creat_time,
                            readnum:this.propsdd.b_read_number,
                            descss: this.propsdd.b_content
                },
                rules: {
                name: [
                    { required: true, message: '*请输入博客标题！', trigger: 'blur' },
                    { min: 3, max: 50, message: '*长度在 3 到 50 个字符！', trigger: 'blur' }
                ],
                decript:[
                    { required: true, message: '*请输入博客摘要！', trigger: 'blur' },
                    { min: 10, max: 100, message: '*长度在 10 到 100 个字符！', trigger: 'blur' }
                ],
                region: [
                    { required: false, message: '*请选择文章类型！', trigger: 'change' }
                ],
                resource: [
                    { required: false, message: '*请选择文章所属分类！', trigger: 'change' }
                ],
                descss: [
                    { required: true, message: '*请填写文章内容！', trigger: 'blur' },
                    { min: 3, max: 10485760, message: '！长度在 3 到 10485760 个字符！', trigger: 'blur' }
                ],
                imgsrc: [
                    { required: false, message: '*请上传博客封面！', trigger: 'change' },
                ]
                }
            }
        },
        components: {
            quillEditor
        }, 
        methods: {
            // 当前时间
            msToDate () {
                    let datetime = new Date();
                    let year = datetime.getFullYear();
                    let month = datetime.getMonth();
                    let date = datetime.getDate();
                    let hour = datetime.getHours();
                    let minute = datetime.getMinutes();
                    let second = datetime.getSeconds();
                
                    let result1 = year + 
                                '-' + 
                                ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                                '-' + 
                                ((date + 1) < 10 ? '0' + date : date) + 
                                ' ' + 
                                ((hour + 1) < 10 ? '0' + hour : hour) +
                                ':' + 
                                ((minute + 1) < 10 ? '0' + minute : minute) + 
                                ':' + 
                                ((second + 1) < 10 ? '0' + second : second);
                
                    let result2 = year + 
                                '-' + 
                                ((month + 1) >= 10 ? (month + 1) : '0' + (month + 1)) + 
                                '-' + 
                                ((date + 1) < 10 ? '0' + date : date);
                
                    let result = {
                        hasTime: result1,
                        withoutTime: result2
                    };
                
                    return result;
            },
            // 富文本编辑器需要隐藏的上传成功回调
            handlehideSuccess(res,file){

                let urls =res.sucess.path;
                    // 获取富文本组件实例
                    let quill = this.$refs.myTextEditor.quill
                    // 如果上传成功
                    if (file.url) {
                        // 获取光标所在位置
                        let length = quill.getSelection().index;
                        // 插入图片，res为服务器返回的图片链接地址
                        quill.insertEmbed(length, 'image', urls)
                        // 调整光标到最后
                        quill.setSelection(length + 1)
                    } else {
                        // 提示信息，需引入Message
                        Message.error('图片插入失败');
                        
                    }
            },
            // 图片上传
            handleAvatarSuccess(res, file) {
                console.log(file,'filefilefile')
                this.ruleForm.imgsrc = file.url;
            },
            quillImgBefore(file){
                let fileType = file.type;
                if(file.type === 'image/jpeg'|| file.type ==='image/jpg '||file.type === 'image/png'||file.type === 'image/gif'){
                    return true;
                }else {
                    this.$message.error('请插入图片类型文件(jpg/jpeg/png/gif)');
                    return false;
                }
		   },

            // 图片上传验证
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg'|| file.type ==='image/jpg '||file.type === 'image/png'||file.type === 'image/gif';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                this.$message.error('上传头像图片只能是 JPG/PNG/JPEG 格式!');
                }
                if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            },

            // 富文本编辑器 内容改变
            onEditorChange({ editor, html, text }) {
                this.ruleForm.descss = html;
            },

            // 发布博客
            submitForm(formName) {
                var  _this =this;
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    this.ruleForm.creatime = this.msToDate().hasTime;
                    if(this.ruleForm.creatime){
                            $.ajax({
                                url:"http://localhost:4444/updataPubBlog",    //请求的url地址
                                async:true,//请求是否异步，默认为异步，这也是ajax重要特性
                                data:{
                                'results':JSON.stringify(_this.ruleForm),
                                'id' :this.propsdd['b_id']
                                },    //参数值
                                type:"POST",   //请求方式
                                success:function(res){
                                    //请求成功时处理
                                if(res.status ==1){
                                    _this.$message.success({
                                        message:"更新文章成功",
                                        center:true,
                                        duration:2000,
                                        onClose:()=>{
                                             window.location.reload();
                                            // for (let obj in _this.ruleForm) {
                                            //         console.log(obj);
                                            //         if(obj == "region"){
                                            //         _this.ruleForm[obj] = "原创"  
                                            //         }else if (obj == "delivery"){
                                            //         _this.ruleForm[obj] =false    
                                            //         }else if (obj == "resource"){
                                            //         _this.ruleForm[obj] ="博客"   
                                            //         }else if (obj == "readnum"){
                                            //          _this.ruleForm[obj] =1000;                                                         
                                            //         }else if(obj == "imgsrc"){                                                 
                                            //           _this.ruleForm[obj] = 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
                                            //         }
                                            //         else{
                                            //             _this.ruleForm[obj] =""
                                            //         }                                 
                                            // }
                                        }
                                    })
                                 }   
                                }
                            });
                    }
                    console.log(this.ruleForm,'this.ruleForm')
                } else {
                    console.log('error submit!!');
                    return false;
                }
                });
            },

        }
    }
</script>
<style scoped>
.hideUpload{
    display: none;
}
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: scale-down;
  }
    .editor-btn{
        margin-top: 20px;
    }
</style>
