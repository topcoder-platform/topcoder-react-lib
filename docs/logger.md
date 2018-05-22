<a name="module_logger"></a>

## logger
Isomorphic logger.

At the server-side it outputs log messages to the console, and also sends
them to the https://logentries.com service (only if LOG_ENTRIES_TOKEN is
set).

At the front-end side it outputs log messages to the console (only when
development build of the frontend is used), and sends them to the
https://logentries.com service (both dev and prod build of the frontend
send messages to the service, proxying them through the App's server;
the proxy will forward them to the service only if LOG_ENTRIES_TOKEN is set).

In all case, interface of the logger matches that of the standard JS console.

**Todo**

- [ ] This module does not belong here, it should be moved to
`topcoder-react-utils`.

