"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51900],{39421:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>d,data:()=>c});var a=t(6254);const i={},d=(0,t(32991).A)(i,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[8]||(o[8]=(0,a.Lk)("h1",{id:"namron-4512783-4512784",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#namron-4512783-4512784"},[(0,a.Lk)("span",null,"Namron 4512783/4512784")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"4512783/4512784")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Namron"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Namron")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Namron edge termostat")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"climate (local_temperature, occupied_heating_setpoint, system_mode, running_state, local_temperature_calibration), temperature_display_mode, operating_mode, child_lock, holiday_temp_set, vacation_start_date, vacation_end_date, power, current, energy, switch (state), window_open_check, anti_frost, summer_winter_switch, vacation_mode, time_sync, auto_time, display_active_backlight, display_auto_off, regulator_percentage, regulation_mode, sensor_mode, boost_time_set, boost_time_remaining, system_mode, time_sync_value, window_state, fault, work_days, humidity")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/4512783-4512784.png",alt:"Namron 4512783/4512784"})])],-1))])]),o[9]||(o[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>o[7]||(o[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),o[10]||(o[10]=(0,a.Fv)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>power_precision</code>: Number of digits after decimal point for power, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_precision</code>: Number of digits after decimal point for current, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>energy_calibration</code>: Calibrates the energy value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>energy_precision</code>: Number of digits after decimal point for energy, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. This option can only decrease the precision, not increase it. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate"><span>Climate</span></a></h3><p>This climate device supports the following features: <code>local_temperature</code>, <code>occupied_heating_setpoint</code>, <code>system_mode</code>, <code>running_state</code>, <code>local_temperature_calibration</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>15</code> and <code>35</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>cool</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>, <code>cool</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature_calibration</code>: Offset to add/subtract to the local temperature. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;local_temperature_calibration&quot;: VALUE}.</code>To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.The minimal value is <code>-10</code> and the maximum value is <code>10</code> with a step size of <code>0.5</code>.</li></ul><h3 id="temperature-unit-enum" tabindex="-1"><a class="header-anchor" href="#temperature-unit-enum"><span>Temperature Unit (enum)</span></a></h3><p>Select Unit. Value can be found in the published state on the <code>temperature_display_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_display_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_display_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>celsius</code>, <code>fahrenheit</code>.</p><h3 id="operating-mode-enum" tabindex="-1"><a class="header-anchor" href="#operating-mode-enum"><span>Operating mode (enum)</span></a></h3><p>Selected program for thermostat. Value can be found in the published state on the <code>operating_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;operating_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;operating_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>manual</code>, <code>program</code>, <code>eco</code>.</p><h3 id="child-lock-binary" tabindex="-1"><a class="header-anchor" href="#child-lock-binary"><span>Child lock (binary)</span></a></h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>child_lock</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;child_lock&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;child_lock&quot;: NEW_VALUE}</code>. If value equals <code>LOCK</code> child lock is ON, if <code>UNLOCK</code> OFF.</p><h3 id="vacation-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#vacation-temperature-numeric"><span>Vacation temperature (numeric)</span></a></h3><p>Vacation temperature setpoint. Value can be found in the published state on the <code>holiday_temp_set</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;holiday_temp_set&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;holiday_temp_set&quot;: NEW_VALUE}</code>. The minimal value is <code>5</code> and the maximum value is <code>35</code>. The unit of this value is <code>°C</code>.</p><h3 id="vacation-start-date-text" tabindex="-1"><a class="header-anchor" href="#vacation-start-date-text"><span>Vacation start date (text)</span></a></h3><p>Supports dates starting with day or year with &#39;. - /&#39;. Value can be found in the published state on the <code>vacation_start_date</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;vacation_start_date&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;vacation_start_date&quot;: NEW_VALUE}</code>.</p><h3 id="vacation-end-date-text" tabindex="-1"><a class="header-anchor" href="#vacation-end-date-text"><span>Vacation end date (text)</span></a></h3><p>Supports dates starting with day or year with &#39;. - /&#39;. Value can be found in the published state on the <code>vacation_end_date</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;vacation_end_date&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;vacation_end_date&quot;: NEW_VALUE}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric"><span>Power (numeric)</span></a></h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric"><span>Current (numeric)</span></a></h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;current&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="energy-numeric" tabindex="-1"><a class="header-anchor" href="#energy-numeric"><span>Energy (numeric)</span></a></h3><p>Sum of consumed energy. Value can be found in the published state on the <code>energy</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;energy&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>kWh</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h4 id="on-with-timed-off" tabindex="-1"><a class="header-anchor" href="#on-with-timed-off"><span>On with timed off</span></a></h4><p>When setting the state to ON, it might be possible to specify an automatic shutoff after a certain amount of time. To do this add an additional property <code>on_time</code> to the payload which is the time in seconds the state should remain on. Additionally an <code>off_wait_time</code> property can be added to the payload to specify the cooldown time in seconds when the switch will not answer to other on with timed off commands. Support depends on the switch firmware. Some devices might require both <code>on_time</code> and <code>off_wait_time</code> to work Examples : <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300}</code>, <code>{&quot;state&quot; : &quot;ON&quot;, &quot;on_time&quot;: 300, &quot;off_wait_time&quot;: 120}</code>.</p><h3 id="window-open-check-binary" tabindex="-1"><a class="header-anchor" href="#window-open-check-binary"><span>Window open check (binary)</span></a></h3><p>Enables or disables the window open detection. Value can be found in the published state on the <code>window_open_check</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_check&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_open_check&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> window open check is ON, if <code>OFF</code> OFF.</p><h3 id="anti-frost-binary" tabindex="-1"><a class="header-anchor" href="#anti-frost-binary"><span>Anti frost (binary)</span></a></h3><p>Enables or disables the anti-frost mode. Value can be found in the published state on the <code>anti_frost</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;anti_frost&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;anti_frost&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> anti frost is ON, if <code>OFF</code> OFF.</p><h3 id="summer-winter-switch-binary" tabindex="-1"><a class="header-anchor" href="#summer-winter-switch-binary"><span>Summer winter switch (binary)</span></a></h3><p>Summer/winter switch. Value can be found in the published state on the <code>summer_winter_switch</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;summer_winter_switch&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;summer_winter_switch&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> summer winter switch is ON, if <code>OFF</code> OFF.</p><h3 id="vacation-mode-binary" tabindex="-1"><a class="header-anchor" href="#vacation-mode-binary"><span>Vacation mode (binary)</span></a></h3><p>Vacation mode. Value can be found in the published state on the <code>vacation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;vacation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;vacation_mode&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> vacation mode is ON, if <code>OFF</code> OFF.</p><h3 id="time-sync-binary" tabindex="-1"><a class="header-anchor" href="#time-sync-binary"><span>Time sync (binary)</span></a></h3><p>Time sync. Value can be found in the published state on the <code>time_sync</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_sync&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_sync&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> time sync is ON, if <code>OFF</code> OFF.</p><h3 id="auto-time-binary" tabindex="-1"><a class="header-anchor" href="#auto-time-binary"><span>Auto time (binary)</span></a></h3><p>Auto time. Value can be found in the published state on the <code>auto_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;auto_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;auto_time&quot;: NEW_VALUE}</code>. If value equals <code>ON</code> auto time is ON, if <code>OFF</code> OFF.</p><h3 id="display-active-backlight-numeric" tabindex="-1"><a class="header-anchor" href="#display-active-backlight-numeric"><span>Display active backlight (numeric)</span></a></h3><p>Display active backlight. Value can be found in the published state on the <code>display_active_backlight</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_active_backlight&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_active_backlight&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="display-auto-off-enum" tabindex="-1"><a class="header-anchor" href="#display-auto-off-enum"><span>Display auto off (enum)</span></a></h3><p>Display auto off. Value can be found in the published state on the <code>display_auto_off</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;display_auto_off&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;display_auto_off&quot;: NEW_VALUE}</code>. The possible values are: <code>always_on</code>, <code>auto_off_after_10s</code>, <code>auto_off_after_30s</code>, <code>auto_off_after_60s</code>.</p><h3 id="regulator-percentage-numeric" tabindex="-1"><a class="header-anchor" href="#regulator-percentage-numeric"><span>Regulator percentage (numeric)</span></a></h3><p>Regulator percentage. Value can be found in the published state on the <code>regulator_percentage</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;regulator_percentage&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;regulator_percentage&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="regulation-mode-enum" tabindex="-1"><a class="header-anchor" href="#regulation-mode-enum"><span>Regulation mode (enum)</span></a></h3><p>Regulation mode. Value can be found in the published state on the <code>regulation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;regulation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;regulation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>heat</code>, <code>cool</code>.</p><h3 id="sensor-mode-enum" tabindex="-1"><a class="header-anchor" href="#sensor-mode-enum"><span>Sensor mode (enum)</span></a></h3><p>Sensor mode. Value can be found in the published state on the <code>sensor_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;sensor_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;sensor_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>air</code>, <code>floor</code>, <code>external</code>, <code>regulator</code>.</p><h3 id="boost-time-set-enum" tabindex="-1"><a class="header-anchor" href="#boost-time-set-enum"><span>Boost time set (enum)</span></a></h3><p>Boost time. Value can be found in the published state on the <code>boost_time_set</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;boost_time_set&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;boost_time_set&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>5_min</code>, <code>10_min</code>, <code>15_min</code>, <code>20_min</code>, <code>25_min</code>, <code>30_min</code>, <code>35_min</code>, <code>40_min</code>, <code>45_min</code>, <code>50_min</code>, <code>55_min</code>, <code>1h</code>, <code>1h_5_min</code>, <code>1h_10_min</code>, <code>1h_15_min</code>, <code>1h_20_min</code>, <code>1h_25_min</code>, <code>1h_30_min</code>, <code>1h_35_min</code>, <code>1h_40_min</code>, <code>1h_45_min</code>, <code>1h_50_min</code>, <code>1h_55_min</code>, <code>2h</code>.</p><h3 id="boost-time-remaining-numeric" tabindex="-1"><a class="header-anchor" href="#boost-time-remaining-numeric"><span>Boost time remaining (numeric)</span></a></h3><p>Boost time remaining. Value can be found in the published state on the <code>boost_time_remaining</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;boost_time_remaining&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>min</code>.</p><h3 id="system-mode-enum" tabindex="-1"><a class="header-anchor" href="#system-mode-enum"><span>System mode (enum)</span></a></h3><p>System mode. Value can be found in the published state on the <code>system_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>0</code>, <code>1</code>, <code>3</code>, <code>4</code>.</p><h3 id="time-sync-value-numeric" tabindex="-1"><a class="header-anchor" href="#time-sync-value-numeric"><span>Time sync value (numeric)</span></a></h3><p>Device time. Value can be found in the published state on the <code>time_sync_value</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;time_sync_value&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;time_sync_value&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>4294967295</code>.</p><h3 id="window-state-binary" tabindex="-1"><a class="header-anchor" href="#window-state-binary"><span>Window state (binary)</span></a></h3><p>Window state. Value can be found in the published state on the <code>window_state</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_state&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>OPEN</code> window state is ON, if <code>CLOSED</code> OFF.</p><h3 id="fault-enum" tabindex="-1"><a class="header-anchor" href="#fault-enum"><span>Fault (enum)</span></a></h3><p>Device fault. Value can be found in the published state on the <code>fault</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;fault&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>no_fault</code>, <code>over_current_error</code>, <code>over_heat_error</code>, <code>built-in_sensor_error</code>, <code>air_sensor_error</code>, <code>floor_sensor_error</code>.</p><h3 id="work-days-enum" tabindex="-1"><a class="header-anchor" href="#work-days-enum"><span>Work days (enum)</span></a></h3><p>Work days. Value can be found in the published state on the <code>work_days</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;work_days&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The possible values are: <code>monday-friday_saturday-sunday</code>, <code>monday-saturday_sunday</code>, <code>no_time_off</code>, <code>time_off</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric"><span>Humidity (numeric)</span></a></h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;humidity&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p>',65))])}]]),c=JSON.parse('{"path":"/devices/4512783_4512784.html","title":"Namron 4512783/4512784 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Namron 4512783/4512784 control via MQTT","description":"Integrate your Namron 4512783/4512784 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2025-02-01T20:11:19.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Climate","slug":"climate","link":"#climate","children":[]},{"level":3,"title":"Temperature Unit (enum)","slug":"temperature-unit-enum","link":"#temperature-unit-enum","children":[]},{"level":3,"title":"Operating mode (enum)","slug":"operating-mode-enum","link":"#operating-mode-enum","children":[]},{"level":3,"title":"Child lock (binary)","slug":"child-lock-binary","link":"#child-lock-binary","children":[]},{"level":3,"title":"Vacation temperature (numeric)","slug":"vacation-temperature-numeric","link":"#vacation-temperature-numeric","children":[]},{"level":3,"title":"Vacation start date (text)","slug":"vacation-start-date-text","link":"#vacation-start-date-text","children":[]},{"level":3,"title":"Vacation end date (text)","slug":"vacation-end-date-text","link":"#vacation-end-date-text","children":[]},{"level":3,"title":"Power (numeric)","slug":"power-numeric","link":"#power-numeric","children":[]},{"level":3,"title":"Current (numeric)","slug":"current-numeric","link":"#current-numeric","children":[]},{"level":3,"title":"Energy (numeric)","slug":"energy-numeric","link":"#energy-numeric","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Window open check (binary)","slug":"window-open-check-binary","link":"#window-open-check-binary","children":[]},{"level":3,"title":"Anti frost (binary)","slug":"anti-frost-binary","link":"#anti-frost-binary","children":[]},{"level":3,"title":"Summer winter switch (binary)","slug":"summer-winter-switch-binary","link":"#summer-winter-switch-binary","children":[]},{"level":3,"title":"Vacation mode (binary)","slug":"vacation-mode-binary","link":"#vacation-mode-binary","children":[]},{"level":3,"title":"Time sync (binary)","slug":"time-sync-binary","link":"#time-sync-binary","children":[]},{"level":3,"title":"Auto time (binary)","slug":"auto-time-binary","link":"#auto-time-binary","children":[]},{"level":3,"title":"Display active backlight (numeric)","slug":"display-active-backlight-numeric","link":"#display-active-backlight-numeric","children":[]},{"level":3,"title":"Display auto off (enum)","slug":"display-auto-off-enum","link":"#display-auto-off-enum","children":[]},{"level":3,"title":"Regulator percentage (numeric)","slug":"regulator-percentage-numeric","link":"#regulator-percentage-numeric","children":[]},{"level":3,"title":"Regulation mode (enum)","slug":"regulation-mode-enum","link":"#regulation-mode-enum","children":[]},{"level":3,"title":"Sensor mode (enum)","slug":"sensor-mode-enum","link":"#sensor-mode-enum","children":[]},{"level":3,"title":"Boost time set (enum)","slug":"boost-time-set-enum","link":"#boost-time-set-enum","children":[]},{"level":3,"title":"Boost time remaining (numeric)","slug":"boost-time-remaining-numeric","link":"#boost-time-remaining-numeric","children":[]},{"level":3,"title":"System mode (enum)","slug":"system-mode-enum","link":"#system-mode-enum","children":[]},{"level":3,"title":"Time sync value (numeric)","slug":"time-sync-value-numeric","link":"#time-sync-value-numeric","children":[]},{"level":3,"title":"Window state (binary)","slug":"window-state-binary","link":"#window-state-binary","children":[]},{"level":3,"title":"Fault (enum)","slug":"fault-enum","link":"#fault-enum","children":[]},{"level":3,"title":"Work days (enum)","slug":"work-days-enum","link":"#work-days-enum","children":[]},{"level":3,"title":"Humidity (numeric)","slug":"humidity-numeric","link":"#humidity-numeric","children":[]}]}],"git":{"updatedTime":1739207691000},"filePathRelative":"devices/4512783_4512784.md"}')}}]);