// مخاور دار الأصالة - كود منفصل
const DEFAULT = {
  password: "makhawir2026",
  whatsapp: "971501234567",
  products: [
    {id:1, name:"مخور حرير ملكي", price:590, image:"https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=800"},
    {id:2, name:"مخور كلباء الفاخر", price:650, image:"https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800"},
    {id:3, name:"مخور الأصالة", price:480, image:"https://images.unsplash.com/photo-1594739299330-6bf9c96d3e83?q=80&w=800"}
  ]
};

let data = JSON.parse(localStorage.getItem('mk') || 'null') || DEFAULT;

function render(){
  document.getElementById('products-grid').innerHTML = data.products.map(p=>`
    <div class="bg-white rounded-3xl overflow-hidden shadow">
      <img src="${p.image}" class="w-full h-72 object-cover">
      <div class="p-4">
        <h3 class="font-bold text-lg">${p.name}</h3>
        <div class="flex justify-between items-center mt-2">
          <span class="text-xl font-black text-emerald-800">${p.price} AED</span>
          <a href="https://wa.me/${data.whatsapp}?text=${encodeURIComponent('أريد '+p.name)}" target="_blank" class="text-sm bg-amber-100 px-3 py-1 rounded-full">اطلب</a>
        </div>
      </div>
    </div>
  `).join('');
}

// دخول المالك
document.getElementById('owner-login-link').onclick = () => {
  document.getElementById('login-modal').classList.remove('hidden');
};
document.getElementById('login-btn').onclick = () => {
  const pass = document.getElementById('password-input').value;
  if(pass === data.password){
    alert('تم الدخول بنجاح ✓\nدلوقتي تقدر تعدل النصوص مباشرة');
    document.getElementById('login-modal').classList.add('hidden');
    document.querySelectorAll('.editable').forEach(el => el.contentEditable = true);
  } else {
    alert('كلمة المرور غلط');
  }
};

render();
