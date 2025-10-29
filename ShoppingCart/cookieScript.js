(function () {
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + encodeURIComponent(value || "") + expires + "; path=/";
    }

    function getCookie(cname) {
        var name = cname + "=";
        var decoded = decodeURIComponent(document.cookie || "");
        var parts = decoded.split(";");
        for (var i = 0; i < parts.length; i++) {
            var c = parts[i].trim();
            if (c.indexOf(name) === 0) {
                return c.substring(name.length);
            }
        }
        return "";
    }

    function getAllProductCookies() {
        var decoded = decodeURIComponent(document.cookie || "");
        if (!decoded) return [];
        return decoded
            .split(";")
            .map(function (s) { return s.trim(); })
            .filter(function (s) { return s.startsWith("product_"); })
            .map(function (s) {
                var idx = s.indexOf("=");
                if (idx === -1) return { name: s, value: "" };
                return { name: s.substring(0, idx), value: s.substring(idx + 1) };
            });
    }

    document.addEventListener("DOMContentLoaded", function () {
        // attach add-to-cart handlers (product page)
        document.querySelectorAll("[data-product]").forEach(function (button) {
            button.addEventListener("click", function () {
                var id = button.dataset.product;
                setCookie("product_" + id, "added", 7);
                alert("Product " + id + " added to cart!");
            });
        });

        // checkout: populate input and display
        var input = document.getElementById("myTextField");
        var display = document.getElementById("cartContents");
        if (input || display) {
            var products = getAllProductCookies();
            var text = products.length ? products.map(function (p) { return p.name + "=" + p.value; }).join(", ") : "";
            if (input) input.value = text;
            if (display) display.textContent = text || "Cart is empty";
        }
    });
})();