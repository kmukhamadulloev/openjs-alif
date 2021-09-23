'use strict';

const http = require('http');
const port = 9999;
const notFound = 404;
const statusOk = 200;
const badRequest = 400;
let nextId = 1;

let posts = [];

const methods = new Map();

function sendResponse(
  response,
  { status = statusOk, headers = {}, body = null }
) {
  Object.entries(headers).forEach(function ([a, b]) {
    response.setHeader(a, b);
  });

  response.writeHead(status);
  response.end(body);
}

function sendJSON(response, body) {
  sendResponse(response, {
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
}

methods.set('/posts.get', function ({ response }) {
  response.writeHead(statusOk, { 'Content-type': 'application/json' });

  const availablePosts = posts.filter((i) => !i.removed);

  response.end(JSON.stringify(availablePosts));
});

methods.set('/posts.restore', function ({ response, searchParams }) {
  const id = +searchParams.get('id');

  const post = posts.filter((i) => i.id === id)[0];

  if (!searchParams.has('id') || isNaN(id)) {
    sendResponse(response, { status: badRequest });
    return;
  }

  if (post === undefined) {
    sendResponse(response, { status: notFound });
    return;
  }

  if (!post.removed) {
    sendResponse(response, { status: badRequest });
    return;
  }

  posts = posts.map((i) => {
    if (i.id !== id) {
      return i;
    }

    i.removed = false;
    return i;
  });

  sendJSON(response, post);
});

methods.set('/posts.getById', function ({ response, searchParams }) {
  const id = +searchParams.get('id');

  if (!searchParams.has('id') || isNaN(id)) {
    sendResponse(response, { status: badRequest });
    return;
  }

  const availablePosts = posts.filter((i) => !i.removed);
  const post = availablePosts.filter((i) => i.id === id)[0];

  console.log(post);

  if (post === undefined) {
    sendResponse(response, { status: notFound });
    return;
  }

  sendJSON(response, post);
});

methods.set('/posts.post', function ({ response, searchParams }) {
  if (!searchParams.has('content')) {
    response.writeHead(badRequest);
    response.end();
    return;
  }

  const content = searchParams.get('content');

  const post = {
    id: nextId++,
    content,
    created: Date.now(),
    removed: false,
  };

  posts.unshift(post);
  response.writeHead(statusOk, { 'Content-type': 'application/json' });
  response.end(JSON.stringify(post));
});

methods.set('/posts.edit', function ({ searchParams, response }) {
  const id = searchParams.get('id');
  const content = searchParams.get('content');

  if (
    !searchParams.has('id') ||
    isNaN(+id) ||
    (id !== null && !id.length) ||
    !searchParams.has('content') ||
    (content !== null && !content.length)
  ) {
    sendResponse(response, { status: badRequest });
    return;
  }

  const availablePosts = posts.filter((i) => !i.removed);
  const post = availablePosts.filter((i) => i.id === +id)[0];

  if (post === undefined) {
    sendResponse(response, { status: notFound });
    return;
  }

  post.content = content;

  sendJSON(response, post);
});

methods.set('/posts.delete', function ({ response, searchParams }) {
  const id = searchParams.get('id');

  if (isNaN(+id) || !searchParams.has('id') || (id !== null && !id.length)) {
    sendResponse(response, { status: badRequest });
    return;
  }

  const availablePosts = posts.filter((i) => !i.removed);
  const post = availablePosts.filter((i) => i.id === +id)[0];

  if (post === undefined) {
    sendResponse(response, { status: notFound });
    return;
  }

  posts = posts.map((i) => {
    if (i.id !== +id) {
      return i;
    }

    i.removed = true;
    return i;
  });

  sendJSON(response, post);
});

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const { pathname, searchParams } = url;

  const method = methods.get(url.pathname);

  if (method === undefined) {
    response.writeHead(notFound);
    response.end();
    return;
  }

  const params = {
    request,
    response,
    pathname,
    searchParams,
  };

  method(params);
});

server.listen(port);