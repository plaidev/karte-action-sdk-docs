import{_ as s,c as t,o as e,a}from"./app.2006f7f5.js";const y=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"widget.setCustomHandlers() function","slug":"widget-setcustomhandlers-function","link":"#widget-setcustomhandlers-function","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]},{"level":2,"title":"Remarks","slug":"remarks","link":"#remarks","children":[]}],"relativePath":"karte-action-sdk.widget.setcustomhandlers.md"}'),n={name:"karte-action-sdk.widget.setcustomhandlers.md"},r=a(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.widget.html">widget</a> &gt; <a href="./karte-action-sdk.widget.setcustomhandlers.html">setCustomHandlers</a></p><h2 id="widget-setcustomhandlers-function" tabindex="-1">widget.setCustomHandlers() function <a class="header-anchor" href="#widget-setcustomhandlers-function" aria-hidden="true">#</a></h2><p>カスタムイベントハンドラーを登録する</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setCustomHandlers</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">handlers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        [</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ActionEventHandler</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>handlers</td><td>{ [key: string]: ActionEventHandler; }</td><td>登録するカスタムイベントハンドラー</td></tr></tbody></table><p><strong>Returns:</strong></p><p>void</p><h2 id="remarks" tabindex="-1">Remarks <a class="header-anchor" href="#remarks" aria-hidden="true">#</a></h2><p>登録したカスタムイベントハンドラーは、ビジュアルエディタでアクション本体とのテキストボタンのクリック時の動作で利用できます。</p>`,11),l=[r];function o(p,c,i,d,h,m){return e(),t("div",null,l)}const C=s(n,[["render",o]]);export{y as __pageData,C as default};