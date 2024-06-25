import{_ as s,o as a,c as t,a as o}from"./app.c5a8896d.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"widget.ActionChangeStateHook type","slug":"widget-actionchangestatehook-type","link":"#widget-actionchangestatehook-type","children":[]}],"relativePath":"karte-action-sdk.widget.actionchangestatehook.md"}'),n={name:"karte-action-sdk.widget.actionchangestatehook.md"},e=o(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.widget.html">widget</a> &gt; <a href="./karte-action-sdk.widget.actionchangestatehook.html">ActionChangeStateHook</a></p><h2 id="widget-actionchangestatehook-type" tabindex="-1">widget.ActionChangeStateHook type <a class="header-anchor" href="#widget-actionchangestatehook-type" aria-hidden="true">#</a></h2><p>アクションのライフサイクル changeState で呼び出されるフック関数</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ActionChangeStateHook</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Props</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Variables</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">props</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Parameters</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ActionHook</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Props</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Variables</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ActionVariables</span><span style="color:#89DDFF;">&gt;&gt;</span><span style="color:#BABED8;">[</span><span style="color:#F78C6C;">0</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">newState</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span></code></pre></div>`,5),p=[e];function l(c,r,i,y,B,F){return a(),t("div",null,p)}const g=s(n,[["render",l]]);export{d as __pageData,g as default};