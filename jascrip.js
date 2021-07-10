function insert(num){
    document.form.textview.value=  document.form.textview.value+num
  }
  function equal(){
    var x=document.form.textview.value
    if(x)
      {
        document.form.textview.value=eval(x)
      }
  }
  function c(){
    document.form.textview.value="";
  }
  function back(){
    var x=document.form.textview.value; document.form.textview.value=
      x.substring(0,x.length-1);
  }