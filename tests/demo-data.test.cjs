const test=require('node:test');
const assert=require('node:assert/strict');
const data=require('../dist/demo-data.js');
test('predefined active query returns valid projected rows',()=>{
 assert.deepEqual(data.activeProjects(),[{id:101,name:'Studio website',status:'active'},{id:102,name:'Team workspace',status:'active'}]);
 assert.ok(data.activeProjects().every(p=>Object.keys(p).join(',')==='id,name,status'));
});
test('all displayed foreign-key relationships resolve to sample records',()=>{
 const users=new Set(data.tables.users.map(u=>u.id)),projects=new Set(data.tables.projects.map(p=>p.id));
 data.tables.projects.forEach(p=>assert.ok(users.has(p.owner_id)));
 data.tables.tasks.forEach(t=>assert.ok(projects.has(t.project_id)));
 data.tables.activity_logs.forEach(a=>{assert.ok(users.has(a.user_id));assert.ok(projects.has(a.project_id))});
});
test('search and status filters combine without altering source data',()=>{
 const before=JSON.stringify(data.tables.projects);
 assert.deepEqual(data.filterProjects('active',' STUDIO ').map(p=>p.id),[101]);
 assert.equal(data.filterProjects('active','archive').length,0);
 assert.equal(data.filterProjects('all','archive').length,1);
 assert.equal(JSON.stringify(data.tables.projects),before);
});
test('demo records are immutable and projected query results are isolated',()=>{
 assert.ok(Object.isFrozen(data.tables.projects));
 const result=data.activeProjects();result[0].name='Changed';
 assert.equal(data.tables.projects[0].name,'Studio website');
});
