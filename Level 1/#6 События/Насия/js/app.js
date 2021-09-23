'use strict';

const nasiaButton = document.querySelector('[data-tab="nasia"]');
const alifmobiButton = document.querySelector('[data-tab="alifmobi"]');
const tabpanes = document.querySelector('[data-id="tab-panes"]');

function changeTab(selected, el) {
    el.querySelectorAll('[data-tabpane*="a"]').forEach(function(e) {
        e.style.display = 'none';
    });
    
    const panel = el.querySelector(`[data-tabpane=${selected}]`);
    panel.style.display = 'block';
}

nasiaButton.onclick = function() {
    changeTab(this.getAttribute('data-tab'), tabpanes);
};

alifmobiButton.onclick = function() {
    changeTab(this.getAttribute('data-tab'), tabpanes);
};

changeTab('nasia', tabpanes);