import{i as c,S as p}from"./assets/vendor-f33cd494.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m=r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags}"
    />
    <div class="wrapper">
    <ul class="wrapper-list">
    <li class="wrapper-item">Likes<span class="span-number">${r.likes}</span></li>
    <li class="wrapper-item">Views<span class="span-number">${r.views}</span></li>
    <li class="wrapper-item">Comments<span class="span-number">${r.comments}</span></li>
    <li class="wrapper-item">Downloads<span class="span-number">${r.downloads}</span></li>
    </ul>
    </div>
  </a>
</li>
`,d="https://pixabay.com/api",f=r=>{const a=new URLSearchParams({key:"45538852-2ab6a380c393410172122f885",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}/?${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},o=document.querySelector(".search-form"),l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=r=>{r.preventDefault(),l.innerHTML="",u.classList.remove("is-hidden");const a=o.elements.user_query.value;if(a===""){c.warning({title:"Caution",message:"Fill in the search field",timeout:2e3,position:"topCenter"});return}f(a).then(s=>{if(s.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomCenter",timeout:2e3}),l.innerHTML="",o.reset();return}u.classList.add("is-hidden");const n=s.hits.map(e=>m(e)).join("");l.innerHTML=n,new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh(),o.reset()}).catch(s=>{})};o.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
