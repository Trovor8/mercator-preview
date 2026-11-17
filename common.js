// Shared header, footer, language handling for inner pages
(function(){
  var ORDER=['pt','en','sv','nl','no','de'];
  var LOC={pt:'pt-PT',en:'en-GB',sv:'sv-SE',nl:'nl-NL',no:'nb-NO',de:'de-DE'};
  var Q=new URLSearchParams(location.search), listeners=[];
  function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
  function pick(){var q=Q.get('lang');if(q&&I18N[q])return q;var s=store('mercator_lang');if(s&&I18N[s])return s;var n=(navigator.language||'en').slice(0,2).toLowerCase();if(n==='nb'||n==='nn')n='no';return I18N[n]?n:'en'}
  var M=window.M={lang:pick(),Q:Q,
    T:function(){return I18N[M.lang]},
    esc:function(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})},
    money:function(n){try{return new Intl.NumberFormat(LOC[M.lang],{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n)}catch(e){return n+' €'}},
    num:function(n,d){try{return new Intl.NumberFormat(LOC[M.lang],{maximumFractionDigits:d||0}).format(n)}catch(e){return n}},
    link:function(page,params){var p=new URLSearchParams(params||{});p.set('lang',M.lang);var h='';if(page.indexOf('#')>-1){h=page.slice(page.indexOf('#'));page=page.slice(0,page.indexOf('#'))}return page+'?'+p.toString()+h},
    img:function(u,s){return /^https?:/.test(u)||/^img\//.test(u)?u.replace('{S}',s):'https://images.egorealestate.com/'+s+'/'+u},
    onLang:function(cb){listeners.push(cb)},
    REGIONS:[['algarve','r_algarve'],['cascais','r_cascais'],['lisbon','r_lisbon'],['sintra','r_sintra'],['silver','r_silver'],['porto','r_porto'],['alentejo','r_alentejo'],['madeira','r_madeira']],
    LIFE:[['sea','ls_sea'],['city','ls_city'],['golf','ls_golf'],['country','ls_country'],['luxury','ls_luxury']],
    setLang:function(k){if(!I18N[k])return;M.lang=k;store('mercator_lang',k);try{var u=new URL(location.href);u.searchParams.set('lang',k);history.replaceState(null,'',u)}catch(e){}render();listeners.forEach(function(f){f()})}
  };
  var WA='<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z"/></svg>';
  function nav(){var t=M.T();return [['properties.html','nav_properties'],['index.html#regions','nav_regions'],['guide.html','nav_guide'],['about.html','nav_about'],['contact.html','nav_contact']].map(function(n){var on=location.pathname.split('/').pop()===n[0];return '<a href="'+M.link(n[0])+'"'+(on?' aria-current="page"':'')+'>'+M.esc(t[n[1]])+'</a>'}).join('')}
  function render(){
    var t=M.T(), hd=document.getElementById('hd-slot'), ft=document.getElementById('ft-slot');
    document.documentElement.lang=t._html;
    if(hd)hd.innerHTML='<header id="hd" class="solid"><div class="wrap hd"><a class="logo" href="'+M.link('index.html')+'" aria-label="Mercator"><img src="img/logo-mark.png" alt=""><div><b>MERCATOR</b><small>Real Estate · Portugal</small></div></a>'+
      '<nav class="main">'+nav()+'</nav><div class="hd-right"><a class="call" href="tel:+351214658650">+351 21 465 86 50</a><div class="langs"><button class="lang-btn" id="langBtn" aria-haspopup="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg><span>'+M.lang.toUpperCase()+'</span></button>'+
      '<div class="lang-menu" id="langMenu">'+ORDER.map(function(k){return '<button data-lang="'+k+'" aria-current="'+(k===M.lang)+'">'+I18N[k]._name+'<span>'+k.toUpperCase()+'</span></button>'}).join('')+'</div></div>'+
      '<button class="burger" id="burger" aria-label="Menu"><i></i><i></i><i></i></button></div></div></header>'+
      '<div class="drawer" id="drawer"><button class="x" id="drawerX">'+M.esc(t.close)+'</button>'+nav()+'<a href="tel:+351214658650" style="font-family:var(--sans);font-size:1rem;color:var(--gold-2)">+351 21 465 86 50</a><div class="d-langs">'+ORDER.map(function(k){return '<button data-lang="'+k+'" aria-current="'+(k===M.lang)+'">'+I18N[k]._name+'</button>'}).join('')+'</div></div>';
    if(ft)ft.innerHTML='<footer><div class="wrap"><div class="ft"><div><img src="img/logo.png" alt="Mercator"><p>'+M.esc(t.ft_tag)+'</p></div>'+
      '<div><h4>'+M.esc(t.nav_properties)+'</h4><ul>'+M.REGIONS.slice(0,6).map(function(r){return '<li><a href="'+M.link('properties.html',{region:r[0]})+'">'+M.esc(t[r[1]])+'</a></li>'}).join('')+'</ul></div>'+
      '<div><h4>Mercator</h4><ul><li><a href="'+M.link('about.html')+'">'+M.esc(t.nav_about)+'</a></li><li><a href="'+M.link('guide.html')+'">'+M.esc(t.nav_guide)+'</a></li><li><a href="'+M.link('contact.html')+'">'+M.esc(t.nav_contact)+'</a></li><li><a href="tel:+351214658650">+351 21 465 86 50</a></li><li><a href="mailto:mercator@mercator.pt">mercator@mercator.pt</a></li></ul></div></div>'+
      '<div class="legal"><span>Mercator – Sociedade de Mediação Imobiliária, Lda. · AMI 203</span><div>'+
      '<a href="'+M.link('legal.html',{doc:'terms'})+'">'+M.esc(t.ft_terms)+'</a><a href="'+M.link('legal.html',{doc:'privacy'})+'">'+M.esc(t.ft_privacy)+'</a><a href="'+M.link('legal.html',{doc:'privacy'})+'#cookies">'+M.esc(t.ft_cookies)+'</a><a href="'+M.link('legal.html',{doc:'ral'})+'">'+M.esc(t.ft_ral)+'</a><a href="https://www.livroreclamacoes.pt" target="_blank" rel="noopener">'+M.esc(t.ft_claims)+'</a></div></div></div></footer>'+
      '<a class="wa" href="https://api.whatsapp.com/send?phone=351912333450" target="_blank" rel="noopener" aria-label="WhatsApp">'+WA+'</a>';
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest('[data-lang]');if(b){M.setLang(b.getAttribute('data-lang'));return}
    if(e.target.closest('#langBtn')){document.getElementById('langMenu').classList.toggle('open');return}
    if(!e.target.closest('.langs')){var m=document.getElementById('langMenu');if(m)m.classList.remove('open')}
    if(e.target.closest('#burger'))document.getElementById('drawer').classList.add('open');
    if(e.target.closest('#drawerX')||e.target.closest('.drawer a'))document.getElementById('drawer').classList.remove('open');
  });
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){var m=document.getElementById('langMenu');if(m)m.classList.remove('open');var d=document.getElementById('drawer');if(d)d.classList.remove('open')}});
  M.render=render;
  if(document.readyState!=='loading')render();else document.addEventListener('DOMContentLoaded',render);
})();
