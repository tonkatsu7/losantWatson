Intel® XDK IoT Blank Node.js\* App Template
===========================================
See [LICENSE.md](LICENSE.md) for license terms and conditions.

This sample application is distributed as part of the
[Intel® XDK](http://xdk.intel.com). It can also be downloaded
or cloned directly from its git repo on the
[public Intel XDK GitHub\* site](https://github.com/gomobile).

For help getting started developing applications with the
Intel XDK, please start with
[the Intel XDK documentation](https://software.intel.com/en-us/xdk/docs).

App Overview
------------
This blank template creates a project folder that contains the minimum files
needed for an Intel XDK Node.js IoT app. The development process assumes that
your target device is running a compatible version of
[Node.js](http://nodejs.org) and is accessible to the Intel XDK via a network
connection.

Important Sample App Files
--------------------------
* main.js
* package.json

Important Sample Project Files
------------------------------
* README.md
* LICENSE.md
* project-name.xdk
* project-name.xdke

Tested IoT Node.js Platforms
----------------------------
* [Intel® Galileo Board](http://intel.com/galileo)
* [Intel® Edison Development Platform](http://intel.com/edison)
* [Intel® Joule™ 570x Developer Kit](http://intel.com/joule)

2016-11-19 SIPHAM

Follow instructions on https://github.com/Losant/example-edison-echo/blob/master/readme.md

With the following errata
- I'm using a Samson C01U USB mic: the levels on this are low so do the following to amp up the gain
    1. run aslamixer command to set the RECORDING levels on the SOUND CARD that represents the mic and turn it up
    2. test the levels by recording some audio
        arecord -f dat -d 5 -D hw:2,0 test.wav
            where 2 is the sound card id and 0 is the device id from the command 'arecord -l'
    3. playback the test audio
        gst-launch-1.0 filesrc location="test.wav" ! wavparse ! volume volume=0.95 ! pulsesink
            we are not using aplay as the tutorial uses bluetooth audio instead of a sound card output