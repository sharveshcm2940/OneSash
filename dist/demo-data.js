/* Fictional, linked records for interface demonstrations only. */
(function(root){
'use strict';
const tables={
 users:[{id:1,name:'Alex Morgan',role:'Owner'},{id:2,name:'Sam Lee',role:'Designer'}],
 projects:[{id:101,name:'Studio website',status:'active',owner_id:1,created_at:'2026-10-01'},{id:102,name:'Team workspace',status:'active',owner_id:2,created_at:'2026-10-08'},{id:103,name:'Archive refresh',status:'completed',owner_id:1,created_at:'2026-09-15'}],
 tasks:[{id:201,name:'Review content',project_id:101,status:'complete'},{id:202,name:'Check accessibility',project_id:102,status:'complete'},{id:203,name:'Approve launch',project_id:101,status:'in review'}],
 activity_logs:[{id:301,action:'Content reviewed',project_id:101,user_id:1},{id:302,action:'Prototype updated',project_id:102,user_id:2}]
};
Object.values(tables).forEach(rows=>{rows.forEach(Object.freeze);Object.freeze(rows)});Object.freeze(tables);
function activeProjects(){return tables.projects.filter(p=>p.status==='active').map(({id,name,status})=>({id,name,status}))}
function filterProjects(status='all',search=''){const query=String(search).trim().toLowerCase();return tables.projects.filter(p=>(status==='all'||p.status===status)&&p.name.toLowerCase().includes(query))}
const data=Object.freeze({tables,activeProjects,filterProjects});if(typeof module!=='undefined'&&module.exports)module.exports=data;else root.OneSashDemoData=data;
})(typeof window!=='undefined'?window:globalThis);
