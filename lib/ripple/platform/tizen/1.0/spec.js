/*
 *  Copyright 2011 Intel Corporation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = {

    id: "tizen",
    version: "1.0",
    name: "TIZEN",

    persistencePrefix: "tizen1-",

    config: require('ripple/platform/tizen/1.0/spec/config'),
    ui: require('ripple/platform/tizen/1.0/spec/ui'),
    device: require('ripple/platform/tizen/1.0/spec/device'),

    objects: {
        Coordinates: {
            path: "w3c/1.0/Coordinates"
        },
        Position: {
            path: "w3c/1.0/Position"
        },
        PositionError: {
            path: "w3c/1.0/PositionError"
        },
        navigator: {
            path: "w3c/1.0/navigator",
            children: {
                geolocation: {
                    path: "wac/2.0/geolocation",
                    feature: "http://www.w3.org/TR/geolocation-API/"
                }
            }
        },
        deviceapis: {
            path: "wac/2.0/deviceapis",
            feature: "http://wacapps.net/api/deviceapis",
            children: {
                accelerometer: {
                    path: "wac/2.0/accelerometer",
                    feature: "http://wacapps.net/api/accelerometer"
                },
                orientation: {
                    path: "wac/2.0/orientation",
                    feature: "http://wacapps.net/api/orientation"
                },
                camera: {
                    path: "wac/2.0/camera",
                    feature: "http://wacapps.net/api/camera|http://wacapps.net/api/camera.show|http://wacapps.net/api/camera.capture",
                    handleSubfeatures: true
                },
                devicestatus: {
                    path: "wac/2.0/devicestatus",
                    feature: "http://wacapps.net/api/devicestatus|http://wacapps.net/api/devicestatus.deviceinfo|http://wacapps.net/api/devicestatus.networkinfo",
                    handleSubfeatures: true
                },
                filesystem: {
                    path: "wac/2.0/filesystem",
                    feature: "http://wacapps.net/api/filesystem|http://wacapps.net/api/filesystem.read|http://wacapps.net/api/filesystem.write",
                    handleSubfeatures: true
                },
                messaging: {
                    path: "wac/2.0/messaging",
                    feature: "http://wacapps.net/api/messaging|http://wacapps.net/api/messaging.send|http://wacapps.net/api/messaging.find|http://wacapps.net/api/messaging.subscribe|http://wacapps.net/api/messaging.write",
                    handleSubfeatures: true
                },
                pim: {
                    children: {
                        contact: {
                            path: "wac/2.0/contact",
                            feature: "http://wacapps.net/api/pim.contact|http://wacapps.net/api/pim.contact.read|http://wacapps.net/api/pim.contact.write",
                            handleSubfeatures: true
                        },
                        calendar: {
                            path: "wac/2.0/calendar",
                            feature: "http://wacapps.net/api/pim.calendar.write|http://wacapps.net/api/pim.calendar.read|http://wacapps.net/api/pim.calendar",
                            handleSubfeatures: true
                        },
                        task: {
                            path: "wac/2.0/task",
                            feature: "http://wacapps.net/api/pim.task|http://wacapps.net/api/pim.task.read|http://wacapps.net/api/pim.task.write",
                            handleSubfeatures: true
                        }
                    }
                },
                deviceinteraction: {
                    path: "wac/2.0/deviceinteraction",
                    feature: "http://wacapps.net/api/deviceinteraction"
                }
            }
        },
        tizen: {
            path: "wac/2.0/deviceapis",
            feature: "http://tizen.org/api/tizen"
/*
            children: {
                application: {
                    path: "tizen/1.0/application",
                    feature: "http://tizen.org/api/application"
                },
                time: {
                    path: "tizen/1.0/time",
                    feature: "http://tizen.org/api/time|http://tizen.org/api/time.read|http://tizen.org/api/time.write",
                    handleSubfeatures: true
                },
                contact: {
                    path: "tizen/1.0/contact",
                    feature: "http://tizen.org/api/contact|http://tizen.org/api/contact.read|http://tizen.org/api/contact.write",
                    handleSubfeatures: true
                },
                calendar: {
                    path: "tizen/1.0/calendar",
                    feature: "http://tizen.org/api/calendar|http://tizen.org/api/calendar.read|http://tizen.org/api/calendar.write",
                    handleSubfeatures: true
                },
                call: {
                    path: "tizen/1.0/call",
                    feature: "http://tizen.org/api/call|http://tizen.org/api/call.history|http://tizen.org/api/call.history.read|http://tizen.org/api/call.history.write",
                    handleSubfeatures: true
                },
                messaging: {
                    path: "tizen/1.0/messaging",
                    feature: "http://tizen.org/api/messaging|http://tizen.org/api/messaging.send|http://tizen.org/api/messaging.read|http://tizen.org/api/messaging.write",
                    handleSubfeatures: true
                },
                bluetooth: {
                    path: "tizen/1.0/bluetooth",
                    feature: "http://tizen.org/api/bluetooth|http://tizen.org/api/bluetooth.spp|http://tizen.org/api/bluetooth.gap",
                    handleSubfeatures: true
                },
                geocoder: {
                    path: "tizen/1.0/geocoder",
                    feature: "http://tizen.org/api/geocoder"
                },
                nfc: {
                    path: "tizen/1.0/nfc",
                    feature: "http://tizen.org/api/nfc|http://tizen.org/api/nfc.tag|http://tizen.org/api/nfc.p2p|http://tizen.org/api/nfc.se",
                    handleSubfeatures: true
                },
                sensors: {
                    path: "tizen/1.0/sensors",
                    feature: "http://tizen.org/api/sensors"
                },
                systeminfo: {
                    path: "tizen/1.0/systeminfo",
                    feature: "http://tizen.org/api/systeminfo"
                }
            }
*/
        }
    }
};
