//nav function
const pw = document.querySelector("#page-wrapper");
const tt = document.querySelector(".toggleTrigger");

tt.addEventListener("click", toggleNav);

function toggleNav() {
  if (pw.classList.contains("show-nav")) {
    pw.classList.remove("show-nav");
  } else {
    pw.classList.add("show-nav");
  }
}
  /*------ function showAsset() { is there a general way to write the function which applies to all assets? 
    This will also solve the multiple selection problem. 
1. grab the } ---------*/

const st_0 = document.getElementById("st_0");
st_0.addEventListener("click", st0);
function st0() {
  face_shape.style.fill='#F4DAC9'; 
  ear_light.style.fill='#F4DAC9'; 
  ear_mid.style.fill='#F4c19f'; 
  ear_dark.style.fill='#eaaa8665';
}

const st_1 = document.getElementById("st_1");
st_1.addEventListener("click", st1);
function st1() {
  face_shape.style.fill='#FECE93'; 
  ear_light.style.fill='#FECE93'; 
  ear_mid.style.fill='#f7b899'; 
  ear_dark.style.fill='#f29e6665';
}

const st_2 = document.getElementById("st_2");
st_2.addEventListener("click", st2);
function st2() {
  face_shape.style.fill='#E2B096';
   ear_light.style.fill='#E2B096';
   ear_mid.style.fill='#d49f83';
   ear_dark.style.fill='#b37d6065';
}

const st_3 = document.getElementById("st_3");
st_3.addEventListener("click", st3);
function st3() {
  face_shape.style.fill='#db9a79';
   ear_light.style.fill='#db9a79';
   ear_mid.style.fill='#c98665';
   ear_dark.style.fill='#a6694b';
}

const st_4 = document.getElementById("st_4");
st_4.addEventListener("click", st4);
function st4() {
  face_shape.style.fill='#c28c70';
   ear_light.style.fill='#c28c70';
   ear_mid.style.fill='#a37056';
   ear_dark.style.fill='#734f3c';
}

const st_5 = document.getElementById("st_5");
st_5.addEventListener("click", st5);
function st5() {
  face_shape.style.fill='#87604a';
   ear_light.style.fill='#87604a';
   ear_mid.style.fill='#6e4c39';
   ear_dark.style.fill='#543828';
}

const st_6 = document.getElementById("st_6");
st_6.addEventListener("click", st6);
function st6() {
  face_shape.style.fill='#423126';
   ear_light.style.fill='#423126';
   ear_mid.style.fill='#30231b';
   ear_dark.style.fill='#1c140f';
}

const hc_0 = document.getElementById("hc_0");
hc_0.addEventListener("click", hc0);
function hc0() {
   hairstyle1.style.fill='#E5D876';
   hairstyle2.style.fill='#E5D876';
   hairstyle3.style.fill='#E5D876';
   hairstyle4.style.fill='#E5D876'; 
   hairstyle5.style.fill='#E5D876'; 
   hairstyle6.style.fill='#E5D876'; 
   eyebrow1.style.fill='#E5D876'; 
   eyebrow2.style.fill='#E5D876'; 
   eyebrow3.style.fill='#E5D876'; 
   eyebrow4.style.fill='#E5D876'; 
   beard1.style.fill='#E5D876'; 
   beard2.style.fill='#E5D876';
}

const hc_1 = document.getElementById("hc_1");
hc_1.addEventListener("click", hc1);
function hc1() {
   hairstyle1.style.fill='#846147';
   hairstyle2.style.fill='#846147';
   hairstyle3.style.fill='#846147';
   hairstyle4.style.fill='#846147'; 
   hairstyle5.style.fill='#846147'; 
   hairstyle6.style.fill='#846147'; 
   eyebrow1.style.fill='#846147'; 
   eyebrow2.style.fill='#846147'; 
   eyebrow3.style.fill='#846147'; 
   eyebrow4.style.fill='#846147'; 
   beard1.style.fill='#846147'; 
   beard2.style.fill='#846147';
}

const hc_2 = document.getElementById("hc_2");
hc_2.addEventListener("click", hc2);
function hc2() {
   hairstyle1.style.fill='#42403F';
   hairstyle2.style.fill='#42403F';
   hairstyle3.style.fill='#42403F';
   hairstyle4.style.fill='#42403F'; 
   hairstyle5.style.fill='#42403F'; 
   hairstyle6.style.fill='#42403F'; 
   eyebrow1.style.fill='#42403F'; 
   eyebrow2.style.fill='#42403F'; 
   eyebrow3.style.fill='#42403F'; 
   eyebrow4.style.fill='#42403F'; 
   beard1.style.fill='#42403F'; 
   beard2.style.fill='#42403F';
}


const hc_3 = document.getElementById("hc_3");
hc_3.addEventListener("click", hc3);
function hc3() {
   hairstyle1.style.fill='#898989';
   hairstyle2.style.fill='#898989';
   hairstyle3.style.fill='#898989';
   hairstyle4.style.fill='#898989'; 
   hairstyle5.style.fill='#898989'; 
   hairstyle6.style.fill='#898989'; 
   eyebrow1.style.fill='#898989'; 
   eyebrow2.style.fill='#898989'; 
   eyebrow3.style.fill='#898989'; 
   eyebrow4.style.fill='#898989'; 
   beard1.style.fill='#898989'; 
   beard2.style.fill='#898989';
}

const hc_4 = document.getElementById("hc_4");
hc_4.addEventListener("click", hc4);
function hc4() {
   hairstyle1.style.fill='#BC5815';
   hairstyle2.style.fill='#BC5815';
   hairstyle3.style.fill='#BC5815';
   hairstyle4.style.fill='#BC5815'; 
   hairstyle5.style.fill='#BC5815'; 
   hairstyle6.style.fill='#BC5815'; 
   eyebrow1.style.fill='#BC5815'; 
   eyebrow2.style.fill='#BC5815'; 
   eyebrow3.style.fill='#BC5815'; 
   eyebrow4.style.fill='#BC5815'; 
   beard1.style.fill='#BC5815'; 
   beard2.style.fill='#BC5815';
}

const hc_5 = document.getElementById("hc_5");
hc_5.addEventListener("click", hc5);
function hc5() {
   hairstyle1.style.fill='orange';
   hairstyle2.style.fill='orange';
   hairstyle3.style.fill='orange';
   hairstyle4.style.fill='orange'; 
   hairstyle5.style.fill='orange'; 
   hairstyle6.style.fill='orange'; 
   eyebrow1.style.fill='orange'; 
   eyebrow2.style.fill='orange'; 
   eyebrow3.style.fill='orange'; 
   eyebrow4.style.fill='orange'; 
   beard1.style.fill='orange'; 
   beard2.style.fill='orange';
}

const hc_6 = document.getElementById("hc_6");
hc_6.addEventListener("click", hc6);
function hc6() {
   hairstyle1.style.fill='goldenrod';
   hairstyle2.style.fill='goldenrod';
   hairstyle3.style.fill='goldenrod';
   hairstyle4.style.fill='goldenrod'; 
   hairstyle5.style.fill='goldenrod'; 
   hairstyle6.style.fill='goldenrod'; 
   eyebrow1.style.fill='goldenrod'; 
   eyebrow2.style.fill='goldenrod'; 
   eyebrow3.style.fill='goldenrod'; 
   eyebrow4.style.fill='goldenrod'; 
   beard1.style.fill='goldenrod'; 
   beard2.style.fill='goldenrod';
}

//color change end


//single selection begin

const e_1 = document.getElementById("e_1");
e_1.addEventListener("click", showEye1);
function showEye1() {
  const eye1D = document.querySelector("#eye1").style.display;
  const eye2D = document.querySelector("#eye2").style.display;
  const eye3D = document.querySelector("#eye3").style.display;
  const eye4D = document.querySelector("#eye4").style.display;
  const eye5D = document.querySelector("#eye5").style.display;
  if (eye2D === "block") {
    document.querySelector("#eye2").style.display = "none";
  }if (eye3D === "block") {
    document.querySelector("#eye3").style.display = "none";
  }if (eye4D === "block") {
    document.querySelector("#eye4").style.display = "none";
  }if (eye5D === "block") {
    document.querySelector("#eye5").style.display = "none";
  }if(eye1D === "none")
    document.querySelector("#eye1").style.display = "block";
  else
    document.querySelector("#eye1").style.display = "none";
}

const e_2 = document.getElementById("e_2");
e_2.addEventListener("click", showEye2);
function showEye2() {
  const eye1D = document.querySelector("#eye1").style.display;
  const eye2D = document.querySelector("#eye2").style.display;
  const eye3D = document.querySelector("#eye3").style.display;
  const eye4D = document.querySelector("#eye4").style.display;
  const eye5D = document.querySelector("#eye5").style.display;
  if (eye1D === "block") {
    document.querySelector("#eye1").style.display = "none";
  }if (eye3D === "block") {
    document.querySelector("#eye3").style.display = "none";
  }if (eye4D === "block") {
    document.querySelector("#eye4").style.display = "none";
  }if (eye5D === "block") {
    document.querySelector("#eye5").style.display = "none";
  }if(eye2D === "none")
    document.querySelector("#eye2").style.display = "block";
  else
    document.querySelector("#eye2").style.display = "none";
}

const e_3 = document.getElementById("e_3");
e_3.addEventListener("click", showEye3);
function showEye3() {
  const eye1D = document.querySelector("#eye1").style.display;
  const eye2D = document.querySelector("#eye2").style.display;
  const eye3D = document.querySelector("#eye3").style.display;
  const eye4D = document.querySelector("#eye4").style.display;
  const eye5D = document.querySelector("#eye5").style.display;
  if (eye1D === "block") {
    document.querySelector("#eye1").style.display = "none";
  }if (eye2D === "block") {
    document.querySelector("#eye2").style.display = "none";
  }if (eye4D === "block") {
    document.querySelector("#eye4").style.display = "none";
  }if (eye5D === "block") {
    document.querySelector("#eye5").style.display = "none";
  }if(eye3D === "none")
    document.querySelector("#eye3").style.display = "block";
  else
    document.querySelector("#eye3").style.display = "none";
}

const e_4 = document.getElementById("e_4");
e_4.addEventListener("click", showEye4);
function showEye4() {
  const eye1D = document.querySelector("#eye1").style.display;
  const eye2D = document.querySelector("#eye2").style.display;
  const eye3D = document.querySelector("#eye3").style.display;
  const eye4D = document.querySelector("#eye4").style.display;
  const eye5D = document.querySelector("#eye5").style.display;
  if (eye1D === "block") {
    document.querySelector("#eye1").style.display = "none";
  }if (eye2D === "block") {
    document.querySelector("#eye2").style.display = "none";
  }if (eye3D === "block") {
    document.querySelector("#eye3").style.display = "none";
  }if (eye5D === "block") {
    document.querySelector("#eye5").style.display = "none";
  }if(eye4D === "none")
    document.querySelector("#eye4").style.display = "block";
  else
    document.querySelector("#eye4").style.display = "none";
}

const e_5 = document.getElementById("e_5");
e_5.addEventListener("click", showEye5);
function showEye5() {
  const eye1D = document.querySelector("#eye1").style.display;
  const eye2D = document.querySelector("#eye2").style.display;
  const eye3D = document.querySelector("#eye3").style.display;
  const eye4D = document.querySelector("#eye4").style.display;
  const eye5D = document.querySelector("#eye5").style.display;
  if (eye1D === "block") {
    document.querySelector("#eye1").style.display = "none";
  }if (eye2D === "block") {
    document.querySelector("#eye2").style.display = "none";
  }if (eye3D === "block") {
    document.querySelector("#eye3").style.display = "none";
  }if (eye4D === "block") {
    document.querySelector("#eye4").style.display = "none";
  }if(eye5D === "none")
    document.querySelector("#eye5").style.display = "block";
  else
    document.querySelector("#eye5").style.display = "none";
}
  
const m_1 = document.getElementById("m_1");
m_1.addEventListener("click", showMouth1);
  function showMouth1() {
    const mouth1D = document.querySelector("#mouth1").style.display;
    const mouth2D = document.querySelector("#mouth2").style.display;
    const mouth3D = document.querySelector("#mouth3").style.display;
    const mouth4D = document.querySelector("#mouth4").style.display;
    const mouth5D = document.querySelector("#mouth5").style.display;
    const mouth6D = document.querySelector("#mouth6").style.display;
    if (mouth2D === "block") {
      document.querySelector("#mouth2").style.display = "none";
    }if (mouth3D === "block") {
      document.querySelector("#mouth3").style.display = "none";
    }if (mouth4D === "block") {
      document.querySelector("#mouth4").style.display = "none";
    }if (mouth5D === "block") {
      document.querySelector("#mouth5").style.display = "none";
    }if (mouth6D === "block") {
      document.querySelector("#mouth6").style.display = "none";
    }if(mouth1D === "none")
      document.querySelector("#mouth1").style.display = "block";
    else
      document.querySelector("#mouth1").style.display = "none";
  }

const m_2 = document.getElementById("m_2");
m_2.addEventListener("click", showMouth2);
  function showMouth2() {
    const mouth1D = document.querySelector("#mouth1").style.display;
    const mouth2D = document.querySelector("#mouth2").style.display;
    const mouth3D = document.querySelector("#mouth3").style.display;
    const mouth4D = document.querySelector("#mouth4").style.display;
    const mouth5D = document.querySelector("#mouth5").style.display;
    const mouth6D = document.querySelector("#mouth6").style.display;
    if (mouth1D === "block") {
      document.querySelector("#mouth1").style.display = "none";
    }if (mouth3D === "block") {
      document.querySelector("#mouth3").style.display = "none";
    }if (mouth4D === "block") {
      document.querySelector("#mouth4").style.display = "none";
    }if (mouth5D === "block") {
      document.querySelector("#mouth5").style.display = "none";
    }if (mouth6D === "block") {
      document.querySelector("#mouth6").style.display = "none";
    }if(mouth2D === "none")
      document.querySelector("#mouth2").style.display = "block";
    else
      document.querySelector("#mouth2").style.display = "none";
  }

const m_3 = document.getElementById("m_3");
m_3.addEventListener("click", showMouth3);
  function showMouth3() {
    const mouth1D = document.querySelector("#mouth1").style.display;
    const mouth2D = document.querySelector("#mouth2").style.display;
    const mouth3D = document.querySelector("#mouth3").style.display;
    const mouth4D = document.querySelector("#mouth4").style.display;
    const mouth5D = document.querySelector("#mouth5").style.display;
    const mouth6D = document.querySelector("#mouth6").style.display;
    if (mouth1D === "block") {
      document.querySelector("#mouth1").style.display = "none";
    }if (mouth2D === "block") {
      document.querySelector("#mouth2").style.display = "none";
    }if (mouth4D === "block") {
      document.querySelector("#mouth4").style.display = "none";
    }if (mouth5D === "block") {
      document.querySelector("#mouth5").style.display = "none";
    }if (mouth6D === "block") {
      document.querySelector("#mouth6").style.display = "none";
    }if(mouth3D === "none")
      document.querySelector("#mouth3").style.display = "block";
    else
      document.querySelector("#mouth3").style.display = "none";
  }

const m_4 = document.getElementById("m_4");
m_4.addEventListener("click", showMouth4);
  function showMouth4() {
    const mouth1D = document.querySelector("#mouth1").style.display;
    const mouth2D = document.querySelector("#mouth2").style.display;
    const mouth3D = document.querySelector("#mouth3").style.display;
    const mouth4D = document.querySelector("#mouth4").style.display;
    const mouth5D = document.querySelector("#mouth5").style.display;
    const mouth6D = document.querySelector("#mouth6").style.display;
    if (mouth1D === "block") {
      document.querySelector("#mouth1").style.display = "none";
    }if (mouth2D === "block") {
      document.querySelector("#mouth2").style.display = "none";
    }if (mouth3D === "block") {
      document.querySelector("#mouth3").style.display = "none";
    }if (mouth5D === "block") {
      document.querySelector("#mouth5").style.display = "none";
    }if (mouth6D === "block") {
      document.querySelector("#mouth6").style.display = "none";
    }if(mouth4D === "none")
      document.querySelector("#mouth4").style.display = "block";
    else
      document.querySelector("#mouth4").style.display = "none";
  }

const m_5 = document.getElementById("m_5");
m_5.addEventListener("click", showMouth5);
  function showMouth5() {
    const mouth1D = document.querySelector("#mouth1").style.display;
    const mouth2D = document.querySelector("#mouth2").style.display;
    const mouth3D = document.querySelector("#mouth3").style.display;
    const mouth4D = document.querySelector("#mouth4").style.display;
    const mouth5D = document.querySelector("#mouth5").style.display;
    const mouth6D = document.querySelector("#mouth6").style.display;
    if (mouth1D === "block") {
      document.querySelector("#mouth1").style.display = "none";
    }if (mouth2D === "block") {
      document.querySelector("#mouth2").style.display = "none";
    }if (mouth3D === "block") {
      document.querySelector("#mouth3").style.display = "none";
    }if (mouth4D === "block") {
      document.querySelector("#mouth4").style.display = "none";
    }if (mouth6D === "block") {
      document.querySelector("#mouth6").style.display = "none";
    }if(mouth5D === "none")
      document.querySelector("#mouth5").style.display = "block";
    else
      document.querySelector("#mouth5").style.display = "none";
  }

const m_6 = document.getElementById("m_6");
m_6.addEventListener("click", showMouth6);
  function showMouth6() {
    const mouth1D = document.querySelector("#mouth1").style.display;
    const mouth2D = document.querySelector("#mouth2").style.display;
    const mouth3D = document.querySelector("#mouth3").style.display;
    const mouth4D = document.querySelector("#mouth4").style.display;
    const mouth5D = document.querySelector("#mouth5").style.display;
    const mouth6D = document.querySelector("#mouth6").style.display;
    if (mouth1D === "block") {
      document.querySelector("#mouth1").style.display = "none";
    }if (mouth2D === "block") {
      document.querySelector("#mouth2").style.display = "none";
    }if (mouth3D === "block") {
      document.querySelector("#mouth3").style.display = "none";
    }if (mouth4D === "block") {
      document.querySelector("#mouth4").style.display = "none";
    }if (mouth5D === "block") {
      document.querySelector("#mouth5").style.display = "none";
    }if(mouth6D === "none")
      document.querySelector("#mouth6").style.display = "block";
    else
      document.querySelector("#mouth6").style.display = "none";
  }

const eb_1 = document.getElementById("eb_1");
eb_1.addEventListener("click", showEyebrow1);
  function showEyebrow1() {
    const eyebrow1D = document.querySelector("#eyebrow1").style.display;
    const eyebrow2D = document.querySelector("#eyebrow2").style.display;
    const eyebrow3D = document.querySelector("#eyebrow3").style.display;
    const eyebrow4D = document.querySelector("#eyebrow4").style.display;
    if (eyebrow2D === "block") {
      document.querySelector("#eyebrow2").style.display = "none";
    }if (eyebrow3D === "block") {
      document.querySelector("#eyebrow3").style.display = "none";
    }if (eyebrow4D === "block") {
      document.querySelector("#eyebrow4").style.display = "none";
    }if(eyebrow1D === "none")
      document.querySelector("#eyebrow1").style.display = "block";
    else
      document.querySelector("#eyebrow1").style.display = "none";
  }

  const eb_2 = document.getElementById("eb_2");
  eb_2.addEventListener("click", showEyebrow2);
  function showEyebrow2() {
    const eyebrow1D = document.querySelector("#eyebrow1").style.display;
    const eyebrow2D = document.querySelector("#eyebrow2").style.display;
    const eyebrow3D = document.querySelector("#eyebrow3").style.display;
    const eyebrow4D = document.querySelector("#eyebrow4").style.display;
    if (eyebrow1D === "block") {
      document.querySelector("#eyebrow1").style.display = "none";
    }if (eyebrow3D === "block") {
      document.querySelector("#eyebrow3").style.display = "none";
    }if (eyebrow4D === "block") {
      document.querySelector("#eyebrow4").style.display = "none";
    }if(eyebrow2D === "none")
      document.querySelector("#eyebrow2").style.display = "block";
    else
      document.querySelector("#eyebrow2").style.display = "none";
  }

const eb_3 = document.getElementById("eb_3");
eb_3.addEventListener("click", showEyebrow3);
  function showEyebrow3() {
    const eyebrow1D = document.querySelector("#eyebrow1").style.display;
    const eyebrow2D = document.querySelector("#eyebrow2").style.display;
    const eyebrow3D = document.querySelector("#eyebrow3").style.display;
    const eyebrow4D = document.querySelector("#eyebrow4").style.display;
    if (eyebrow1D === "block") {
      document.querySelector("#eyebrow1").style.display = "none";
    }if (eyebrow2D === "block") {
      document.querySelector("#eyebrow2").style.display = "none";
    }if (eyebrow4D === "block") {
      document.querySelector("#eyebrow4").style.display = "none";
    }if(eyebrow3D === "none")
      document.querySelector("#eyebrow3").style.display = "block";
    else
      document.querySelector("#eyebrow3").style.display = "none";
  }

  const eb_4 = document.getElementById("eb_4");
  eb_4.addEventListener("click", showEyebrow4);
  function showEyebrow4() {
    const eyebrow1D = document.querySelector("#eyebrow1").style.display;
    const eyebrow2D = document.querySelector("#eyebrow2").style.display;
    const eyebrow3D = document.querySelector("#eyebrow3").style.display;
    const eyebrow4D = document.querySelector("#eyebrow4").style.display;
    if (eyebrow1D === "block") {
      document.querySelector("#eyebrow1").style.display = "none";
    }if (eyebrow2D === "block") {
      document.querySelector("#eyebrow2").style.display = "none";
    }if (eyebrow3D === "block") {
      document.querySelector("#eyebrow3").style.display = "none";
    }if(eyebrow4D === "none")
      document.querySelector("#eyebrow4").style.display = "block";
    else
      document.querySelector("#eyebrow4").style.display = "none";
  }

  const h_1 = document.getElementById("h_1");
  h_1.addEventListener("click", showHairstyle1);  
  function showHairstyle1() {
    const hairstyle1D = document.querySelector("#hairstyle1").style.display;
    const hairstyle2D = document.querySelector("#hairstyle2").style.display;
    const hairstyle3D = document.querySelector("#hairstyle3").style.display;
    const hairstyle4D = document.querySelector("#hairstyle4").style.display;
    const hairstyle5D = document.querySelector("#hairstyle5").style.display;
    const hairstyle6D = document.querySelector("#hairstyle6").style.display;
    if (hairstyle2D === "block") {
      document.querySelector("#hairstyle2").style.display = "none";
    }if (hairstyle3D === "block") {
      document.querySelector("#hairstyle3").style.display = "none";
    }if (hairstyle4D === "block") {
      document.querySelector("#hairstyle4").style.display = "none";
    }if (hairstyle5D === "block") {
      document.querySelector("#hairstyle5").style.display = "none";
    }if (hairstyle6D === "block") {
      document.querySelector("#hairstyle6").style.display = "none";
    }if(hairstyle1D === "none")
      document.querySelector("#hairstyle1").style.display = "block";
    else
      document.querySelector("#hairstyle1").style.display = "none";
  }

  const h_2 = document.getElementById("h_2");
  h_2.addEventListener("click", showHairstyle2);
  function showHairstyle2() {
    const hairstyle1D = document.querySelector("#hairstyle1").style.display;
    const hairstyle2D = document.querySelector("#hairstyle2").style.display;
    const hairstyle3D = document.querySelector("#hairstyle3").style.display;
    const hairstyle4D = document.querySelector("#hairstyle4").style.display;
    const hairstyle5D = document.querySelector("#hairstyle5").style.display;
    const hairstyle6D = document.querySelector("#hairstyle6").style.display;
    if (hairstyle1D === "block") {
      document.querySelector("#hairstyle1").style.display = "none";
    }if (hairstyle3D === "block") {
      document.querySelector("#hairstyle3").style.display = "none";
    }if (hairstyle4D === "block") {
      document.querySelector("#hairstyle4").style.display = "none";
    }if (hairstyle5D === "block") {
      document.querySelector("#hairstyle5").style.display = "none";
    }if (hairstyle6D === "block") {
      document.querySelector("#hairstyle6").style.display = "none";
    }if(hairstyle2D === "none")
      document.querySelector("#hairstyle2").style.display = "block";
    else
      document.querySelector("#hairstyle2").style.display = "none";
  }

  const h_3 = document.getElementById("h_3");
  h_3.addEventListener("click", showHairstyle3);
  function showHairstyle3() {
    const hairstyle1D = document.querySelector("#hairstyle1").style.display;
    const hairstyle2D = document.querySelector("#hairstyle2").style.display;
    const hairstyle3D = document.querySelector("#hairstyle3").style.display;
    const hairstyle4D = document.querySelector("#hairstyle4").style.display;
    const hairstyle5D = document.querySelector("#hairstyle5").style.display;
    const hairstyle6D = document.querySelector("#hairstyle6").style.display;
    if (hairstyle1D === "block") {
      document.querySelector("#hairstyle1").style.display = "none";
    }if (hairstyle2D === "block") {
      document.querySelector("#hairstyle2").style.display = "none";
    }if (hairstyle4D === "block") {
      document.querySelector("#hairstyle4").style.display = "none";
    }if (hairstyle5D === "block") {
      document.querySelector("#hairstyle5").style.display = "none";
    }if (hairstyle6D === "block") {
      document.querySelector("#hairstyle6").style.display = "none";
    }if(hairstyle3D === "none")
      document.querySelector("#hairstyle3").style.display = "block";
    else
      document.querySelector("#hairstyle3").style.display = "none";
  }

  const h_4 = document.getElementById("h_4");
  h_4.addEventListener("click", showHairstyle4);
  function showHairstyle4() {
    const hairstyle1D = document.querySelector("#hairstyle1").style.display;
    const hairstyle2D = document.querySelector("#hairstyle2").style.display;
    const hairstyle3D = document.querySelector("#hairstyle3").style.display;
    const hairstyle4D = document.querySelector("#hairstyle4").style.display;
    const hairstyle5D = document.querySelector("#hairstyle5").style.display;
    const hairstyle6D = document.querySelector("#hairstyle6").style.display;
    if (hairstyle1D === "block") {
      document.querySelector("#hairstyle1").style.display = "none";
    }if (hairstyle2D === "block") {
      document.querySelector("#hairstyle2").style.display = "none";
    }if (hairstyle3D === "block") {
      document.querySelector("#hairstyle3").style.display = "none";
    }if (hairstyle5D === "block") {
      document.querySelector("#hairstyle5").style.display = "none";
    }if (hairstyle6D === "block") {
      document.querySelector("#hairstyle6").style.display = "none";
    }if(hairstyle4D === "none")
      document.querySelector("#hairstyle4").style.display = "block";
    else
      document.querySelector("#hairstyle4").style.display = "none";
  }

  const h_5 = document.getElementById("h_5");
  h_5.addEventListener("click", showHairstyle5);
  function showHairstyle5() {
    const hairstyle1D = document.querySelector("#hairstyle1").style.display;
    const hairstyle2D = document.querySelector("#hairstyle2").style.display;
    const hairstyle3D = document.querySelector("#hairstyle3").style.display;
    const hairstyle4D = document.querySelector("#hairstyle4").style.display;
    const hairstyle5D = document.querySelector("#hairstyle5").style.display;
    const hairstyle6D = document.querySelector("#hairstyle6").style.display;
    if (hairstyle1D === "block") {
      document.querySelector("#hairstyle1").style.display = "none";
    }if (hairstyle2D === "block") {
      document.querySelector("#hairstyle2").style.display = "none";
    }if (hairstyle3D === "block") {
      document.querySelector("#hairstyle3").style.display = "none";
    }if (hairstyle4D === "block") {
      document.querySelector("#hairstyle4").style.display = "none";
    }if (hairstyle6D === "block") {
      document.querySelector("#hairstyle6").style.display = "none";
    }if(hairstyle5D === "none")
      document.querySelector("#hairstyle5").style.display = "block";
    else
      document.querySelector("#hairstyle5").style.display = "none";
  }
  
  const h_6 = document.getElementById("h_6");
  h_6.addEventListener("click", showHairstyle6);
  function showHairstyle6() {
    const hairstyle1D = document.querySelector("#hairstyle1").style.display;
    const hairstyle2D = document.querySelector("#hairstyle2").style.display;
    const hairstyle3D = document.querySelector("#hairstyle3").style.display;
    const hairstyle4D = document.querySelector("#hairstyle4").style.display;
    const hairstyle5D = document.querySelector("#hairstyle5").style.display;
    const hairstyle6D = document.querySelector("#hairstyle6").style.display;
    if (hairstyle1D === "block") {
      document.querySelector("#hairstyle1").style.display = "none";
    }if (hairstyle2D === "block") {
      document.querySelector("#hairstyle2").style.display = "none";
    }if (hairstyle3D === "block") {
      document.querySelector("#hairstyle3").style.display = "none";
    }if (hairstyle4D === "block") {
      document.querySelector("#hairstyle4").style.display = "none";
    }if (hairstyle5D === "block") {
      document.querySelector("#hairstyle5").style.display = "none";
    }if(hairstyle6D === "none")
      document.querySelector("#hairstyle6").style.display = "block";
    else
      document.querySelector("#hairstyle6").style.display = "none";
  }

  const b_1 = document.getElementById("b_1");
  b_1.addEventListener("click", showBeard1);
  function showBeard1() {
    const beard1D = document.querySelector("#beard1").style.display;
    const beard2D = document.querySelector("#beard2").style.display;
    if (beard2D === "block") {
            document.querySelector("#beard2").style.display = "none";
    }if(beard1D === "none")
      document.querySelector("#beard1").style.display = "block";
    else
      document.querySelector("#beard1").style.display = "none";
  }

  const b_2 = document.getElementById("b_2");
  b_2.addEventListener("click", showBeard2);
  function showBeard2() {
    const beard1D = document.querySelector("#beard1").style.display;
    const beard2D = document.querySelector("#beard2").style.display;
    if (beard1D === "block") {
            document.querySelector("#beard1").style.display = "none";
    }if(beard2D === "none")
      document.querySelector("#beard2").style.display = "block";
    else
      document.querySelector("#beard2").style.display = "none";
  }



  //multiple selection begin

  const a_blush = document.getElementById("a_blush");
  a_blush.addEventListener("click", showBlush);
  function showBlush() {
    var style = document.querySelector("#blush").style.display;
    if(style === "none")
      document.querySelector("#blush").style.display = "block";
    else
      document.querySelector("#blush").style.display = "none";
  }

  const a_scar = document.getElementById("a_scar");
  a_scar.addEventListener("click", showScar);
  function showScar() {
    var style = document.querySelector("#scar").style.display;
    if(style === "none")
      document.querySelector("#scar").style.display = "block";
    else
      document.querySelector("#scar").style.display = "none";
  }

  const a_Xmas_hat = document.getElementById("a_Xmas_hat");
  a_Xmas_hat.addEventListener("click", showXmasHat);
  function showXmasHat() {
    var style = document.querySelector("#Xmas_hat").style.display;
    if(style === "none")
      document.querySelector("#Xmas_hat").style.display = "block";
    else
      document.querySelector("#Xmas_hat").style.display = "none";
  }

  const a_Xmas_nose = document.getElementById("a_Xmas_nose");
  a_Xmas_nose.addEventListener("click", showXmasNose);
  function showXmasNose() {
    var style = document.querySelector("#Xmas_nose").style.display;
    if(style === "none")
      document.querySelector("#Xmas_nose").style.display = "block";
    else
      document.querySelector("#Xmas_nose").style.display = "none";
  }

  const a_antlers = document.getElementById("a_antlers");
  a_antlers.addEventListener("click", showAntlers);
  function showAntlers() {
    var style = document.querySelector("#antlers").style.display;
    if(style === "none")
      document.querySelector("#antlers").style.display = "block";
    else
      document.querySelector("#antlers").style.display = "none";
  }

  const a_glasses = document.getElementById("a_glasses");
  a_glasses.addEventListener("click", showGlasses);
  function showGlasses() {
    var style = document.querySelector("#glasses").style.display;
    if(style === "none")
      document.querySelector("#glasses").style.display = "block";
    else
      document.querySelector("#glasses").style.display = "none";
  }

  const a_earrings = document.getElementById("a_earrings");
  a_earrings.addEventListener("click", showEarrings);
  function showEarrings() {
    var style = document.querySelector("#earrings").style.display;
    if(style === "none")
      document.querySelector("#earrings").style.display = "block";
    else
      document.querySelector("#earrings").style.display = "none";
  }

//    menu with option 
const width  = document.documentElement.clientWidth
const height = document.documentElement.clientHeight

const menu1 = document.querySelector("#menu_st");
const menu2 = document.querySelector("#menu_hairstyles");
const menu3 = document.querySelector("#menu_hc");
const menu4 = document.querySelector("#menu_eyes");
const menu5 = document.querySelector("#menu_eyebrows")
const menu6 = document.querySelector("#menu_mouths");
const menu7 = document.querySelector("#menu_beards");
const menu8 = document.querySelector("#menu_accessories");

menu1.addEventListener("click", function() {
  document.querySelector(".options_skin_tone").style = "display: flex;";
  document.querySelector(".options_hairstyles").style = "display: none;";
  document.querySelector(".options_hair_colors").style = "display: none;";
  document.querySelector(".options_eyes").style = "display: none;";
  document.querySelector(".options_eyebrows").style = "display: none;";
  document.querySelector(".options_mouths").style = "display: none;";
  document.querySelector(".options_beards").style = "display: none;";
  document.querySelector(".options_accessories").style = "display: none;";
});

menu2.addEventListener("click", function() {
  document.querySelector(".options_skin_tone").style = "display: none;";
  document.querySelector(".options_hairstyles").style = "display: flex;";
  document.querySelector(".options_hair_colors").style = "display: none;";
  document.querySelector(".options_eyes").style = "display: none;";
  document.querySelector(".options_eyebrows").style = "display: none;";
  document.querySelector(".options_mouths").style = "display: none;";
  document.querySelector(".options_beards").style = "display: none;";
  document.querySelector(".options_accessories").style = "display: none;";
});

menu3.addEventListener("click", function() {
  document.querySelector(".options_skin_tone").style = "display: none;";
  document.querySelector(".options_hairstyles").style = "display: none;";
  document.querySelector(".options_hair_colors").style = "display: flex;";
  document.querySelector(".options_eyes").style = "display: none;";
  document.querySelector(".options_eyebrows").style = "display: none;";
  document.querySelector(".options_mouths").style = "display: none;";
  document.querySelector(".options_beards").style = "display: none;";
  document.querySelector(".options_accessories").style = "display: none;";
});

menu4.addEventListener("click", function() {
  document.querySelector(".options_skin_tone").style = "display: none;";
  document.querySelector(".options_hairstyles").style = "display: none;";
  document.querySelector(".options_hair_colors").style = "display: none;";
  document.querySelector(".options_eyes").style = "display: flex;";
  document.querySelector(".options_eyebrows").style = "display: none;";
  document.querySelector(".options_mouths").style = "display: none;";
  document.querySelector(".options_beards").style = "display: none;";
  document.querySelector(".options_accessories").style = "display: none;";
});

menu5.addEventListener("click", function() {
  document.querySelector(".options_skin_tone").style = "display: none;";
  document.querySelector(".options_hairstyles").style = "display: none;";
  document.querySelector(".options_hair_colors").style = "display: none;";
  document.querySelector(".options_eyes").style = "display: none;";
  document.querySelector(".options_eyebrows").style = "display: flex;";
  document.querySelector(".options_mouths").style = "display: none;";
  document.querySelector(".options_beards").style = "display: none;";
  document.querySelector(".options_accessories").style = "display: none;";
});

menu6.addEventListener("click", function() {
  document.querySelector(".options_skin_tone").style = "display: none;";
  document.querySelector(".options_hairstyles").style = "display: none;";
  document.querySelector(".options_hair_colors").style = "display: none;";
  document.querySelector(".options_eyes").style = "display: none;";
  document.querySelector(".options_eyebrows").style = "display: none;";
  document.querySelector(".options_mouths").style = "display: flex;";
  document.querySelector(".options_beards").style = "display: none;";
  document.querySelector(".options_accessories").style = "display: none;";
});

menu7.addEventListener("click", function() {
  document.querySelector(".options_skin_tone").style = "display: none;";
  document.querySelector(".options_hairstyles").style = "display: none;";
  document.querySelector(".options_hair_colors").style = "display: none;";
  document.querySelector(".options_eyes").style = "display: none;";
  document.querySelector(".options_eyebrows").style = "display: none;";
  document.querySelector(".options_mouths").style = "display: none;";
  document.querySelector(".options_beards").style = "display: flex;";
  document.querySelector(".options_accessories").style = "display: none;";
});

menu8.addEventListener("click", function() {
  document.querySelector(".options_skin_tone").style = "display: none;";
  document.querySelector(".options_hairstyles").style = "display: none;";
  document.querySelector(".options_hair_colors").style = "display: none;";
  document.querySelector(".options_eyes").style = "display: none;";
  document.querySelector(".options_eyebrows").style = "display: none;";
  document.querySelector(".options_mouths").style = "display: none;";
  document.querySelector(".options_beards").style = "display: none;";
  document.querySelector(".options_accessories").style = "display: flex;";
});

document.querySelector('.download-btn').addEventListener('click', download);
document.querySelector('#top-btn').addEventListener('click', download);

function download() {
  const fileName = 'My_Avatar.svg';
  const svg = document.querySelector('#avatar-svg');

  // cover svg to base64 URI
  const xml = new XMLSerializer().serializeToString(svg);     // get svg data
  const imageURI = 'data:image/svg+xml;base64,' + btoa(xml);  // generate base64 URI

  // create element <a href="..." download="..." />
  const a = document.createElement('a');
  document.body.appendChild(a);
  a.setAttribute('href', imageURI);
  a.setAttribute('download', fileName);

  // trigger download event
  a.click();
}


// PRESS START THEN DISPLAY BODYPAGE AND CLOSE WELCOME PAGE
// when click on start, change body page display to block and change welcome page display to none
// get node references here
const btnStart = document.querySelector(".start-btn");
btnStart.addEventListener("click", function() {
  document.getElementById("bodypage").style = "display: grid;";
  document.getElementById("welcome_page").style = "display: none;";
  document.querySelector(".download-btn").style = "display: flex";
  document.querySelector("#top-btn").style = "color: #ED3E2A";
  // document.querySelector("#top-btn").style = "display: flex";
});
