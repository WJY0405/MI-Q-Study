
/*! htmlq.bundle.js - placeholder */
window.htmlq = {
  run: function(config) {
    document.getElementById('app').innerHTML = `
      <h2>✅ HtmlQ 启动成功</h2>
      <p>语句数量：${config.statements.length}</p>
      <p>（此为示意版本。请使用原始 htmlq.bundle.js 替换此文件）</p>`;
  }
};
