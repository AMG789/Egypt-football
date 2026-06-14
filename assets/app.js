(() => {
const D = {
 pass:"makhawir2026", wa:"971501234567", col:"#0E5E4F",
 t1:"فخامة المخور الإماراتي من كلباء إلى العالم",
 t2:"ننسج الأصالة بخيوط الفخامة. مخاور مطرزة يدوياً بأجود الحرير.",
 pro:[
  {i:1,n:"مخور حرير ملكي",p:590,img:"https://images.unsplash.com/photo-1594739299330-6bf9c96d3e83?q=80&w=800"},
  {i:2,n:"مخور كلباء الفاخر",p:650,img:"https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=800"},
  {i:3,n:"مخور الأصالة",p:480,img:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800"}
 ]};
let S = JSON.parse(localStorage.getItem('mk2')||'null')||D;
const $=s=>document.querySelector(s);

function draw(){
 document.documentElement.style.setProperty('--p',S.col);
 $('#t1').textContent=S.t1; $('#t2').textContent=S.t2;
 const w=`https://wa.me/${S.wa}`; $('#wa1').href=w;
 $('#grid').innerHTML=S.pro.map(x=>`<div class="bg-[var(--bg)] rounded-3xl overflow-hidden shadow border"><img src="${x.img}" class="w-full h-80 object-cover"><div class="p-5"><div class="flex justify-between"><b class="text-lg">${x.n}</b><span class="font-black text-[var(--p)]">${x.p} AED</span></div><a href="${w}?text=${encodeURIComponent(x.n)}" target="_blank" class="mt-3 inline-block text-sm bg-[var(--g)]/20 px-4 py-1.5 rounded-full">اطلبي</a></div></div>`).join('');
 $('#list').innerHTML=S.pro.map(x=>`<div class="flex gap-2 items-center bg-white p-2 rounded border"><img src="${x.img}" class="w-10 h-10 object-cover rounded"><span class="flex-1 text-sm">${x.n}</span><button onclick="del(${x.i})" class="text-red-600 text-xs">حذف</button></div>`).join('');
}
window.del=i=>{S.pro=S.pro.filter(x=>x.i!==i);save()};

function save(){localStorage.setItem('mk2',JSON.stringify(S));draw();alert('تم الحفظ ✓')}

function login(){if($('#pw').value===S.pass){sessionStorage.o=1;$('#login').classList.add('hidden');$('#bar').classList.remove('hidden');document.body.style.paddingTop='48px'}else alert('خطأ')}
function init(){
 draw();
 if(sessionStorage.o){$('#bar').classList.remove('hidden');document.body.style.paddingTop='48px'}
 $('#loginBtn').onclick=()=>$('#login').classList.remove('hidden');
 $('#go').onclick=login; $('#pw').onkeydown=e=>e.key==='Enter'&&login();
 $('#out').onclick=()=>{sessionStorage.removeItem('o');location.reload()};
 $('#edit').onchange=e=>document.querySelectorAll('.editable').forEach(el=>el.contentEditable=e.target.checked);
 $('#panelBtn').onclick=()=>{$('#panel').classList.remove('hidden');$('#wa').value=S.wa;$('#cp').value=S.col};
 $('#closeP').onclick=()=>$('#panel').classList.add('hidden');
 $('#add').onclick=()=>{S.pro.unshift({i:Date.now(),n:$('#pn').value,p:+$('#pp').value,img:$('#pi').value});save();$('#pn').value=$('#pp').value=$('#pi').value=''};
 $('#save').onclick=()=>{S.t1=$('#t1').textContent;S.t2=$('#t2').textContent;S.wa=$('#wa').value;S.col=$('#cp').value;save()};
}
document.addEventListener('DOMContentLoaded',init);
})();
