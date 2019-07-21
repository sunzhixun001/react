import React from 'react';
class WrittenOne extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                 <div dangerouslySetInnerHTML={{__html: `<pre><code class="hljs bash copyable" lang="bash">&lt;div id=<span class="hljs-string">"d"</span>&gt;
    &lt;div id = <span class="hljs-string">"a"</span>&gt;&lt;/div&gt;
    &lt;div id = <span class="hljs-string">"b"</span>&gt;&lt;/div&gt;
    &lt;div id = <span class="hljs-string">"c"</span>&gt;&lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
    var a = [document.getElementById(<span class="hljs-string">'a'</span>),document.getElementById(<span class="hljs-string">'b'</span>),document.getElementById(<span class="hljs-string">'c'</span>)];
    var b = [document.getElementById(<span class="hljs-string">'d'</span>).getElementsByTagName(<span class="hljs-string">'div'</span>)];
&lt;/script&gt;</code></pre>`}}></div>
            </div>
        )
    }
}
export default WrittenOne;