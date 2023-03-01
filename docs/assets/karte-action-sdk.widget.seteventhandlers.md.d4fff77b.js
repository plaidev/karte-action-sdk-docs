import{_ as e,c as t,o as a,a as s}from"./app.025c6955.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"widget.setEventHandlers() function","slug":"widget-seteventhandlers-function","link":"#widget-seteventhandlers-function","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Remarks","slug":"remarks","link":"#remarks","children":[]}],"relativePath":"karte-action-sdk.widget.seteventhandlers.md"}'),n={name:"karte-action-sdk.widget.seteventhandlers.md"},r=s(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.widget.html">widget</a> &gt; <a href="./karte-action-sdk.widget.seteventhandlers.html">setEventHandlers</a></p><h2 id="widget-seteventhandlers-function" tabindex="-1">widget.setEventHandlers() function <a class="header-anchor" href="#widget-seteventhandlers-function" aria-hidden="true">#</a></h2><p>イベントハンドラーを登録する</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setEventHandlers</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">handlers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        [</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ActionEventHandler</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>handlers</td><td>{ [key: string]: ActionEventHandler; }</td><td>登録するイベントハンドラー</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p><h2 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-hidden="true">#</a></h2><p>登録したイベントハンドラーは、ビジュアルエディタでアクション本体とのテキストボタンのクリック時の動作で利用できます。</p>`,11),l=[r];function o(p,i,d,c,h,y){return a(),t("div",null,l)}const D=e(n,[["render",o]]);export{A as __pageData,D as default};