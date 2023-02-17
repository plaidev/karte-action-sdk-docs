import{_ as t,c as e,o as a,a as o}from"./app.2006f7f5.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"widget.ActionOptions interface","slug":"widget-actionoptions-interface","link":"#widget-actionoptions-interface","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]}],"relativePath":"karte-action-sdk.widget.actionoptions.md"}'),n={name:"karte-action-sdk.widget.actionoptions.md"},i=o(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.widget.html">widget</a> &gt; <a href="./karte-action-sdk.widget.actionoptions.html">ActionOptions</a></p><h2 id="widget-actionoptions-interface" tabindex="-1">widget.ActionOptions interface <a class="header-anchor" href="#widget-actionoptions-interface" aria-hidden="true">#</a></h2><p><a href="./karte-action-sdk.create.html">create()</a> 向けのオプション</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ActionOptions</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Props</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Variables</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./karte-action-sdk.widget.actionoptions.oncreate.html">onCreate?</a></td><td></td><td>ActionHook&lt;Props, Variables &amp; CustomVariables&gt;</td><td><em>(Optional)</em> アクションが作成されているときにフックされる <a href="./karte-action-sdk.oncreate.html">onCreate()</a></td></tr><tr><td><a href="./karte-action-sdk.widget.actionoptions.props.html">props?</a></td><td></td><td>Props</td><td><em>(Optional)</em> アクションで使用されるプロパティ</td></tr><tr><td><a href="./karte-action-sdk.widget.actionoptions.send.html">send?</a></td><td></td><td>SendFunction</td><td><em>(Optional)</em> アクションでイベントがトリガーされたときに受信するための関数</td></tr><tr><td><a href="./karte-action-sdk.widget.actionoptions.variables.html">variables?</a></td><td></td><td>Variables</td><td><em>(Optional)</em> アクションで使用されるアクションテーブルのユーザー環境変数</td></tr></tbody></table>`,7),s=[i];function r(d,p,c,l,h,k){return a(),e("div",null,s)}const _=t(n,[["render",r]]);export{m as __pageData,_ as default};