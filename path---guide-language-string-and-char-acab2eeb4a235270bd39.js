webpackJsonp([66],{"./node_modules/json-loader/index.js!./.cache/json/guide-language-string-and-char.json":function(e,a){e.exports={data:{allFile:{edges:[{node:{relativePath:"guide/examples.md",childMarkdownRemark:{frontmatter:{title:"Examples",order:60}}}},{node:{relativePath:"guide/index.md",childMarkdownRemark:{frontmatter:{title:"The Reason Guide",order:0}}}},{node:{relativePath:"guide/ocaml.md",childMarkdownRemark:{frontmatter:{title:"Comparison to OCaml",order:50}}}},{node:{relativePath:"guide/what-and-why.md",childMarkdownRemark:{frontmatter:{title:"What & Why",order:0}}}},{node:{relativePath:"guide/javascript/converting.md",childMarkdownRemark:{frontmatter:{title:"Converting from JS",order:5}}}},{node:{relativePath:"guide/javascript/index.md",childMarkdownRemark:{frontmatter:{title:"JavaScript",order:30}}}},{node:{relativePath:"guide/javascript/libraries.md",childMarkdownRemark:{frontmatter:{title:"Libraries",order:2}}}},{node:{relativePath:"guide/javascript/interop.md",childMarkdownRemark:{frontmatter:{title:"Interop",order:1}}}},{node:{relativePath:"guide/javascript/syntax-cheatsheet.md",childMarkdownRemark:{frontmatter:{title:"Syntax Cheatsheet",order:1}}}},{node:{relativePath:"guide/javascript/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/editor-tools/global-installation.md",childMarkdownRemark:{frontmatter:{title:"Global Installation",order:10}}}},{node:{relativePath:"guide/editor-tools/extra-goodies.md",childMarkdownRemark:{frontmatter:{title:"Extra Goodies",order:30}}}},{node:{relativePath:"guide/editor-tools/index.md",childMarkdownRemark:{frontmatter:{title:"Editor Setup",order:10}}}},{node:{relativePath:"guide/editor-tools/editors-plugins.md",childMarkdownRemark:{frontmatter:{title:"Editors Plugins",order:20}}}},{node:{relativePath:"guide/language/destructuring.md",childMarkdownRemark:{frontmatter:{title:"Destructuring",order:130}}}},{node:{relativePath:"guide/language/external.md",childMarkdownRemark:{frontmatter:{title:"External",order:170}}}},{node:{relativePath:"guide/language/exception.md",childMarkdownRemark:{frontmatter:{title:"Exception",order:175}}}},{node:{relativePath:"guide/language/boolean.md",childMarkdownRemark:{frontmatter:{title:"Boolean",order:30}}}},{node:{relativePath:"guide/language/if-else.md",childMarkdownRemark:{frontmatter:{title:"If-Else",order:110}}}},{node:{relativePath:"guide/language/imperative-loops.md",childMarkdownRemark:{frontmatter:{title:"Imperative Loops",order:150}}}},{node:{relativePath:"guide/language/index.md",childMarkdownRemark:{frontmatter:{title:"Language basics",order:20}}}},{node:{relativePath:"guide/language/integer-and-float.md",childMarkdownRemark:{frontmatter:{title:"Integer & Float",order:40}}}},{node:{relativePath:"guide/language/jsx.md",childMarkdownRemark:{frontmatter:{title:"JSX",order:160}}}},{node:{relativePath:"guide/language/list-and-array.md",childMarkdownRemark:{frontmatter:{title:"List & Array",order:80}}}},{node:{relativePath:"guide/language/let-binding.md",childMarkdownRemark:{frontmatter:{title:"Let Binding",order:10}}}},{node:{relativePath:"guide/language/module.md",childMarkdownRemark:{frontmatter:{title:"Module",order:180}}}},{node:{relativePath:"guide/language/function.md",childMarkdownRemark:{frontmatter:{title:"Function",order:100}}}},{node:{relativePath:"guide/language/overview.md",childMarkdownRemark:{frontmatter:{title:"Overview",order:0}}}},{node:{relativePath:"guide/language/more-on-type.md",childMarkdownRemark:{frontmatter:{title:"More on Type",order:120}}}},{node:{relativePath:"guide/language/mutation.md",childMarkdownRemark:{frontmatter:{title:"Mutation",order:140}}}},{node:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{frontmatter:{title:"String & Char",order:20}}}},{node:{relativePath:"guide/language/object.md",childMarkdownRemark:{frontmatter:{title:"Object",order:175}}}},{node:{relativePath:"guide/language/record.md",childMarkdownRemark:{frontmatter:{title:"Record",order:60}}}},{node:{relativePath:"guide/language/pattern-matching.md",childMarkdownRemark:{frontmatter:{title:"Pattern Matching!",order:135}}}},{node:{relativePath:"guide/language/type.md",childMarkdownRemark:{frontmatter:{title:"Type!",order:15}}}},{node:{relativePath:"guide/meta/index.md",childMarkdownRemark:{frontmatter:{title:"Meta",order:1e3}}}},{node:{relativePath:"guide/language/variant.md",childMarkdownRemark:{frontmatter:{title:"Variant!",order:70}}}},{node:{relativePath:"guide/meta/project-structure.md",childMarkdownRemark:{frontmatter:{title:"Project Structure",order:0}}}},{node:{relativePath:"guide/language/tuple.md",childMarkdownRemark:{frontmatter:{title:"Tuple",order:50}}}},{node:{relativePath:"guide/native/quickstart.md",childMarkdownRemark:{frontmatter:{title:"Quickstart",order:0}}}},{node:{relativePath:"guide/native/convert-from-ocaml.md",childMarkdownRemark:{frontmatter:{title:"Converting from OCaml",order:4}}}},{node:{relativePath:"guide/native/index.md",childMarkdownRemark:{frontmatter:{title:"Native",order:40}}}}]},file:{relativePath:"guide/language/string-and-char.md",childMarkdownRemark:{html:'<h3 id="string"><a href="#string" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>String</h3>\n<p>Reason strings are delimited using <strong>double</strong> quotes (single quotes are reserved for the character type below).</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code>let greeting = "Hello world!";\nlet multilineGreeting = "Hello\n world!";</code></pre>\n      </div>\n<p>Special characters in the string need to be escaped:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> oneSlash = <span class="hljs-string">"\\\\"</span>;</code></pre>\n      </div>\n<p>To concatenate strings, use <code>^</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greetings = <span class="hljs-string">"Hello "</span> ^ <span class="hljs-string">"world!"</span>;</code></pre>\n      </div>\n<h4 id="quoted-string"><a href="#quoted-string" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Quoted String</h4>\n<p>There\'s a special syntax for string that allows</p>\n<ul>\n<li>multiline string just like before</li>\n<li>no special character escaping</li>\n<li>hooks for special pre-processors</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> greetingAndOneSlash = {|<span class="hljs-type">Hello</span>\n<span class="hljs-type">World</span>\n\\\n<span class="hljs-type">Hehe</span>...\n|};</code></pre>\n      </div>\n<p>Analogically speaking, it\'s like JavaScript\'s backtick string interpolation, except without needing to escape special chars, and without built-in interpolation of variables. Though you can trivially restore the latter functionality, <a href="http://bucklescript.github.io/bucklescript/Manual.html#_unicode_support_with_string_interpolation_since_1_7_0">as BuckleScript has done</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> world = {js|世界|js}; <span class="hljs-comment">/* Supports Unicode characters */</span>\n<span class="hljs-keyword">let</span> helloWorld = {j|你好，$world|j}; <span class="hljs-comment">/* Supports Unicode and interpolation variables */</span></code></pre>\n      </div>\n<p>BuckleScript\'s special pre-processor can then look for such <code>js</code> and <code>j</code> markers around the string and transforms it into something else.</p>\n<h4 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h4>\n<p><a href="/api/String.html">More string operations can be found in the standard library</a>. For JS compilation, see the familiar <code>JS.String</code> API bindings in the <a href="http://bucklescript.github.io/bucklescript/api/Js_string.html">BuckleScript API docs</a>. Since a Reason string maps to a JavaScript string, you can mix &#x26; match the string operations in both standard libraries.</p>\n<h4 id="tips--tricks"><a href="#tips--tricks" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h4>\n<p><a href="https://twitter.com/jusrin00/status/875238742621028355">https://twitter.com/jusrin00/status/875238742621028355</a></p>\n<p><strong>You have an expressive type system now</strong>! In an untyped language, you\'d often overload the meaning of string by using it as:</p>\n<ul>\n<li>a unique id: <code>var BLUE_COLOR = "blue"</code></li>\n<li>an identifier into a data structure: <code>var BLUE = "blue"; var RED = "red"; var colors = [BLUE, RED]</code></li>\n<li>the name of an object field: <code>person["age"] = 24</code></li>\n<li>an enum: <code>if (audio.canPlayType() === \'probably\') {...}</code> <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/canPlayType#Return_value">(ಠ_ಠ)</a></li>\n<li>other crazy patterns you\'ll soon find horrible, after getting used to Reason\'s alternatives.</li>\n</ul>\n<p>The more you overload the poor string type, the less the type system can help you! Reason provides concise, fast and maintainable types &#x26; data structures alternatives to the use-cases above (e.g. variants, in a later section).</p>\n<p>Under native compilation, Reason strings compile to a simple representation whose performance is straightforward to analyze, at the expense of sometimes requiring manual performance tuning. For example, naively concatenating strings like <code>"hi " ^ "how " ^ "are " ^ "you?"</code> unnecessarily allocates the intermediate strings <code>"are you?"</code> and <code>"how are you?"</code>. In this case, prefer <a href="/api/String.html"><code>String.concat</code></a>. In a way, it\'s somewhat nice that the traditional runtime analysis we\'ve learned in school can finally be useful again.</p>\n<p>Under JavaScript compilation, a Reason string maps to a JavaScript string and vice-versa, so no such above concern or analysis opportunities.</p>\n<h4 id="design-decisions"><a href="#design-decisions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Design Decisions</h4>\n<p>Quoted string\'s feature of not escaping special characters enables neat DSLs like <a href="/api/Str.html">regular expression</a>:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> r = <span class="hljs-type">Str</span>.regexp {|hello \\([<span class="hljs-type">A</span>-<span class="hljs-type">Za</span>-z]+\\)|};</code></pre>\n      </div>\n<p>as opposed to</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> r = <span class="hljs-type">Str</span>.regexp <span class="hljs-string">"hello \\\\([A-Za-z]+\\\\)"</span>;</code></pre>\n      </div>\n<p>Though for JS compilation, you\'d use <a href="http://bucklescript.github.io/bucklescript/Manual.html#_regex_support"><code>[%bs.re]</code></a> and <a href="https://bucklescript.github.io/bucklescript/api/Js.Re.html"><code>Js.Re</code></a> instead, since <code>Str</code> is not available.</p>\n<p>Reason/OCaml\'s emphasis on simplicity over cleverness can be seen here through its straightforward native string implementation. An overly sophisticated string implementation can sometimes <a href="http://mrale.ph/blog/2016/11/23/making-less-dart-faster.html">backfire</a>.</p>\n<h3 id="char"><a href="#char" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Char</h3>\n<p>Reason has a type for a string with a single letter:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-keyword">let</span> firstLetterOfAlphabet = \'a\';</code></pre>\n      </div>\n<p><strong>Note</strong>: Char doesn\'t support Unicode or UTF-8.</p>\n<h4 id="tips--tricks-1"><a href="#tips--tricks-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips &#x26; Tricks</h4>\n<p>A character <a href="/try/?reason=DYUwLgBAhhC8EHIoKA">compiles to an integer ranging from 0 to 255</a>, for extra speed. You can also pattern-match (covered later) on it:</p>\n<div class="gatsby-highlight">\n      <pre class="hljs lang-reason"><code><span class="hljs-func"><span class="hljs-keyword">fun</span><span class="hljs-params"> isVowel<span class="hljs-params"> theChar<span class="hljs-params"> </span></span></span></span>=&gt; <span class="hljs-keyword">switch</span> theChar {\n| \'a\' | \'e\' | \'i\' | \'o\' | \'u\' | \'y\' =&gt; <span class="hljs-literal">true</span>\n| <span class="hljs-number">_</span> =&gt; <span class="hljs-literal">false</span>\n};</code></pre>\n      </div>',frontmatter:{title:"String & Char"}}}},pathContext:{section:"guide",sectionTitle:"Guide",relativePath:"guide/language/string-and-char.md",relatedFiles:"/^guide\\/.*\\.md$/"}}}});
//# sourceMappingURL=path---guide-language-string-and-char-acab2eeb4a235270bd39.js.map