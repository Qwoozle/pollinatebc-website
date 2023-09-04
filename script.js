<script>
        const initiativesLink = document.getElementById("initiatives");
        const leadersLink = document.getElementById("leaders");

        const initiativesContent = document.getElementById("initiativesContent");
        const leadersContent = document.getElementById("leadersContent");

        initiativesLink.addEventListener("click", () => {
            initiativesContent.style.display = "block";
            leadersContent.style.display = "none";
        });

        leadersLink.addEventListener("click", () => {
            initiativesContent.style.display = "none";
            leadersContent.style.display = "block";
        });
    </script>
