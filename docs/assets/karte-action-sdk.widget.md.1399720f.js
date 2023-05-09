import{_ as t,c as e,o as a,a as d}from"./app.62578bba.js";const f=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"widget namespace","slug":"widget-namespace","link":"#widget-namespace","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":2,"title":"Interfaces","slug":"interfaces","link":"#interfaces","children":[]},{"level":2,"title":"Variables","slug":"variables","link":"#variables","children":[]},{"level":2,"title":"Type Aliases","slug":"type-aliases","link":"#type-aliases","children":[]}],"relativePath":"karte-action-sdk.widget.md"}'),r={name:"karte-action-sdk.widget.md"},i=d(`<p><a href="./">Home</a> &gt; <a href="./karte-action-sdk.html">@plaidev/karte-action-sdk</a> &gt; <a href="./karte-action-sdk.widget.html">widget</a></p><h2 id="widget-namespace" tabindex="-1">widget namespace <a class="header-anchor" href="#widget-namespace" aria-hidden="true">#</a></h2><p><strong>Signature:</strong></p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">declare</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">widget</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="functions" tabindex="-1">Functions <a class="header-anchor" href="#functions" aria-hidden="true">#</a></h2><table><thead><tr><th>Function</th><th>Description</th></tr></thead><tbody><tr><td><a href="./karte-action-sdk.widget.addstate.html">addState(stateId)</a></td><td><a href="./karte-action-sdk.getstates.html">getStates()</a> function to add new state ID to list of state IDs.</td></tr><tr><td><a href="./karte-action-sdk.widget.applycss.html">applyCss(css)</a></td><td><a href="./karte-action-sdk.applycss.html">applyCss()</a> apply CSS to KARTE action.</td></tr><tr><td><a href="./karte-action-sdk.widget.applyglobalcss.html">applyGlobalCss(css)</a></td><td><a href="./karte-action-sdk.applyglobalcss.html">applyGlobalCss()</a> apply global CSS to WEB page.</td></tr><tr><td><a href="./karte-action-sdk.widget.closeaction.html">closeAction(trigger)</a></td><td>Close KARTE action</td></tr><tr><td><a href="./karte-action-sdk.widget.collection.html">collection(table)</a></td><td>アクションテーブルを操作するオブジェクト</td></tr><tr><td><a href="./karte-action-sdk.widget.create.html">create(App, options)</a></td><td>Create the KARTE action</td></tr><tr><td><a href="./karte-action-sdk.widget.createapp.html">createApp(App, options)</a></td><td>Create an application instance</td></tr><tr><td><a href="./karte-action-sdk.widget.createfog.html">createFog({ color, opacity, zIndex, onclick })</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.customanimation.html">customAnimation(node, { transform, animationStyle, delay, duration })</a></td><td>The function to activate svelte animation.</td></tr><tr><td><a href="./karte-action-sdk.widget.destroy.html">destroy()</a></td><td>Destory KARTE action</td></tr><tr><td><a href="./karte-action-sdk.widget.dispatchdestroyevent.html">dispatchDestroyEvent()</a></td><td>Dispatch the event to destroy KARTE action</td></tr><tr><td><a href="./karte-action-sdk.widget.embed.html">embed(target, replace, embed_method)</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.ensureactionroot.html">ensureActionRoot(useShadow)</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.getactionsetting.html">getActionSetting()</a></td><td><a href="./karte-action-sdk.getactionsetting.html">getActionSetting()</a> function to get action setting. {ActionSetting} Current action setting</td></tr><tr><td><a href="./karte-action-sdk.widget.getactionshadowroot.html">getActionShadowRoot()</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.getcustomhandlers.html">getCustomHandlers()</a></td><td><a href="./karte-action-sdk.getcustomhandlers.html">getCustomHandlers()</a> function to get custom event handlers. {{ [key: string]: ActionEventHandler }} Current custom event handlers</td></tr><tr><td><a href="./karte-action-sdk.widget.getcustomvariables.html">getCustomVariables()</a></td><td><a href="./karte-action-sdk.getcustomvariables.html">getCustomVariables()</a> function to get custom variables. {CustomVariables} Current custom variables</td></tr><tr><td><a href="./karte-action-sdk.widget.getinternalhandlers.html">getInternalHandlers()</a></td><td><a href="./karte-action-sdk.getinternalhandlers.html">getInternalHandlers()</a> function to get internal event handlers. {{ [key: string]: ActionEventHandler }} Current internal handlers</td></tr><tr><td><a href="./karte-action-sdk.widget.getlocalstore.html">getLocalStore(key)</a></td><td>ページをまたぐ変数を取得設定する</td></tr><tr><td><a href="./karte-action-sdk.widget.getmemorystore.html">getMemoryStore(key)</a></td><td>ページ内の変数を取定する</td></tr><tr><td><a href="./karte-action-sdk.widget.getstate.html">getState()</a></td><td><a href="./karte-action-sdk.getstate.html">getState()</a> function to get current state ID. {string} Current state ID</td></tr><tr><td><a href="./karte-action-sdk.widget.getstate_0.html">getState$0()</a></td><td><p>現在のステートを取得する</p><p> {string} ステートID</p></td></tr><tr><td><a href="./karte-action-sdk.widget.getstates.html">getStates()</a></td><td><a href="./karte-action-sdk.getstates.html">getStates()</a> function to get a list of all state IDs. {string[]} All state IDs</td></tr><tr><td><a href="./karte-action-sdk.widget.getsystem.html">getSystem()</a></td><td><a href="./karte-action-sdk.getsystem.html">getSystem()</a> function to get KARTE system config. {SystemConfig} Current karte system config</td></tr><tr><td><a href="./karte-action-sdk.widget.getval.html">getVal(name)</a></td><td>変数を取得する</td></tr><tr><td><a href="./karte-action-sdk.widget.hashcode.html">hashCode(s)</a></td><td><a href="./karte-action-sdk.hashcode.html">hashCode()</a> generate hash with FNV-1a hash</td></tr><tr><td><a href="./karte-action-sdk.widget.isclosed.html">isClosed()</a></td><td><a href="./karte-action-sdk.isclosed.html">isClosed()</a> function to check if action is clsoed.</td></tr><tr><td><a href="./karte-action-sdk.widget.isdestroyed.html">isDestroyed()</a></td><td><a href="./karte-action-sdk.isdestroyed.html">isDestroyed()</a> function to check if action is destroyed. {boolean} Flag if action is destoryed / true: Destroyed, false: Not Destroyed</td></tr><tr><td><a href="./karte-action-sdk.widget.isopened.html">isOpened()</a></td><td><a href="./karte-action-sdk.isopened.html">isOpened()</a> function to check if action is opened. {boolean} Flag if action is opend / true: Opend, false: Not opened</td></tr><tr><td><a href="./karte-action-sdk.widget.isstopped.html">isStopped()</a></td><td><a href="./karte-action-sdk.isstopped.html">isStopped()</a> function to check if action is stopped. {boolean} Flag if action is stopped / true: Stopped, false: Not stopped</td></tr><tr><td><a href="./karte-action-sdk.widget.loadglobalscript.html">loadGlobalScript(src)</a></td><td><a href="./karte-action-sdk.loadglobalscript.html">loadGlobalScript()</a> load JavaScript that does not support ESM.</td></tr><tr><td><a href="./karte-action-sdk.widget.loadglobalstyle.html">loadGlobalStyle(href)</a></td><td><a href="./karte-action-sdk.loadglobalstyle.html">loadGlobalStyle()</a> load global style to WEB page.</td></tr><tr><td><a href="./karte-action-sdk.widget.loadstyle.html">loadStyle(href)</a></td><td><a href="./karte-action-sdk.loadstyle.html">loadStyle()</a> load global style to KARTE action.</td></tr><tr><td><a href="./karte-action-sdk.widget.method.html">method(name, callback)</a></td><td>WEBのイベントが発生したときに実行されるコールバックを設定する</td></tr><tr><td><a href="./karte-action-sdk.widget.on.html">on(name, callback)</a></td><td>Widgetのイベントが発生したときに実行されるコールバックを設定する</td></tr><tr><td><a href="./karte-action-sdk.widget.onchangestate.html">onChangeState(fn)</a></td><td><a href="./karte-action-sdk.onchangestate.html">onChangeState()</a> function to set the function to hook the phase after changing action state.</td></tr><tr><td><a href="./karte-action-sdk.widget.onchangeval.html">onChangeVal(name, callback)</a></td><td>変数が変更されたときに実行されるコールバックを設定する</td></tr><tr><td><a href="./karte-action-sdk.widget.onclose.html">onClose(fn)</a></td><td><a href="./karte-action-sdk.onclose.html">onClose()</a> function to set the function to hook the phase before closing action.</td></tr><tr><td><a href="./karte-action-sdk.widget.oncreate.html">onCreate(fn)</a></td><td><a href="./karte-action-sdk.oncreate.html">onCreate()</a> function to set the function to hook the phase before creating action.</td></tr><tr><td><a href="./karte-action-sdk.widget.ondestroy.html">onDestroy(fn)</a></td><td>function to set the function to hook the phase before destroying action.</td></tr><tr><td><a href="./karte-action-sdk.widget.onshow.html">onShow(fn)</a></td><td><a href="./karte-action-sdk.onshow.html">onShow()</a> function to set the function to hook the phase after showing action.</td></tr><tr><td><a href="./karte-action-sdk.widget.resetactionsetting.html">resetActionSetting()</a></td><td><a href="./karte-action-sdk.resetactionsetting.html">resetActionSetting()</a> function to reset action setting</td></tr><tr><td><a href="./karte-action-sdk.widget.setactionsetting.html">setActionSetting(setting)</a></td><td><a href="./karte-action-sdk.setactionsetting.html">setActionSetting()</a> function to &quot;update&quot; action setting</td></tr><tr><td><a href="./karte-action-sdk.widget.setclosed.html">setClosed(on)</a></td><td><a href="./karte-action-sdk.setclosed.html">setClosed()</a> function to set if action is closed.</td></tr><tr><td><a href="./karte-action-sdk.widget.setcustomhandlers.html">setCustomHandlers(handlers)</a></td><td><a href="./karte-action-sdk.setcustomhandlers.html">setCustomHandlers()</a> function to set custom event handlers.</td></tr><tr><td><a href="./karte-action-sdk.widget.setcustomvariables.html">setCustomVariables(variables)</a></td><td><a href="./karte-action-sdk.setcustomvariables.html">setCustomVariables()</a> function to set custom variables.</td></tr><tr><td><a href="./karte-action-sdk.widget.setdestroyed.html">setDestroyed(on)</a></td><td><a href="./karte-action-sdk.setdestroyed.html">setDestroyed()</a> function to set if action is destroyed.</td></tr><tr><td><a href="./karte-action-sdk.widget.setinternalhandlers.html">setInternalHandlers(handlers)</a></td><td><a href="./karte-action-sdk.setinternalhandlers.html">setInternalHandlers()</a> function to set internal event handlers.</td></tr><tr><td><a href="./karte-action-sdk.widget.setlocalstore.html">setLocalStore(key, value, options)</a></td><td>ページをまたぐ変数を設定する</td></tr><tr><td><a href="./karte-action-sdk.widget.setmemorystore.html">setMemoryStore(key, value)</a></td><td>ページ内の変数を設定する</td></tr><tr><td><a href="./karte-action-sdk.widget.setopened.html">setOpened(on)</a></td><td><a href="./karte-action-sdk.setopened.html">setOpened()</a> function to set if action is opened.</td></tr><tr><td><a href="./karte-action-sdk.widget.setstate.html">setState(stateId, force)</a></td><td><a href="./karte-action-sdk.setstate.html">setState()</a> function to set current state ID.</td></tr><tr><td><a href="./karte-action-sdk.widget.setstate_0.html">setState$0(stateId)</a></td><td>現在のステートを設定する</td></tr><tr><td><a href="./karte-action-sdk.widget.setstopped.html">setStopped(on)</a></td><td><a href="./karte-action-sdk.setstopped.html">setStopped()</a> function to set if action is stopped.</td></tr><tr><td><a href="./karte-action-sdk.widget.setsystem.html">setSystem(config)</a></td><td><a href="./karte-action-sdk.setsystem.html">setSystem()</a> function to set KARTE system config.</td></tr><tr><td><a href="./karte-action-sdk.widget.setval.html">setVal(name, value)</a></td><td>変数を設定する</td></tr><tr><td><a href="./karte-action-sdk.widget.showaction.html">showAction()</a></td><td>Show KARTE action</td></tr><tr><td><a href="./karte-action-sdk.widget.updatecustomhandlers.html">updateCustomHandlers(handlers)</a></td><td><a href="./karte-action-sdk.updatecustomhandlers.html">updateCustomHandlers()</a> function to update custom event handlers.</td></tr><tr><td><a href="./karte-action-sdk.widget.updatecustomvariables.html">updateCustomVariables(variables)</a></td><td><a href="./karte-action-sdk.updatecustomvariables.html">updateCustomVariables()</a> function to update custom variables.</td></tr><tr><td><a href="./karte-action-sdk.widget.updateinternalhandlers.html">updateInternalHandlers(handlers)</a></td><td><a href="./karte-action-sdk.updateinternalhandlers.html">updateInternalHandlers()</a> function to update internal event handlers.</td></tr></tbody></table><h2 id="interfaces" tabindex="-1">Interfaces <a class="header-anchor" href="#interfaces" aria-hidden="true">#</a></h2><table><thead><tr><th>Interface</th><th>Description</th></tr></thead><tbody><tr><td><a href="./karte-action-sdk.widget._props.html">_Props</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.actionoptions.html">ActionOptions</a></td><td>An options for <a href="./karte-action-sdk.create.html">create()</a></td></tr><tr><td><a href="./karte-action-sdk.widget.actionprops.html">ActionProps</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.app.html">App</a></td><td>App application instance that is with <a href="./karte-action-sdk.createapp.html">createApp()</a></td></tr><tr><td><a href="./karte-action-sdk.widget.baselistbackground.html">BaseListBackground</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.baselistseparator.html">BaseListSeparator</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.customanimationoptions.html">CustomAnimationOptions</a></td><td>An option for svelte custom animation</td></tr><tr><td><a href="./karte-action-sdk.widget.formdata.html">FormData</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listbackgroundnone.html">ListBackgroundNone</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listbackgroundstripe.html">ListBackgroundStripe</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listseparatorborder.html">ListSeparatorBorder</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listseparatorgap.html">ListSeparatorGap</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listseparatornone.html">ListSeparatorNone</a></td><td></td></tr></tbody></table><h2 id="variables" tabindex="-1">Variables <a class="header-anchor" href="#variables" aria-hidden="true">#</a></h2><table><thead><tr><th>Variable</th><th>Description</th></tr></thead><tbody><tr><td><a href="./karte-action-sdk.widget.action_change_state_event.html">ACTION_CHANGE_STATE_EVENT</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.action_close_event.html">ACTION_CLOSE_EVENT</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.action_destroy_event.html">ACTION_DESTROY_EVENT</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.action_show_event.html">ACTION_SHOW_EVENT</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.actionid.html">actionId</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.actionsetting.html">actionSetting</a></td><td>Store to handle action setting</td></tr><tr><td><a href="./karte-action-sdk.widget.alignments.html">Alignments</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.all_action_id.html">ALL_ACTION_ID</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.all_action_shorten_id.html">ALL_ACTION_SHORTEN_ID</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.animationstyles.html">AnimationStyles</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.backgroundsizes.html">BackgroundSizes</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.clippaths.html">ClipPaths</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.close.html">close</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.closeapp.html">closeApp</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.closed.html">closed</a></td><td>Store to handle visibility of action</td></tr><tr><td><a href="./karte-action-sdk.widget.cursors.html">Cursors</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.customhandlers.html">customHandlers</a></td><td><p>Store to handle custom event handlers</p><p>This is used internally.</p></td></tr><tr><td><a href="./karte-action-sdk.widget.customvariables.html">customVariables</a></td><td>Store to handle custom variables</td></tr><tr><td><a href="./karte-action-sdk.widget.defaultlistbackground.html">DefaultListBackground</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.defaultlistbackgroundnone.html">DefaultListBackgroundNone</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.defaultlistbackgroundstripe.html">DefaultListBackgroundStripe</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.defaultlistseparator.html">DefaultListSeparator</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.defaultlistseparatorborder.html">DefaultListSeparatorBorder</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.defaultlistseparatorgap.html">DefaultListSeparatorGap</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.defaultlistseparatornone.html">DefaultListSeparatorNone</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.defaultmodalplacement.html">DefaultModalPlacement</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.destroyed.html">destroyed</a></td><td>Store to handle destruction of action</td></tr><tr><td><a href="./karte-action-sdk.widget.directions.html">Directions</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.elasticities.html">Elasticities</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.elasticitystyle.html">ElasticityStyle</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.ensuremodalroot.html">ensureModalRoot</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.execonclickoperation.html">execOnClickOperation</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.finalize.html">finalize</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.formdata.html">formData</a></td><td>Store for form data</td></tr><tr><td><a href="./karte-action-sdk.widget.getstorestate.html">getStoreState</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.h.html">h</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.handlestate.html">handleState</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.havefunction.html">haveFunction</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.initialize.html">initialize</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.internalhandlers.html">internalHandlers</a></td><td><p>Store to handle internal event handlers</p><p>This is used internally.</p></td></tr><tr><td><a href="./karte-action-sdk.widget.justifies.html">Justifies</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.karte_action_rid.html">KARTE_ACTION_RID</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.karte_action_root.html">KARTE_ACTION_ROOT</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.karte_action_shorten_id.html">KARTE_ACTION_SHORTEN_ID</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.karte_modal_root.html">KARTE_MODAL_ROOT</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.lengthunits.html">LengthUnits</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.linkto.html">linkTo</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listbackgroundtypes.html">ListBackgroundTypes</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listdirections.html">ListDirections</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listseparatortypes.html">ListSeparatorTypes</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.maximumzindex.html">maximumZindex</a></td><td>Store to handle max z-index for grid items</td></tr><tr><td><a href="./karte-action-sdk.widget.mediaqueries.html">MediaQueries</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.modalpositions.html">ModalPositions</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.moveto.html">moveTo</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.none.html">none</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.objectfits.html">ObjectFits</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.onclickoperationoptions.html">OnClickOperationOptions</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.opened.html">opened</a></td><td>Store to handle visibility of action</td></tr><tr><td><a href="./karte-action-sdk.widget.overflows.html">Overflows</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.proptypes.html">PropTypes</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.repeats.html">Repeats</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.runscript.html">runScript</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.send_event.html">send_event</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.setautostart.html">setAutoStart</a></td><td><p><a href="./karte-action-sdk.setautostart.html">setAutoStart</a> function to set auto start flag.</p><p>NOTE: Use setActionConfig({ autoStart: false }).</p></td></tr><tr><td><a href="./karte-action-sdk.widget.setmaximumzindex.html">setMaximumZindex</a></td><td>function to get maximum z-index.</td></tr><tr><td><a href="./karte-action-sdk.widget.show.html">show</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.showmodal.html">showModal</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.state.html">state</a></td><td><p>Store to handle current state ID</p><p>This is exported becase of compatible interface for App.svelte. Don&#39;t use directly.</p></td></tr><tr><td><a href="./karte-action-sdk.widget.states.html">states</a></td><td>Store to handle all state IDs</td></tr><tr><td><a href="./karte-action-sdk.widget.stopped.html">stopped</a></td><td>Store to handle stopping action</td></tr><tr><td><a href="./karte-action-sdk.widget.storage.html">storage</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.system.html">system</a></td><td>Store to read KARTE system config</td></tr><tr><td><a href="./karte-action-sdk.widget.textdirections.html">TextDirections</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.writingmodes.html">WritingModes</a></td><td></td></tr></tbody></table><h2 id="type-aliases" tabindex="-1">Type Aliases <a class="header-anchor" href="#type-aliases" aria-hidden="true">#</a></h2><table><thead><tr><th>Type Alias</th><th>Description</th></tr></thead><tbody><tr><td><a href="./karte-action-sdk.widget.actioneventhandler.html">ActionEventHandler</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.actionsetting.html">ActionSetting</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.alignment.html">Alignment</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.animationstyle.html">AnimationStyle</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.appoptions.html">AppOptions</a></td><td>An options for <a href="./karte-action-sdk.createapp.html">createApp()</a></td></tr><tr><td><a href="./karte-action-sdk.widget.backgroundsize.html">BackgroundSize</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.baseoperationoptions.html">BaseOperationOptions</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.border.html">Border</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.borderstyle.html">BorderStyle</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.borderwidth.html">BorderWidth</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.changevalcallback.html">ChangeValCallback</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.clippath.html">ClipPath</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.closetrigger.html">CloseTrigger</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.code.html">Code</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.color.html">Color</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.convertoperationoption.html">ConvertOperationOption</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.convertoperationoptionarguments.html">ConvertOperationOptionArguments</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.convertoperationoptions.html">ConvertOperationOptions</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.cursor.html">Cursor</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.customvariables.html">CustomVariables</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.direction.html">Direction</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.elasticity.html">Elasticity</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.embedlogic.html">EmbedLogic</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.eventcallback.html">EventCallback</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.image.html">Image</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.justify.html">Justify</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.length.html">Length</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.lengthunit.html">LengthUnit</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listbackground.html">ListBackground</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listbackgroundtype.html">ListBackgroundType</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listcontext.html">ListContext</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listdirection.html">ListDirection</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listseparator.html">ListSeparator</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.listseparatortype.html">ListSeparatorType</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.longtext.html">LongText</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.mediaquery.html">MediaQuery</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.modalmargin.html">ModalMargin</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.modaloptions.html">ModalOptions</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.modalplacement.html">ModalPlacement</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.modalposition.html">ModalPosition</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.objectfit.html">ObjectFit</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.onclickoperation.html">OnClickOperation</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.operation.html">Operation</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.operationargumenttype.html">OperationArgumentType</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.operationargumenttypes.html">OperationArgumentTypes</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.overflow.html">Overflow</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.proptype.html">PropType</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.repeat.html">Repeat</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.statename.html">StateName</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.store.html">Store</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.style.html">Style</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.systemconfig.html">SystemConfig</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.textdirection.html">TextDirection</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.url.html">Url</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.widgeteventname.html">WidgetEventName</a></td><td></td></tr><tr><td><a href="./karte-action-sdk.widget.writingmode.html">WritingMode</a></td><td></td></tr></tbody></table>`,12),o=[i];function s(n,l,h,c,k,g){return a(),e("div",null,o)}const p=t(r,[["render",s]]);export{f as __pageData,p as default};
