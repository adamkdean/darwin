var StringHelper = {
    pad: function(num, size) {
        var s = "000000000" + num;
        return s.substr(s.length - size);
    },
    pad2: function(num, size) {
        var s = num + "";
        while (s.length < size) {
            s = "0" + s;
        }
        return s;
    }
};