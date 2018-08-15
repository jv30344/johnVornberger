(function () {
    // self executing functions
    $("#vertical-menu").html(`
    <!-- The "sidebar" id is used for the hamburger button which opens and closes the sidebar menu... -->

    <div id="container"></div>
    
    <div id="sidebar">
        <div class="toggle-btn" id="nav-hover" onclick="toggleSidebar()">
            <span></span>
            <span></span>
            <span></span>
        </div>
    
        <!-- The menu id is for the vertical menu -->
        <!-- Using a container to separate the text from the icons -->
    
        <ul id="menu">
            <li>
                <div id="container-menu flex-menu-l flex-menu-r">
                    <a id="container-menu" class="flex-menu-l selected" href="index.html">Welcome </a>
                    <i class="dead-icons flex-menu-r  fas fa-handshake fa-2x "></i>
                </div>
    
            </li>
            <li>
                <div id="container-menu flex-menu-l flex-menu-r">
                    <a id="container-menu" class="flex-menu-l" href="about.html">About </a>
                    <i class="dead-icons flex-menu-r  fas fa-address-card fa-2x "></i>
                </div>
            </li>
            <li>
                <div id="container-menu flex-menu-l flex-menu-r">
                    <a id="container-menu" class="flex-menu-l" href="experience.html">Experience</a>
                    <i class="dead-icons  fas fa-chart-line fa-2x "></i>
                </div>
            </li>
            <li>
                <div id="container-menu flex-menu-l flex-menu-r">
                    <a id="container-menu" class="flex-menu-l" href="skills.html">Skills</a>
                    <i class="dead-icons flex-menu-r  fas fa-list-alt fa-2x"></i>
                </div>
            </li>
            <li>
                <div id="container-menu flex-menu-l flex-menu-r">
                    <a id="container-menu" class="flex-menu-l" href="badges.html">Badges</a>
                    <i class="dead-icons flex-menu-r  fas fa-shield-alt fa-2x"></i>
                </div>
            </li>
            <li>
                <div id="container-menu flex-menu-l flex-menu-r">
                    <a id="container-menu" class="flex-menu-l" href="education.html">Education</a>
                    <i class="dead-icons flex-menu-r  fas fa-graduation-cap fa-2x"></i>
                </div>
            </li>
            <li>
                <div id="container-menu flex-menu-l flex-menu-r">
                    <a id="container-menu" class="flex-menu-l" href="contact.html">Contact</a>
                    <i class="dead-icons flex-menu-r  fas fa-at fa-2x"></i>
                </div>
            </li>
            <li>
                <div id="container-menu flex-menu-l flex-menu-r">
                    <a id="container-menu" class="flex-menu-l" href="bitsbytes.html">Bits &#38; Bytes</a>
                    <i class="dead-icons flex-menu-r  fas fa-image fa-2x"></i>
                </div>
            </li>
            <li>
                <div id="container-menu flex-menu-l flex-menu-r">
                    <a id="container-menu" class="flex-menu-l" href="https://drive.google.com/file/d/1fWinZFEL51-ilQFaobIOl1Owxn78hzep/view?usp=sharing">Resume</a>
                    <i class="dead-icons flex-menu-r fas fa-file-alt fa-2x"></i>
                </div>
            </li>
        </ul>
    </div>
    `)
}());