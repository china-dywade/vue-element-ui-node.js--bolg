const express = require('express');
const mysql = require('mysql');
var multer = require("multer");
var fs = require('fs');
// const common = require('../libs/common');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'zuma000',
    database: 'blog'
});
module.exports = () => {
    const route = express.Router();

    route.get('/', function (req, res) {
        res.send('hello, express');
    })


// 设置图片存储路径
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})
// 创建文件夹
var createFolder = function (folder) {
    try {
        // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
        // 如果文件路径不存在将会抛出错误"no such file or directory"
        fs.accessSync(folder);
    } catch (e) {
        // 文件夹不存在，以同步的方式创建文件目录。
        fs.mkdirSync(folder);
    }
};
var uploadFolder = './upload/';
createFolder(uploadFolder);

// 添加配置文件到muler对象。
var upload = multer({
    storage: storage
});
var imgBaseUrl = '../'
// 文件上传请求处理
route.post('/upload/img', upload.single('file'), function (req, res) {
    // 读取上传的图片信息
    var files = req.file;
    // 设置返回结果
    res.status(200).send({
       'sucess': files
    });

});

    // 发布博客
    route.post('/pubBlog', (req, res) => {
        let mObj = JSON.parse(req.body.results)
        const pubBlog = `INSERT INTO blogList (b_id,b_title,b_discript,b_img_src,b_content,b_category,b_type,b_is_show_home,b_creat_time,b_read_number,b_operator) VALUES (NULL,'${mObj.name}','${mObj.decript}','${mObj.imgsrc}','${mObj.descss}','${mObj.resource}','${mObj.region}','${mObj.delivery ? '是' : '否'}','${mObj.creatime}','${mObj.readnum}','超级管理员');`
        db.query(pubBlog, (err) => {
            if (err) {
                console.error(err);
                res.send({
                    'msg': '服务器出错',
                    'status': 0
                }).end();
            } else {
                res.send({
                    'msg': '发布成功',
                    'status': 1
                }).end();
            }
        })
    });

    // 博客 更新
    route.post('/updataPubBlog', (req, res) => {
            console.log(req.body)
            let mObj = JSON.parse(req.body.results);
            let rowId = req.body.id;
            const pubBlog = `UPDATE blogList
           SET 
           b_title = '${mObj.name}',
           b_discript = '${mObj.decript}',
           b_img_src = '${mObj.imgsrc}',
           b_content = '${mObj.descss}',
           b_category = '${mObj.resource}',
           b_type = '${mObj.region}',
           b_is_show_home = '${mObj.delivery ? '是 ' : '否 '}',
           b_creat_time = '${mObj.creatime}',
           b_read_number = '${mObj.readnum}',
           b_operator = '超级管理员'
           WHERE b_id = ${rowId}
           `                
            db.query(pubBlog, (err) => {
                if (err) {
                    console.error(err);
                    res.send({
                        'msg': '服务器出错',
                        'status': 0
                    }).end();
                } else {
                    res.send({
                        'msg': '更新成功',
                        'status': 1
                    }).end();
                }
            })
        });

    // 博客 查询
    route.get('/searchBlog', (req, res) => {
        console.log(req.query)
        let keyword = req.query.keyWord;
        let category = req.query.category;
        let issearch = req.query.isSearch;
        let bid = req.query.id;
        let pageSize = parseInt(req.query.pageSize);
        let curPage =  parseInt(req.query.curPage);
        let start = pageSize * (curPage - 1);
        let end = start + pageSize;
        let arr=[]; //根据（当前页，数量）参数 查出来的数据 列表
        const blogList = `SELECT * from bloglist  WHERE (b_category LIKE '%${keyword}%') OR (b_content LIKE '%${keyword}%') OR (b_discript LIKE '%${keyword}%') OR  (b_title LIKE '%${keyword}%');`
        const categoryBlogList = `SELECT * from bloglist  WHERE (b_category LIKE '%${keyword}%');`
        const bidList = `SELECT * from bloglist  WHERE (b_id = ${bid});`
        if (category) {
                    db.query(categoryBlogList, (err, data) => {
                        if (err) {
                            console.error(err);
                            res.send({
                                'msg': '服务器出错',
                                'status': 0
                            }).end();
                        } else {
                            if (data.length == 0) {
                                res.send({
                                    'list': arr,
                                    'total': data.length
                                });
                            } else {
                                // 返回 客户端 分页逻辑
                                if (end > data.length) {
                                    end = data.length;
                                }
                                for (let i = start; i < end; i++) {
                                    arr.push(data[i]);
                                }
                                res.send({
                                    'list': arr,
                                    'total': data.length
                                });
                            }
                        }
                    })
        } else if (bid) {
                    db.query(bidList, (err, data) => {
                        if (err) {
                            console.error(err);
                            res.send({
                                'msg': '服务器出错',
                                'status': 0
                            }).end();
                        } else {
                            if (data.length == 0) {
                                res.send({
                                    'list': arr,
                                    'total': data.length
                                });
                            } else {
                                console.log(data);
                                res.send({
                                    'list': data,
                                    'total': data.length
                                });
                            }
                        }
                    })

        } else if (issearch) {
                    db.query(blogList, (err, data) => {
                        if (err) {
                            console.error(err);
                            res.send({
                                'msg': '服务器出错',
                                'status': 0
                            }).end();
                        } else {
                            console.log(data, 'search -- data ')
                            if (data.length == 0) {
                                res.send({
                                    'list': arr,
                                    'total': data.length
                                });
                            } else {
                                // 返回 客户端 分页逻辑
                                if (end > data.length) {
                                    end = data.length;
                                }
                                for (let i = start; i < end; i++) {
                                    arr.push(data[i]);
                                }
                                res.send({
                                    'list': arr,
                                    'total': data.length
                                });
                            }
                        }
                    })


        }else{
                    db.query(blogList, (err, data) => {
                        if (err) {
                            console.error(err);
                            res.send({
                                'msg': '服务器出错',
                                'status': 0
                            }).end();
                        } else {
                            console.log(data,'search -- data ')
                            if (data.length == 0) {
                                res.send({
                                    'list': arr,
                                    'total': data.length
                                });
                            } else {
                                // 返回 客户端 分页逻辑
                                if (end > data.length) {
                                    end = data.length;
                                }
                                for (let i = start; i < end; i++) {
                                    arr.push(data[i]);
                                }
                                res.send({
                                    'list': arr,
                                    'total': data.length
                                });
                            }
                        }
                    })
        }

    });
    // 单个 删除
    route.post('/deleteBlog', (req, res) => {
        let mObj = req.body.id
        const deleteBlog = `DELETE FROM bloglist where b_id =${mObj};`
        db.query(deleteBlog, (err) => {
            if (err) {
                console.error(err);
                res.send({
                    'msg': '服务器出错',
                    'status': 0
                }).end();
            } else {
                res.send({
                    'msg': '删除成功',
                    'status': 1
                }).end();
            }
        })
    });
   // 批量删除 
    route.post('/deleteLargeBlog', (req, res) => {
        let mObj = JSON.parse(req.body.list); 
        console.clear();
        console.log(mObj);
        let  sql = `DELETE  FROM  bloglist  where  b_id  in (`; //用来拼接？
        let param = [];
        for (let i = 0; i < mObj.length; i++) { //循环传过来的id数组，插入到param变量数组中
            param.push(mObj[i])
        }

        for (let i = 0; i < mObj.length - 1; i++) { //循环拼接sql
            sql = sql + mObj[i] + `,`;
        }
        sql = sql + mObj[mObj.length - 1] + `);`; //拼接结尾     
        console.log(sql, 'sqlsql')
        db.query({
            sql: sql,
            values: param
        }, (err) => {
            if (err) {
                console.error(err);
                res.send({
                    'msg': '服务器出错',
                    'status': 0
                }).end();
            } else {
                res.send({
                    'msg': '删除成功',
                    'status': 1
                }).end();
            }
        })
    });


    return route;
}
