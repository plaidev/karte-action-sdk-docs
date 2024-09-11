import{_ as a,o as e,c as o,a as n}from"./app.354ee7c5.js";const k=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"ActionOptions interface","slug":"actionoptions-interface","link":"#actionoptions-interface","children":[]},{"level":2,"title":"Properties","slug":"properties","link":"#properties","children":[]}],"relativePath":"karte-action-sdk.actionoptions.md"}'),r={name:"karte-action-sdk.actionoptions.md"};function s(i,t,d,p,l,c){return e(),o("div",null,t[0]||(t[0]=[n(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.actionoptions.html">ActionOptions</a></p><h2 id="actionoptions-interface" tabindex="-1">ActionOptions interface <a class="header-anchor" href="#actionoptions-interface" aria-hidden="true">#</a></h2><p><a href="./karte-action-sdk.create.html">create()</a> 向けのオプション</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ActionOptions</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Props</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Variables</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">VariablesQuery</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-hidden="true">#</a></h2><table><thead><tr><th>Property</th><th>Modifiers</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td><a href="./karte-action-sdk.actionoptions.context.html">context</a></td><td></td><td>ActionRunnerContext</td><td>アクション実行時のコンテキスト</td></tr><tr><td><a href="./karte-action-sdk.actionoptions.kartetemplate.html">karteTemplate?</a></td><td></td><td>{ [key: string]: any; }</td><td><em>(Optional)</em> KARTEテンプレートの情報</td></tr><tr><td><a href="./karte-action-sdk.actionoptions.localvariablesquery.html">localVariablesQuery?</a></td><td></td><td>VariablesQuery</td><td><em>(Optional)</em> アクションで使用されるアクション実行時に取得される変数</td></tr><tr><td><a href="./karte-action-sdk.actionoptions.oncreate.html">onCreate?</a></td><td></td><td><a href="./karte-action-sdk.actionhook.html">ActionHook</a>&lt;Props, Variables &amp; <a href="./karte-action-sdk.actionvariables.html">ActionVariables</a>&gt;</td><td><em>(Optional)</em> アクションが作成されているときにフックされる <a href="./karte-action-sdk.oncreate.html">onCreate()</a></td></tr><tr><td><a href="./karte-action-sdk.actionoptions.props.html">props?</a></td><td></td><td>Props</td><td><em>(Optional)</em> アクションで使用されるプロパティ</td></tr><tr><td><a href="./karte-action-sdk.actionoptions.publish.html">publish?</a></td><td></td><td><a href="./karte-action-sdk.publishfunction.html">PublishFunction</a></td><td><em>(Optional)</em> アクション内でタグのQueueにリクエストを発行する関数</td></tr><tr><td><a href="./karte-action-sdk.actionoptions.send.html">send?</a></td><td></td><td><a href="./karte-action-sdk.sendfunction.html">SendFunction</a></td><td><em>(Optional)</em> アクション内でイベントを発火する関数</td></tr><tr><td><a href="./karte-action-sdk.actionoptions.variables.html">variables?</a></td><td></td><td>Variables</td><td><em>(Optional)</em> アクションで使用される解析時に取得される変数</td></tr></tbody></table>`,7)]))}const m=a(r,[["render",s]]);export{k as __pageData,m as default};
