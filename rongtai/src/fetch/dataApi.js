import fetch from './fetch'

export default {
  urlValue: '/action/test',
  //光谱室
  get_source_material_application_info(){ 
    return fetch(this.urlValue,'get',{ file: 'rt_gp_room_board', cmd: 'get_source_material_application_info'},{})
  },
  get_source_material_qc_record(){ 
    return fetch(this.urlValue,'get',{ file: 'rt_gp_room_board', cmd: 'get_source_material_qc_record'},{})
  },
  get_smelt_qc_record(){ 
    return fetch(this.urlValue,'get',{ file: 'rt_gp_room_board', cmd: 'get_smelt_qc_record'},{})
  },
  get_degassing_qc_record(){ 
    return fetch(this.urlValue,'get',{ file: 'rt_gp_room_board', cmd: 'get_degassing_qc_record'},{})
  },
  //毛坯仓库看板
  get_semi_material_stock_in_apply_info(){
    return fetch(this.urlValue,'get',{ file: 'rt_semi_warehourse_board', cmd: 'get_semi_material_stock_in_apply_info'},{})
  },
  get_semi_material_stock_out_apply_info(){
    return fetch(this.urlValue,'get',{ file: 'rt_semi_warehourse_board', cmd: 'get_semi_material_stock_out_apply_info'},{})
  },
  B_stock_info(){
    return fetch(this.urlValue,'get',{ file: 'rt_semi_warehourse_board', cmd: 'stock_info'},{})
  },
  //原材料仓库看板
  WH_get_source_material_application_info(){
    return fetch(this.urlValue,'get',{ file: 'rt_source_warehourse_board', cmd: 'get_source_material_application_info'},{})
  },
  WH_get_source_material_qc_record(){
    return fetch(this.urlValue,'get',{ file: 'rt_source_warehourse_board', cmd: 'get_source_material_qc_record'},{})
  },
  get_source_matrial_stock_out_apply(){
    return fetch(this.urlValue,'get',{ file: 'rt_source_warehourse_board', cmd: 'get_source_matrial_stock_out_apply'},{})
  },
  //成品一库
  get_end_material_stock_in_apply_info(){
    return fetch(this.urlValue,'get',{ file: 'rt_end_warehourse_board', cmd: 'get_end_material_stock_in_apply_info'},{})
  },
  stock_info(){
    return fetch(this.urlValue,'get',{ file: 'rt_end_warehourse_board', cmd: 'stock_info'},{})
  },
  //熔炼车间看板
  S_get_source_matrial_stock_out_apply(){
    return fetch(this.urlValue,'get',{ file: 'rt_smelt_room_board', cmd: 'get_source_matrial_stock_out_apply'},{})
  },
  S_get_smelt_qc_record(){ 
    return fetch(this.urlValue,'get',{ file: 'rt_smelt_room_board', cmd: 'get_smelt_qc_record'},{})
  },
  get_degassing_qc_record(){
    return fetch(this.urlValue,'get',{ file: 'rt_smelt_room_board', cmd: 'get_degassing_qc_record'},{})
  },
  get_mould_qc_record(){
    return fetch(this.urlValue,'get',{ file: 'rongtai_mould_service', cmd: 'get_mould_qc_record'},{ type:'install' })
  }


}