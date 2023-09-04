    <script>
        const homeLink = document.getElementById("home");
        const aboutLink = document.getElementById("about");
        const contactLink = document.getElementById("contact");

        const homeContent = document.getElementById("homeContent");
        const aboutContent = document.getElementById("aboutContent");
        const contactContent = document.getElementById("contactContent");

        homeLink.addEventListener("click", () => {
            homeContent.style.display = "block";
            aboutContent.style.display = "none";
            contactContent.style.display = "none";
        });

        aboutLink.addEventListener("click", () => {
            homeContent.style.display = "none";
            aboutContent.style.display = "block";
            contactContent.style.display = "none";
        });

        contactLink.addEventListener("click", () => {
            homeContent.style.display = "none";
            aboutContent.style.display = "none";
            contactContent.style.display = "block";
        });
    </script>
</body>
</html>
