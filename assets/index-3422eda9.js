(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=l(e);fetch(e.href,r)}})();const s=document.getElementById("lienzo"),n=s.getContext("2d");s.width=document.body.offsetWidth;const a=s.width,d=s.height;n.fillStyle="#000";n.fillRect(0,0,a,d);const f=Math.floor(a/20)+1,u=Array(f).fill(0);function m(){n.fillStyle="#0001",n.fillRect(0,0,a,d),n.fillStyle="#0f0",n.font="15pt monospace",u.forEach((o,t)=>{const l=String.fromCharCode(Math.random()*128),c=t*20;n.fillText(l,c,o),o>100+Math.random()*1e4?u[t]=0:u[t]=o+20})}setInterval(m,50);const p=document.querySelector("input"),h=document.querySelector(".sec-resultado"),y=document.querySelector(".button");y.addEventListener("click",()=>{let o=p.value;o?/[2-9]/.test(o)?alert("has puesto un numero que no es binario"):x(o):alert("el input esta vació")});function g(o){if(document.querySelector(".resultado"))document.querySelector(".resultado").textContent=o;else{const t=document.createElement("h2");t.className="resultado",t.textContent=o,h.appendChild(t)}}function x(o){let t=parseInt(o,2);g(t)}