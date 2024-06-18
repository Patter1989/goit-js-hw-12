import{S as c,i as m}from"./assets/vendor-0fc460d7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u="/goit-js-hw-12/assets/alert-icon-66d4c42b.svg";function f(t){const i="https://pixabay.com/api/",s="",r=new URLSearchParams({key:"44411721-4da839cd813b8d67e233adef2",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${i}${s}?${r}`;return fetch(e).then(o=>o.json())}function h(t){return`<li class="gallery-item">
    <a class="gallery-link" href="${t.largeImageURL}">
      <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
    </a>
    <ul class="info-list">
        <li class="info-item">
          <h4 class="info-item-header">Likes</h4>
          <p class="info-item-value">${t.likes}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Views</h4>
          <p class="info-item-value">${t.views}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Comments</h4>
          <p class="info-item-value">${t.comments}</p>
        </li>
        <li class="info-item">
          <h4 class="info-item-header">Downloads</h4>
          <p class="info-item-value">${t.downloads}</p>
        </li>
      </ul>
    </li>`}function d(t){return t.map(h).join("")}const a=document.querySelector(".loader");function p(){a.classList.remove("visually-hidden")}function g(){a.classList.add("visually-hidden")}const y={message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",backgroundColor:"#EF4040",iconUrl:u,maxWidth:"360px",position:"topRight",theme:"dark"},L=new c(".gallery a",{captionsData:"alt",captionDelay:250}),v=document.querySelector(".search-form"),l=document.querySelector(".gallery");v.addEventListener("submit",w);function w(t){t.preventDefault(),l.innerHTML="",p();const i=t.target.elements.searchImg.value;f(i).then(s=>{s.hits.length==0&&m.show(y),console.log(s.hits);const r=d(s.hits);l.innerHTML=r,L.refresh()}).catch(s=>{console.log(s)}).finally(()=>{g()})}
//# sourceMappingURL=commonHelpers.js.map
