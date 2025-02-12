"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[78335],{70777:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>i,data:()=>c});var a=t(6254);const d={},i=(0,t(32991).A)(d,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[11]||(o[11]=(0,a.Lk)("h1",{id:"sonoff-zbm5-1c-120",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#sonoff-zbm5-1c-120"},[(0,a.Lk)("span",null,"SONOFF ZBM5-1C-120")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZBM5-1C-120")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=SONOFF"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("SONOFF")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Zigbee Smart one-channel wall switch (type 120).")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"switch (state), power_on_behavior, device_work_mode, network_indicator, detach_relay_mode")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZBM5-1C-120.png",alt:"SONOFF ZBM5-1C-120"})])],-1))])]),o[12]||(o[12]=(0,a.Lk)("h2",{id:"ota-updates",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#ota-updates"},[(0,a.Lk)("span",null,"OTA updates")])],-1)),(0,a.Lk)("p",null,[o[8]||(o[8]=(0,a.eW)("This device supports OTA updates, for more information see ")),(0,a.bF)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("OTA updates")]))),_:1}),o[9]||(o[9]=(0,a.eW)("."))]),o[13]||(o[13]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[10]||(o[10]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[14]||(o[14]=(0,a.Fv)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum"><span>Power-on behavior (enum)</span></a></h3><p>Controls the behavior when the device is powered on after power loss. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>on</code>, <code>toggle</code>, <code>previous</code>.</p><h3 id="device-work-mode-enum" tabindex="-1"><a class="header-anchor" href="#device-work-mode-enum"><span>Device work mode (enum)</span></a></h3><p>The device runs as a Zigbee End device or Zigbee router.. Value can be found in the published state on the <code>device_work_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_work_mode&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>Zigbee end device</code>, <code>Zigbee router</code>.</p><h3 id="network-indicator-binary" tabindex="-1"><a class="header-anchor" href="#network-indicator-binary"><span>Network indicator (binary)</span></a></h3><p>Network indicator settings, turn off/on the blue online status network indicator.. Value can be found in the published state on the <code>network_indicator</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;network_indicator&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;network_indicator&quot;: NEW_VALUE}</code>. If value equals <code>true</code> network indicator is ON, if <code>false</code> OFF.</p><h3 id="detach-relay-mode-composite" tabindex="-1"><a class="header-anchor" href="#detach-relay-mode-composite"><span>Detach relay mode (composite)</span></a></h3><p>Relay separation mode. Can be used when the load is a smart device (such as smart light), when we control the wall switch, do not want to turn off the power of the smart light, but through a scene command to control the smart light on or off, then we can enable the relay separation mode.. Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;detach_relay_mode&quot;: {&quot;detach_relay_outlet1&quot;: VALUE}}</code> To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;detach_relay_mode&quot;: &quot;&quot;}</code>.</p><ul><li><code>detach_relay_outlet1</code> (binary): Enable/disable detach relay. allowed values: <code>ENABLE</code> or <code>DISABLE</code></li></ul>',15))])}]]),c=JSON.parse('{"path":"/devices/ZBM5-1C-120.html","title":"SONOFF ZBM5-1C-120 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"SONOFF ZBM5-1C-120 control via MQTT","description":"Integrate your SONOFF ZBM5-1C-120 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-28T09:47:20.000Z"},"headers":[{"level":2,"title":"OTA updates","slug":"ota-updates","link":"#ota-updates","children":[]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Power-on behavior (enum)","slug":"power-on-behavior-enum","link":"#power-on-behavior-enum","children":[]},{"level":3,"title":"Device work mode (enum)","slug":"device-work-mode-enum","link":"#device-work-mode-enum","children":[]},{"level":3,"title":"Network indicator (binary)","slug":"network-indicator-binary","link":"#network-indicator-binary","children":[]},{"level":3,"title":"Detach relay mode (composite)","slug":"detach-relay-mode-composite","link":"#detach-relay-mode-composite","children":[]}]}],"git":{"updatedTime":1739207691000},"filePathRelative":"devices/ZBM5-1C-120.md"}')}}]);