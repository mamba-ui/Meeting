document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       DATA
    ========================================== */

    const people = [
        {
            id: 1,
            name: "Emma",
            letter: "E",
            role: "Photography • Travel",
            location: "🇰🇪 Kenya",
            bio: "Photography lover, traveler and storyteller. Always looking for a new adventure.",
            tags: ["Photography", "Travel", "Nature"],
            online: true,
            isNew: false,
            color: "pink"
        },
        {
            id: 2,
            name: "Daniel",
            letter: "D",
            role: "Music • Technology",
            location: "🇷🇼 Rwanda",
            bio: "Music, coding and technology. I love meeting people with interesting ideas.",
            tags: ["Music", "Coding", "Technology"],
            online: true,
            isNew: true,
            color: "blue"
        },
        {
            id: 3,
            name: "Sophia",
            letter: "S",
            role: "Art • Books",
            location: "🇺🇬 Uganda",
            bio: "Artist and book lover. Let's talk about art, stories and creativity.",
            tags: ["Art", "Books", "Writing"],
            online: false,
            isNew: true,
            color: "purple"
        },
        {
            id: 4,
            name: "Michael",
            letter: "M",
            role: "Gaming • Movies",
            location: "🇹🇿 Tanzania",
            bio: "Gamer, movie fan and professional meme collector 😂.",
            tags: ["Gaming", "Movies", "Fun"],
            online: true,
            isNew: false,
            color: "orange"
        },
        {
            id: 5,
            name: "Aisha",
            letter: "A",
            role: "Fashion • Lifestyle",
            location: "🇰🇪 Kenya",
            bio: "Lifestyle, fashion and creative ideas. Let's connect.",
            tags: ["Fashion", "Lifestyle", "Beauty"],
            online: true,
            isNew: true,
            color: "green"
        },
        {
            id: 6,
            name: "Noah",
            letter: "N",
            role: "Football • Fitness",
            location: "🇷🇼 Rwanda",
            bio: "Football fan and fitness enthusiast. Always ready for a good conversation.",
            tags: ["Football", "Fitness", "Sports"],
            online: false,
            isNew: false,
            color: "blue"
        },
        {
            id: 7,
            name: "Lina",
            letter: "L",
            role: "Travel • Food",
            location: "🇺🇬 Uganda",
            bio: "I travel for the stories and stay for the food.",
            tags: ["Travel", "Food", "Culture"],
            online: true,
            isNew: true,
            color: "pink"
        },
        {
            id: 8,
            name: "Chris",
            letter: "C",
            role: "Programming • Startups",
            location: "🇷🇼 Rwanda",
            bio: "Building things, learning things and meeting smart people.",
            tags: ["Programming", "Startups", "Business"],
            online: true,
            isNew: false,
            color: "purple"
        }
    ];

    let rooms = [
        {
            id: 101,
            name: "Creative Minds",
            description: "Ideas, art, creativity and inspiration.",
            category: "art",
            icon: "🎨",
            members: 24,
            saved: false
        },
        {
            id: 102,
            name: "Music & Friends",
            description: "Share your favorite songs and discover artists.",
            category: "music",
            icon: "🎵",
            members: 12,
            saved: true
        },
        {
            id: 103,
            name: "World Travelers",
            description: "Stories and adventures from around the world.",
            category: "travel",
            icon: "✈️",
            members: 31,
            saved: false
        },
        {
            id: 104,
            name: "Gaming Zone",
            description: "Games, competition, jokes and friendly chat.",
            category: "gaming",
            icon: "🎮",
            members: 18,
            saved: true
        },
        {
            id: 105,
            name: "Study Together",
            description: "Study, ask questions and help each other.",
            category: "education",
            icon: "📚",
            members: 47,
            saved: false
        },
        {
            id: 106,
            name: "Late Night Talks",
            description: "Random conversations with interesting people.",
            category: "general",
            icon: "💬",
            members: 29,
            saved: false
        },
        {
            id: 107,
            name: "Football Fans",
            description: "Matches, players, opinions and football stories.",
            category: "gaming",
            icon: "⚽",
            members: 37,
            saved: false
        },
        {
            id: 108,
            name: "Creators Hub",
            description: "For designers, writers, video creators and more.",
            category: "art",
            icon: "✨",
            members: 15,
            saved: false
        }
    ];

    const conversations = [
        {
            id: 1,
            name: "Emma",
            letter: "E",
            preview: "That sounds amazing!",
            time: "2m",
            color: "pink"
        },
        {
            id: 2,
            name: "Daniel",
            letter: "D",
            preview: "Are you joining the room?",
            time: "8m",
            color: "blue"
        },
        {
            id: 3,
            name: "Sophia",
            letter: "S",
            preview: "I just discovered a great book.",
            time: "18m",
            color: "purple"
        },
        {
            id: 4,
            name: "Michael",
            letter: "M",
            preview: "😂😂 that's crazy",
            time: "1h",
            color: "orange"
        }
    ];

    let notifications = [
        {
            id: 1,
            icon: "👤",
            title: "New connection",
            text: "Emma accepted your connection request.",
            time: "2 minutes ago",
            unread: true
        },
        {
            id: 2,
            icon: "💬",
            title: "New message",
            text: "Daniel sent you a message.",
            time: "8 minutes ago",
            unread: true
        },
        {
            id: 3,
            icon: "🌍",
            title: "Room invitation",
            text: "You were invited to join Creative Minds.",
            time: "23 minutes ago",
            unread: true
        },
        {
            id: 4,
            icon: "❤️",
            title: "Someone liked your profile",
            text: "A new member discovered your profile.",
            time: "1 hour ago",
            unread: false
        }
    ];

    let connectedPeople = loadData("connectedPeople", []);

    let savedRoomIds = loadData(
        "savedRoomIds",
        rooms.filter(room => room.saved).map(room => room.id)
    );

    let messagesByPerson = loadData("messagesByPerson", {
        Emma: [
            {
                sender: "Emma",
                text: "Hey! Nice to meet you 👋",
                incoming: true
            },
            {
                sender: "You",
                text: "Hey Emma! Great to meet you too.",
                incoming: false
            },
            {
                sender: "Emma",
                text: "What kind of things do you enjoy?",
                incoming: true
            },
            {
                sender: "You",
                text: "Music, technology and meeting interesting people.",
                incoming: false
            }
        ],
        Daniel: [
            {
                sender: "Daniel",
                text: "Are you joining the room?",
                incoming: true
            }
        ],
        Sophia: [
            {
                sender: "Sophia",
                text: "I just discovered a great book.",
                incoming: true
            }
        ],
        Michael: [
            {
                sender: "Michael",
                text: "😂😂 that's crazy",
                incoming: true
            }
        ]
    });

    let activeConversation = "Emma";


    /* ==========================================
       ELEMENTS
    ========================================== */

    const menuItems =
        document.querySelectorAll(".menu-item");

    const sections = {
        home: document.getElementById("homeSection"),
        people: document.getElementById("peopleSection"),
        chat: document.getElementById("chatSection"),
        rooms: document.getElementById("roomsSection"),
        notifications: document.getElementById("notificationsSection"),
        saved: document.getElementById("savedSection")
    };

    const searchInput =
        document.getElementById("searchInput");

    const createModal =
        document.getElementById("createModal");

    const profileModal =
        document.getElementById("profileModal");

    const miniChat =
        document.getElementById("miniChat");

    const toast =
        document.getElementById("toast");


    /* ==========================================
       STORAGE
    ========================================== */

    function saveData(key, value) {
        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }

    function loadData(key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value ? JSON.parse(value) : fallback;
        } catch {
            return fallback;
        }
    }


    /* ==========================================
       TOAST
    ========================================== */

    let toastTimer;

    function showToast(message, title = "Meeting") {

        document.getElementById("toastTitle").textContent =
            title;

        document.getElementById("toastMessage").textContent =
            message;

        toast.classList.remove("hidden");

        clearTimeout(toastTimer);

        toastTimer = setTimeout(() => {
            toast.classList.add("hidden");
        }, 2800);
    }


    /* ==========================================
       NAVIGATION
    ========================================== */

    function navigate(sectionName) {

        Object.values(sections).forEach(section => {
            section.classList.remove("active-section");
        });

        if (sections[sectionName]) {
            sections[sectionName].classList.add("active-section");
        }

        menuItems.forEach(item => {
            item.classList.toggle(
                "active",
                item.dataset.section === sectionName
            );
        });

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (sectionName === "people") {
            renderPeople();
        }

        if (sectionName === "chat") {
            renderConversations();
            renderChat(activeConversation);
        }

        if (sectionName === "rooms") {
            renderRooms();
        }

        if (sectionName === "notifications") {
            renderNotifications();
        }

        if (sectionName === "saved") {
            renderSavedRooms();
        }
    }


    menuItems.forEach(item => {

        item.addEventListener("click", () => {
            navigate(item.dataset.section);
        });

    });


    document.querySelectorAll("[data-go]").forEach(button => {

        button.addEventListener("click", () => {
            navigate(button.dataset.go);
        });

    });


    /* ==========================================
       AVATAR
    ========================================== */

    function avatarClass(color) {

        const colors = {
            pink: "avatar-pink",
            blue: "avatar-blue",
            purple: "avatar-purple",
            orange: "avatar-orange",
            green: "avatar-green"
        };

        return colors[color] || "avatar-blue";
    }


    /* ==========================================
       PEOPLE CARDS
    ========================================== */

    function personCard(person) {

        const connected =
            connectedPeople.includes(person.id);

        return `
            <div class="person-card">

                <div class="person-avatar ${avatarClass(person.color)}">
                    ${person.letter}
                </div>

                ${
                    person.online
                    ? `<span class="person-online"></span>`
                    : ""
                }

                <h3>${escapeHTML(person.name)}</h3>

                <div class="person-role">
                    ${escapeHTML(person.role)}
                </div>

                <div class="person-location">
                    ${escapeHTML(person.location)}
                </div>

                <div class="card-actions">

                    <button
                        class="connect-button ${connected ? "connected" : ""}"
                        data-connect="${person.id}"
                    >
                        ${connected ? "Connected ✓" : "Connect"}
                    </button>

                    <button
                        class="view-profile-button"
                        data-profile="${person.id}"
                    >
                        Profile
                    </button>

                </div>

            </div>
        `;
    }


    function renderHomePeople() {

        const grid =
            document.getElementById("homePeopleGrid");

        grid.innerHTML =
            people.slice(0, 4)
                .map(personCard)
                .join("");

        bindPeopleButtons(grid);

    }


    function renderPeople(filter = "all") {

        const grid =
            document.getElementById("peopleFullGrid");

        let filtered = [...people];

        if (filter === "online") {
            filtered = filtered.filter(person => person.online);
        }

        if (filter === "new") {
            filtered = filtered.filter(person => person.isNew);
        }

        if (filter === "friends") {
            filtered =
                filtered.filter(person =>
                    connectedPeople.includes(person.id)
                );
        }

        grid.innerHTML =
            filtered.map(personCard).join("");

        bindPeopleButtons(grid);

    }


    function bindPeopleButtons(container) {

        container
            .querySelectorAll("[data-connect]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const id =
                        Number(button.dataset.connect);

                    toggleConnection(id);

                });

            });

        container
            .querySelectorAll("[data-profile]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const id =
                        Number(button.dataset.profile);

                    openProfile(id);

                });

            });

    }


    function toggleConnection(id) {

        const person =
            people.find(p => p.id === id);

        if (!person) return;

        if (connectedPeople.includes(id)) {

            connectedPeople =
                connectedPeople.filter(
                    personId => personId !== id
                );

            showToast(
                `You disconnected from ${person.name}.`
            );

        } else {

            connectedPeople.push(id);

            showToast(
                `You are now connected with ${person.name}!`
            );

            notifications.unshift({
                id: Date.now(),
                icon: "👤",
                title: "New connection",
                text: `You connected with ${person.name}.`,
                time: "Just now",
                unread: true
            });

        }

        saveData(
            "connectedPeople",
            connectedPeople
        );

        renderHomePeople();
        renderPeople();
        renderNotifications();
    }


    /* ==========================================
       PROFILE MODAL
    ========================================== */

    function openProfile(id) {

        const person =
            people.find(p => p.id === id);

        if (!person) return;

        document.getElementById("profilePhoto")
            .textContent = person.letter;

        document.getElementById("profileName")
            .textContent = person.name;

        document.getElementById("profileBio")
            .textContent = person.bio;

        document.getElementById("profileTags")
            .innerHTML =
            person.tags
                .map(tag =>
                    `<span class="profile-tag">${escapeHTML(tag)}</span>`
                )
                .join("");

        document.getElementById("profileMeta")
            .innerHTML = `
                <span>📍 ${escapeHTML(person.location)}</span>
                <span>👥 ${Math.floor(Math.random() * 500) + 100} connections</span>
            `;

        const connectBtn =
            document.getElementById("profileConnectBtn");

        connectBtn.dataset.personId = person.id;

        connectBtn.textContent =
            connectedPeople.includes(person.id)
            ? "Connected ✓"
            : "Connect";

        document.getElementById("profileMessageBtn")
            .dataset.personId = person.id;

        profileModal.classList.remove("hidden");

    }


    document.getElementById("closeProfileModal")
        .addEventListener("click", () => {
            profileModal.classList.add("hidden");
        });


    profileModal.addEventListener("click", event => {

        if (event.target === profileModal) {
            profileModal.classList.add("hidden");
        }

    });


    document.getElementById("profileConnectBtn")
        .addEventListener("click", function () {

            const id =
                Number(this.dataset.personId);

            toggleConnection(id);

            const person =
                people.find(p => p.id === id);

            this.textContent =
                connectedPeople.includes(id)
                ? "Connected ✓"
                : "Connect";

            if (person) {
                showToast(
                    connectedPeople.includes(id)
                    ? `Connected with ${person.name}`
                    : `Disconnected from ${person.name}`
                );
            }
        });


    document.getElementById("profileMessageBtn")
        .addEventListener("click", function () {

            const id =
                Number(this.dataset.personId);

            const person =
                people.find(p => p.id === id);

            if (!person) return;

            activeConversation = person.name;

            profileModal.classList.add("hidden");

            navigate("chat");

            renderConversations();
            renderChat(person.name);

        });


    /* ==========================================
       FILTER PEOPLE
    ========================================== */

    document.querySelectorAll(".filter-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document.querySelectorAll(".filter-btn")
                    .forEach(btn =>
                        btn.classList.remove("active-filter")
                    );

                button.classList.add("active-filter");

                renderPeople(button.dataset.filter);

            });

        });


    /* ==========================================
       SEARCH
    ========================================== */

    searchInput.addEventListener("input", () => {

        const query =
            searchInput.value.trim().toLowerCase();

        if (!query) {

            document
                .querySelectorAll(".person-card")
                .forEach(card => {
                    card.style.display = "";
                });

            document
                .querySelectorAll(".room-card")
                .forEach(card => {
                    card.style.display = "";
                });

            return;
        }

        document
            .querySelectorAll(".person-card")
            .forEach(card => {

                const text =
                    card.innerText.toLowerCase();

                card.style.display =
                    text.includes(query)
                    ? ""
                    : "none";

            });

        document
            .querySelectorAll(".room-card")
            .forEach(card => {

                const text =
                    card.innerText.toLowerCase();

                card.style.display =
                    text.includes(query)
                    ? ""
                    : "none";

            });

        if (
            !sections.people.classList.contains(
                "active-section"
            )
        ) {

            if (
                people.some(person =>
                    `${person.name} ${person.role} ${person.location}`
                        .toLowerCase()
                        .includes(query)
                )
            ) {
                navigate("people");
            }
            else if (
                rooms.some(room =>
                    `${room.name} ${room.description} ${room.category}`
                        .toLowerCase()
                        .includes(query)
                )
            ) {
                navigate("rooms");
            }

        }

    });


    /* ==========================================
       ROOMS
    ========================================== */

    function coverClass(category) {

        return {
            music: "cover-music",
            gaming: "cover-gaming",
            education: "cover-education",
            travel: "cover-travel",
            art: "cover-art",
            general: "cover-general"
        }[category] || "cover-general";

    }


    function roomCard(room) {

        const saved =
            savedRoomIds.includes(room.id);

        return `
            <div class="room-card">

                <div class="room-cover ${coverClass(room.category)}">

                    ${room.icon}

                    <button
                        class="room-save ${saved ? "saved" : ""}"
                        data-save-room="${room.id}"
                    >
                        ${saved ? "♥" : "♡"}
                    </button>

                </div>

                <div class="room-info">

                    <div class="room-live">
                        <span></span>
                        LIVE NOW
                    </div>

                    <h3>
                        ${escapeHTML(room.name)}
                    </h3>

                    <p>
                        ${escapeHTML(room.description)}
                    </p>

                    <div class="room-footer">

                        <span class="room-members">
                            👥 ${room.members} people
                        </span>

                        <button
                            class="join-room"
                            data-join-room="${room.id}"
                        >
                            Join
                        </button>

                    </div>

                </div>

            </div>
        `;
    }


    function renderHomeRooms() {

        const grid =
            document.getElementById("homeRoomsGrid");

        grid.innerHTML =
            rooms.slice(0, 4)
                .map(roomCard)
                .join("");

        bindRoomButtons(grid);

    }


    function renderRooms(category = "all") {

        const grid =
            document.getElementById("roomsFullGrid");

        let filtered = [...rooms];

        if (category !== "all") {
            filtered =
                filtered.filter(
                    room => room.category === category
                );
        }

        grid.innerHTML =
            filtered.map(roomCard).join("");

        bindRoomButtons(grid);

    }


    function renderSavedRooms() {

        const grid =
            document.getElementById("savedRoomsGrid");

        const empty =
            document.getElementById("savedEmpty");

        const savedRooms =
            rooms.filter(room =>
                savedRoomIds.includes(room.id)
            );

        if (savedRooms.length === 0) {

            grid.innerHTML = "";

            empty.classList.remove("hidden");

            return;
        }

        empty.classList.add("hidden");

        grid.innerHTML =
            savedRooms.map(roomCard).join("");

        bindRoomButtons(grid);

    }


    function bindRoomButtons(container) {

        container
            .querySelectorAll("[data-save-room]")
            .forEach(button => {

                button.addEventListener("click", event => {

                    event.stopPropagation();

                    const id =
                        Number(button.dataset.saveRoom);

                    toggleSavedRoom(id);

                });

            });


        container
            .querySelectorAll("[data-join-room]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const id =
                        Number(button.dataset.joinRoom);

                    joinRoom(id);

                });

            });

    }


    function toggleSavedRoom(id) {

        const room =
            rooms.find(r => r.id === id);

        if (!room) return;

        if (savedRoomIds.includes(id)) {

            savedRoomIds =
                savedRoomIds.filter(
                    roomId => roomId !== id
                );

            showToast(
                `${room.name} removed from Saved.`
            );

        } else {

            savedRoomIds.push(id);

            showToast(
                `${room.name} saved ❤️`
            );

        }

        saveData(
            "savedRoomIds",
            savedRoomIds
        );

        renderHomeRooms();
        renderRooms();
        renderSavedRooms();

    }


    function joinRoom(id) {

        const room =
            rooms.find(r => r.id === id);

        if (!room) return;

        room.members++;

        showToast(
            `You joined ${room.name}!`,
            "You're in"
        );

        notifications.unshift({
            id: Date.now(),
            icon: "🌍",
            title: "Room joined",
            text: `You joined ${room.name}.`,
            time: "Just now",
            unread: true
        });

        renderHomeRooms();
        renderRooms();
        renderNotifications();

        openMiniChat(room.name);

    }


    document.querySelectorAll(".category-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                document.querySelectorAll(".category-btn")
                    .forEach(btn =>
                        btn.classList.remove("active-category")
                    );

                button.classList.add("active-category");

                renderRooms(
                    button.dataset.category
                );

            });

        });


    /* ==========================================
       CREATE ROOM
    ========================================== */

    document.getElementById("createMeetingBtn")
        .addEventListener("click", () => {

            createModal.classList.remove("hidden");

        });


    document.getElementById("roomsCreateBtn")
        .addEventListener("click", () => {

            createModal.classList.remove("hidden");

        });


    document.getElementById("closeCreateModal")
        .addEventListener("click", () => {

            createModal.classList.add("hidden");

        });


    createModal.addEventListener("click", event => {

        if (event.target === createModal) {
            createModal.classList.add("hidden");
        }

    });


    document
        .getElementById("createRoomForm")
        .addEventListener("submit", event => {

            event.preventDefault();

            const name =
                document.getElementById("roomName")
                    .value.trim();

            const description =
                document.getElementById("roomDescription")
                    .value.trim();

            const category =
                document.getElementById("roomCategory")
                    .value;

            if (!name) return;

            const icons = {
                music: "🎵",
                gaming: "🎮",
                education: "📚",
                travel: "✈️",
                art: "🎨",
                general: "💬"
            };

            const newRoom = {
                id: Date.now(),
                name,
                description:
                    description ||
                    "A new meeting created by you.",
                category,
                icon: icons[category] || "💬",
                members: 1,
                saved: false
            };

            rooms.unshift(newRoom);

            createModal.classList.add("hidden");

            document
                .getElementById("createRoomForm")
                .reset();

            renderAllRooms();

            showToast(
                `${name} was created successfully!`,
                "Meeting created"
            );

            notifications.unshift({
                id: Date.now() + 1,
                icon: "✨",
                title: "Meeting created",
                text: `Your room "${name}" is now live.`,
                time: "Just now",
                unread: true
            });

            renderNotifications();

            navigate("rooms");

        });


    function renderAllRooms() {

        renderYourRooms();
        renderHomeRooms();
        renderRooms();
        renderSavedRooms();

    }


    function renderYourRooms() {

        const container =
            document.getElementById("yourRooms");

        const ownRooms =
            rooms.filter(room =>
                room.members <= 1
            ).slice(0, 4);

        if (!ownRooms.length) {
            container.innerHTML = `
                <div class="side-room">
                    <div class="side-room-icon">＋</div>
                    <div class="side-room-text">
                        <strong>Create your first room</strong>
                        <span>Start a conversation</span>
                    </div>
                </div>
            `;
            return;
        }

        container.innerHTML =
            ownRooms
                .map(room => `
                    <button
                        class="side-room"
                        data-side-room="${room.id}"
                    >
                        <div class="side-room-icon">
                            ${room.icon}
                        </div>

                        <div class="side-room-text">
                            <strong>
                                ${escapeHTML(room.name)}
                            </strong>

                            <span>
                                ${room.members} member${room.members === 1 ? "" : "s"}
                            </span>
                        </div>
                    </button>
                `)
                .join("");

        container
            .querySelectorAll("[data-side-room]")
            .forEach(button => {

                button.addEventListener("click", () => {

                    const id =
                        Number(button.dataset.sideRoom);

                    joinRoom(id);

                });

            });

    }


    /* ==========================================
       CHAT
    ========================================== */

    function renderConversations() {

        const container =
            document.getElementById("conversationList");

        container.innerHTML =
            conversations
                .map(conversation => `

                    <div
                        class="conversation ${
                            activeConversation === conversation.name
                                ? "active-conversation"
                                : ""
                        }"
                        data-conversation="${escapeHTML(conversation.name)}"
                    >

                        <div
                            class="conversation-avatar ${avatarClass(conversation.color)}"
                        >
                            ${conversation.letter}
                        </div>

                        <div class="conversation-main">
                            <strong>
                                ${escapeHTML(conversation.name)}
                            </strong>

                            <p>
                                ${escapeHTML(conversation.preview)}
                            </p>
                        </div>

                        <div class="conversation-time">
                            ${conversation.time}
                        </div>

                    </div>

                `)
                .join("");

        container
            .querySelectorAll("[data-conversation]")
            .forEach(item => {

                item.addEventListener("click", () => {

                    activeConversation =
                        item.dataset.conversation;

                    renderConversations();
                    renderChat(activeConversation);

                });

            });

    }


    function renderChat(personName) {

        const person =
            people.find(p => p.name === personName);

        const avatar =
            document.getElementById("chatAvatar");

        const name =
            document.getElementById("chatPersonName");

        const status =
            document.getElementById("chatPersonStatus");

        avatar.textContent =
            person ? person.letter : personName.charAt(0);

        name.textContent =
            personName;

        status.textContent =
            person && person.online
                ? "🟢 Online now"
                : "Recently active";

        const container =
            document.getElementById("chatMessages");

        const chat =
            messagesByPerson[personName] || [];

        container.innerHTML =
            chat
                .map(message => {

                    const letter =
                        message.sender === "You"
                        ? "Y"
                        : message.sender.charAt(0);

                    return `
                        <div class="chat-bubble ${
                            message.incoming
                                ? ""
                                : "sent"
                        }">

                            <div class="bubble-avatar">
                                ${letter}
                            </div>

                            <div class="bubble-content">

                                <div class="bubble-name">
                                    ${escapeHTML(message.sender)}
                                </div>

                                <div class="bubble-text">
                                    ${escapeHTML(message.text)}
                                </div>

                            </div>

                        </div>
                    `;

                })
                .join("");

        container.scrollTop =
            container.scrollHeight;

    }


    document
        .getElementById("chatForm")
        .addEventListener("submit", event => {

            event.preventDefault();

            const input =
                document.getElementById("chatInput");

            const text =
                input.value.trim();

            if (!text) return;

            if (!messagesByPerson[activeConversation]) {
                messagesByPerson[activeConversation] = [];
            }

            messagesByPerson[activeConversation].push({
                sender: "You",
                text,
                incoming: false
            });

            saveData(
                "messagesByPerson",
                messagesByPerson
            );

            input.value = "";

            renderChat(activeConversation);

            simulateReply(activeConversation);

        });


    function simulateReply(personName) {

        const replies = [
            "That's interesting! 😄",
            "I like that idea.",
            "Tell me more about it!",
            "Haha, I know exactly what you mean 😂",
            "Nice! We should talk more.",
            "That's actually really cool.",
            "Great talking with you 👋"
        ];

        setTimeout(() => {

            const reply =
                replies[
                    Math.floor(
                        Math.random() * replies.length
                    )
                ];

            if (!messagesByPerson[personName]) {
                messagesByPerson[personName] = [];
            }

            messagesByPerson[personName].push({
                sender: personName,
                text: reply,
                incoming: true
            });

            saveData(
                "messagesByPerson",
                messagesByPerson
            );

            renderChat(personName);
            renderConversations();

            showToast(
                `New message from ${personName}.`,
                "New message"
            );

        }, 1000);

    }


    document
        .getElementById("emojiBtn")
        .addEventListener("click", () => {

            const input =
                document.getElementById("chatInput");

            input.value += " 😊";
            input.focus();

        });


    document
        .getElementById("newChatBtn")
        .addEventListener("click", () => {

            navigate("people");

            showToast(
                "Choose someone to start a new chat.",
                "New chat"
            );

        });


    document
        .getElementById("chatSearchInput")
        .addEventListener("input", event => {

            const query =
                event.target.value.toLowerCase();

            document
                .querySelectorAll(".conversation")
                .forEach(item => {

                    const text =
                        item.innerText.toLowerCase();

                    item.style.display =
                        text.includes(query)
                        ? ""
                        : "none";

                });

        });


    /* ==========================================
       MINI CHAT
    ========================================== */

    function openMiniChat(roomName) {

        document.getElementById("miniChatTitle")
            .textContent = roomName;

        miniChat.classList.remove("hidden");

    }


    document
        .getElementById("closeMiniChat")
        .addEventListener("click", () => {

            miniChat.classList.add("hidden");

        });


    document
        .getElementById("miniChatForm")
        .addEventListener("submit", event => {

            event.preventDefault();

            const input =
                document.getElementById("miniChatInput");

            const text =
                input.value.trim();

            if (!text) return;

            const body =
                document.getElementById("miniChatBody");

            const message =
                document.createElement("div");

            message.className = "mini-message";

            message.innerHTML = `
                <div class="mini-message-avatar">Y</div>

                <div>
                    <small>You</small>
                    <p>${escapeHTML(text)}</p>
                </div>
            `;

            body.appendChild(message);

            input.value = "";

            body.scrollTop =
                body.scrollHeight;

            setTimeout(() => {

                const reply =
                    document.createElement("div");

                reply.className = "mini-message";

                reply.innerHTML = `
                    <div class="mini-message-avatar">
                        M
                    </div>

                    <div>
                        <small>Meeting</small>
                        <p>Welcome to the conversation! 👋</p>
                    </div>
                `;

                body.appendChild(reply);

                body.scrollTop =
                    body.scrollHeight;

            }, 800);

        });


    /* ==========================================
       NOTIFICATIONS
    ========================================== */

    function renderNotifications() {

        const container =
            document.getElementById("notificationList");

        container.innerHTML =
            notifications
                .map(item => `

                    <div class="notification-item ${
                        item.unread ? "unread" : ""
                    }">

                        <div class="notification-icon">
                            ${item.icon}
                        </div>

                        <div class="notification-text">

                            <strong>
                                ${escapeHTML(item.title)}
                            </strong>

                            <p>
                                ${escapeHTML(item.text)}
                            </p>

                            <time>
                                ${escapeHTML(item.time)}
                            </time>

                        </div>

                    </div>

                `)
                .join("");

        const unread =
            notifications.filter(
                notification => notification.unread
            ).length;

        const count =
            document.getElementById("notificationCount");

        count.textContent = unread;

        count.style.display =
            unread === 0
            ? "none"
            : "flex";

    }


    document
        .getElementById("notificationBtn")
        .addEventListener("click", () => {

            navigate("notifications");

        });


    document
        .getElementById("markAllReadBtn")
        .addEventListener("click", () => {

            notifications =
                notifications.map(item => ({
                    ...item,
                    unread: false
                }));

            renderNotifications();

            showToast(
                "All notifications marked as read."
            );

        });


    /* ==========================================
       THEME
    ========================================== */

    const savedTheme =
        localStorage.getItem("meetingTheme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }


    document
        .getElementById("themeBtn")
        .addEventListener("click", () => {

            document.body.classList.toggle("dark");

            const isDark =
                document.body.classList.contains("dark");

            localStorage.setItem(
                "meetingTheme",
                isDark ? "dark" : "light"
            );

            document.getElementById("themeBtn")
                .textContent =
                isDark ? "☀️" : "🌙";

        });


    /* ==========================================
       HERO BUTTONS
    ========================================== */

    document
        .getElementById("heroPeopleBtn")
        .addEventListener("click", () => {

            navigate("people");

        });


    document
        .getElementById("heroRoomsBtn")
        .addEventListener("click", () => {

            navigate("rooms");

        });


    /* ==========================================
       ESCAPE HTML
    ========================================== */

    function escapeHTML(value) {

        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    /* ==========================================
       INITIAL RENDER
    ========================================== */

    renderHomePeople();

    renderAllRooms();

    renderConversations();

    renderChat(activeConversation);

    renderNotifications();

    /* Welcome message */
    setTimeout(() => {

        showToast(
            "Welcome to Meeting 👋",
            "You're online"
        );

    }, 800);

});