import{a as g,S as y,i}from"./assets/vendor-BLPZKqeQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="50447683-96da9a4ff1c3a2668348e0aa0",b="https://pixabay.com/api/";async function L(s){const r={key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return console.log("Надсилаємо запит з параметрами:",r),(await g.get(b,{params:r})).data}const u=document.querySelector(".gallery"),f=document.getElementById("loader");let l;function w(s){const r=s.map(({webformatURL:o,largeImageURL:n,tags:e,likes:t,views:a,comments:p,downloads:m})=>`
      <li class="gallery-card">
        <a href="${n}" class="gallery-item">
          <img src="${o}" alt="${e}" loading="lazy" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t}</p>
          <p><b>Views:</b> ${a}</p>
          <p><b>Comments:</b> ${p}</p>
          <p><b>Downloads:</b> ${m}</p>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",r),l?l.refresh():l=new y(".gallery a",{captionsData:"alt",captionDelay:250})}function v(){u.innerHTML=""}function P(){f.classList.remove("hidden")}function c(){f.classList.add("hidden")}const d=document.querySelector(".form");d.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(console.log("Введене значення користувача:",r),!r){i.warning({message:"Please enter a search term!",position:"topRight"});return}v(),P();try{const o=await L(r);console.log("Отримано зображень:",o.hits.length),c(),o.hits.length===0?i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):w(o.hits)}catch(o){c(),console.error("Axios помилка:",o),i.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(o)}d.reset()});
//# sourceMappingURL=index.js.map
