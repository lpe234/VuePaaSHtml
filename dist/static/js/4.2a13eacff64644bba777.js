webpackJsonp([4],{165:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"DBTable",data:function(){return{dbName:"",dbType:"",searchForm:{name_cn:"",name_en:""},inputLabelWidth:"7em",inputLabelPosition:"left",tables:[],currentPage:1,newTableFormTitle:"新建表",newTableFormVisible:!1,columns:[{name:123}]}},methods:{doSearch:function(){console.log("do search...")},doCreate:function(){this.newTableFormVisible=!0},doDelete:function(){},doExecute:function(){},handleSelectionChange:function(){},editItem:function(e,t){},deleteItem:function(e,t){},previewItem:function(e,t){},handleSizeChange:function(e){console.log(e)},handleCurrentChange:function(e){console.log("handleCurrentChange: "+e)},getTableData:function(){this.tables=[{id:1,tableNameCN:"订单主表",tableNameEN:"ORDER_M",execTime:"2017-06-29 10:17:34",dbName:"数据库名"},{id:1,tableNameCN:"订单主表",tableNameEN:"ORDER_M",execTime:"2017-06-29 10:17:34",dbName:"数据库名"},{id:1,tableNameCN:"订单主表",tableNameEN:"ORDER_M",execTime:"2017-06-29 10:17:34",dbName:"数据库名"},{id:1,tableNameCN:"订单主表",tableNameEN:"ORDER_M",execTime:"2017-06-29 10:17:34",dbName:"数据库名"},{id:1,tableNameCN:"订单主表",tableNameEN:"ORDER_M",execTime:"2017-06-29 10:17:34",dbName:"数据库名"}]}},mounted:function(){this.getTableData()}}},218:function(e,t,l){t=e.exports=l(75)(!1),t.push([e.i,".db-table[data-v-b60f8872]{text-align:left}.db-table .btn-group[data-v-b60f8872]{margin-bottom:16px}.db-table .table .delete-btn[data-v-b60f8872]{color:#ff4949}.db-table .table .delete-btn[data-v-b60f8872]:active{color:#bd0707}.db-table .table .preview-btn[data-v-b60f8872]{color:#13ce66}.db-table .table .preview-btn[data-v-b60f8872]:active{color:#008c24}.db-table .pagination[data-v-b60f8872]{float:right;margin-top:20px;padding-right:0}",""])},229:function(e,t,l){var a=l(218);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);l(76)("37528d15",a,!0)},247:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"db-table"},[l("el-form",{attrs:{inline:!0,labelPosition:e.inputLabelPosition}},[l("el-form-item",{attrs:{labelWidth:e.inputLabelWidth,label:"数据库名称："}},[l("el-input",{attrs:{size:"small",readonly:!0},model:{value:e.dbName,callback:function(t){e.dbName=t},expression:"dbName"}})],1),e._v(" "),l("el-form-item",{attrs:{labelWidth:e.inputLabelWidth,label:"数据库类型："}},[l("el-input",{attrs:{size:"small",readonly:!0},model:{value:e.dbType,callback:function(t){e.dbType=t},expression:"dbType"}})],1)],1),e._v(" "),l("el-form",{staticClass:"search-from",attrs:{inline:!0,model:e.searchForm,labelPosition:e.inputLabelPosition}},[l("el-form-item",{attrs:{labelWidth:e.inputLabelWidth,label:"表中文名"}},[l("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.searchForm.name_cn,callback:function(t){e.searchForm.name_cn=t},expression:"searchForm.name_cn"}})],1),e._v(" "),l("el-form-item",{attrs:{labelWidth:e.inputLabelWidth,label:"表英文名"}},[l("el-input",{attrs:{size:"small",placeholder:"请输入内容"},model:{value:e.searchForm.name_en,callback:function(t){e.searchForm.name_en=t},expression:"searchForm.name_en"}})],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary",icon:"search",size:"small"},on:{click:e.doSearch}},[e._v("查询")])],1)],1),e._v(" "),l("el-row",{staticClass:"btn-group",attrs:{span:24}},[l("el-button",{attrs:{type:"primary",size:"small",icon:"plus"},on:{click:e.doCreate}},[e._v("新建")]),e._v(" "),l("el-button",{attrs:{type:"default",size:"small",icon:"close"},on:{click:e.doDelete}},[e._v("删除")]),e._v(" "),l("el-button",{attrs:{type:"primary",size:"small",icon:"plus"},on:{click:e.doExecute}},[e._v("执行")])],1),e._v(" "),l("el-table",{ref:"multipleTable",staticClass:"table",attrs:{data:e.tables,border:"","tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[l("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableNameCN",label:"表中文名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"tableNameEN",label:"表英文名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"execTime",label:"执行时间"}}),e._v(" "),l("el-table-column",{attrs:{prop:"dbName",label:"数据库名",width:"120"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{staticClass:"create-btn",attrs:{type:"text",size:"small",icon:"edit"},on:{click:function(l){e.editItem(t.$index,e.tables)}}},[e._v("编辑")]),e._v(" "),l("el-button",{staticClass:"delete-btn",attrs:{type:"text",size:"small",icon:"delete"},on:{click:function(l){e.deleteItem(t.$index,e.tables)}}},[e._v("删除")]),e._v(" "),l("el-button",{staticClass:"preview-btn",attrs:{type:"text",size:"small",icon:"view"},on:{click:function(l){e.previewItem(t.$index,e.tables)}}},[e._v("预览")])]}}])})],1),e._v(" "),l("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.currentPage,"page-size":10,layout:"total, prev, pager, next",total:1e3},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}}),e._v(" "),l("el-dialog",{staticClass:"db-dialog",attrs:{title:e.newTableFormTitle,visible:e.newTableFormVisible,size:"small"},on:{"update:visible":function(t){e.newTableFormVisible=t}}},[l("el-form",{attrs:{inline:!0}},[l("el-form-item",{attrs:{label:"数据库名:"}},[l("el-input",{attrs:{size:"small",readonly:!0}})],1),e._v(" "),l("el-form-item",{attrs:{label:"数据库类型:"}},[l("el-input",{attrs:{size:"small",readonly:!0}})],1)],1),e._v(" "),l("el-form",{attrs:{inline:!0}},[l("el-form-item",{attrs:{label:"表中文名:"}},[l("el-input",{attrs:{size:"small"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"表英文名:"}},[l("el-input",{attrs:{size:"small"}})],1)],1),e._v(" "),l("el-table",{ref:"multipleTable",attrs:{data:e.columns}},[l("el-table-column",{attrs:{prop:"nameCN",label:"字段中文名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"nameEN",label:"字段英文名"}}),e._v(" "),l("el-table-column",{attrs:{prop:"type",label:"数据类型"}}),e._v(" "),l("el-table-column",{attrs:{prop:"length",label:"长度"}}),e._v(" "),l("el-table-column",{attrs:{prop:"required",label:"是否必填"}}),e._v(" "),l("el-table-column",{attrs:{prop:"primaryKey",label:"是否主键"}}),e._v(" "),l("el-table-column",{attrs:{prop:"默认值",label:"默认值"}}),e._v(" "),l("el-table-column",{attrs:{label:"操作"}})],1)],1)],1)},staticRenderFns:[]}},80:function(e,t,l){function a(e){l(229)}var n=l(27)(l(165),l(247),a,"data-v-b60f8872",null);e.exports=n.exports}});