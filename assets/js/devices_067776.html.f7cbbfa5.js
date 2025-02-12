"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[72785],{26789:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>i,data:()=>d});var a=o(6254);const n={},i=(0,o(32991).A)(n,[["render",function(e,t){const o=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t[11]||(t[11]=(0,a.Lk)("h1",{id:"legrand-067776",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#legrand-067776"},[(0,a.Lk)("span",null,"Legrand 067776")])],-1)),(0,a.Lk)("table",null,[t[6]||(t[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[t[2]||(t[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"067776")],-1)),(0,a.Lk)("tr",null,[t[1]||(t[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(o,{to:"/supported-devices/#v=Legrand"},{default:(0,a.k6)((()=>t[0]||(t[0]=[(0,a.eW)("Legrand")]))),_:1})])]),t[3]||(t[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Netatmo wired shutter switch")],-1)),t[4]||(t[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"cover (state, position), action, identify, led_in_dark, led_if_on, calibration_mode")],-1)),t[5]||(t[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/067776.png",alt:"Legrand 067776"})])],-1))])]),t[12]||(t[12]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="model-number" tabindex="-1"><a class="header-anchor" href="#model-number"><span>Model number</span></a></h3><p>Model number depends on the country and the colour of the devices. French models are branded as Céliane with Netatmo, and models for this device depends on the colour, with the following numbers: &quot;0 677 26&quot;, &quot;0 677 76&quot; and &quot;0 648 96&quot;. Spanish models are branded as Legrand Valena Next, and models for this device depends on the colour, with the following numbers: &quot;7 418 07&quot;, &quot;7 418 37&quot; and &quot;7 418 67&quot;.</p><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h2>',4)),(0,a.Lk)("p",null,[t[8]||(t[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(o,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>t[7]||(t[7]=[(0,a.eW)("OTA updates")]))),_:1}),t[9]||(t[9]=(0,a.eW)("."))]),t[13]||(t[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>t[10]||(t[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),t[14]||(t[14]=(0,a.Fv)('<ul><li><p><code>invert_cover</code>: Inverts the cover position, false: open=100,close=0, true: open=0,close=100 (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>cover_position_tilt_disable_report</code>: Do not publish set cover target position as a normal &#39;position&#39; value (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>identity_effect</code>: Defines the identification effect to simplify the device identification. Example:</p></li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">identity_effect</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">effect</span><span class="token punctuation">:</span> blink 3 <span class="token comment"># allowed: &#39;blink 3&#39;, &#39;fixed&#39;, &#39;blink green&#39;, &#39;blink blue&#39;</span></span>\n<span class="line">  <span class="token key atrule">color</span><span class="token punctuation">:</span> red <span class="token comment"># allowed: &#39;default&#39;, &#39;red&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;lightblue&#39;, &#39;yellow&#39;, &#39;pink&#39;, &#39;white&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="cover" tabindex="-1"><a class="header-anchor" href="#cover"><span>Cover</span></a></h3><p>The current state of this cover is in the published state under the <code>state</code> property (value is <code>OPEN</code> or <code>CLOSE</code>). To control this cover publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;OPEN&quot;}</code>, <code>{&quot;state&quot;: &quot;CLOSE&quot;}</code>, <code>{&quot;state&quot;: &quot;STOP&quot;}</code>. It&#39;s not possible to read (<code>/get</code>) this value. To change the position publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;position&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>100</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>identify</code>, <code>open</code>, <code>close</code>, <code>stop</code>, <code>moving</code>, <code>stopped</code>.</p><h3 id="identify-enum" tabindex="-1"><a class="header-anchor" href="#identify-enum"><span>Identify (enum)</span></a></h3><p>Blinks the built-in LED to make it easier to identify the device. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;identify&quot;: NEW_VALUE}</code>. The possible values are: <code>identify</code>.</p><h3 id="led-in-dark-binary" tabindex="-1"><a class="header-anchor" href="#led-in-dark-binary"><span>Led in dark (binary)</span></a></h3><p>Enables the built-in LED allowing to see the switch in the dark. Value can be found in the published state on the <code>led_in_dark</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_in_dark&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_in_dark&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led in dark is ON, if <code>OFF</code> OFF.</p><h3 id="led-if-on-binary" tabindex="-1"><a class="header-anchor" href="#led-if-on-binary"><span>Led if on (binary)</span></a></h3><p>Enables the LED on activity. Value can be found in the published state on the <code>led_if_on</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;led_if_on&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;led_if_on&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> led if on is ON, if <code>OFF</code> OFF.</p><h3 id="calibration-mode-enum" tabindex="-1"><a class="header-anchor" href="#calibration-mode-enum"><span>Calibration mode (enum)</span></a></h3><p>Defines the calibration mode of the switch. (Caution: Changing modes requires a recalibration of the shutter switch!). Value can be found in the published state on the <code>calibration_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;calibration_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;calibration_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>up_down_stop</code>, <code>temporal</code>, <code>venetian_bso</code>.</p>',15))])}]]),d=JSON.parse('{"path":"/devices/067776.html","title":"Legrand 067776 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Legrand 067776 control via MQTT","description":"Integrate your Legrand 067776 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Model number","slug":"model-number","link":"#model-number","children":[]}]},{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Cover","slug":"cover","link":"#cover","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Identify (enum)","slug":"identify-enum","link":"#identify-enum","children":[]},{"level":3,"title":"Led in dark (binary)","slug":"led-in-dark-binary","link":"#led-in-dark-binary","children":[]},{"level":3,"title":"Led if on (binary)","slug":"led-if-on-binary","link":"#led-if-on-binary","children":[]},{"level":3,"title":"Calibration mode (enum)","slug":"calibration-mode-enum","link":"#calibration-mode-enum","children":[]}]}],"git":{"updatedTime":1739207691000},"filePathRelative":"devices/067776.md"}')}}]);