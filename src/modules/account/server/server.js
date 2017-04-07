// import path from 'path'
// import React from 'react'
// import qs from 'qs'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import counter from '../reducers/counter'
// import AppRoot from '../containers/counter'
// import Express from 'express'
// import { fetchCounter } from '../api/counter'
// import { renderToString } from 'react-dom/server'
//
// const app = Express();
// const port = 3000;
//
// // // 设置跨域访问，方便开发
// // app.all('*', function(req, res, next) {
// //     res.header('Access-Control-Allow-Origin', '*');
// //     next();
// // });
// //
// // // 具体接口设置
// // app.get('/api/test', function(req, res) {
// //     res.send({ code: 200, data: 'your data' });
// // });
// //
// // var server = app.listen(3000, function() {
// //     var host = server.address().address;
// //     var port = server.address().port;
// //     console.log('Mock server listening at http://%s:%s', host, port);
// // });
// app.use(handleRender)
//
// function handleRender(req, res) {
//   fetchCounter(apiResult => {
//     // qs 是一个Npm包，用于解析查询字符串
//     const params = qs.parse(req.query);
//
//     const initialState = parseInt(params.counter, 10) || apiResult || 0;
//
//     const store = createStore(counter, initialState );
//
//     const html = renderToString(
//       <Provider store={store}>
//         <AppRoot />
//       </Provider>
//     );
//
//     const finalState = store.getState();
//
//     res.send(renderFullPage(html, finalState));
//   });
// }
//
// function renderFullPage(html, initialState) {
//   return `
//     <!doctype html>
//     <html>
//       <head>
//         <title>Redux Universal Example</title>
//       </head>
//       <body>
//         <div id="account">${html}</div>
//         <script> window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}</script>
//       </body>
//     </html>
//   `;
// }
//
// app.listen(port);
