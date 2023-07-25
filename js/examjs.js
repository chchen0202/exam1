


// // goodpharse_api
const apiKey = 'e6dc46b9a85dcb8a1991fb9a98eec9e3';
const endpoint = 'https://cors-anywhere.herokuapp.com/https://favqs.com/api/qotd';
fetch(endpoint, {method: 'GET',headers: {Authorization: `Token token=${apiKey}`,},})
.then(response => response.json())
.then(data => {
console.log(data)
let author= data.quote.author;
let body = data.quote.body;
console.log(body)
console.log(author)
document.getElementById('end_modal').innerHTML += "<td>作者: "+author+"<br></td>"; 
document.getElementById('end_modal').innerHTML += "<td>良言佳句: "+body+"</td>";   
});


//date range
$("input.dateRange").daterangepicker({
    "alwaysShowCalendars": true,
    opens: "right",
    singleDatePicker: true,
    showDropdowns: true,
    minYear : 1920,
    maxDate : moment(),
    minDate : moment().subtract(100, "year").startOf("year"),
    drops: "auto",
    ranges: {
    "今天": [moment(), moment()],
    "過去 7 天": [moment().subtract(6, "days"), moment()],
    "本月": [moment().startOf("month"), moment().endOf("month")],
    "上個月": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
    },
    locale: {
        format: "YYYY-MM-DD",
        separator: " ~ ",
        applyLabel: "確定",
        cancelLabel: "清除",
        fromLabel: "開始日期",
        toLabel: "結束日期",
        customRangeLabel: "自訂日期區間",
        daysOfWeek: ["日", "一", "二", "三", "四", "五", "六"],
        monthNames: ["1月", "2月", "3月", "4月", "5月", "6月",
        "7月", "8月", "9月", "10月", "11月", "12月"
    ],
    firstDay: 1
    }
    });
    $("input.dateRange").on("cancel.daterangepicker", function(ev, picker) {
    $(this).val("");
    });

//form sent
$('#final_submit').click(function (e) {

    let ttl_price = 0
    let employee_price = 0
    let companion_price = 0
    const current_cnt = document.getElementById('input_cnt').value; 
    const event = $("input[name='event']:checked").val();  
    if(event=="Summer BBQ Party"){
        employee_price = 0
        companion_price = 0
        ttl_price = employee_price*1 + companion_price*current_cnt
        console.log(ttl_price)
    }else if(event=="Entrepreneur Lecture Series"){
        employee_price = 50
        companion_price = 100
        ttl_price = employee_price*1 + companion_price*current_cnt
        console.log(ttl_price)
    }else if(event=="Family Sports Day"){
        employee_price = 0
        companion_price = 50
        ttl_price = employee_price*1 + companion_price*current_cnt
        console.log(ttl_price)
    }else if(event=="Charity Run"){
        employee_price = 100
        companion_price = 300
        ttl_price = employee_price*1 + companion_price*current_cnt
        console.log(ttl_price)
    }   
    
    // document.getElementById("register_form").reset();// 通過送出表單
    // alert("已送出表單");   

    if ($('#input_lastname').val() && $('#input_firstname').val()) {//需要先確認必填欄位是否填寫
      
       
        $.ajax({
        // url為Google Form按下submit的aciotn
        url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqYxolkQxmSY3IgIB8VY0sDFx2O2a4RUilMEwuGuzpQ_MFJQ/formResponse",
        crossDomain: true,//解決跨網域CORS的問題


        data: {// entry.xxxxx 這些需要填寫表單裡面的值，與其相互對應
          "entry.5620232": $('#input_lastname').val(),
          "entry.1888754607": $('#input_firstname').val(),
          "entry.1807658477": $('#input_email').val(),
          "entry.1457348149": $('#input_id').val(),
          "entry.1831102103": '+886'+$('#input_mobile').val(),
          "entry.1428477449": '('+document.querySelector('#input_telcode').value+')'+document.getElementById('input_tel').value.replace(/-/g, ''),
          "entry.970011837": $("input[name='gender_radio']:checked").val(),
          "entry.611711623": $('#input_birthday').val(),
          "entry.258977670": $("input[name='event']:checked").val(),
          "entry.919522010": document.getElementById('input_cnt').value,
          "entry.450051419": document.getElementById('input_note').value,
          
         
          "entry.1140524901": document.getElementById('input_lastname_add1').value+document.getElementById('input_firstname_add1').value+'/'+$("input[name=\'gender_radio1\']:checked").val()+'/+886'+document.getElementById('input_mobile_add1').value.slice(1)+'/'+document.getElementById('input_email_add1').value+'/'+companion_price,
          "entry.955460632": document.getElementById('input_lastname_add2').value+document.getElementById('input_firstname_add2').value+'/'+$("input[name=\'gender_radio2\']:checked").val()+'/+886'+document.getElementById('input_mobile_add2').value.slice(1)+'/'+document.getElementById('input_email_add2').value+'/'+companion_price,
        //   "entry.1137321519":document.getElementById('input_lastname_add3').value+document.getElementById('input_firstname_add3').value+'/'+$("input[name=\'gender_radio3\']:checked").val()+'/+886'+document.getElementById('input_mobile_add3').value.slice(1)+'/'+document.getElementById('input_email_add3').value+'/'+companion_price,
        //   "entry.1092736206": document.getElementById('input_lastname_add4').value+document.getElementById('input_firstname_add4').value+'/'+$("input[name=\'gender_radio4\']:checked").val()+'/+886'+document.getElementById('input_mobile_add4').value.slice(1)+'/'+document.getElementById('input_email_add4').value+'/'+companion_price,
        //   "entry.1316076724": document.getElementById('input_lastname_add5').value+document.getElementById('input_firstname_add5').value+'/'+$("input[name=\'gender_radio5\']:checked").val()+'/+886'+document.getElementById('input_mobile_add5').value.slice(1)+'/'+document.getElementById('input_email_add5').value+'/'+companion_price,
        //   "entry.1917262178":document.getElementById('input_lastname_add6').value+document.getElementById('input_firstname_add6').value+'/'+$("input[name=\'gender_radio6\']:checked").val()+'/+886'+document.getElementById('input_mobile_add6').value.slice(1)+'/'+document.getElementById('input_email_add6').value+'/'+companion_price,
        //   "entry.86664871": document.getElementById('input_lastname_add7').value+document.getElementById('input_firstname_add7').value+'/'+$("input[name=\'gender_radio7\']:checked").val()+'/+886'+document.getElementById('input_mobile_add7').value.slice(1)+'/'+document.getElementById('input_email_add7').value+'/'+companion_price,
        //   "entry.80314234": document.getElementById('input_lastname_add8').value+document.getElementById('input_firstname_add8').value+'/'+$("input[name=\'gender_radio8\']:checked").val()+'/+886'+document.getElementById('input_mobile_add8').value.slice(1)+'/'+document.getElementById('input_email_add8').value+'/'+companion_price,
        //   "entry.1555020669": document.getElementById('input_lastname_add9').value+document.getElementById('input_firstname_add9').value+'/'+$("input[name=\'gender_radio9\']:checked").val()+'/+886'+document.getElementById('input_mobile_add9').value.slice(1)+'/'+document.getElementById('input_email_add9').value+'/'+companion_price,
        //   "entry.1714819593": document.getElementById('input_lastname_add10').value+document.getElementById('input_firstname_add10').value+'/'+$("input[name=\'gender_radio10\']:checked").val()+'/+886'+document.getElementById('input_mobile_add10').value.slice(1)+'/'+document.getElementById('input_email_add10').value+'/'+companion_price
                 
          "entry.574594228":  parseInt(document.getElementById('input_cnt').value)+1,
          "entry.745420572":  employee_price,
          "entry.1885243542": ttl_price

        },
        

        type: "POST", //因為是要進行insert的動作，故是用POST
        dataType: "JSONP",
        complete: function () {
          //完成後把這些欄位清空
          $('#input_lastname').val('')
          $('#input_firstname').val('')
          $('#input_email').val('')
          $('#input_id').val('')
          $('#input_mobile').val('')
          $('#input_tel').val('')
          $('#input_note').val('')
          $('#input_note').val('')
      
          //最後跳轉到感謝的頁面
        //   window.location.replace("thank.html");
        }
      });
    

        
    }



    // e.preventDefault(); // 防止原始 form 提交表單
  });

// function final_submit(){
    
//     // document.getElementById("register_form").reset();// 通過送出表單
//     // alert("已送出表單");   

//     if ($('#input_lastname').val() && $('#input_firstname').val()) {//需要先確認必填欄位是否填寫
//         $.ajax({
//           // url為Google Form按下submit的aciotn
//           url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSfqYxolkQxmSY3IgIB8VY0sDFx2O2a4RUilMEwuGuzpQ_MFJQ/formResponse",
//           crossDomain: true,//解決跨網域CORS的問題
//           data: {// entry.xxxxx 這些需要填寫表單裡面的值，與其相互對應
//             "entry.5620232": $('#input_lastname').val(),
//             "entry.1888754607": $('#input_firstname').val(),
//             "entry.1807658477": $('#input_email').val(),
//             "entry.1457348149": $('#input_id').val(),
//             "entry.1831102103": $('#input_mobile').val(),
//             "entry.1428477449": $('#input_tel').val(),
//             "entry.970011837": $('#input_gender').html(),
//             "entry.611711623": $('#input_birthday').val(),
//             "entry.258977670": $('#input_event').val()
//           },
//           type: "POST", //因為是要進行insert的動作，故是用POST
//           dataType: "JSONP",
//         //   complete: function () {
//         //     //完成後把這些欄位清空
//         //     $('#name').val('')
//         //     $('#email').val('')
//         //     $('#score').val('')
//         //     $('#message').val('')
//         //     //最後跳轉到感謝的頁面
//         //     window.location.replace("thank.html");
//         //   }
//         });
//       }
//       // e.preventDefault(); // 防止原始 form 提交表單
// }


//cancel validation
function runMe(){
    document.getElementById("register_form").classList.remove('was-validated');
}

function runMe3(){
  alert("123")
}


function click_email(id){
    const email = document.getElementById('input_email').value;
    document.getElementById("input_email_add"+id).setAttribute("value", email)  
}


function click_mobile(id){
    var mobile = document.getElementById('input_mobile').value;
    // if (document.getElementById("input_mobile_add"+id).hasAttribute('value')==true){
    //     alert("value屬性存在")
    // }else{
    //     alert("value屬性不存在")
    // }
    // document.getElementById("input_mobile_add"+id).removeAttribute("value")  
    document.getElementById("input_mobile_add"+id).setAttribute("value", mobile)  
    // alert(mobile+""+id)
}




//confirm_modal
function runMe2(){          
    const lastname = document.getElementById('input_lastname').value;
    const firstname = document.getElementById('input_firstname').value;
    const email = document.getElementById('input_email').value;
    const id = document.getElementById('input_id').value;
    const mobile = document.getElementById('input_mobile').value.slice(1);
    const tel = document.getElementById('input_tel').value.replace(/-/g, '');
    const telcode = document.querySelector('#input_telcode').value;
    const gender = $("input[name='gender_radio']:checked").val();
    const birthday = document.getElementById('input_birthday').value;
    const event = $("input[name='event']:checked").val();
    const cnt = document.getElementById('input_cnt').value;
    const ttlcnt = parseInt(cnt)+1;
    const note = document.getElementById('input_note').value;
    var el = document.getElementById("confirm_text");
    let ttl_price = 0
    let employee_price = 0
    let companion_price = 0
    const current_cnt = document.getElementById('input_cnt').value;   

    // document.getElementById('confirm_birthday').innerHTML = "<td>"+birthday+"</td>";

    if(event=="Summer BBQ Party"){
        employee_price = 0
        companion_price = 0
        ttl_price = employee_price*1 + companion_price*current_cnt
        console.log(ttl_price)
    }else if(event=="Entrepreneur Lecture Series"){
        employee_price = 50
        companion_price = 100
        ttl_price = employee_price*1 + companion_price*current_cnt
        console.log(ttl_price)
    }else if(event=="Family Sports Day"){
        employee_price = 0
        companion_price = 50
        ttl_price = employee_price*1 + companion_price*current_cnt
        console.log(ttl_price)
    }else if(event=="Charity Run"){
        employee_price = 100
        companion_price = 300
        ttl_price = employee_price*1 + companion_price*current_cnt
        console.log(ttl_price)
    }   

        
    document.getElementById('confirm_name').innerHTML = "<td>"+lastname+" "+firstname+"</td>";
    document.getElementById('confirm_email').innerHTML = "<td>"+email+"</td>";
    document.getElementById('confirm_id').innerHTML = "<td>"+id+"</td>";
    document.getElementById('confirm_mobile').innerHTML = "<td>+886"+mobile+"</td>";
    document.getElementById('confirm_tel').innerHTML = "<td>("+telcode+") "+tel+"</td>";
    document.getElementById('confirm_gender').innerHTML = "<td>"+gender+"</td>";
    document.getElementById('confirm_birthday').innerHTML = "<td>"+birthday+"</td>";
    document.getElementById('confirm_event').innerHTML = "<td>"+event+"</td>";
    document.getElementById('confirm_cnt').innerHTML = "<td>"+cnt+"</td>";
    document.getElementById('confirm_ttlcnt').innerHTML = "<td>"+ttlcnt+"</td>";   
    document.getElementById('confirm_note').innerHTML = "<td>"+note+"</td>";  
    document.getElementById('confirm_fee').innerHTML = "<td>"+employee_price+"</td>";  
    document.getElementById('confirm_ttlfee').innerHTML = "<td>"+ttl_price+"</td>";   
    // document.getElementById('confirm_ttlcnt').insertAdjacentHTML("beforeend","<td>"+ttlcnt+"</td>");   

    
    // console.log("current_cnt:"+current_cnt)

    for(let a = 0; a<current_cnt; a++){
        let new_index = (a+1)
        console.log(new_index)
        let lastname_add = document.getElementById('input_lastname_add'+new_index).value;
        let firstname_add = document.getElementById('input_firstname_add'+new_index).value;
        let gender_add = $("input[name=\'gender_radio"+new_index+"\']:checked").val();
        let mobile_add = document.getElementById('input_mobile_add'+new_index).value.slice(1);
        let email_add = document.getElementById('input_email_add'+new_index).value;
        console.log(lastname_add)
        console.log(firstname_add)
        console.log(gender_add)
        console.log(mobile_add)
        console.log(email_add)

        document.getElementById('confirm_name'+new_index).innerHTML = "<td>"+lastname_add+" "+firstname_add+"</td>";
        document.getElementById('confirm_gender'+new_index).innerHTML = "<td>"+gender_add+"</td>";
        document.getElementById('confirm_email'+new_index).innerHTML = "<td>"+email_add+"</td>";
        document.getElementById('confirm_mobile'+new_index).innerHTML = "<td>+886"+mobile_add+"</td>";
        document.getElementById('confirm_companion_fee'+new_index).innerHTML = "<td>"+companion_price+"</td>";

    }

    
  
}

//plus_minus_button
$('.btn-number').click(function(e){
    e.preventDefault();    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }   
            
            // if(currentVal == 1) {
            //   document.getElementById("collapse_add1").classList.remove('show')
            //   document.getElementById("collapse_add2").classList.remove('show');;
            //  } 

            // if(currentVal == 2) {
            //   document.getElementById("collapse_add2").classList.remove('show');              
            // } 
            
            

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

            // var myCollapse = document.getElementById('myCollapse')
            // var bsCollapse = new bootstrap.Collapse(myCollapse, {
            //   toggle: false
            // })

            // $("#collapse_add1").collapse("show");                    
            
            
            // if(currentVal+1 == 1) {
            //   document.getElementById("collapse_add1").classList.add('show');
            //  } 

            // if(currentVal+1 == 2) {
            //   document.getElementById("collapse_add1").classList.add('show');
            //   document.getElementById("collapse_add2").classList.add('show');}       

        }
    } else {
        input.val(0);
    }



  
});


//check_paticipants_count
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('請輸入數量1~10');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('請輸入數量1~10');
        $(this).val($(this).data('oldValue'));
    }
    
    // if(valueCurrent == 0) {
    //   $("#collapse_add1").collapse("hide");
    //   $("#collapse_add2").collapse("hide");
    // } 
    // if(valueCurrent == 1) {
    //   $("#collapse_add1").collapse("show");
    //   $("#collapse_add2").collapse("hide");
    // } 
    // if(valueCurrent == 2) {
    //   $("#collapse_add1").collapse("show");
    //   $("#collapse_add2").collapse("show");
    // } 

    document.getElementById('collapse_content').innerHTML =" ";
    document.getElementById('modal_add_content').innerHTML =" ";


    if(valueCurrent <= 10) {
    for(let i =1; i<valueCurrent+1; i++){
      // console.log(i)

      html_add = '<div class="collapse show mb-3" id=collapse_add'+i+'><div class="card card-body"><div class="row g-2"><div class=col-mb-5><b>參與人 '+i+'</b></div></div><div class="row g-2"><div class="col-md-1 align-self-center">姓名</div><div class="col-md form-group mb-3 form-floating"><input type=text class=form-control id=input_lastname_add'+i+' placeholder="Hans Chen" name=u_name required> <label for=floatingInput>請填入姓氏</label><div class="help-block with-errors text-danger"></div></div><div class="col-md form-group mb-3 form-floating"><input type=text class=form-control id=input_firstname_add'+i+' placeholder="Hans Chen" name=u_name required> <label for=floatingInput>請填入名字</label><div class="help-block with-errors text-danger"></div></div></div><div class="row g-2"><div class="col-md-1 align-self-center">性別</div><ul class="col list-group"><li class=list-group-item><input class=form-check-input type=radio name=gender_radio'+i+' id=radio_add'+i+1+' checked required value=男性> <label id=input_gender_add'+i+' class=form-check-label for=radio_add'+i+1+'>男性</label></ul><ul class="col list-group"><li class=list-group-item><input class=form-check-input type=radio name=gender_radio'+i+' id=radio_add'+i+2+' required value=女性> <label id=input_gender_add'+i+' class=form-check-label for=radio_add'+i+2+'>女性</label></ul><ul class="col list-group"><li class=list-group-item><input class=form-check-input type=radio name=gender_radio'+i+' id=radio_add'+i+3+' required value=非二元性別> <label id=input_gender_add'+i+' class=form-check-label for=radio_add'+i+3+'>非二元性別</label></ul></div><div class="mt-2 row g-2"><div class="col-md-1 align-self-center">手機<br>號碼</div><div class="col-md form-group"><div class="col-md input-group has-feedback mb-3"><span class=input-group-text>+886</span> <input value="" type=text class=form-control id=input_mobile_add'+i+' placeholder=請填入手機號碼 name=u_mobile required pattern=^09[0-9]{8}$ data-error="手機格式錯誤 (e.g.,0912345678)"></div><div class="row g-1"><button type=button class="col-md-3 btn btn-success" id=copy_mobile onclick="click_mobile('+i+')">同填表人</button><div class="col-md-9 help-block with-errors text-danger"></div></div></div><div class="mt-2 row g-2"><div class="col-md-1 align-self-center">Email</div><div class="col-md form-group mb-3 form-floating"><input id=input_email_add'+i+' type=email class=form-control placeholder=HansChen@moxa.com name=u_email required pattern=[A-Z0-9._-]+@[A-Z0-9.-]+\.[A-Z]{2,4} data-error="Email格式錯誤 (e.g.,YOURNAME@moxa.com)"> <label for=floatingInput>請填入Email</label><div class="row g-1"><button type=button class="col-md-3 btn btn-success" id=copy_email onclick="click_email('+i+')">同填表人</button><div class="col-md-9 help-block with-errors text-danger"></div></div></div></div></div></div></div>'
      document.getElementById('collapse_content').innerHTML +=html_add; 
      
      modal='<div class="modal-body" id="confirm_text_add"><table class="table table-striped"><thead><tr><th scope=col colspan=2><b>參與人'+i+'</b><tbody><tr><th scope=row><td>姓名<td id=confirm_name'+i+'><tr><th scope=row><td>Email<td id=confirm_email'+i+'><tr><th scope=row><td>手機號碼<td id=confirm_mobile'+i+'><tr><th scope=row><td>性別<td id=confirm_gender'+i+'><tr><th scope=row><td>報名費<td id=confirm_companion_fee'+i+'></table></div>'
      document.getElementById('modal_add_content').innerHTML +=modal;  


    }
}

    
});

$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
});

// $('#exampleModalToggle2').on('hidden.bs.modal', function (e) {
//     $('#register_form')
//       .find("input,textarea,select")
//          .val('')
//          .end()
//       .find("input[type=checkbox], input[type=radio]")
//          .prop("checked", "")
//          .end();
//   })


// $('#register_form').validator().on('submit', function(e) {
//     if (e.isDefaultPrevented()) { // 未驗證通過 則不處理
//     return;
//     } else { 
//     document.getElementById("register_form").reset();// 通過送出表單
//     alert("已送出表單");
//     }
//     // e.preventDefault(); // 防止原始 form 提交表單
// });

const msalConfig = {
    auth: {
      clientId: '8e7a6053-0a4d-4c64-849e-612f52269cec', // 替换成您在步骤1中获得的 Client ID
    }
  };
  
  const msalInstance = new Msal.UserAgentApplication(msalConfig);

function login() {
msalInstance.loginPopup()
    .then(response => {
    // 登录成功后的处理逻辑
    console.log('登录成功！', response);
    })
    .catch(error => {
    // 登录失败的处理逻辑
    console.log('登录失败：', error);
    });
}

msalInstance.handleRedirectCallback(response => {
if (response !== null) {
    // 回调处理成功，用户已登录
    console.log('用户已登录！', response);
    // 这里可以获取用户信息或执行其他操作
} else {
    // 回调处理失败或用户未登录
    console.log('用户未登录或回调处理失败。');
}
});