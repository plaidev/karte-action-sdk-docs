import{_ as s,o as a,c as n,a as o}from"./app.f5a18f83.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"ButtonProps type","slug":"buttonprops-type","link":"#buttonprops-type","children":[]}],"relativePath":"karte-action-sdk.buttonprops.md"}'),p={name:"karte-action-sdk.buttonprops.md"},l=o(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.buttonprops.html">ButtonProps</a></p><h2 id="buttonprops-type" tabindex="-1">ButtonProps type <a class="header-anchor" href="#buttonprops-type" aria-hidden="true">#</a></h2><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ButtonProps</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">CommonProps</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">ClickableProps</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">BorderProps</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">size</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> BUTTON_SIZE</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">theme</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> BUTTON_THEME</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">round</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> BUTTON_ROUND</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">isLink</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">isIcon</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">linkUrl</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">linkTarget</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> BUTTON_LINK_TARGET</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">iconVariant</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">iconAngle</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">keyof</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#BABED8;"> BUTTON_ICON_ANGLE</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">width</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Properties</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">wrap</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">wrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">nowrap</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">fontWeight</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Properties</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">fontWeight</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">color</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Properties</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">color</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#BABED8;">    </span><span style="color:#F07178;">backgroundColor</span><span style="color:#89DDFF;">?:</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">Properties</span><span style="color:#BABED8;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">backgroundColor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#BABED8;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span></code></pre></div><p><strong>References:</strong> <a href="./karte-action-sdk.commonprops.html">CommonProps</a>, <a href="./karte-action-sdk.clickableprops.html">ClickableProps</a>, <a href="./karte-action-sdk.borderprops.html">BorderProps</a>, <a href="./karte-action-sdk.button_size.html">BUTTON_SIZE</a>, <a href="./karte-action-sdk.button_theme.html">BUTTON_THEME</a>, <a href="./karte-action-sdk.button_round.html">BUTTON_ROUND</a>, <a href="./karte-action-sdk.button_link_target.html">BUTTON_LINK_TARGET</a>, <a href="./karte-action-sdk.button_icon_angle.html">BUTTON_ICON_ANGLE</a></p>`,5),t=[l];function e(r,c,D,y,B,F){return a(),n("div",null,t)}const A=s(p,[["render",e]]);export{E as __pageData,A as default};