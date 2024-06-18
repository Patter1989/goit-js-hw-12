import{S as u,i as n}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const f="/goit-js-hw-12/assets/alert-icon-66d4c42b.svg";function d(t){const s="https://pixabay.com/api/",i="",r=new URLSearchParams({key:"44411721-4da839cd813b8d67e233adef2",q:t,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${s}${i}?${r}`;return fetch(e).then(o=>o.json())}function h(t){return`<li class="gallery-item">
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
    </li>`}function p(t){return t.map(h).join("")}const m=document.querySelector(".loader");function g(){m.classList.remove("visually-hidden")}function y(){m.classList.add("visually-hidden")}const l={message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",backgroundColor:"#EF4040",iconUrl:f,maxWidth:"360px",position:"topRight",theme:"dark"},L=new u(".gallery a",{captionsData:"alt",captionDelay:250}),v=document.querySelector(".search-form"),c=document.querySelector(".gallery");v.addEventListener("submit",w);function w(t){t.preventDefault(),c.innerHTML="",g();const s=t.target.elements.searchImg.value;d(s).then(i=>{i.hits.length==0&&n.show(l);const r=p(i.hits);c.innerHTML=r,L.refresh()}).catch(i=>{n.show(l)}).finally(()=>{y()})}
//# sourceMappingURL=commonHelpers.js.map
