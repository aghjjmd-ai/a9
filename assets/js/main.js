(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var oo=$('of-o');if(oo){var ow=$('of-w'),ov=$('of-v');var F={work:{hot:'Lightweight trousers + short-sleeve knit + loafers',mild:'Tailored trousers + shirt + blazer + loafers',cold:'Wool trousers + fine roll-neck + long coat + boots'},casual:{hot:'Linen shorts or skirt + tank or tee + sandals',mild:'Straight jeans + T-shirt + overshirt + trainers',cold:'Dark jeans + chunky knit + padded jacket + boots'},dinner:{hot:'Slip dress or silk shirt + light trousers + sandals',mild:'Dark trousers + silk shirt + loafers',cold:'Black jeans + fine knit + long coat + ankle boots'},travel:{hot:'Soft wide trousers + T-shirt + trainers',mild:'Soft trousers + T-shirt + long cardigan + trainers',cold:'Joggers in wool or knit + roll-neck + puffer + trainers'},event:{hot:'Floaty midi dress or linen suit + sandals',mild:'Midi dress or relaxed suit + denim jacket + block heels',cold:'Knit dress or wool suit + long coat + boots'}};var V={classic:'Keep to navy, white, camel and black.',relaxed:'Go for soft fabrics and one relaxed layer.',bold:'Add one strong colour or a statement shoe.'};
 on([oo,ow,ov],function(){$('of-out').innerHTML='<strong>'+F[oo.value][ow.value]+'</strong><p>'+V[ov.value]+'</p>';});}
var pt=$('pb-t');if(pt){var pbb=$('pb-b');on([pt,pbb],function(){var t=pt.value,b=pbb.value,ok,tip;
 if(t==='over'&&(b==='wide'||b==='skirt')){ok='Volume on volume';tip='Tuck the front of the top or add a belt so the waist shows.';}
 else if(t==='over'){ok='Well balanced';tip='A relaxed top over a slimmer bottom is a classic, easy shape.';}
 else if(t==='crop'&&b==='short'){ok='Lots of skin';tip='Try a high-waisted short or a longer shirt worn open over the top.';}
 else if(t==='crop'){ok='Well balanced';tip='Choose a high waist so only a sliver of skin, or none, shows.';}
 else if(t==='fit'&&b==='slim'){ok='Very streamlined';tip='Add a long coat or cardigan to create a vertical line.';}
 else if(t==='fit'){ok='Well balanced';tip='A fitted top lets wide or full bottoms take the attention.';}
 else if(b==='skirt'||b==='wide'){ok='Nearly there';tip='Half-tuck the top to raise the waistline: it lengthens the leg.';}
 else{ok='Easy and even';tip='A front tuck or rolled sleeves stops it looking half-and-half.';}
 $('pb-out').innerHTML='<strong>'+ok+'</strong><p>'+tip+'</p>';});}
var wg=$('wg-c');if(wg){var bx=[].slice.call(wg.querySelectorAll('input'));var N={jeans:'Dark straight jeans',trousers:'Tailored trousers',tee:'Two or three plain T-shirts',shirt:'A crisp white shirt',knit:'A fine knit in a neutral',blazer:'An unstructured blazer',coat:'A long coat',shoes:'One pair of smart shoes'};
 on(bx,function(){var miss=bx.filter(function(b){return !b.checked;}).map(function(b){return N[b.value];}),have=bx.length-miss.length;$('wg-out').innerHTML=miss.length?'<strong>'+have+' of 8 basics</strong><p>Next to add:</p><ul><li>'+miss.slice(0,3).join('</li><li>')+'</li></ul>':'<strong>All 8 basics</strong><p>Your foundation is complete. Add colour and texture from here.</p>';});}
})();
