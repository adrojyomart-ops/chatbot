if(localStorage.getItem("chat_tc_accepted")){
  document.getElementById("tcPopup").style.display="none";
}

function acceptTC(){
  localStorage.setItem("chat_tc_accepted","yes");
  document.getElementById("tcPopup").style.display="none";
}
