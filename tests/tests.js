// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

exports.defineManualTests = function(rootEl, addButton) {
  addButton('Test getAdapter State', function() {
    chrome.bluetooth.getAdapterState(function(adapter) {
      console.log(JSON.stringify(adapter));
    });
  });

  addButton('Add Events Listener', function() {
    chrome.bluetooth.onAdapterStateChanged.addListener(function(adapter) {
      console.log(JSON.stringify(adapter));
    });
    chrome.bluetooth.onDeviceAdded.addListener(function(device) {
      console.log('Device added:');
      console.log(JSON.stringify(device));
    });
    chrome.bluetooth.onDeviceChanged.addListener(function(device) {
      console.log('Device changed:');
      console.log(JSON.stringify(device));
    });
    chrome.bluetooth.onDeviceRemoved.addListener(function(device) {
      console.log('Device removed:');
      console.log(JSON.stringify(device));
    });
  });

  addButton('Start discovering', function() {
    chrome.bluetooth.startDiscovery(function() {
      console.log('start discovery');
    });
  });

  addButton('Stop discovering', function() {
    chrome.bluetooth.stopDiscovery(function() {
      console.log('stop discovery');
    });
  });

  addButton('Listing known devices', function() {
    chrome.bluetooth.getDevices(function(devices) {
      for (var i = 0; i < devices.length; i++) {
        console.log(JSON.stringify(devices[i]));
      }
    });
  });

  addButton('Get device Info with unknown address', function() {
    chrome.bluetooth.getDevice('64:A3:CB:3A:87:65', function(device) {
      console.log(JSON.stringify(device));
    });
  });

};
