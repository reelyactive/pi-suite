pi-suite
========

Conveniently install and run the reelyActive open source software suite on a Raspberry Pi.  The advent of BLE (Bluetooth Low Energy) on the Raspberry Pi 3B made it possible to run our software to detect and identify all advertising devices in proximity, which was [featured in Hackaday](https://hackaday.com/2016/08/01/sniffing-bluetooth-devices-with-a-raspberry-pi/) in 2016.

![pi-relay](https://reelyactive.github.io/images/hackaday-pi-ble.jpg)


Then and Now
------------

Our open source software has evolved since the Hackaday article:
- __Version 1.x__ is featured here and is the recommended option
- __Version 0.x__ which was featured in the article can be found in the [release-0.2 branch](https://github.com/reelyactive/pi-suite/tree/release-0.2) and is considered legacy


Install and Run
---------------

Follow our step-by-step tutorials to prepare a Pi from scratch and install pi-suite:
- [Prepare a Raspberry Pi from scratch](https://reelyactive.github.io/diy/pi-prep/)
- [Install our open source software suite on a Pi](https://reelyactive.github.io/diy/pi-suite/)

_Alternatively_, if all prerequisites are indeed in place, getting up and running for the first time should be as easy as:

```
git clone https://github.com/reelyactive/pi-suite.git
cd pi-suite
npm install
npm start
```


License
-------

MIT License

Copyright (c) 2016-2020 [reelyActive](https://www.reelyactive.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

