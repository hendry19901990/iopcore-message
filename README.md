# IoP Message Verification and Signing for IoPcore

 
iopcore-message adds support for verifying and signing IoP messages in [Node.js](http://nodejs.org/) and web browsers.

 
## Getting Started

```sh
npm install iopcore-message
```

```sh
bower install iopcore-message
```

To sign a message:

```javascript
var iopcore = require('iopcore-lib');
var Message = require('iopcore-message');

var privateKey = iopcore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'H/DIn8uA1scAuKLlCx+/9LnAcJtwQQ0PmcPrJUq90aboLv3fH5fFvY+vmbfOSFEtGarznYli6ShPr9RXwY9UrIY=';
var verified = Message('hello, world').verify(address, signature);
```

## License

Code released under [the MIT license](https://github.com/hendry19901990/iopcore-lib/blob/master/LICENSE).

Copyright 2017 IoP, Inc. Iopcore is a trademark maintained by IoP Community, Inc.
