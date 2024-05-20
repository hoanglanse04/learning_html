    
jQuery.validator.setDefaults({
  debug: true,
  success: "valid"
});


$('#exform').validate({
  rules: {
    name: {
      required: true
    },
    email: {
      required: true
    },
    password:{
      required: true,
      minlength: 8
    },
    re_password:{
      minlength: 8,
      equalTo: "#password"
    }
  },
  messages :{
    name:{
      required: "Vui lòng nhập tên."
    },
    email:{
      required: "Vui lòng nhật email"
    },
    password:{
      required: "Vui lòng nhập mật khẩu",
      minlength: "Mật khẩu cần ít nhất 8 kí tự"
    },
    re_password:{
      required: "Mật khẩu cần ít nhất 8 kí tự",
      equalTo: "Mật khẩu không khớp"
    }
    
  }
});
