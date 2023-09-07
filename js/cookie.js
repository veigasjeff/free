   // Function to set a cookie with the SameSite attribute
   function setCookie(name, value, days, sameSite) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/; SameSite=" + sameSite;
}

// Example: Set a cookie with the SameSite attribute set to "Lax"
setCookie("myCookie", "cookieValue", 30, "Lax");

// Example: Set a cookie with the SameSite attribute set to "Strict"
setCookie("myOtherCookie", "otherCookieValue", 30, "Strict");
