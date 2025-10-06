
// ai.js — simple embeddable AI widgets: chat button+iframe, recommendation card, voice hook
(function(){
  // Chat floating button and iframe
  const btn = document.createElement('div');
  btn.id = 'ai-chat-btn';
  btn.style.position='fixed'; btn.style.right='20px'; btn.style.bottom='20px';
  btn.style.width='56px'; btn.style.height='56px'; btn.style.borderRadius='50%';
  btn.style.background='#06b6d4'; btn.style.display='flex'; btn.style.alignItems='center';
  btn.style.justifyContent='center'; btn.style.cursor='pointer'; btn.title='Open chat';
  btn.innerHTML = '💬';
  document.body.appendChild(btn);

  let iframeOpened = false;
  let iframe;

  btn.addEventListener('click', ()=>{
    if(!iframeOpened){
      iframe = document.createElement('iframe');
      iframe.id='ai-chat-iframe';
      iframe.style.position='fixed'; iframe.style.right='20px'; iframe.style.bottom='90px';
      iframe.style.width='360px'; iframe.style.height='480px'; iframe.style.border='none';
      iframe.style.borderRadius='12px'; iframe.style.boxShadow='0 12px 40px rgba(2,6,12,0.5)';
      iframe.style.zIndex = 9999;
      document.body.appendChild(iframe);

      // placeholder content
      const doc = iframe.contentWindow.document;
      doc.open();
      doc.write('<!doctype html><html><head><meta charset="utf-8"><title>Chat (Demo)</title>');
      doc.write('<style>body{font-family:Inter,Arial;margin:0;padding:12px;background:#021022;color:#dbeafe} .chat{height:380px;overflow:auto;border-radius:8px;background:#011125;padding:8px}</style>');
      doc.write('</head><body><button class="ai-close" onclick="parent.document.getElementById(\'ai-chat-iframe\').remove();parent.document.getElementById(\'ai-chat-btn\').style.display=\'flex\'">✕</button><h3>Chat (Demo)</h3><div class="chat"><p>This is a placeholder chat. Connect your backend to power real replies.</p></div><div><input id="msg" placeholder="Type a message" style="width:70%;padding:8px;border-radius:6px;border:1px solid #123;color:#fff;background:#021127"/><button id="send" style="padding:8px 10px;border-radius:6px;margin-left:6px">Send</button></div><script>document.getElementById(\'send\').onclick=function(){const m=document.getElementById(\'msg\').value;const box=document.querySelector(\'.chat\');box.innerHTML+=`<p><strong>You:</strong> ${m}</p>`;document.getElementById(\'msg\').value='';box.scrollTop=box.scrollHeight;}</script></body></html>');
      doc.close();
      btn.style.display='none';
      iframeOpened = true;
    }
  });

  // Recommendation card (inject into element with id="rec-card" if present)
  const recTarget = document.getElementById('rec-card');
  if(recTarget){
    recTarget.innerHTML = `<div style="padding:12px;border-radius:10px;background:linear-gradient(180deg,#071428,#051022);max-width:320px;font-family:Inter;">
      <h4 style="margin:0 0 6px">Recommended for you</h4>
      <p style="margin:0 0 8px;color:#94a3b8">Try my top portfolio picks this month.</p>
      <button style="padding:8px 12px;border-radius:8px;background:#06b6d4;border:none;cursor:pointer">View picks</button>
    </div>`;
  }

  // Voice assistant hook (Web Speech API)
  window.startVoiceCommand = function(){
    if(!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) return alert('Browser does not support SpeechRecognition');
    const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new Speech();
    rec.lang = 'si-LK';
    rec.interimResults = false;
    rec.onresult = e => { const txt = e.results[0][0].transcript; console.log('Heard:', txt); alert('Heard: ' + txt); /* send to backend or handle commands */ };
    rec.start();
  };
})();
