import{_ as s,o as n,c as a,a as l}from"./app.d79a18b0.js";const A=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"widget.collection() function","slug":"widget-collection-function","link":"#widget-collection-function","children":[]},{"level":2,"title":"Parameters","slug":"parameters","link":"#parameters","children":[]}],"relativePath":"karte-action-sdk.widget.collection.md"}'),o={name:"karte-action-sdk.widget.collection.md"},t=l(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.widget.html">widget</a> &gt; <a href="./karte-action-sdk.widget.collection.html">collection</a></p><h2 id="widget-collection-function" tabindex="-1">widget.collection() function <a class="header-anchor" href="#widget-collection-function" aria-hidden="true">#</a></h2><p>アクションテーブルを管理するメソッドを取得する</p><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">collection</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">config</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">CollectionConfig</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">get</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">&gt;,</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">cb</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">items</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ActionTableResult</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ActionTableResult</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">getByQuery</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">query_name</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">params</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ActionTableQueryParams</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">options</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">            </span><span style="color:#F07178;">ignore_fields</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#BABED8;">[]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">undefined</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">cb</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">items</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Array</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">ActionTableResult</span><span style="color:#89DDFF;">&gt;)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">        </span><span style="color:#F07178;">set</span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#BABED8;font-style:italic;">value</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">,</span><span style="color:#BABED8;"> </span><span style="color:#82AAFF;">cb</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">(</span><span style="color:#BABED8;font-style:italic;">err</span><span style="color:#89DDFF;">:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Error</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">null</span><span style="color:#89DDFF;">)</span><span style="color:#BABED8;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">):</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><h2 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-hidden="true">#</a></h2><table><thead><tr><th>Parameter</th><th>Type</th><th>Description</th></tr></thead><tbody><tr><td>config</td><td>CollectionConfig</td><td>設定情報</td></tr></tbody></table><p><strong>Returns:</strong></p><p>{ get(key: string | Array&lt;string&gt;, cb: (err: Error | null, items?: ActionTableResult | Array&lt;ActionTableResult&gt;) =&gt; void): void; getByQuery(query_name: string, params: ActionTableQueryParams, options: { ignore_fields?: string[]; } | null | undefined, cb: (err: Error | null, items?: Array&lt;ActionTableResult&gt;) =&gt; void): void; set(key: string, value: string, cb: (err: Error | null) =&gt; void): void; }</p><p>メソッドを返します</p>`,10),p=[t];function e(r,c,y,B,D,F){return n(),a("div",null,p)}const E=s(o,[["render",e]]);export{A as __pageData,E as default};
