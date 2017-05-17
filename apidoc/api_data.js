define({ "api": [
  {
    "type": "post",
    "url": "/auth/forgot-password",
    "title": "Forgot Password",
    "name": "ForgotPassword",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Get an email to change the password</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "resource",
            "description": "<p>username or email</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Forgot Password",
        "content": "curl -X POST\nhttps://wallet.example/auth/forgot-password",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/github",
    "title": "Github Auth",
    "name": "Github_Auth",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Github OAuth (used for cookie based auth)</p>",
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/github/callback",
    "title": "Github Auth Callback",
    "name": "Github_Auth_Callback",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Github Auth Callback (used for cookie based auth)</p>",
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/auth/load",
    "title": "Load",
    "name": "Load",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Get currently authenticated user (used for cookie based auth)</p>",
    "examples": [
      {
        "title": "Load",
        "content": "curl -X GET\nhttps://wallet.example/auth/load",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"name\": \"Alice Faye\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Login (used for cookie based auth)</p>",
    "examples": [
      {
        "title": "Login",
        "content": "curl -X POST -H \"Content-Type: application/json\" -d\n'{\n    \"username\": \"alice\",\n    \"password\": \"alice\"\n}'\nhttps://wallet.example/auth/login",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"name\": \"Alice Faye\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "Logout",
    "name": "Logout",
    "group": "Auth",
    "version": "1.0.0",
    "description": "<p>Logout (used for cookie based auth)</p>",
    "examples": [
      {
        "title": "Logout",
        "content": "curl -X POST\nhttps://wallet.example/auth/logout",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "GET",
    "url": "/config",
    "title": "Wallet config",
    "name": "GetConfig",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Get wallet config</p>",
    "examples": [
      {
        "title": "Get wallet config",
        "content": "curl -X GET\nhttps://wallet.example/config",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"ledgerUri\": \"https://wallet.example/ledger\",\n  \"currencyCode\": \"USD\",\n  \"currencySymbol\": \"$\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/misc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/webfinger",
    "title": "Get webfinger info",
    "name": "GetWebfinger",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Get webfinger info</p>",
    "examples": [
      {
        "title": "Get webfinger info",
        "content": "curl -X GET\nhttps://wallet.example/webfinger?resource=acct:alice@wallet.example",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"subject\": \"acct:alice@wallet.example\",\n  \"links\": [\n    {\n      \"rel\": \"https://interledger.org/rel/ledgerUri\",\n      \"href\": \"https://wallet.example/ledger\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/socketIOUri\",\n      \"href\": \"https://wallet.example/socket.io\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/sender/payment\",\n      \"href\": \"https://wallet.example/payments\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/sender/quote\",\n      \"href\": \"https://wallet.example/payments/quote\"\n    },\n    {\n      \"rel\": \"https://interledger.org/rel/spsp/v2\",\n      \"href\": \"https://wallet.example/spsp/alice\"\n    }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/webfinger.js",
    "groupTitle": "Misc"
  },
  {
    "type": "GET",
    "url": "/parse/destination",
    "title": "Parse destination",
    "name": "ParseDestination",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Parse a destination</p>",
    "examples": [
      {
        "title": "Parse a destination",
        "content": "curl -X GET\nhttps://wallet.example/parse/destination?destination=alice@wallet.example",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  {\n    \"type\": \"local\",\n    \"ledgerUri\": \"http://wallet.example/ledger\",\n    \"paymentUri\": \"http://wallet.example/api/spsp/alice\",\n    \"ilpAddress\": \"wallet.alice\",\n    \"currencyCode\": \"USD\",\n    \"currencySymbol\": \"$\",\n    \"name\": \"Alice Faye\",\n    \"imageUrl\": \"\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/misc.js",
    "groupTitle": "Misc"
  },
  {
    "type": "get",
    "url": "/health",
    "title": "Health check",
    "name": "health",
    "group": "Misc",
    "version": "1.0.0",
    "description": "<p>Health check</p>",
    "examples": [
      {
        "title": "Health check",
        "content": "curl -X GET\nhttps://wallet.example/health",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/health.js",
    "groupTitle": "Misc"
  },
  {
    "type": "put",
    "url": "/payments/:id",
    "title": "Make payment",
    "name": "PutPayments",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>Make payment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>generated payment uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>destination</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceAmount",
            "description": "<p>source amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationAmount",
            "description": "<p>destination amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memo",
            "description": "<p>text message for the destination</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Make a payment",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"destination\": \"bob@wallet.example\",\n    \"sourceAmount\": \"5\",\n    \"destinationAmount\": \"5\",\n    \"memo\": \"Some money for you!\"\n}'\nhttps://wallet.example/payments/9efa70ec-08b9-11e6-b512-3e1d05defe78",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"id\": \"a36e3447-8ca5-4bc4-a586-7769e3dea63a\"\n  \"destination\": \"bob@wallet.example\",\n  \"sourceAmount\": \"5\",\n  \"destinationAmount\": \"5\",\n  \"memo\": \"Some money for you!\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
  },
  {
    "type": "POST",
    "url": "/payments/quote",
    "title": "Request a quote",
    "name": "Quote",
    "group": "Payment",
    "version": "1.0.0",
    "description": "<p>Request a quote</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destination",
            "description": "<p>destination (email or a username)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "sourceAmount",
            "description": "<p>source amount (optional, used if destinationAmount is not provided)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "destinationAmount",
            "description": "<p>destination amount (optional, used if sourceAmount is not provided)</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Request a quote",
        "content": "curl -X POST -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"destination\": \"bob@wallet.example\",\n    \"destinationAmount\": \"10\"\n}'\nhttps://wallet.example/payments/quote",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"sourceAmount\": \"10\",\n  \"destinationAmount\": \"10\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Payment"
  },
  {
    "type": "get",
    "url": "/receivers/:username",
    "title": "Get receiver details",
    "name": "GetReceiver",
    "group": "Receiver",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>receiver username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Get receiver details",
        "content": "curl -X GET\nhttps://wallet.example/receivers/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"type\": \"payee\",\n  \"account\": \"wallet.alice\",\n  \"currency_code\": \"USD\",\n  \"currency_scale\": 2,\n  \"name\": \"Alice Faye\",\n  \"image_url\": \"http://server.example/picture.jpg\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "Receiver"
  },
  {
    "type": "POST",
    "url": "/receivers/:username",
    "title": "Setup a payment",
    "name": "Setup",
    "group": "Receiver",
    "version": "1.0.0",
    "description": "<p>Setup a payment</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "amount",
            "description": "<p>destination amount</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "source_identifier",
            "description": "<p>sender identifier</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "memo",
            "description": "<p>memo</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Setup a payment",
        "content": "curl -X POST -H \"Content-Type: application/json\" -d\n'{\n    \"amount\": \"10\",\n    \"source_identifier\": \"alice@wallet1.example\"\n    \"memo\": \"Some money for you!\"\n}'\nhttps://wallet2.example/api/receivers/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"address\": \"wallet2.alice.~ipr.csWIkAxOSfo.3c51a836-6a2a-40b4-8905-a57e9806a1ac\",\n  \"amount\": \"10.00\",\n  \"expires_at\": \"2016-09-06T22:47:01.668Z\",\n  \"condition\": \"XcJRQrVJQKsXrXnpHIk1Nm7PBm5JfnFgmd8ocsexjO4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/payments.js",
    "groupTitle": "Receiver"
  },
  {
    "type": "get",
    "url": "/users/:username",
    "title": "Get user",
    "name": "GetUser",
    "group": "User",
    "version": "1.0.0",
    "description": "<p>Get user</p>",
    "examples": [
      {
        "title": "Get user",
        "content": "curl -X GET -H \"Authorization: Basic YWxpY2U6YWxpY2U=\"\nhttps://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"name\": \"Alice Faye\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/:username",
    "title": "Create a user",
    "name": "PostUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Post user",
        "content": "curl -X POST -H \"Content-Type: application/json\" -d\n'{\n    \"password\": \"alice\"\n}'\nhttps://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 201 OK\n{\n  \"username\": \"alice\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:username",
    "title": "Update user",
    "name": "PutUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Update user email",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"email\": \"alice@example.com\"\n    \"name\": \"Alice Faye\"\n}'\nhttps://wallet.example/users/alice",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"name\": \"Alice Faye\",\n  \"balance\": \"1000\",\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/:username/resend-verification",
    "title": "Resend verification email",
    "name": "ResendVerificationEmail",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Resend verification email",
        "content": "curl -X POST\nhttps://wallet.example/users/alice/resend-verification",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:username/verify",
    "title": "Verify user email address",
    "name": "VerifyUser",
    "group": "User",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>username</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>verification code</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Verify user email address",
        "content": "curl -X PUT -H \"Authorization: Basic YWxpY2U6YWxpY2U=\" -H \"Content-Type: application/json\" -d\n'{\n    \"code\": \"1f7aade2946667fac85ebaf7259182ead6b1fe062b5e8bb0ffa1b9d417431acb\"\n}'\nhttps://wallet.example/users/alice/verify",
        "type": "shell"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "200 Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"username\": \"alice\",\n  \"balance\": \"1000\",\n  \"id\": 1,\n  \"email_verified\": true\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/controllers/users.js",
    "groupTitle": "User"
  }
] });
