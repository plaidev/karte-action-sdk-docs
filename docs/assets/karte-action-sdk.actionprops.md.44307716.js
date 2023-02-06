import{_ as t,c as a,o as e,a as o}from"./app.2006f7f5.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"ActionProps interface","slug":"actionprops-interface","link":"#actionprops-interface","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]}],"relativePath":"karte-action-sdk.actionprops.md"}'),s={name:"karte-action-sdk.actionprops.md"},r=o(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.actionprops.html">ActionProps</a></p><h2 id="actionprops-interface" tabindex="-1">ActionProps interface <a class="header-anchor" href="#actionprops-interface" aria-hidden="true">#</a></h2><p>アクションのプロパティ</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ActionProps</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Props</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Variables</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./karte-action-sdk.actionprops.data.html">data</a></td><td></td><td>Props &amp; Variables &amp; <a href="./karte-action-sdk.customvariables.html">CustomVariables</a></td><td>アクションで使用されるデータ</td></tr><tr><td><a href="./karte-action-sdk.actionprops.onchangestate.html">onChangeState?</a></td><td></td><td><a href="./karte-action-sdk.actionchangestatehook.html">ActionChangeStateHook</a>&lt;Props, Variables &amp; <a href="./karte-action-sdk.customvariables.html">CustomVariables</a>&gt;</td><td><em>(Optional)</em> アクションのステートが変更されたときにフックされる <a href="./karte-action-sdk.onchangestate.html">onChangeState()</a></td></tr><tr><td><a href="./karte-action-sdk.actionprops.onshow.html">onShow?</a></td><td></td><td><a href="./karte-action-sdk.actionhook.html">ActionHook</a>&lt;Props, Variables &amp; <a href="./karte-action-sdk.customvariables.html">CustomVariables</a>&gt;</td><td><em>(Optional)</em> アクションが表示されたときにフックされる <a href="./karte-action-sdk.onshow.html">onShow()</a></td></tr><tr><td><a href="./karte-action-sdk.actionprops.send.html">send</a></td><td></td><td><a href="./karte-action-sdk.sendfunction.html">SendFunction</a></td><td>アクションでイベントがトリガーされたときに受信するための関数</td></tr></tbody></table>`,7),n=[r];function i(p,c,d,l,h,k){return e(),a("div",null,n)}const _=t(s,[["render",i]]);export{f as __pageData,_ as default};