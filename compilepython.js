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
  turtle_window = window.open("", "myWindow", "width=500,height=500");
  turtle_window.document.write(`<!DOCTYPE html>
  <html>
    <head>
      <title>Python Turtle Graphics</title>
      <style>
        *:focus { outline: none; }
        body {
          text-align: center;
          justify-content: center;
          align-items: center;
          vertical-align: middle;
          margin: 0;
          height: inherit;
        }
        #output { display: none; }
        #mycanvas canvas { margin: auto; }
      </style>
    </head>
    <body>
      <pre id="result"></pre>
      <div id="mycanvas" oncontextmenu="e.preventDefault()"></div>
    </body>
  </html>`);
  turtle_window.moveTo(483, 136);
  if (code_editor != null && element_id == null) {
    python_code = code_editor.getValue();
  } else {
    python_code = document.getElementById(element_id).value;
  }
  var mypre = turtle_window.document.getElementById("result");
  mypre.innerHTML = ''; 
  Sk.pre = "result";
  Sk.configure({
    output: outf,
    read: builtin_read,
    __future__: Sk.python3,
    inputfun: function(python_prompt) {
      return new Promise((resolve, reject) => {
        resolve(python_prompt);
      });
    },
    inputfunTakesPrompt: true
  });
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
