function getVal(id){
  return document.getElementById(id).value.trim();
}

function makeLabel(data, showLogo){
  return `
    <div class="label">
      <div class="topbar"></div>

      ${showLogo ? `
      <div class="logo-wrap">
        <img src="brand-logo.png" alt="Brand Logo">
      </div>` : ""}

      <div class="block to">
        <div class="smalltitle">TO</div>
        ${data.rname}<br>
        ${data.raddress}<br>
        ${data.rcity}, ${data.rstate} - ${data.rpin}<br>
        📞 ${data.rphone}
      </div>

      <div class="block">
        <div class="smalltitle">FROM</div>
        ${data.sname}<br>
        ${data.saddress}<br>
        📞 ${data.sphone}
      </div>

      <div class="footer">Packed with Care • Ready to Ship</div>
    </div>
  `;
}

function generateLabels(){
  const data = {
    rname:getVal("rname"),
    rphone:getVal("rphone"),
    raddress:getVal("raddress"),
    rcity:getVal("rcity"),
    rstate:getVal("rstate"),
    rpin:getVal("rpin"),
    sname:getVal("sname"),
    sphone:getVal("sphone"),
    saddress:getVal("saddress")
  };

  const showLogo = document.getElementById("useLogo").checked;
  const count = showLogo ? 2 : 4;

  const area = document.getElementById("printArea");
  area.className = "sheet " + (count === 2 ? "two" : "four");

  let html = "";
  for(let i=0;i<count;i++){
    html += makeLabel(data, showLogo);
  }

  area.innerHTML = html;
}

function printLabels(){
  window.print();
}
