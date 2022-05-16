<h1 id="gui-in-rust">GUI in Rust</h1>
<p>The Rust programming language seems like a good fit for GUI programming. C++ developers have access to Qt, wxWidgets and many
more. It&#39;s considered that GUI is just not there yet in Rust. I tried using Iced, it seemed like a good option.
But Iced&#39;s examples were not working. I didn&#39;t bother with other libraries, they were mostly GTK and webview. 
I gave it another try.
And at least two options <em>did</em> work!
<strong>egui and Tauri</strong>. You&#39;ve probably heard of both of them. </p>
<h1 id="tauri">Tauri</h1>
<p>You might criticize Tauri for its performance. But you&#39;d be wrong.
Tauri is nowhere near as bloated as Electron and it allows you to use a Rust backend. You can call Rust from the frontend.
One problem might be that Tauri requires you to use web technologies, such as HTML, CSS and JS.
However, you kind of have other options. It&#39;s possible to use Fable with F#, ClojureScript or Go with GopherJS. 
There&#39;re also Pyscript and Brython for Python, which are extremely easy to set up.
The problem here is that you don&#39;t get to use Rust for everything. If you&#39;re afraid of CSS and not JavaScript, check out SASS.
And some frameworks you can use with to-js compilers might allow you to skip HTML.</p>
<h1 id="egui">egui</h1>
<p>egui is a popular GUI crate for Rust. Contrary to Tauri, you <em>can</em> just use Rust. egui is in &quot;immediate mode&quot; style.
This can be more concise and easier to reason about than you might think. In egui, something like this is possible.</p>
<pre><code class="lang-rust">ui.label(&amp;<span class="hljs-keyword">mut</span> <span class="hljs-keyword">self</span>.labelcontent); <span class="hljs-comment">// you define this.</span>
<span class="hljs-keyword">if</span> ui.add(Button::new(<span class="hljs-string">"Click me!"</span>)).clicked() {
    <span class="hljs-keyword">self</span>.labelcount = <span class="hljs-string">"You have clicked the button!"</span>;
}
</code></pre>
<p>As you can see, you can connect things concisely. This label is bound to <code>self.labelcontent</code>. When <code>self.labelcontent</code> changes,
it will in the next frame. So it updates in what appears instantly.
I found egui to be quite intuitive and I haven&#39;t yet found any problems with it. The only problems with egui that I know of
are that it is not native (but it still looks great) and that updates have breaking changes.</p>
<h1 id="other-options-">Other options?</h1>
<p>I&#39;ve only tried Iced, other than these. Unfortunately, examples didn&#39;t work. Soon, this may be fixed.
But for now, I suggest you try these out. If you aren&#39;t satisfied, perhaps look at <a href="https://docs.rs">docs.rs</a> and search
for GUI there. Also check out <a href="https://areweguiyet.com/">areweguiyet</a>.
You can also bind libraries from other languages. I strongly suggest giving many libraries a try until one of them works
for you.</p>
