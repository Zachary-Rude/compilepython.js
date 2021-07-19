function outf(text) { 
  var output = document.getElementById("result");
  text = document.createTextNode(text);
  output.appendChild(text);
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
      <pre id="output"></pre>
      <div id="mycanvas" oncontextmenu="e.preventDefault()"></div>
    </body>
  </html>`);
  turtle_window.moveTo(483, 136);
  if (code_editor != null && element_id == null) {
    python_code = code_editor.getValue();
  } else {
    python_code = document.getElementById(element_id).value;
  }
  var mypre = turtle_window.document.getElementById("output");
  mypre.innerHTML = ''; 
  Sk.pre = "output";
  Sk.configure({
    output: outf,
    read: builtin_read,
    __future__: Sk.python3,
    inputfun: function(prompt) {
      var input_box = document.createElement("input");
      input_box.style.fontFamily = "monospace";
      input_box.style.outline = "none";
      input_box.style.border = "none";
      document.getElementById("result").appendChild(input_box);
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
