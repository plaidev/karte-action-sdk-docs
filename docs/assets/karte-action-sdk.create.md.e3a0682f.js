import{_ as a,o as s,c as t,a as e}from"./app.53829542.js";const F=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"create() function","slug":"create-function","link":"#create-function","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]}],"relativePath":"karte-action-sdk.create.md"}'),n={name:"karte-action-sdk.create.md"},o=e(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.create.html">create</a></p><h2 id="create-function" tabindex="-1">create() function <a class="header-anchor" href="#create-function" aria-hidden="true">#</a></h2><p>アクションを作成する</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">create</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Props</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ModalProps</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Variables</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">VariablesQuery</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">extends</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">VariableQuery</span><span style="color:#89DDFF;">&gt;&gt;(</span><span style="color:#BABED8;font-style:italic;">App</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> SvelteComponentDev</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ActionOptions</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Props</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Variables</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ActionVariables</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">VariablesQuery</span><span style="color:#89DDFF;">&gt;):</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">()</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>App</td><td>typeof SvelteComponentDev</td><td>Svelte コンポーネントのエントリポイント</td></tr><tr><td>options</td><td><a href="./karte-action-sdk.actionoptions.html">ActionOptions</a>&lt;Props, Variables &amp; <a href="./karte-action-sdk.actionvariables.html">ActionVariables</a>, VariablesQuery&gt;</td><td><em>(Optional)</em> <a href="./karte-action-sdk.actionoptions.html">オプション</a></td></tr></tbody></table><p><strong>Returns:</strong></p><p>() =&gt; void</p><p>アクションを破棄する関数</p>`,10),l=[o];function p(r,c,i,y,B,d){return s(),t("div",null,l)}const h=a(n,[["render",p]]);export{F as __pageData,h as default};