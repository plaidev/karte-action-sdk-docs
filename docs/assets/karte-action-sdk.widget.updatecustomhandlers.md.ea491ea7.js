import{_ as s,c as a,o as t,a as e}from"./app.2006f7f5.js";const C=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"widget.updateCustomHandlers() function","slug":"widget-updatecustomhandlers-function","link":"#widget-updatecustomhandlers-function","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]}],"relativePath":"karte-action-sdk.widget.updatecustomhandlers.md"}'),n={name:"karte-action-sdk.widget.updatecustomhandlers.md"},l=e(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.widget.html">widget</a> &gt; <a href="./karte-action-sdk.widget.updatecustomhandlers.html">updateCustomHandlers</a></p><h2 id="widget-updatecustomhandlers-function" tabindex="-1">widget.updateCustomHandlers() function <a class="header-anchor" href="#widget-updatecustomhandlers-function" aria-hidden="true">#</a></h2><p>カスタムイベントハンドラーを更新する</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">updateCustomHandlers</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">handlers</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        [</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ActionEventHandler</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}):</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        [</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ActionEventHandler</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>handlers</td><td>{ [key: string]: ActionEventHandler; }</td><td>対象となるカスタムイベントハンドラー</td></tr></tbody></table><p><strong>Returns:</strong></p><p>{ [key: string]: ActionEventHandler; }</p><p>新しいカスタムイベントハンドラーを返します。</p>`,10),o=[l];function p(r,c,d,i,y,h){return t(),a("div",null,o)}const A=s(n,[["render",p]]);export{C as __pageData,A as default};