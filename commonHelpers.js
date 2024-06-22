import{a as S,S as M,i as d}from"./assets/vendor-f144e563.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&p(u)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function p(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const x="/goit-js-hw-12/assets/alert-icon-66d4c42b.svg",B=S.create({baseURL:"https://pixabay.com/api/",params:{key:"44411721-4da839cd813b8d67e233adef2",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:15}});async function y(e,o){return(await B.get("",{params:{q:e,page:o}})).data}function T(e){return`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}" />
    </a>
    <ul class="info-list">
        <li class="info-item">
          <h4 class="info-item-header">Likes</h4>
          <p class="info-item-value">${e.likes}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Views</h4>
          <p class="info-item-value">${e.views}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Comments</h4>
          <p class="info-item-value">${e.comments}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Downloads</h4>
          <p class="info-item-value">${e.downloads}</p>
        </li>
      </ul>
    </li>`}function L(e){return e.map(T).join("")}const O={message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"#EF4040",iconUrl:x,maxWidth:"360px",position:"bottomRight",theme:"dark"},v=new M(".gallery a",{captionsData:"alt",captionDelay:250}),$=document.querySelector(".search-form"),n=document.querySelector(".gallery"),f=document.querySelector(".load-more-btn"),b=document.querySelector(".loader");let r="",l=0;const q=15;let c=0;$.addEventListener("submit",R);async function R(e){if(e.preventDefault(),l=1,n.innerHTML="",w(),r=e.target.elements.searchImg.value.trim(),!r){g("please write something"),h(),a();return}try{const o=await y(r);if(c=Math.ceil(o.totalHits/q),c===0){g("no matches"),a(),m();return}const s=L(o.hits);n.innerHTML=s,v.refresh(),E()}catch{d.show("Error!")}a(),m()}f.addEventListener("click",k);async function k(){w(),h(),l+=1;try{const e=await y(r,l),o=L(e.hits);n.insertAdjacentHTML("beforeend",o),v.refresh(),D()}catch{d.show("Error!")}a(),m()}function w(){b.classList.remove("visually-hidden")}function a(){b.classList.add("visually-hidden")}function E(){f.classList.remove("visually-hidden")}function h(){f.classList.add("visually-hidden")}function m(){l>=c?(h(),c&&d.info(O)):E()}function g(e){d.error({message:e,position:"topRight"})}function D(){const o=n.children[0].getBoundingClientRect().height;scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
