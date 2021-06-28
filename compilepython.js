function outf(text) { 
  var output = document.getElementById("output"); 
  output.innerHTML += text;
}
function builtin_read(x) {
  if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
    throw "File not found: '" + x + "'";
  return Sk.builtinFiles["files"][x];
}
var turtle_window;
var python_code;
function runit(element_id=null, code_editor=null) {
  turtle_window = window.open("", "myWindow", "width=960.0001209449,height=839.05522381798,left=483.77958850766,top=136.06300926778");
  turtle_window.document.write(`
  <style>
    *:focus { outline: none; }
  </style>
  <pre id="output"></pre>
  <div id="mycanvas" oncontextmenu="e.preventDefault()"></div>`);
  turtle_window.document.title = "Python Turtle Graphics";
  if (code_editor != null && element_id == null) {
    python_code = code_editor.getValue();
  } else {
    python_code = document.getElementById(element_id).value;
  }
  var mypre = turtle_window.document.getElementById("output");
  mypre.innerHTML = ''; 
  Sk.pre = "output";
  Sk.configure({output: outf, read: builtin_read, __future__: Sk.python3, inputfunTakesPrompt: true });
  (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = turtle_window.document.querySelector('#mycanvas');
  var myPromise = Sk.misceval.asyncToPromise(function() {
    return Sk.importMainWithBody("<stdin>", false, python_code, true);
  });
  myPromise.then(function(mod) {
    console.log('success');
  },
  function(err) {
    console.error(err.toString());
  });
}
