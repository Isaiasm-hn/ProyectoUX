import React from 'react';
import '../App.css';

function Noticias() {
    return (
        <div>
            <h3>Seccion de noticias</h3>
            <div class="container">
                <h2>Contextual Colors</h2>
                <p>Use the contextual classes to provide "meaning through colors":</p>
                <p class="text-muted">This text is muted.</p>
                <p class="text-primary">This text is important.</p>
                <p class="text-success">This text indicates success.</p>
                <p class="text-info">This text represents some information.</p>
                <p class="text-warning">This text represents a warning.</p>
                <p class="text-danger">This text represents danger.</p>
                <p class="text-secondary">Secondary text.</p>
                <p class="text-dark">This text is dark grey.</p>
                <p class="text-body">Default body color (often black).</p>
                <p class="text-light">This text is light grey (on white background).</p>
                <p class="text-white">This text is white (on white background).</p>
            </div>

        </div>
    );
}

export default Noticias;