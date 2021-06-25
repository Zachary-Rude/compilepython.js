function outf(text) { 
  var output = document.getElementById("output"); 
  output.innerHTML += text;
}
function builtinRead(x) {
  if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
    throw "File not found: '" + x + "'";
  return Sk.builtinFiles["files"][x];
}
var turtle_window;
function runit() {
  turtle_window = window.open("", "myWindow", "width=418,height=326");
  turtle_window.document.write(`
  <style>
    *:focus { outline: none; }
  </style>
  <pre id="output"></pre>
  <div id="mycanvas" oncontextmenu="e.preventDefault()"></div>`);
  var python_code = python_editor.getValue();
  var mypre = turtle_window.document.getElementById("output");
  mypre.innerHTML = ''; 
  Sk.pre = "output";
  Sk.configure({output: outf, read: builtinRead, __future__: Sk.python3, inputfunTakesPrompt: true });
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
