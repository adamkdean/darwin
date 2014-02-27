var Labels = {
    setLabel: function(label, text) {
        var label = $('#' + label);
        if (label) {
            label.text(text);
        }
    },
    hideLabel: function(label) {
        $('#' + label).hide();
    },
    showLabel: function(label) {
        $('#' + label).show();
    },
};;